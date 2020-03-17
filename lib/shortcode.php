<?php

add_shortcode( 'current-year', '_custy_current_year' );
add_shortcode( 'site-title', '_custy_site_title' );


/**
 * To be used in Footer > Copyright
 * 
 * [current-year]
 */
function _custy_current_year( $atts, $content = null ) {
  $current_date = current_datetime();
  return $current_date->format( 'Y' );
}

/**
 * To be used in Footer > Copyright
 * 
 * [site-title]
 */
function _custy_site_title( $atts, $content = null ) {
  return get_bloginfo( 'name' );
}