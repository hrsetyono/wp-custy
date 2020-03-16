<?php
/**
 * General purpose helpers
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package Blocksy
 */

add_action(
	'dynamic_sidebar_before',
	function () {
		ob_start();
	}
);

add_action(
	'dynamic_sidebar_after',
	function () {
		$text = str_replace(
			'textwidget',
			'textwidget entry-content',
			ob_get_clean()
		);

		echo $text;
	}
);

function blocksy_body_attr() {
	$attrs = [];

	$attrs['data-forms'] = str_replace(
		'-forms',
		'',
		get_theme_mod('forms_type', 'classic-forms')
	);

	return blocksy_attr_to_html(array_merge([
		'data-link' => get_theme_mod('content_link_type', 'type-1'),
	], $attrs, blocksy_schema_org_definitions('single', ['array' => true])));
}

function blocksy_locate_theme_path($rel_path) {
	if (is_child_theme() && file_exists(get_stylesheet_directory() . $rel_path)) {
		return get_stylesheet_directory() . $rel_path;
	} elseif (file_exists(get_template_directory() . $rel_path)) {
		return get_template_directory() . $rel_path;
	} else {
		return false;
	}
}


function blocksy_assert_args($args, $fields = []) {
	foreach ($fields as $single_field) {
		if (
			! isset($args[$single_field])
			||
			!$args[$single_field]
		) {
			throw new Error($single_field . ' missing in args!');
		}
	}
}

add_filter('widget_nav_menu_args', function ($nav_menu_args, $nav_menu, $args, $instance) {
	$nav_menu_args['menu_class'] = 'widget-menu';
	return $nav_menu_args;
}, 10, 4);

class Blocksy_Walker_Page extends Walker_Page {
	public function start_lvl( &$output, $depth = 0, $args = array() ) {
		if (
			isset( $args['item_spacing'] )
			&&
			'preserve' === $args['item_spacing']
		) {
			$t = "\t";
			$n = "\n";
		} else {
			$t = '';
			$n = '';
		}

		$indent  = str_repeat( $t, $depth );
		$output .= "{$n}{$indent}<ul class='sub-menu'>{$n}";
	}
}

function blocksy_get_with_percentage( $id, $value ) {
	$val = get_theme_mod( $id, $value );


	if ( strpos( $value, '%' ) !== false && is_numeric($val)) {
		$val .= '%';
	}

	return str_replace( '%%', '%', $val );
}

function blocksy_main_menu_fallback($args) {
	extract( $args );

	$menu = wp_list_pages([
		'sort_column' => 'menu_order, post_title',
		'menu_id' => 'primary-menu',
		'menu_class' => 'primary-menu menu',
		'container' => 'ul',
		'echo' => false,
		'link_before' => '',
		'link_after' => '',
		'before' => '<ul>',
		'after' => '</ul>',
		'item_spacing' => 'discard',
		'walker' => new Blocksy_Walker_Page(),
		'title_li' => ''
	]);


	if (empty(trim($menu))) {
		$args['echo'] = false;
		$menu = blocksy_link_to_menu_editor($args);
	} else {
		$attrs = '';

		if ( ! empty( $args['menu_id'] ) ) {
			$attrs .= ' id="' . esc_attr( $args['menu_id'] ) . '"';
		}

		if ( ! empty( $args['menu_class'] ) ) {
			$attrs .= ' class="' . esc_attr( $args['menu_class'] ) . '"';
		}

		$menu = "<ul{$attrs}>" . $menu . "</ul>";
	}

	if ($echo) {
		echo $menu;
	}

	return $menu;
}

/**
 * Link to menus editor for every empty menu.
 *
 * @param array  $args Menu args.
 */
