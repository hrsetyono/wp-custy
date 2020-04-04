<?php

add_filter( 'custy_fonts', '_custy_fonts_selection' );
add_action( 'wp_head', '_custy_output_font_faces' );
add_action( 'admin_head', '_custy_output_font_faces_admin' );


/**
 * Add new entry to Font Family section in customizer
 * 
 * @filter custy_fonts
 */
function _custy_fonts_selection( $list ) {
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
function _custy_output_font_faces() {
  $fonts = get_theme_support( 'custy-fonts' );
  if( empty( $fonts ) ) { return; } // abort if no theme_support

  $css = _custy_format_fonts( $fonts );

  echo "<style type='text/css' id='custy-fonts'> $css </style>";
}

/**
 * Output @font-face only in gutenberg editor
 */
function _custy_output_font_faces_admin() {
  $fonts = get_theme_support( 'custy-fonts' );
  if( empty( $fonts ) ) { return; } // abort if no theme_support

  global $current_screen;
  $is_block_editor = isset( $current_screen ) && $current_screen->is_block_editor();

  if( !$is_block_editor ) { return; } // abort if not in editor


  $css = _custy_format_fonts( $fonts );

  // Change the heading and body text
  $heading_family = Custy::get_mod( 'headingTypography' )['family'];
  $body_family = Custy::get_mod( 'rootTypography' )['family'];

  $css .= ".editor-styles-wrapper > * { font-family: $body_family; }
  .editor-post-title__block .editor-post-title__input,
  .editor-styles-wrapper .wp-block h1,
  .editor-styles-wrapper .wp-block h2,
  .editor-styles-wrapper .wp-block h3,
  .editor-styles-wrapper .wp-block h4,
  .editor-styles-wrapper .wp-block h5,
  .editor-styles-wrapper .wp-block h6,
  .editor-styles-wrapper .has-drop-cap:not(:focus)::first-letter { font-family: $heading_family; }";

  echo "<style type='text/css' id='custy-fonts'> $css </style>";
}


/**
 * Format the font faces array into CSS
 */
function _custy_format_fonts( $fonts ) {
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