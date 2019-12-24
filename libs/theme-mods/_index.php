<?php

require_once __DIR__ . '/default-value.php';
require_once __DIR__ . '/stylesheet.php';
require_once __DIR__ . '/formatter.php';


add_action( 'wp_head', 'my_render_theme_mods', 0 );


/**
 * 
 */
function my_render_theme_mods() {
  $css = my_get_array_stylesheet();

  $tmf = new ThemeMods_Formatter( $css );
  $formatted_css = $tmf->format();

  var_dump( $formatted_css );

	Timber::render( 'partials/theme-mods.twig', $formatted_css );
}