function blocksy_link_to_menu_editor( $args ) {

	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	// see wp-includes/nav-menu-template.php for available arguments
	// phpcs:ignore WordPress.PHP.DontExtract.extract_extract
	extract( $args );

	$output = '<a class="ct-create-menu" href="' . admin_url( 'nav-menus.php' ) . '" target="_blank">' . $before . __( 'You don\'t have a menu yet, please create one here &rarr;', 'blocksy' ) . $after . '</a>';

	if (! empty($container)) {
		$output = "<$container>$output</$container>";
	}

	if ( $echo ) {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo wp_kses_post($output);
	}

	return $output;
}

add_filter(
	'rest_post_query',
	function ( $args, $request ) {
		if (
			isset( $request['post_type'] )
			&&
			(
				strpos($request['post_type'], 'ct_forced') !== false
			)
		) {
			$any = [];

			foreach (get_theme_mod('search_through', [
				'post' => true,
				'page' => false,
				'product' => false,
			]) as $single_post_type => $enabled) {
				if (! $enabled) continue;
				$any[] = $single_post_type;
			}

			$post_type = $any;

			if ($request['post_type'] === 'ct_forced_product') {
				$post_type = 'product';
			} else if ($request['post_type'] !== 'ct_forced_post') {
				$post_type = str_replace('ct_forced_', '', $request['post_type']);
			}

			$args = [
				'posts_per_page' => $args['posts_per_page'],
				'post_type' => $post_type,
				'paged' => 1,
				's' => $args['s'],
			];
		}

		return $args;
	},
	10,
	2
);

if (!is_admin()) {
	add_filter('pre_get_posts', function ($query) {
		if ($query->is_search) {
			if (empty($query->get('post_type'))) {
				$any = [];

				foreach (get_theme_mod('search_through', [
					'post' => true,
					'page' => false,
					'product' => false,
				]) as $single_post_type => $enabled) {
					if (! $enabled) continue;
					$any[] = $single_post_type;
				}

				$query->set(
					'post_type',
					$any
				);
			}
		}

		return $query;
	});
}


/**
 * This is a print_r() alternative
 *
 * @param mixed $value Value to debug.
 */
function blocksy_print( $value ) {
	static $first_time = true;

	if ( $first_time ) {
		ob_start();
		echo '<style type="text/css">
		div.ct_print_r {
			max-height: 500px;
			overflow-y: scroll;
			background: #23282d;
			margin: 10px 30px;
			padding: 0;
			border: 1px solid #F5F5F5;
			border-radius: 3px;
			position: relative;
			z-index: 11111;
		}

		div.ct_print_r pre {
			color: #78FF5B;
			background: #23282d;
			text-shadow: 1px 1px 0 #000;
			font-family: Consolas, monospace;
			font-size: 12px;
			margin: 0;
			padding: 5px;
			display: block;
			line-height: 16px;
			text-align: left;
		}

		div.ct_print_r_group {
			background: #f1f1f1;
			margin: 10px 30px;
			padding: 1px;
			border-radius: 5px;
			position: relative;
			z-index: 11110;
		}
		div.ct_print_r_group div.ct_print_r {
			margin: 9px;
			border-width: 0;
		}
		</style>';

		/**
		 * Note to code reviewers: This line doesn't need to be escaped.
		 * The variable used here has the value escaped properly.
		 */
		echo str_replace( array( '  ', "\n" ), '', ob_get_clean() );

		$first_time = false;
	}

	/**
	 * Note to code reviewers: This line doesn't need to be escaped.
	 * The variable used here has the value escaped properly.
	 */
	if ( func_num_args() === 1 ) {
		echo '<div class="ct_print_r"><pre>';
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo htmlspecialchars( Blocksy_FW_Dumper::dump( $value ) );
		echo '</pre></div>';
	} else {
		echo '<div class="ct_print_r_group">';
		foreach ( func_get_args() as $param ) {
			blocksy_print( $param );
		}
		echo '</div>';
	}
}


