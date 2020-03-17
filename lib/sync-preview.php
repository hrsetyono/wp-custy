<?php
/**
 * Get the values to be localized for Preview
 */
class Custy_SyncPreview {
  private $type = 'normal'; // normal | header | footer

  public $vars = [];
  public $typography_vars = [];
  public $background_vars = [];
  public $header_vars = [];
  public $footer_vars = [];

  function __construct() {}

  /**
   * Return all the sync vars
   */
  function get_sync_vars() : array {
    return [
      'background' => $this->background_vars,
      'typography' => $this->typography_vars,
      'other' => $this->vars,
      'header' => $this->header_vars,
      'footer' => $this->footer_vars,
    ];
  }

  /**
   * Compile and format the CSS arguments to be accepted by Blocksy sync.js
   */
  function compile_from_sections( $sections ) {
    foreach( $sections as $section_id => $s ) {

      if( !isset( $s['options'] ) ) { continue; }

      $selector = $s['css_selector'] ?? ':root';
      $options = $s['options'][ $section_id . '_options' ]['inner-options'];

      $this->get_var_from_options( $options, $selector );
    }
  }

  /**
   * Compile and format the CSS arguments to be accepted by Blocksy sync.js
   * 
   * @param $items (array) - Header or Footer list of items
   */
  function compile_from_items( $items, $type = 'header' ) {
    $this->type = $type;

    foreach( $items as $item_id => $args ) {
      if( !isset( $args['options'] ) ) { continue; }

      $selector = $args['css_selector'] ?? ':root';
      $options = $args['options'];

      $this->get_var_from_options( $options, $selector, $item_id );
    }
  }


  /**
   * Format the options into array that's accepted by sync.js
   * 
   * @param $options (array)
   * @param $selector (string)
   * @param $item_id (string) - Only for header & footer
   */
  private function get_var_from_options( $options, $selector = ':root', $item_id = '' ) {

    foreach( $options as $option_id => $args ) {
      $selector = $args['css_selector'] ?? $selector; // override, if any
        
      // if has inner options, loop it
      $inner_options = $args['options'] ?? $args['inner-options'] ?? false;
      if( $inner_options ) {
        $this->get_var_from_options( $inner_options, $selector );
      }
      else {
        $var = $this->format_var( $option_id, $args, $selector );
        $this->assign_var_to_class( $option_id, $var, $item_id );
      }
    }
  }

  /**
   * Format option args to be accepted by Sync.js
   */
  private function format_var( $option_id, $args, $selector = ':root' ) {
    $var = [];
    
    // abandon if has no "css" arg
    if( !isset( $args['css'] ) ) { return null; }

    // add var depending on the type
    switch( $args['type'] ) {

      // Skip color picker
      case 'ct-color-palettes-picker':
        return null; // do nothing and return

      
      // special type that can have prefix
      case 'ct-typography':
      case 'ct-background':
        $var['id'] = $option_id;
        $var['type'] = str_replace( 'ct-', '', $args['type'] );
        $var['selector'] = $selector;

        if( preg_match( '/--(\w+)/', $args['css'], $match ) ) {
          $var['prefix'] = $match[1];
        }
        break;


      case 'ct-color-picker':
        foreach( $args['css'] as $prop => $value ) {
          preg_match('/(\w+)./', $value, $type ); // get the first key

          $var[] = [
            'selector' => $selector,
            'variable' => preg_replace( '/^--/', '', $prop ),
            'type' => 'color:' . $type[1],
          ];
        }
        break;


      case 'ct-border':
      case 'ct-box-shadow':
      case 'ct-spacing':
        $var['type'] = str_replace( 'ct-', '', $args['type'] );
        // intentionally without break

      default:
        $var['selector'] = $selector;
        $var['variable'] = preg_replace( '/^--/', '', $args['css'] );
        
        if( isset( $args['responsive'] ) ) {
          $var['responsive'] = $args['responsive'];
        }
        break;
    }

    return $var;
  }

  /**
   * Assign to class variable depending on the type
   * 
   * @param $option_id (string)
   * @param $var (array)
   * @param $item_id (string) - only for header & footer
   */
  private function assign_var_to_class( $option_id, $var, $item_id = '' ) {
    if( empty( $var ) ) { return; }

    if( $this->type === 'normal' ) {
      switch( $var['type'] ?? '' ) {
        case 'typography':
          $this->typography_vars[] = $var;
          break;
        
        case 'background':
          $this->background_vars[] = $var;
          break;
        
        default:
          $this->vars[ $option_id ] = $var;
          break;
      }
    }
    elseif( $this->type === 'header' ) {
      // initialize if empty
      $this->header_vars[ $item_id ] = $this->header_vars[ $item_id ] ?? [];

      $this->header_vars[ $item_id ][ $option_id ] = $var;
    }
    elseif( $this->type === 'footer' ) {
      // initialize if empty
      $this->footer_vars[ $item_id ] = $this->footer_vars[ $item_id ] ?? [];

      $this->footer_vars[ $item_id ][ $option_id ] = $var;
    }
  }

} // class