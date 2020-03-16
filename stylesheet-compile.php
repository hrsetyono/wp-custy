<?php

/**
 * Collect  the CSS Variables from sections
 */
class Custy_CompileStyles {
  private $mod_values = [];
  private $current_values = [];
  private $styles = [];

  function __construct() {
    $this->mod_values = Custy::get_mods();
  }

  function get_styles() : array {
    return $this->styles;
  }

  /**
   * Compile all the "css" arguments from each section
   */
  function compile_from_sections( $sections ) { 
    foreach( $sections as $section_id => $args ) {
      $selector = $args['css_selector'] ?? ':root';

      if( !isset( $args['options'] ) ) { continue; }

      $options = $args['options'][ $section_id . '_options' ]['inner-options'];

      $this->current_values = $this->mod_values;
      $this->compile_from_options( $options, $selector );
    }
  }

  /**
   * Compile all the "css" arguments from each Header / Footer item
   * 
   * @param $item_options (array)
   * @param $type (string) - 'header' or 'footer'
   */
  function compile_from_items( $item_options, $type = 'header' ) {
    $data = [];
    $default_values = Custy::get_default_values( $type );

    switch( $type ) {
      case 'header':
        $data = CustyBuilder::get_header();
        break;
      case 'footer':
        $data = CustyBuilder::get_footer();
        break;
    }

    // search for css args
    foreach( $data['items'] as $item_id => $values ) {
      
      $item = $item_options[ $item_id ] ?? null;
      if( empty( $item ) ) { continue; }  // if item doesn't exist

      $options = $item_options[ $item_id ]['options'] ?? null;
      if( empty( $options ) ) { continue; } // if item doesn't have options

      $selector = $item['css_selector'] ?? ':root';

      $this->current_values = wp_parse_args( $values, $default_values[ $item_id ] );
      $this->compile_from_options( $options, $selector );
    }
  }


  /**
   * Compile all the "css" arguments from each option
   * 
   * Format:
   * 
   *   'selector' => [
   *     '--cssVar1' => 'value1',
   *     '--cssVar2' => 'value2',
   *   ]
   */
  private function compile_from_options( $options, $parent_selector = ':root' ) {
    // loop all options to find "css" arg
    foreach( $options as $option_id => $args ) {
      $selector = $args['css_selector'] ?? $parent_selector;

      // skip if has inner options
      if( isset( $args['options'] ) || isset( $args['inner-options'] ) ) {
        $this->compile_from_inner_options( $args, $selector );
        continue;
      }
      // skip if doesn't have css args
      elseif( !isset( $args['css'] ) ) {
        continue;
      }

      $this->styles[ $selector ] = $this->styles[ $selector ] ?? []; // initiate empty selector
      
      $value = $this->current_values[ $option_id ] ?? null;

      // if single value
      if( is_string( $args['css'] ) ) {
        $this->styles[ $selector ][ $args['css'] ] = $value;
      }
      // if Color picker which is multi value
      elseif( is_array( $args['css'] ) ) {
        $this->compile_from_color_picker( $selector, $args['css'], $value, $option_id );
      }

    }
  }

  /**
   * Get inner options
   */
  private function compile_from_inner_options( $args, $parent_selector = ':root' ) {
    $selector = $args['css_selector'] ?? $parent_selector;

    $inner_options = $args['options'] ?? $args['inner-options'] ?? [];
    if( !empty( $inner_options ) ) {
      $this->compile_from_options( $inner_options, $selector );
    }
  }

  /**
   * Get value from theme mods
   */
  private function get_mod_value( $option_id ) {
    if( !isset( $this->theme_mods[ $option_id ] ) ) {
      trigger_error( 'Default value not set: ' . $option_id, E_USER_ERROR );
    }

    return $this->theme_mods[ $option_id ];
  }

  /**
   * Get a value from associative array using dot notation.
   * Example: if the key is "hover", it will return $value['hover']['color']
   * 
   * @param $selector (string)
   * @param $css_arg (array)
   * @param $values (mixed) - Array values
   * @param $option_id (sting) - For error message
   * 
   * @return mixed
   */
  private function compile_from_color_picker( $selector, $css_arg, $values, $option_id ) {
    if( !isset( $values ) ) {
      trigger_error( 'Value for option: ' . $option_id . ' is null. Have you set default value?', E_USER_ERROR );
      return;
    }

    foreach( $css_arg as $prop => $index ) {
      if( isset( $values[$index] ) && $values[$index]['color'] != 'CT_CSS_SKIP_RULE' ) {
        $this->styles[ $selector ][ $prop ] = $values[ $index ]['color'];
      }
    }
  }
}