/**
 * TVar_dumper class.
 * original source: https://code.google.com/p/prado3/source/browse/trunk/framework/Util/TVar_dumper.php
 *
 * TVar_dumper is intended to replace the buggy PHP function var_dump and print_r.
 * It can correctly identify the recursively referenced objects in a complex
 * object structure. It also has a recursive depth control to avoid indefinite
 * recursive display of some peculiar variables.
 *
 * TVar_dumper can be used as follows,
 * <code>
 *   echo TVar_dumper::dump($var);
 * </code>
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @version $Id$
 * @package System.Util
 * @since 3.0
 */
class Blocksy_FW_Dumper {

	/**
	 * Object
	 *
	 * @var object objects boj
	 */
	private static $_objects;
	/**
	 * Output
	 *
	 * @var string Output output of the dumper.
	 */
	private static $_output;
	/**
	 * Depth
	 *
	 * @var int Depth depth
	 */
	private static $_depth;

	/**
	 * Converts a variable into a string representation.
	 * This method achieves the similar functionality as var_dump and print_r
	 * but is more robust when handling complex objects such as PRADO controls.
	 *
	 * @param mixed   $var     Variable to be dumped.
	 * @param integer $depth Maximum depth that the dumper should go into the variable. Defaults to 10.
	 * @return string the string representation of the variable
	 */
	public static function dump( $var, $depth = 10 ) {
		self::reset_internals();

		self::$_depth = $depth;
		self::dump_internal( $var, 0 );

		$output = self::$_output;

		self::reset_internals();

		return $output;
	}

	/**
	 * Reset internals.
	 */
	private static function reset_internals() {
		self::$_output = '';
		self::$_objects = array();
		self::$_depth = 10;
	}

	/**
	 * Dump
	 *
	 * @param object $var var.
	 * @param int    $level level.
	 */
	private static function dump_internal( $var, $level ) {
		switch ( gettype( $var ) ) {
			case 'boolean':
				self::$_output .= $var ? 'true' : 'false';
				break;
			case 'integer':
				self::$_output .= "$var";
				break;
			case 'double':
				self::$_output .= "$var";
				break;
			case 'string':
				self::$_output .= "'$var'";
				break;
			case 'resource':
				self::$_output .= '{resource}';
				break;
			case 'NULL':
				self::$_output .= 'null';
				break;
			case 'unknown type':
				self::$_output .= '{unknown}';
				break;
			case 'array':
				if ( self::$_depth <= $level ) {
					self::$_output .= 'array(...)';
				} elseif ( empty( $var ) ) {
					self::$_output .= 'array()';
				} else {
					$keys = array_keys( $var );
					$spaces = str_repeat( ' ', $level * 4 );
					self::$_output .= "array\n" . $spaces . '(';
					foreach ( $keys as $key ) {
						self::$_output .= "\n" . $spaces . "    [$key] => ";
						self::$_output .= self::dump_internal( $var[ $key ], $level + 1 );
					}
					self::$_output .= "\n" . $spaces . ')';
				}
				break;
			case 'object':
				$id = array_search( $var, self::$_objects, true );

				if ( false !== $id ) {
					self::$_output .= get_class( $var ) . '(...)';
				} elseif ( self::$_depth <= $level ) {
					self::$_output .= get_class( $var ) . '(...)';
				} else {
					$id = array_push( self::$_objects, $var );
					$class_name = get_class( $var );
					$members = (array) $var;
					$keys = array_keys( $members );
					$spaces = str_repeat( ' ', $level * 4 );
					self::$_output .= "$class_name\n" . $spaces . '(';
					foreach ( $keys as $key ) {
						$key_display = strtr(
							trim( $key ),
							array( "\0" => ':' )
						);
						self::$_output .= "\n" . $spaces . "    [$key_display] => ";
						self::$_output .= self::dump_internal(
							$members[ $key ],
							$level + 1
						);
					}
					self::$_output .= "\n" . $spaces . ')';
				}
				break;
		}
	}
}

