<?php
define( 'ASSETS_VERSION', '2019.12.26' ); // update this to force delete browser's cache


add_action( 'customize_controls_print_styles', 'my_customizer_assets' );
add_action( 'enqueue_block_editor_assets', 'my_editor_assets', 100 );
add_action( 'wp_enqueue_scripts', 'my_public_assets', 100 );

/**
 * Front-end CSS and JS
 * 
 * @action wp_enqueue_scripts 100
 */
function my_public_assets() {
  $css_dir = get_stylesheet_directory_uri() . '/static/css';

  wp_enqueue_style( 'my-framework', $css_dir . '/my-framework.css', [], ASSETS_VERSION );
}

/**
 * Enqueue assets for Customizer
 * 
 * @action customize_controls_print_styles
 */
function my_customizer_assets() {
	$css_dir = get_stylesheet_directory_uri() . '/static/css';

	wp_enqueue_style( 'my-customizer', $css_dir . '/my-customizer.css', [], ASSETS_VERSION );
}

/**
 * Enqueue assets for Gutenberg editor
 * 
 * @action enqueue_block_editor_assets
 */
function my_editor_assets() {
  if ( !is_admin() ) { return; }
  
  $css_dir = get_stylesheet_directory_uri() . '/static/css';
  $js_dir = get_stylesheet_directory_uri() . '/static/js';

  wp_enqueue_style( 'my-editor', $css_dir . '/my-editor.css', [ 'wp-edit-blocks' ], ASSETS_VERSION );
}