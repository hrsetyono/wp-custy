<?php
/**
 * Blocksy functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Blocksy
 */

add_action('after_setup_theme', function () {
	/**
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Word, use a find and replace
	 * to change 'blocksy' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'blocksy', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );
	add_theme_support('custom-logo');

	add_theme_support( 'editor-color-palette', [
		[
			'name' => __( 'Palette Color 1', 'blocksy' ),
			'slug' => 'palette-color-1',
			'color' => 'var(--paletteColor1)',
		],

		[
			'name' => __( 'Palette Color 2', 'blocksy' ),
			'slug' => 'palette-color-2',
			'color' => 'var(--paletteColor2)',
		],

		[
			'name' => __( 'Palette Color 3', 'blocksy' ),
			'slug' => 'palette-color-3',
			'color' => 'var(--paletteColor3)',
		],

		[
			'name' => __( 'Palette Color 4', 'blocksy' ),
			'slug' => 'palette-color-4',
			'color' => 'var(--paletteColor4)',
		],

		[
			'name' => __( 'Palette Color 5', 'blocksy' ),
			'slug' => 'palette-color-5',
			'color' => 'var(--paletteColor5)',
		]
	]);

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	add_theme_support( 'woocommerce' );

	add_post_type_support('page', 'excerpt');

	if (get_theme_mod('has_product_single_lightbox', 'no') === 'yes') {
		add_theme_support( 'wc-product-gallery-lightbox' );
	}

	$all_menus = [];

	if (blocksy_has_i18n_plugin()) {
		$all_menus['footer'] = esc_html__( 'Footer Menu', 'blocksy' );
		$all_menus['menu_1'] = esc_html__( 'Header Menu 1', 'blocksy' );
		$all_menus['menu_2'] = esc_html__( 'Header Menu 2', 'blocksy' );
		$all_menus['menu_mobile'] = esc_html__( 'Mobile Menu', 'blocksy' );
	}

	// This theme uses wp_nav_menu() in one location.
	if (! empty($all_menus)) {
		register_nav_menus($all_menus);
	}

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		[
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		]
	);

	// Registers support for Gutenberg wide images
	add_theme_support( 'align-wide' );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

});

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
add_action('after_setup_theme', function () {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'blocksy_content_width', 640 );
}, 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
add_action(
	'widgets_init',
	function () {
		register_sidebar(
			[
				'name'          => esc_html__( 'Sidebar', 'blocksy' ),
				'id'            => 'sidebar-1',
				'description'   => esc_html__( 'Add widgets here.', 'blocksy' ),
				'before_widget' => '<div class="ct-widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			]
		);

		$number_of_sidebars = 4;

		for ( $i = 1; $i <= $number_of_sidebars; $i++ ) {
			register_sidebar(
				[
					'id'            => 'ct-footer-sidebar-' . $i,
					'name'          => "Footer Column $i",
					'before_widget' => '<div class="ct-widget %2$s">',
					'after_widget'  => '</div>',
					'before_title'  => '<h2 class="widget-title">',
					'after_title'   => '</h2>',
				]
			);
		}
	}
);

add_action('wp_enqueue_scripts', function () {
	$theme = wp_get_theme();

	$m = new Blocksy_Fonts_Manager();
	$m->load_fonts();

	wp_register_script(
		'ct-events',
		get_template_directory_uri() . '/static/bundle/events.js',
		[],
		$theme->get( 'Version' ),
		true
	);

    /*
	wp_enqueue_style(
		'ct-style',
		get_stylesheet_uri(),
		[],
		$theme->get( 'Version' )
	);
     */

	wp_enqueue_style(
		'ct-main-styles',
		get_template_directory_uri() . '/static/bundle/main.css',
		[],
		$theme->get( 'Version' )
	);

	wp_enqueue_script(
		'ct-scripts',
		get_template_directory_uri() . '/static/bundle/main.js',
		['ct-events'],
		$theme->get( 'Version' ),
		true
	);

	$data = [
		'ajax_url' => admin_url( 'admin-ajax.php' ),
		'nonce' => wp_create_nonce( 'ct-ajax-nonce' ),
		'public_url' => get_template_directory_uri() . '/static/bundle/',
		'rest_url' => get_rest_url(),
		'search_url' => get_search_link( 'QUERY_STRING' ),
		'show_more_text' => __( 'Show more', 'blocksy' ),
		'more_text' => __( 'More', 'blocksy' ),
	];

	ob_start();

	get_template_part('template-parts/internet', 'explorer');

	$data['internet_explorer_template'] = ob_get_clean();

	if ( is_customize_preview() ) {
		$data['customizer_sync'] = blocksy_customizer_sync_data();
	}

	wp_localize_script(
		'ct-scripts',
		'ct_localizations',
		$data
	);

	if (defined('WP_DEBUG') && WP_DEBUG) {
		wp_localize_script(
			'ct-scripts',
			'WP_DEBUG',
			['debug' => true]
		);
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
});

add_action(
	'enqueue_block_editor_assets',
	function () {
		$theme = wp_get_theme();

		wp_enqueue_style(
			'ct-main-editor-styles',
			get_template_directory_uri() . '/static/bundle/editor.css',
			[],
			$theme->get( 'Version' )
		);
	}
);

require get_template_directory() . '/inc/helpers.php';
require get_template_directory() . '/inc/classes/customizer-builder.php';
require get_template_directory() . '/inc/i18n.php';
require get_template_directory() . '/inc/global-scripts.php';
require blocksy_locate_theme_path('/inc/schema-org.php');
require blocksy_locate_theme_path('/inc/classes/class-ct-css-injector.php');
require blocksy_locate_theme_path('/inc/classes/class-ct-attributes-parser.php');
require blocksy_locate_theme_path('/inc/excerpt.php');
require blocksy_locate_theme_path('/inc/inline-svgs.php');

require blocksy_locate_theme_path('/inc/css-helpers.php');
require blocksy_locate_theme_path('/inc/css/box-shadow-option.php');
require blocksy_locate_theme_path('/inc/dynamic-css.php');
require blocksy_locate_theme_path('/inc/pagination.php');
require blocksy_locate_theme_path('/inc/sidebar.php');
require blocksy_locate_theme_path('/inc/post-meta.php');
require blocksy_locate_theme_path('/inc/images.php');
require blocksy_locate_theme_path('/inc/single-helpers.php');
require blocksy_locate_theme_path('/inc/options-logic.php');
require blocksy_locate_theme_path('/inc/comments.php');
require blocksy_locate_theme_path('/inc/share-box.php');
require blocksy_locate_theme_path('/inc/menus.php');
require blocksy_locate_theme_path('/inc/footer.php');
require blocksy_locate_theme_path('/inc/visibility.php');
require blocksy_locate_theme_path('/inc/social-icons.php');
require blocksy_locate_theme_path('/inc/header-helpers.php');
require blocksy_locate_theme_path('/inc/elementor-integration.php');
require blocksy_locate_theme_path('/inc/meta-boxes.php');
require blocksy_locate_theme_path('/inc/hero-section.php');
require blocksy_locate_theme_path('/inc/woocommerce-integration.php');
require blocksy_locate_theme_path('/inc/posts-listing.php');
require blocksy_locate_theme_path('/inc/gallery.php');
require blocksy_locate_theme_path('/inc/backgrounds.php');
require blocksy_locate_theme_path('/inc/typography/core.php');

require blocksy_locate_theme_path('/template-parts/content-helpers.php');

/**
 * Custom template tags for this theme.
 */
require blocksy_locate_theme_path('/inc/template-tags.php');

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

if (is_admin()) {
	require get_template_directory() . '/admin/init.php';
}

if (!is_admin()) {
	add_filter('script_loader_tag', function ($tag, $handle) {
		$scripts = apply_filters('blocksy-async-scripts-handles', [
			'ct-scripts'
		]);

		if (in_array($handle, $scripts)) {
			return str_replace('<script ', '<script async ', $tag);
		}

		return $tag;

		// if the unique handle/name of the registered script has 'async' in it
		if (strpos($handle, 'async') !== false) {
			// return the tag with the async attribute
			return str_replace( '<script ', '<script async ', $tag );
		} else if (
			// if the unique handle/name of the registered script has 'defer' in it
			strpos($handle, 'defer') !== false
		) {
			// return the tag with the defer attribute
			return str_replace( '<script ', '<script defer ', $tag );
		} else {
			return $tag;
		}
	}, 10, 2);
}