/**
 * Extract variable from a file.
 *
 * @param string $file_path path to file.
 * @param array  $_extract_variables variables to return.
 * @param array  $_set_variables variables to pass into the file.
 */
function blocksy_get_variables_from_file( $file_path, array $_extract_variables, array $_set_variables = array() ) {
	// phpcs:ignore WordPress.PHP.DontExtract.extract_extract
	extract( $_set_variables, EXTR_REFS );
	unset( $_set_variables );
	require $file_path;

	foreach ( $_extract_variables as $variable_name => $default_value ) {
		if ( isset( $$variable_name ) ) {
			$_extract_variables[ $variable_name ] = $$variable_name;
		}
	}

	return $_extract_variables;
}

/**
 * Parse options.
 *
 * @param array $result The place to store result into.
 * @param array $options Proper options.
 * @param array $settings settings.
 * @param array $_recursion_data (private) for internal use.
 */
function blocksy_collect_options( &$result, &$options, $settings = array(), $_recursion_data = array() ) {
	static $default_settings = array(
		/**
		 * If true:
		 * $result = array(
		 *   '(container|option):{id}' => array(
		 *      'id' => '{id}',
		 *      'level' => int, // from which nested level this option is
		 *      'group' => 'container|option',
		 *      'option' => array(...),
		 *   )
		 * )
		 *
		 * @type bool Wrap the result/collected options in arrays will useful info
		 *
		 * If false:
		 * $result = array(
		 *   '{id}' => array(...),
		 *   // Warning: There can be options and containers with the same id (array key will be replaced)
		 * )
		 */
		'info_wrapper'          => false,

		/**
		 * For e.g. use 1 to collect only first level. 0 is for unlimited.
		 *
		 * @type int Nested options level limit.
		 */
		'limit_level'           => 0,

		/**
		 * Empty array will skip all types
		 *
		 * @type false|array('option-type', ...)
		 */
		'limit_option_types'    => false,

		'include_container_types' => true,
	);

	if ( empty( $options ) ) {
		return;
	}

	if ( empty( $_recursion_data ) ) {
		$settings = array_merge( $default_settings, $settings );

		$_recursion_data = array(
			'level'      => 1,
		);
	}

	if (
		$settings['limit_level']
		&&
		$_recursion_data['level'] > $settings['limit_level']
	) {
		return;
	}

	foreach ( $options as $option_id => &$option ) {
		if ( isset( $option['options'] ) ) { // this is a container.
			do {
				if ( $settings['info_wrapper'] ) {
					if ( $settings['include_container_types'] ) {
						$result[ 'container:' . $option_id ] = array(
							'group'  => 'container',
							'id'     => $option_id,
							'option' => &$option,
							'level'  => $_recursion_data['level'],
						);
					}
				} else {
					if ( $settings['include_container_types'] ) {
						$result[ $option_id ] = &$option;
					}
				}
			} while ( false );

			blocksy_collect_options(
				$result,
				$option['options'],
				$settings,
				array_merge( $_recursion_data, array( 'level' => $_recursion_data['level'] + 1 ) )
			);
		} elseif (
			is_int( $option_id )
			&&
			is_array( $option )
			&&
			isset( $options[0] )
		) {
			blocksy_collect_options( $result, $option, $settings, $_recursion_data );
		} elseif ( isset( $option['type'] ) ) { // option.
			if (
				is_array( $settings['limit_option_types'] )
				&&
				! in_array( $option['type'], $settings['limit_option_types'], true )
			) {
				continue;
			}

			if ( $settings['info_wrapper'] ) {
				$result[ 'option:' . $option_id ] = array(
					'group'  => 'option',
					'id'     => $option_id,
					'option' => &$option,
					'level'  => $_recursion_data['level'],
				);
			} else {

				$result[ $option_id ] = &$option;
			}
		} else {
			// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_trigger_error
			trigger_error(
				'Invalid option: ' . esc_html( $option_id ),
				E_USER_WARNING
			);
		}
	}
}

