<?php

require_once __DIR__ . '/helpers.php';
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

	Timber::render( 'partials/theme-mods.twig', $formatted_css );
}

/**
 * Return array for shadow selection
 */
function my_shadow_choices() {
  return blocksy_ordered_keys( [
    'none' => __( 'None' ),
    'var(--shadow0)' => __( 'Depth 0' ),
    'var(--shadow1)' => __( 'Depth 1' ),
    'var(--shadow2)' => __( 'Depth 2' ),
    'var(--shadow3)' => __( 'Depth 3' ),
  ] );
}