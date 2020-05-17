<?php

class CustyFonts {
  function __construct() {
    add_filter( 'custy_fonts', [$this, 'append_customizer_dropdown'] );
    
    add_filter( 'custy_css', [$this, 'set_font_faces'] );
    add_filter( 'custy_admin_css', [$this, 'set_font_faces'] );
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
   * Add @font-face declaration based on theme support custy_fonts
   * 
   * @filter custy_css, custy_admin_css
   */
  function set_font_faces( $old_css ) {
    $fonts = get_theme_support( 'custy-fonts' );
    if( empty( $fonts ) ) { return $old_css; } // abort if no theme_support

    $css = $this->format_font_faces( $fonts );
    return $old_css . ' ' . $css;
  } 


  /**
   * Format the font faces array into CSS
   */
  private function format_font_faces( $fonts ) {
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