/**
 * Transform ID to title.
 *
 * @param string $id initial ID.
 */
function blocksy_id_to_title( $id ) {
	if ( function_exists( 'mb_strtoupper' ) && function_exists( 'mb_substr' ) && function_exists( 'mb_strlen' ) ) {
		$id = mb_strtoupper( mb_substr( $id, 0, 1, 'UTF-8' ), 'UTF-8' ) . mb_substr(
			$id,
			1,
			mb_strlen( $id, 'UTF-8' ),
			'UTF-8'
		);
	} else {
		$id = strtoupper( substr( $id, 0, 1 ) ) . substr( $id, 1, strlen( $id ) );
	}

	return str_replace( array( '_', '-' ), ' ', $id );
}

/**
 * Extract a key from an array with defaults.
 *
 * @param string       $keys 'a/b/c' path.
 * @param array|object $array_or_object array to extract from.
 * @param null|mixed   $default_value defualt value.
 */
function blocksy_default_akg( $keys, $array_or_object, $default_value ) {
	return blocksy_akg( $keys, $array_or_object, $default_value );
}

/**
 * Recursively find a key's value in array
 *
 * @param string       $keys 'a/b/c' path.
 * @param array|object $array_or_object array to extract from.
 * @param null|mixed   $default_value defualt value.
 *
 * @return null|mixed
 */
function blocksy_akg( $keys, $array_or_object, $default_value = null ) {
	if ( ! is_array( $keys ) ) {
		$keys = explode( '/', (string) $keys );
	}

	$array_or_object = $array_or_object;
	$key_or_property = array_shift( $keys );

	if ( is_null( $key_or_property ) ) {
		return $default_value;
	}

	$is_object = is_object( $array_or_object );

	if ( $is_object ) {
		if ( ! property_exists( $array_or_object, $key_or_property ) ) {
			return $default_value;
		}
	} else {
		if ( ! is_array( $array_or_object ) || ! array_key_exists( $key_or_property, $array_or_object ) ) {
			return $default_value;
		}
	}

	if ( isset( $keys[0] ) ) { // not used count() for performance reasons.
		if ( $is_object ) {
			return blocksy_akg( $keys, $array_or_object->{$key_or_property}, $default_value );
		} else {
			return blocksy_akg( $keys, $array_or_object[ $key_or_property ], $default_value );
		}
	} else {
		if ( $is_object ) {
			return $array_or_object->{$key_or_property};
		} else {
			return $array_or_object[ $key_or_property ];
		}
	}
}

function blocksy_akg_or_customizer($key, $source, $default = null) {
	$source = wp_parse_args(
		$source,
		[
			'prefix' => '',

			// customizer | array
			'strategy' => 'customizer',
		]
	);

	if ($source['strategy'] !== 'customizer' && !is_array($source['strategy'])) {
		throw new Error(
			'strategy wrong value provided. Array or customizer is required.'
		);
	}

	if (! empty($source['prefix'])) {
		$source['prefix'] .= '_';
	}

	if ($source['strategy'] === 'customizer') {
		return get_theme_mod($source['prefix'] . $key, $default);
	}

	return blocksy_akg($source['prefix'] . $key, $source['strategy'], $default);
}

/**
 * Return the url to be used in image picker.
 *
 * @param string $path image name.
 */
function blocksy_image_picker_url( $path ) {
	return BLOCKSY_URL . '/images/' . $path;
}

function blocksy_collect_and_return($cb) {
	ob_start();

	if ($cb) {
		call_user_func($cb);
	}

	return ob_get_clean();
}

/**
 * Generate a random ID.
 */
function blocksy_rand_md5() {
	return md5( time() . '-' . uniqid( wp_rand(), true ) . '-' . wp_rand() );
}

/**
 * Generate attributes string for html tag
 *
 * @param array $attr_array array('href' => '/', 'title' => 'Test').
 *
 * @return string 'href="/" title="Test"'
 */
