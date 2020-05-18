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
 * Version: 1.5.3
 */

if( !defined( 'WPINC' ) ) { die; } // exit if accessed directly

// Constant
define( 'CUSTY_VERSION', '1.5.3' );
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
    add_action( 'after_setup_theme' , [$this, 'after_setup_theme'], 9999 );

    add_filter( 'plugin_row_meta', [$this, 'add_doc_links'], 10, 2 );


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
   * Load all custom functions
   * 
   * @action after_setup_theme 9999
   */
  function after_setup_theme() {
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