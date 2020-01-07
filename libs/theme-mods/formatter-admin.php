<?php

/**
 * Format the simplified option args into complete one that's accepted by Blocksy
 */
class ThemeMods_Formatter_Admin {
function __construct() {

}

function format( $section_id, $options, $color_scheme = false ) {
  $defaults = my_get_default_mods();
  
  foreach( $options as $id => &$args ):
    
    // set default value
    if( isset( $defaults[ $id ] ) ) {
      $args['value'] = $defaults[ $id ];
    }

    switch( $args['type'] ):
      case 'tab':
      case 'ct-condition':
        $args['options'] = $this->format( false, $args['options'] );
        continue;
        break;

      case 'ct-panel':
        $args['inner-options'] = $this->format( false, $args['inner-options'] );
        continue;
        break;
      
      case 'ct-color-palettes-picker':
        $args['predefined'] = true;
        break;

      case 'ct-color-picker':
        $args['skipEditPalette'] = true;
        $args['pickers'] = $this->format_pickers( $args['pickers'] );
        break;

      case 'ct-slider':
        $args['units'] = $this->format_units( $args['units'] ); 
        break;

      case 'ct-select-shadow':
        $args['type'] = 'ct-select';
        $args['view'] = 'text';
				$args['choices'] = $this->get_shadow_choices();
        break;

      case 'ct-select':
      case 'ct-visibility':
        $args['choices'] = blocksy_ordered_keys( $args['choices'] );
        break;
    endswitch;

    // set default transport
    $args['setting'] = $args['setting'] ?? [ 'transport' => 'postMessage' ];

    // default design
    switch( $args['type'] ):
      case 'ct-color-picker':
      case 'ct-background':
      case 'ct-select':
      case 'ct-border':
        $args['design'] = $args['design'] ?? 'inline';
        break;

      case 'ct-color-palettes-picker':
        $args['design'] = $args['design'] ?? 'block';
        break;
    endswitch;
  endforeach;

  // if section
  if( $section_id ) {
    $section = [];
    $section[ $section_id ] = [
      'type' => 'ct-options',
      'setting' => [ 'transport' => 'postMessage' ],
      'inner-options' => $options
    ];

    if( $color_scheme ) {
      $section['customizer_color_scheme'] = [
        'label' => __( 'Color scheme' ),
        'type' => 'hidden',
        'label' => '',
        'value' => 'no',
        'setting' => [ 'transport' => 'postMessage' ],
      ];
    }

    return $section;
  }
  // if inner options
  else {
    return $options;
  }

  
}

/////


/**
 * Convert pickers to be ordered array
 */
private function format_pickers( $pickers_arg ) {
  $pickers = [];
  foreach( $pickers_arg as $id => $title ) {
    $pickers[] = [
      'id' => $id,
      'title' => $title,
    ];
  }
  
  return $pickers;
}


/**
 * Convert units to be ordered array
 */
private function format_units( $units_arg ) {
  $units = [];
  foreach( $units_arg as $id => $value ) {
    $units[] = [
      'unit' => $id,
      'min' => $value['min'],
      'max' => $value['max'],
    ];
  }

  return $units;
}


/**
 * Get choices of shadow
 */
private function get_shadow_choices() {
  return blocksy_ordered_keys([
    'none' => __( 'None' ),
    'var(--shadow0)' => __( 'Depth 0' ),
    'var(--shadow1)' => __( 'Depth 1' ),
    'var(--shadow2)' => __( 'Depth 2' ),
    'var(--shadow3)' => __( 'Depth 3' ),
    'var(--shadow4)' => __( 'Depth 4' ),
  ]);
}


}