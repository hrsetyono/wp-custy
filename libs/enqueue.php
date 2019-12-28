<?php
define( 'ASSETS_VERSION', '2019.12.26' ); // update this to force delete browser's cache


add_action( 'customize_controls_print_styles', 'my_customizer_assets' );
add_action( 'enqueue_block_editor_assets', 'my_editor_assets', 100 );
add_action( 'wp_enqueue_scripts', 'my_public_assets', 100 );
add_action(	'admin_enqueue_scripts', 'my_admin_assets' );

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

/**
 * Enqueue assets for Admin area
 * 
 * @action admin_enqueue_scripts
 */
function my_admin_assets() {
  $theme = wp_get_theme();

  wp_enqueue_media();

  wp_register_script(
    'ct-events',
    get_template_directory_uri() . '/static/bundle/events.js',
    [],
    $theme->get( 'Version' ),
    true
  );

  $deps = apply_filters('blocksy-options-scripts-dependencies', [
    'underscore',
    'wp-color-picker',
    'react',
    'react-dom',
    'wp-element',
    'wp-components',
    'wp-date',
    'wp-i18n',
    'ct-events'
    // 'wp-polyfill'
  ]);

  global $wp_customize;

  if ( ! isset( $wp_customize ) ) {
    wp_enqueue_script(
      'ct-options-scripts',
      get_template_directory_uri() . '/static/bundle/options.js',
      $deps,
      $theme->get( 'Version' ),
      true
    );
  }

  $locale_data_ct = blocksy_get_jed_locale_data( 'blocksy' );

  wp_add_inline_script(
    'wp-i18n',
    'wp.i18n.setLocaleData( ' . wp_json_encode( $locale_data_ct ) . ', "blocksy" );'
  );

  wp_enqueue_style(
    'ct-options-styles',
    get_template_directory_uri() . '/static/bundle/options.css',
    ['wp-color-picker'],
    $theme->get( 'Version' )
  );

  wp_localize_script(
    'ct-options-scripts',
    'ct_localizations',
    [
      'is_dev_mode' => !!(defined('BLOCKSY_DEVELOPMENT_MODE') && BLOCKSY_DEVELOPMENT_MODE),
      'ajax_url' => admin_url('admin-ajax.php'),
      'nonce' => wp_create_nonce( 'ct-ajax-nonce' ),
      'public_url' => get_template_directory_uri() . '/static/bundle/',
      'static_public_url' => get_template_directory_uri() . '/static/',
      'rest_url' => get_rest_url(),
      'customizer_url' => admin_url('/customize.php?autofocus'),
    ]
  );
}