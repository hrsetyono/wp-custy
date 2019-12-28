<?php
/**
 * Apply theme mods that is relevant in Gutenberg editor
 */

// add_action( 'admin_head', 'my_render_editor_mods', 0 );


/**
 * 
 */
function my_render_editor_mods() {
  // Only in edit/new post
  $current_screen = get_current_screen()->id;
  if( !in_array( $current_screen, ['post', 'post-new'] ) ) {
    return;
  }

  $mods = wp_parse_args( get_theme_mods(), my_get_default_mods() );
  $css = [
    ':root' => [
      '--smallFontSize' => $mods['smallFontSize'],
      '--mediumFontSize' => $mods['mediumFontSize'],
      '--largeFontSize' => $mods['largeFontSize'],
      '--h1Size' => $mods['h1Size'],
      '--h2Size' => $mods['h2Size'],
      '--h3Size' => $mods['h3Size'],
      '--h4Size' => $mods['h4Size'],
      '--h5Size' => $mods['h5Size'],
      '--h6Size' => $mods['h6Size'],
    ],
  ];

  $tmf = new ThemeMods_Formatter( $css );
  $formatted_css = $tmf->format();

  Timber::render( 'partials/theme-mods.twig', $formatted_css );
}