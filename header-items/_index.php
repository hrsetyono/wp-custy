<?php

add_filter( 'custy_header_items', '_custy_set_header_items', 0 );


/**
 * @filter custy_header_items 0
 */
function _custy_set_header_items( $items ) {
  $all_items = custy_combine_vars_from_dir( __DIR__, 'item', 'items' );
  return $all_items;
}