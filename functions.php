<?php
if ( version_compare( PHP_VERSION, '5.7.0', '<' ) ) {
	require get_template_directory() . '/inc/php-fallback.php';
	return;
}

require get_template_directory() . '/inc/init.php';
require __DIR__ . '/libs/_index.php';


add_action( 'after_setup_theme', 'my_after_setup_theme' );
add_action( 'customize_register', 'my_customize_register' );

// ENQUEUE
add_action( 'customize_controls_print_styles', 'my_enqueue_customizer_assets' );


/**
 * Run after theme is loaded
 * @action after_setup_theme
 */
function my_after_setup_theme() {
  add_theme_support( 'blocksy' );
}

function my_customize_register( $wp_customize ) {
	$c = H::customizer( $wp_customize ); // init the class
}


function my_enqueue_customizer_assets() {
	$css_dir = get_stylesheet_directory_uri() . '/static/css';

	wp_enqueue_style( 'my-customizer', $css_dir . '/my-customizer.css', [], '' );
}