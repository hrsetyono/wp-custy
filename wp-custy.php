<?php
/**
 * Plugin Name: Custy - Customizer Library
 * Description: Add advanced options such as Typography and Color Picker to WP Customizer.
 * Plugin URI: http://github.com/hrsetyono/wp-custy
 * Requires at least: 5.3
 * Requires PHP: 7.0
 * License: MIT
 * Author: Pixel Studio
 * Author URI: https://pixelstudio.id
 * Version: 1.5.4
 */

if( !defined( 'WPINC' ) ) { die; } // exit if accessed directly

// Constant
define( 'CUSTY_VERSION', '1.5.4' );
define( 'CUSTY_DIR', __DIR__ . '/lib' );
define( 'CUSTY_URL', plugin_dir_url( __FILE__ ) );

define( 'BLOCKSY_DIR', __DIR__ . '/blocksy-lib' );
define( 'BLOCKSY_DIR_URL', plugin_dir_url( __FILE__ ) . 'blocksy-lib' );
define( 'BLOCKSY_IMAGES_URL', BLOCKSY_DIR_URL . '/images' );
define( 'BLOCKSY_CSS_URL', BLOCKSY_DIR_URL . '/css' );
define( 'BLOCKSY_JS_URL', BLOCKSY_DIR_URL . '/js' );


require_once CUSTY_DIR . '/custy-helper.php';
require_once CUSTY_DIR . '/svg-list.php';


/////

if( !class_exists( 'Custy' ) ) {

class Custy {
  function __construct() {
    add_action( 'plugins_loaded', [$this, 'plugins_loaded'] );
    
    add_action( 'after_setup_theme', [$this, 'register_navs'] );
    add_action( 'after_setup_theme' , [$this, 'load_modules'], 9999 );

    add_filter( 'plugin_row_meta', [$this, 'add_doc_links'], 10, 2 );

    add_action( 'widgets_init', [$this, 'widgets_init'] );

    add_action( 'init', function() {
      CustyBuilder::set_items(); // initiate builder cache
    }, 9999 );
  }

  /**
   * 
   */
	function activation_hook() {

  }

  
  /**
   * Load Blocksy and default values
   * 
   * @action plugins_loaded
   */
  function plugins_loaded() {
    require_once BLOCKSY_DIR . '/_index.php';
    
    // DEFAULT VALUES
    require_once __DIR__ . '/core-sections/_core-defaults.php';
    require_once __DIR__ . '/header-items/_header-defaults.php';
    require_once __DIR__ . '/footer-items/_footer-defaults.php';
    
    add_filter( 'custy_default_values', '_custy_core_default_values' );
    add_filter( 'custy_default_values', '_custy_header_default_values' );
    add_filter( 'custy_default_values', '_custy_footer_default_values' );
  }


  /**
   * Create nav that's used by Custy
   * 
   * @action after_setup_theme
   */
  function register_navs() {
    register_nav_menus( [
      'nav_1' => __( 'Nav 1' ),
      'nav_2' => __( 'Nav 2' ),
      'mobile_nav' => __( 'Mobile Nav' ),
      'footer_nav' => __( 'Footer Nav' ),
    ] );
  }


  /**
   * Load all custom functions
   * 
   * @action after_setup_theme 9999
   */
  function load_modules() {
    require_once CUSTY_DIR . '/enqueue.php';
    require_once CUSTY_DIR . '/shortcode.php';

    require_once CUSTY_DIR . '/format-options.php';
    require_once CUSTY_DIR . '/format-values.php';

    require_once CUSTY_DIR . '/sync-preview.php';

    // Populate options
    require_once __DIR__ . '/core-sections/_index.php';
    require_once __DIR__ . '/header-items/_index.php';
    require_once __DIR__ . '/footer-items/_index.php';
    
    // BUILDER
    require_once CUSTY_DIR . '/builder.php';
    require_once CUSTY_DIR . '/builder-values.php';

    // FONTS
    require_once CUSTY_DIR . '/font-faces.php';

    // Output <style> tags
    require_once CUSTY_DIR . '/stylesheet-compile.php';
    require_once CUSTY_DIR . '/stylesheet.php';
  }

  /**
   * @action plugin_row_meta 10
   */
  function add_doc_links( $links, $file ) {
    if( $file === plugin_basename(__FILE__) ) {
      $links[] = '<a target="_blank" rel="noopener noreferrer" href="https://github.com/hrsetyono/wp-custy/wiki/"> View Documentation » </a>';
    }

    return $links;
  }


  /**
   * Initiate widgets used by Custy
   * 
   * @action widgets_init
   */
  function widgets_init() {
    register_sidebar( [
      'name' => __( 'Sidebar' ),
      'id' => 'sidebar',
      'description' => __( 'Widgets for Blog and Single Post page. You must enable it via Customizer.' ),
      'before_widget' => '<div id="%1$s" class="widget %2$s">',
      'after_widget' => '</div>',
    ] );
  
    $number_of_sidebars = 4;
  
    for ( $i = 1; $i <= $number_of_sidebars; $i++ ) {
      register_sidebar( [
        'id' => 'footer-widget-' . $i,
        'description' => __( 'Widget for Footer drag-n-drop builder via Customizer' ),
        'name' => "Footer Widget $i",
      ] );
    }
  }

  /////
  
  /**
   * When calling non-existing static function, it checks for a function with prefix custy_
   * 
   * @deprecated - Use the direct function custy_$funcName instead
   */
  static function __callStatic( $name, $args ) {
    $func_name = "custy_$name";

    if( is_callable( $func_name ) ) {
      return call_user_func_array( "custy_$name", $args );
    } else {
      trigger_error( "The function Custy::$name does not exist.", E_USER_ERROR );
    }
  }
}

new Custy();

}