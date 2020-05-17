<?php

/**
 * We created a CSS file in /wp-content/custy.css and will write all styles there
 * 
 * The CSS is enqueued in enqueue.php and has a version that will be updated everytime the customizer is saved.
 */
class Custy_Stylesheet {
  function __construct() {

    // only in preview
    global $wp_customize;
    if( isset( $wp_customize ) && $wp_customize->is_preview() ) {
      add_action( 'wp_head', [$this, 'add_empty_style_tags'] );
    }

    add_filter( 'custy_css', [$this, 'set_public_vars'] );
    add_filter( 'custy_css', [$this, 'set_color_classes'] );

    add_filter( 'custy_admin_css', [$this, 'set_admin_vars'] );
    add_filter( 'custy_admin_css', [$this, 'set_color_classes'] );
    add_filter( 'custy_admin_css', [$this, 'set_editor_typography'] );

    add_action( 'customize_save_after', [$this, 'update_css_version'] );
    add_action( 'customize_save_after', [$this, 'rewrite_css_file'] );
  }



  /**
   * Add empty <style> tags with specific ID to enable live changes, only in preview
   * 
   * @action wp_head
   */
  function add_empty_style_tags() {
    $mobile_bp = apply_filters( 'custy_mobile_breakpoint', '480px' );
    $tablet_bp = apply_filters( 'custy_tablet_breakpoint',  '767px' );

    $medias = [
      [ 'id' => 'ct-main-styles-inline-css', 'media' => '' ],
      [ 'id' => 'ct-main-styles-tablet-inline-css', 'media' => "(max-width: $tablet_bp)" ],
      [ 'id' => 'ct-main-styles-mobile-inline-css', 'media' => "(max-width: $mobile_bp)" ],
    ];

    $tags = '';
    foreach( $medias as $m ) {
      $id = $m['id'];
      $media = $m['media'];
      $tags .= "<style type='text/css' id='$id' media='$media'> :root {} </style>";
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
    // write to files in /wp-content
    $css = apply_filters( 'custy_css', '' );
    file_put_contents( WP_CONTENT_DIR . '/custy.css', $css );

    $admin_css = apply_filters( 'custy_admin_css', '' );
    file_put_contents( WP_CONTENT_DIR . '/custy-admin.css', $admin_css );
  }



  /**
   * Set all customizer CSS Variable for public
   * 
   * @filter custy_css
   */
  function set_public_vars( $old_css ) {
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
   * Set the color classes like "has-main-background-color"
   * 
   * @filter custy_css
   */
  function set_color_classes( $old_css ) {
    $raw_colors = _custy_get_color_palette();

    // parse the raw colors
    $colors = [];
    foreach( $raw_colors as $name => $value ) {
      $slug = custy_to_slug( $name, '-' );
      
      // if color name is 'text' (which will clash with gutenberg class)
      if( $slug == 'text' ) {
        $slug = 'text-base';
      }
      
      $colors[ $name ] = [
        'color' => $value,
        'slug' => $slug
      ];
    }

    // Create CSS selector and CSS variable
    $styles = '';
    foreach( $colors as $name => $value ) {
      $slug = $value['slug'];
      $color = $value['color'];

      // if value is a CSS var
      if( strpos( $color, 'var' ) > -1 ) {
        preg_match('/--([\w\s]+)/', $color, $var_name );

        $styles .= ".has-{$slug}-background-color { --bgColor: {$color}; --bgColorRGB: var(--{$var_name[1]}RGB); }";
        $styles .= ".has-{$slug}-color { --textColor: {$color}; --textColorRGB: var(--{$var_name[1]}RGB); }";
      }
      // else, it's a normal CSS
      else {
        $styles .= ".has-{$slug}-background-color { background-color: {$color}; }";
        $styles .= ".has-{$slug}-color { color: {$color}; }";
      }
    }


    return $old_css . ' ' . $styles;
  }


  /**
   * Set some customizer CSS Variable for admin
   * 
   * @filter custy_admin_css
   */
  function set_admin_vars( $old_css ) {
    $sections = array_merge(
      custy_get_sections( 'general' ),
      custy_get_sections( 'text' )
    );
  
    $compiler = new Custy_CompileStyles();
    $compiler->compile_from_sections( $sections );
    
    $data = $compiler->get_styles();
    $css = $this->format_data_to_css( $data );

    // Change the font
    return $old_css . ' ' . $css;
  }


  /**
   * Add styling that change the Editor's font and background
   * 
   * @filter custy_admin_css
   */
  function set_editor_typography( $old_css ) {
    $css = "
    .editor-styles-wrapper {
      background-color: var(--siteBackground);
    }
    
    .editor-styles-wrapper > * {
      font-family: var(--fontFamily);
      font-weight: var(--fontWeight);
    }
    
    .editor-post-title__block .editor-post-title__input,
    .editor-styles-wrapper .wp-block h1,
    .editor-styles-wrapper .wp-block h2,
    .editor-styles-wrapper .wp-block h3,
    .editor-styles-wrapper .wp-block h4,
    .editor-styles-wrapper .wp-block h5,
    .editor-styles-wrapper .wp-block h6,
    .editor-styles-wrapper .has-drop-cap:not(:focus)::first-letter {
      font-family: var(--hFontFamily);
      font-weight: var(--hFontWeight);
      text-transform: var(--hTextTransform);
    }
    
    .editor-styles-wrapper .wp-block h1 {
      font-size: var(--h1Size);
    }
    .editor-styles-wrapper .wp-block h2 {
      font-size: var(--h2Size);
    }
    .editor-styles-wrapper .wp-block h3 {
      font-size: var(--h3Size);
    }
    .editor-styles-wrapper .wp-block h4 {
      font-size: var(--h4Size);
    }
    .editor-styles-wrapper .wp-block h5 {
      font-size: var(--h5Size);
    }
    .editor-styles-wrapper .wp-block h6 {
      font-size: var(--h6Size);
    }";

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
}

new Custy_Stylesheet();