<?php

class CustyFonts {
  function __construct() {
    add_filter( 'custy_fonts', [$this, 'append_customizer_dropdown'] );
    add_action( 'wp_head', [$this, 'output_css'] );
    add_action( 'admin_head', [$this, 'output_css_admin'] );
  }

  /**
   * Add new entry to Font Family section in customizer
   * 
   * @filter custy_fonts
   */
  function append_customizer_dropdown( $list ) {
    $fonts = get_theme_support( 'custy-fonts' );
    if( !empty( $fonts ) ) {
      foreach( $fonts[0] as $name => $files ) {
        $list[] = $name;
      }
    }
    return $list;
  }

  /**
   * Output @font-face in frontend
   * @action wp_head
   */
  function output_css() {
    $fonts = get_theme_support( 'custy-fonts' );
    if( empty( $fonts ) ) { return; } // abort if no theme_support

    $css = $this->format_font_faces( $fonts );

    echo "<style type='text/css' id='custy-fonts'> $css </style>";
  }

  /**
   * Output @font-face only in gutenberg editor
   */
  function output_css_admin() {
    $fonts = get_theme_support( 'custy-fonts' );
    if( empty( $fonts ) ) { return; } // abort if no theme_support

    global $current_screen;
    $is_block_editor = isset( $current_screen ) && $current_screen->is_block_editor();

    if( !$is_block_editor ) { return; } // abort if not in editor


    $css = $this->format_font_faces( $fonts );

    // Change the heading and body text
    $heading_family = Custy::get_mod( 'headingTypography' )['family'];
    $body_family = Custy::get_mod( 'rootTypography' )['family'];

    $css .= ":root { --fontFamily: $body_family; --hFontFamily: $heading_family; }";

    echo "<style type='text/css' id='custy-fonts'> $css </style>";
  }


  /**
   * Format the font faces array into CSS
   */
  function format_font_faces( $fonts ) {
    $css = '';

    foreach( $fonts[0] as $name => $files ) {
    foreach( $files as $variation => $file_path ) {
      preg_match( "/(\d+)(n|i)?$/", $variation, $matches );

      $font_weight = (int) $matches[1] ?? '400';
      $font_style = (isset( $matches[2] ) && $matches[2] === 'i') ? 'italic' : 'normal';

      $src = "src: url('{$file_path}');";
      $font_family = "font-family: {$name}";

      $css .= "@font-face {  src: url('$file_path');  font-family: $name;  font-weight: $font_weight;  font-style: $font_style;  }";
    } }

    return $css;
  }

}


new CustyFonts();