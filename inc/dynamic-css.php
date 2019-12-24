<?php
/**
 * Dynamic CSS helpers
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

function blocksy_has_css_in_files() {
	return apply_filters('blocksy:dynamic-css:has_files_cache', false);
}

function blocksy_get_all_dynamic_styles_for($args = []) {
	$args = wp_parse_args(
		$args,
		[
			'context' => null,
		]
	);

	$css = new Blocksy_Css_Injector();
	$mobile_css = new Blocksy_Css_Injector();
	$tablet_css = new Blocksy_Css_Injector();

	blocksy_theme_get_dynamic_styles([
		'name' => 'global',
		'css' => $css,
		'mobile_css' => $mobile_css,
		'tablet_css' => $tablet_css,
		'context' => $args['context'],
		'chunk' => 'global',
		'forced_call' => true
	]);

	do_action(
		'blocksy:global-dynamic-css:enqueue',
		[
			'context' => $args['context'],
			'css' => $css,
			'tablet_css' => $tablet_css,
			'mobile_css' => $mobile_css
		]
	);

	return [
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css
	];
}

function blocksy_get_dynamic_css_file_content($args = []) {
	$args = wp_parse_args(
		$args,
		[
			'context' => null,
		]
	);

	$css_output = blocksy_get_all_dynamic_styles_for([
		'context' => $args['context']
	]);

	$css = $css_output['css'];
	$tablet_css = $css_output['tablet_css'];
	$mobile_css = $css_output['mobile_css'];

	// $content = "/* Desktop CSS */";
	$content .= trim($css->build_css_structure());

	// $content .= "\n\n/* Tablet CSS */\n";
	$content .= "@media (max-width: 1000px) and (min-width: 690px) {";
	$content .= "  " . trim($tablet_css->build_css_structure());
	$content .= "}";

	// $content .= "\n\n/* Mobile CSS */\n";
	$content .= "@media (max-width: 690px) {";
	$content .= trim($mobile_css->build_css_structure());
	$content .= "}";

	return $content;
}

add_action('admin_print_styles', function () {
	global $wp_customize;

	$css = new Blocksy_Css_Injector();

	blocksy_theme_get_dynamic_styles([
		'name' => 'admin-global',
		'css' => $css,
		'context' => 'inline',
		'chunk' => 'admin'
	]);

	/**
	 * Note to code reviewers: This line doesn't need to be escaped.
	 * The variable used here has the value escaped properly.
	 */
	echo '<style id="ct-main-styles-inline-css" type="text/css">';
	echo trim($css->build_css_structure());
	echo "</style>\n";
});

add_action(
	'wp_print_styles',
	function () {
		$css_output = blocksy_get_all_dynamic_styles_for([
			'context' => 'inline'
		]);

		$css = $css_output['css'];
		$tablet_css = $css_output['tablet_css'];
		$mobile_css = $css_output['mobile_css'];

		/**
		 * Note to code reviewers: This line doesn't need to be escaped.
		 * The variable used here has the value escaped properly.
		 */
		echo '<style id="ct-main-styles-inline-css" type="text/css">';
		echo trim( $css->build_css_structure() );
		echo "</style>\n";

		$tablet_css = trim($tablet_css->build_css_structure());
		$mobile_css = trim($mobile_css->build_css_structure());

		if (! empty(trim($tablet_css))) {
			/**
			 * Note to code reviewers: This line doesn't need to be escaped.
			 * The variable used here has the value escaped properly.
			 */
			echo '<style id="ct-main-styles-tablet-inline-css" type="text/css" media="(max-width: 1000px) and (min-width: 690px)">';
			echo $tablet_css;
			echo "</style>\n";
		}

		if (! empty(trim($mobile_css))) {
			/**
			 * Note to code reviewers: This line doesn't need to be escaped.
			 * The variable used here has the value escaped properly.
			 */
			echo '<style id="ct-main-styles-mobile-inline-css" type="text/css" media="(max-width: 690px)">';
			echo $mobile_css;
			echo "</style>\n";
		}
	},
	9999
);

/**
 * Evaluate a file with dynamic styles.
 *
 * @param string $name Name of dynamic CSS file.
 * @param array $variables list of data to pass in file.
 * @throws Error When $css not provided.
 */
function blocksy_theme_get_dynamic_styles($args = []) {
	$args = wp_parse_args(
		$args,
		[
			'path' => null,
			'name' => '',
			'css' => null,

			'context' => null,
			'chunk' => null,

			'forced_call' => false
		]
	);

	if (! $args['context']) {
		throw new Error('$context not provided. This is required!');
	}

	if (! $args['chunk']) {
		throw new Error('$chunk not provided. This is required!');
	}

	if (! isset($args['css'])) {
		throw new Error('$css instance not provided. This is required!');
	}

	if (!$args['forced_call'] && blocksy_has_css_in_files()) {
		if ($args['context'] === 'inline') {
			if ($args['chunk'] === 'global' || $args['chunk'] === 'woocommerce') {
				return;
			}
		}

		if ($args['context'] === 'files:global') {
			if ($args['chunk'] === 'woocommerce') {
				if (! class_exists('WooCommerce')) {
					return;
				}
			} else {
				if ($args['chunk'] !== 'global') {
					return;
				}
			}
		}
	}

	if (! $args['path']) {
		$args['path'] = get_template_directory() . '/inc/dynamic-styles/' . $args['name'] . '.php';
	}

	blocksy_get_variables_from_file($args['path'], [], $args);
}

