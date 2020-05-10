<?php

/**
 * We created a CSS file in /wp-content/custy.css and will write all styles there
 * 
 * The CSS is enqueued in enqueue.php and has a version that will be updated everytime the customizer is saved.
 */
class Custy_Stylesheet {
  function __construct() {
    add_action( 'wp_enqueue_scripts', [$this, 'enqueue_public'] );
    add_action( 'admin_enqueue_scripts', [$this, 'enqueue_admin'] );

    add_action( 'wp_head', [$this, 'add_empty_style_tags'] ); // TODO; only add this on preview screen
    add_action( 'customize_save_after', [$this, 'update_css_version'] );
    add_action( 'customize_save_after', [$this, 'rewrite_css_file'] );
  }


  /**
   * @action wp_enqueue_scripts
   */
  function enqueue_public() {
    $version = get_option( 'custy_css_version', '' );
    wp_enqueue_style( 'custy-public', content_url() . '/custy.css', [], $version );
  }

  /**
   * @action admin_enqueue_scripts
   */
  function enqueue_admin() {
    $version = get_option( 'custy_css_version', '' );
    wp_enqueue_style( 'custy-admin', content_url() . '/custy-admin.css', [], $version );
  }



  /**
   * Add empty <style> tags with specific ID to enable live changes
   * 
   * @action wp_head
   */
  function add_empty_style_tags() {
    $mobile_bp = apply_filters( 'custy_mobile_breakpoint', '480px' );
    $tablet_bp = apply_filters( 'custy_tablet_breakpoint',  '767px' );

    $medias = [
      [ 'id' => 'ct-main-styles-tablet-inline-css', 'media' => '' ],
      [ 'id' => 'ct-main-styles-tablet-inline-css', 'media' => "(max-width: $tablet_bp)" ],
      [ 'id' => 'ct-main-styles-mobile-inline-css', 'media' => "(max-width: $mobile_bp)" ],
    ];

    $tags = '';
    foreach( $medias as $m ) {
      $id = $m['id'];
      $media = $m['media'];
      $tags .= "<style type='text/css' id='$id' media='$media'></style>";
    }

    echo $tags;
  }

  /**
   * Create an option that stores the last time Customizer is updated
   * Will be used to add versioning to the CSS
   * 
   * @action customize_save_after
   */
  function update_css_version() {
    $old_version = get_option( 'custy_css_version' );

    $current_date = current_datetime();
    $new_version = $current_date->format( 'Y.m.d' );

    if( isset( $old_version ) ) {
      preg_match( '/(\d+\.\d+\.\d+)\.*(\d+)*/', $old_version, $matches );

      // if old version is the same as new version (excluding the patch if any)
      if( isset( $matches[1] ) && $matches[1] === $new_version ) {
        // add 4th digit
        $patch = isset( $matches[2] ) ? $matches[2] + 1 : 1;
        $new_version = $new_version . '.' . $patch;
      }
    }

    update_option( 'custy_css_version', $new_version );
  }


  /**
   * @action customize_save_after
   */
  function rewrite_css_file() {
    // add_filter( 'custy_css', [$this, 'set_palette_css'] );
    add_filter( 'custy_css', [$this, 'set_public_css'] );
    add_filter( 'custy_admin_css', [$this, 'set_admin_css'] );

    $this->write_css_file();
    $this->write_admin_css_file();
  }


  
  /**
   * Set color palette CSS for public
   * 
   * @filter custy_css
   */
  function set_palette_css( $old_css ) {
    $css = '';
    return $old_css . ' ' . $css;
  }


  /**
   * Set all customizer CSS for public
   * 
   * @filter custy_css
   */
  function set_public_css( $old_css ) {
    $sections = Custy::get_sections();
    $header_items = CustyBuilder::get_items( 'header', 'all', true, false );
    $footer_items = CustyBuilder::get_items( 'footer', 'all', true, false );

    $compiler = new Custy_CompileStyles();
    $compiler->compile_from_sections( $sections );
    $compiler->compile_from_items( $header_items, 'header' );
    $compiler->compile_from_items( $footer_items, 'footer' );
    
    $data = $compiler->get_styles();
    $css = $this->format_data_to_css( $data );
    return $old_css . ' ' . $css;
  }


  /**
   * Set some customizer CSS for admin
   * 
   * @filter custy_admin_css
   */
  function set_admin_css( $old_css ) {
    $sections = Custy::get_sections( 'palette' );
    $compiler = new Custy_CompileStyles();
    $compiler->compile_from_sections( $sections );
    
    $data = $compiler->get_styles();
    $css = $this->format_data_to_css( $data );
    return $old_css . ' ' . $css;
  }



    
  /**
   * Format all the data into CSS
   * 
   * @return string - The styles data in CSS format
   */
  private function format_data_to_css( $data ) {
    $mobile_bp = apply_filters( 'custy_mobile_breakpoint', '480px' );
    $tablet_bp = apply_filters( 'custy_tablet_breakpoint',  '767px' );

    $cv = new Custy_Values();
    $data = $cv->format_for_css( $data );

    $medias = [
      'desktop_css' => '',
      'tablet_css' => "(max-width: $tablet_bp)",
      'mobile_css' => "(max-width: $mobile_bp)",
    ];

    $full_css = '';
    
    foreach( $medias as $key => $media ):
      // Abort if the css for that media query doesn't exist
      if( count( $data[ $key ] ) <= 0 ) { continue; }

      $css = '';
 
      // create CSS properties
      foreach( $data[ $key ] as $selector => $props ) {
        $css .= " $selector { ";
        foreach( $props as $prop => $value ) {
          $css .= " $prop: $value; ";
        }
        $css .= " } \n";
      }

      // wrap with media query
      if( !empty( $media ) ) {
        $css = "@media $media { $css }";
      }

      $full_css .= ' ' . $css;
    endforeach;

    return $full_css;
  }


  

  /**
   * Write the CSS for public into /wp-content/custy.css
   */
  private function write_css_file() {
    $css = apply_filters( 'custy_css', '' );
    file_put_contents( WP_CONTENT_DIR . '/custy.css', $css );
  }


  /**
   * Write the CSS for admin into /wp-content/custy-admin.css
   */
  private function write_admin_css_file() {
    $css = apply_filters( 'custy_admin_css', '' );
    file_put_contents( WP_CONTENT_DIR . '/custy-admin.css', $css );
  }

}

new Custy_Stylesheet();