<?php

/**
 * Format the values of Header or Footer
 */
class Custy_BuilderValues {
  private $type;

  function __construct() {}

  /**
   * Format the header_placements data
   */
  function format_header( $section, $need_format = true ) {
    $this->type = 'header';

    $data = [
      'desktop' => $this->remove_empty_rows( $section['desktop'] ),
      'mobile' => $this->remove_empty_rows( $section['mobile'] ),
      'items' => $this->format_items_arg( $section, $need_format ),
    ];

    return $data;
  }


  /**
   * Format the footer_placements data
   */
  function format_footer( $section, $need_format = true ) {
    $this->type = 'footer';

    $rows = $this->remove_empty_rows( $section['rows'] );
    $items =  $this->format_items_arg( $section, $need_format );


    // Remove the unnecessary values from Footer Row layout
    foreach( $items as $key => &$values ) {
      if( !in_array( $key, [ 'top-row', 'middle-row', 'bottom-row' ] ) ) {
        continue;
      }

      $row_key = array_search( $key, array_column( $rows, 'id') );
      $values[ 'items_per_row' ] = count( $rows[ $row_key ]['columns'] );

      if( $values[ 'items_per_row' ] > 1 ) {
        $values[ 'columns_layout' ] = $values[ $values[ 'items_per_row' ] . '_columns_layout' ];
      } else {
        $values[ 'columns_layout' ] = [ 'desktop' => '', 'tablet' => '' ]; 
      }

      unset( $values['2_columns_layout'] );
      unset( $values['3_columns_layout'] );
      unset( $values['4_columns_layout'] );
    }

    return [
      'rows' => $rows,
      'items' => $items,
    ];
  }

  
  /**
   * Get the section with the specified ID
   */
  function get_section( $placements, $id = null ) {
    // if ID is not given, use current ID
    if( empty( $id ) ) {
      $id = $placements['current_section'];
    }

    // search for the section with that ID
    foreach( $placements['sections'] as $section ) {
      if ( $section['id'] === $id ) {
        return $section;
      }
    }

    // if not found, just return the first one
    return $placements['sections'][0];
  }


  /**
   * Format the header_placements or footer_placements value from theme mod
   */
  function format_placements( $type = 'header', $raw_values = null, $need_format = true ) {
    $this->type = $type;

    $raw_values = $raw_values ?? Custy::get_mod( $type . '_placements' );
    $section = $this->get_current_section( $raw_values );

    $data = [];

    switch( $type ) {
      case 'header':
        $data = [
          'desktop' => $this->remove_empty_rows( $section['desktop'] ),
          'mobile' => $this->remove_empty_rows( $section['mobile'] ),
          'items' => $this->format_items_arg( $section, $need_format ),
        ];
        break;

      case 'footer':
        $data = [
          'rows' => $this->remove_empty_rows( $section['rows'] ),
          'items' =>  $this->format_items_arg( $section, $need_format ),
        ];
        break;
    }
    
    return $data;
  }


  /////


  /**
   * get the selected header / footer
   */
  private function get_current_section( $raw_values ) {
    foreach( $raw_values['sections'] as $section ) {
      if ( $section['id'] === $raw_values['current_section'] ) {
        return $section;
      }
    }

    // else, return first one
    return $raw_values['sections'][0];
  }


  /**
   * Format all values and assign default value if doesn't exist
   * 
   * Why we need to do this:
   * - When an item is added, but all its values stay default, it won't exist in 'items' arg
   * - So we need to get all used items, and check if it has value. Otherwise, assign default value
   */
  private function format_items_arg( $section, $need_format = true ) {
    $items = [];
    $item_ids = [];
    $default_values = Custy::get_default_values( $this->type );

    // remap existing values
    $values = array_reduce( $section['items'], function( $result, $i ) {
      $result[ $i['id'] ] = $i['values'];
      return $result;
    }, [] );

    $item_ids = [];

    // get item ids
    switch( $this->type ) {
      case 'header':
        $item_ids = array_merge(
          $this->extract_item_ids( $section['desktop'] ),
          $this->extract_item_ids( $section['mobile'] )
        );
        break;

      case 'footer':
        $item_ids = $this->extract_item_ids( $section['rows'] );
        break;
    }


    $cv = new Custy_Values();

    // assign values to ids
    foreach( $item_ids as $id ) {
      $value = wp_parse_args( $values[ $id ] ?? [], $default_values[ $id ] );
      $items[ $id ] = $need_format ? $cv->format( $value ) : $value;
    }

    return $items;
  }


  /**
   * Get all item IDs from each placements
   * 
   * @return array
   */
  private function extract_item_ids( $rows ) : array {
    $item_ids = [];

    foreach( $rows as $row ) {
      $columns = ($this->type === 'header') ? $row['placements'] : $row['columns'];

      foreach( $columns as $col ) {
        $items = ($this->type === 'header') ? $col['items'] : $col;

        foreach( $items as $id ) {
          if( in_array( $id, $item_ids ) ) { continue; }
          $item_ids[] = $id;
        }
      } 
    }

    // add the placement rows
    $item_ids = array_merge( $item_ids, [ 'top-row', 'middle-row', 'bottom-row' ] );
    if( $this->type === 'header' ) {
      $item_ids[] = 'offcanvas';
    }

    return $item_ids;
  }


  /**
   * Remove the row that has no item
   */
  private function remove_empty_rows( $rows ) {
    foreach( $rows as &$row ) {
      $is_empty = true;
      $columns = $this->type === 'header' ? $row['placements'] : $row['columns'];
      $columns = $this->remove_empty_columns( $columns, $this->type );

      switch( $this->type ) {
        case 'header':
          $row['placements'] = $columns;
          break;
        case 'footer':
          $row['columns'] = $columns;
          break;
      }
    }

    return $rows;
  }

  /**
   * Remove columns that are empty
   */
  private function remove_empty_columns( $columns, $type = 'header' ) {
    for( $i = 0, $len = count( $columns ); $i < $len; $i++ ) {

      $items = $type == 'header' ? $columns[ $i ]['items'] : $columns[ $i ];

      // if item is not found, remove the column
      if( empty( $items ) ) {
        unset( $columns[ $i ] );
      }
    }

    return $columns;
  }

}