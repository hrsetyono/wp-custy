<?php

require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/default-value.php';
require_once __DIR__ . '/stylesheet.php';
require_once __DIR__ . '/stylesheet-admin.php';
require_once __DIR__ . '/formatter.php';
require_once __DIR__ . '/formatter-admin.php';


add_action( 'wp_head', 'my_render_mods', 0 );
add_action( 'admin_print_styles', 'my_render_admin_mods', 0 );


/**
 * Output theme mods for Frontend
 * 
 * @action wp_head
 */
function my_render_mods() {
  $css = my_get_stylesheet();

  $tmf = new ThemeMods_Formatter( $css );
  $tmf->render();
}

/**
 * Output theme mods for Customizer page
 * 
 * @action admin_print_styles
 */
function my_render_admin_mods() {
  // Only in customizer
  $current_screen = get_current_screen()->id;
  if( !in_array( $current_screen, ['customize'] ) ) {
    return;
  }

  $css = my_get_admin_stylesheet();
  $tmf = new ThemeMods_Formatter( $css );
  $tmf->render();
}