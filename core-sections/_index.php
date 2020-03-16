<?php

add_filter( 'custy_sections', '_custy_set_core_sections', 1 );
add_filter( 'custy_sections', '_custy_format_core_sections', 9999 );


/**
 * @filter custy_sections 0
 */
function _custy_set_core_sections( $sections ) {
  $all_sections = custy_combine_vars_from_dir( __DIR__, 'section', 'sections' );

  // Add divider
  $all_sections[ custy_rand_id() ] = [
    'type' => 'ct-group-title',
    'title' => __( 'Custom' ),
    'priority' => 5,
  ];

  return $all_sections;
}


/**
 * @filter custy_sections 99999
 */
function _custy_format_core_sections( $sections ) {
  $co = new Custy_Options();
  return $co->format_sections( $sections );
}