function blocksy_attr_to_html( array $attr_array ) {
	$html_attr = '';
	foreach ( $attr_array as $attr_name => $attr_val ) {
		if ( false === $attr_val ) {
			continue;
		}

		$html_attr .= $attr_name . '="' . htmlspecialchars( $attr_val ) . '" ';
	}
	return $html_attr;
}


/**
 * Generate html tag
 *
 * @param string      $tag Tag name.
 * @param array       $attr Tag attributes.
 * @param bool|string $end Append closing tag. Also accepts body content.
 *
 * @return string The tag's html
 */
function blocksy_html_tag( $tag, $attr = array(), $end = false ) {
	$html = '<' . $tag . ' ' . blocksy_attr_to_html( $attr );
	if ( true === $end ) {
		// <script></script>
		$html .= '></' . $tag . '>';
	} elseif ( false === $end ) {
		// <br/>
		$html .= '/>';
	} else {
		// <div>content</div>
		$html .= '>' . $end . '</' . $tag . '>';
	}
	return $html;
}

/**
 * Transform the dirname path into a classname.
 *
 * @param string $dirname 'foo-bar'.
 */
function blocksy_dirname_to_classname( $dirname ) {
	$class_name = explode( '-', $dirname );
	$class_name = array_map( 'ucfirst', $class_name );
	$class_name = implode( '_', $class_name );

	return $class_name;
}

/**
 * Safe render a view and return html
 * In view will be accessible only passed variables
 * Use this function to not include files directly and to not give access to current context variables (like $this)
 *
 * @param string $file_path File path.
 * @param array  $view_variables Variables to pass into the view.
 *
 * @return string HTML.
 */
function blocksy_render_view(
	$file_path,
	$view_variables = [],
	$default_value = ''
) {
	if (! is_file($file_path)) {
		return $default_value;
	}

	// phpcs:ignore WordPress.PHP.DontExtract.extract_extract
	extract($view_variables, EXTR_REFS);
	unset($view_variables);

	ob_start();
	require $file_path;

	return ob_get_clean();
}

function blocksy_get_with_prefix($value, $prefix = '') {
	if (empty($prefix)) {
		return $value;
	}

	return $prefix . ucfirst($value);
}

function blocksy_get_social_networks_list() {
	return [
		'facebook' => [
			'label' => __( 'Facebook', 'blc' ),
		],

		'twitter' => [
			'label' => __( 'Twitter', 'blc' ),
		],

		'instagram' => [
			'label' => __( 'Instagram', 'blc' ),
		],

		'pinterest' => [
			'label' => __( 'Pinterest', 'blc' ),
		],

		'dribbble' => [
			'label' => __( 'Dribbble', 'blc' ),
		],

		'linkedin' => [
			'label' => __( 'LinkedIn', 'blc' ),
		],

		'medium' => [
			'label' => __( 'Medium', 'blc' ),
		],

		'patreon' => [
			'label' => __( 'Patreon', 'blc' ),
		],

		'vk' => [
			'label' => __( 'VK', 'blc' ),
		],

		'youtube' => [
			'label' => __( 'YouTube', 'blc' ),
		],

		'vimeo' => [
			'label' => __( 'Vimeo', 'blc' ),
		],

		'rss' => [
			'label' => __( 'RSS', 'blc' ),
		],

		'xing' => [
			'label' => __( 'Xing', 'blc' ),
		],

		'whatsapp' => [
			'label' => __( 'WhatsApp', 'blc' ),
		],

		'viber' => [
			'label' => __( 'Viber', 'blc' ),
		],

		'telegram' => [
			'label' => __( 'Telegram', 'blc' ),
		],

		'weibo' => [
			'label' => __( 'Weibo', 'blc' ),
		],

		'qq' => [
			'label' => __( 'QQ', 'blc' ),
		],

		'wechat' => [
			'label' => __( 'WeChat', 'blc' ),
		],
	];
}
