<?php
/**
 * Helper functions to handle Customizer Options
 */
class Custy_Options {
  function __construct() {
  }

  /**
   * Format the Customizer sections to be accepted by Blocksy
   * 
   * Blocksy format:
   * 
   * ```
   * [
   *   'section_id' => [
   *     'title' => 'Section Name',
   *     'container' => [ 'priority' => 0 ],
   *     'options' => [
   *       'section_options' => [
   *         'type' => 'ct-options',
   *         'setting' => [ 'transport' => 'postMessage' ],
   *         'inner-options' => [
   *           'option1' => [ ... ],
   *           'option2' => [ ... ],
   *           'option3' => [ ... ], 
   *         ]
   *       ]
   *     ]
   *   ],
   *   'section_id2' => [ ... ]
   * ]
   * ```
   * 
   * @param $sections (array)
   * 
   * @return array - formatted sections
   */
  function format_sections( $sections ) : array {
    $defaults = Custy::get_default_values();

    foreach( $sections as $section_id => &$args ) {
      if( !isset( $args['options'] ) ) { continue; }
      
      // add selector notice
      if( isset( $args['css_selector'] ) ) {
        $args['options'] = $this->add_css_selector_notice( $args['css_selector'], $args['options'] );
      }

      $formatted_options = $this->format( $args['options'], $defaults );
      
      $args['options'] = [
        $section_id . '_options' => [
          'type' => 'ct-options',
          'setting' => [ 'transport' => 'postMessage' ],
          'inner-options' => $formatted_options
        ]
      ];

      // If core section, add this options to prevent JS error
      if( $section_id === 'general' ) {
        $args['options']['customizer_color_scheme'] = [
          'label' => __( 'Color scheme' ),
          'type' => 'hidden',
          'label' => '',
          'value' => 'no',
          'setting' => [ 'transport' => 'postMessage' ],
        ];
      }
    }

    return $sections;
  }


  /**
   * Format the Header / Footer items to be accepted by Blocksy Builder
   * 
   * Blocksy format:
   * 
   * ```
   * [
   *   [
   *     'id' => 'item_id',
   *     'is_primary' => false,
   *     'config' => [
   *       'name' => 'Item Name',
   *       'devices' => [ 'desktop', 'mobile' ],
   *       'allowed_in' => [],
   *       'excluded_from' => [],
   *       'enabled' => true,
   *       ...
   *     ],
   *     'options' => [
   *       'option1' => [ ... ],
   *       'option2' => [ ... ],
   *       'option3' => [ ... ], 
   *     ]
   *   ]
   *   [
   *     'id' => 'item_id2',
   *     ...
   *   ]
   * ]
   * ```
   * 
   * @param $items (array)
   * @param $type (string) - Either 'header' or 'footer'
   * @param $require_options (bool) - Include the options arg or not
   * 
   * @return array - formatted items
   */
  function format_items( $items, $type = 'header', $require_options = false ) : array {
    $formatted_items = [];
    $defaults = Custy::get_default_values( $type );

    foreach( $items as $item_id => $args ) {
      $new_args = [
        'id' => $item_id,
        'is_primary' => $args['is_primary'] ?? false,
        'config' => [
          'name' => $args['title'],
          'description' => $args['description'] ?? '',
          'typography_keys' => [],
          'devices' => $args['devices'] ?? [ 'desktop', 'mobile' ],
          'selective_refresh' => $args['selective_refresh'] ?? [],
          'allowed_in' => $args['allowed_in'] ?? [],
          'excluded_from' => $args['excluded_from'] ?? [],
          'shortcut_style' => 'drop',
          'enabled' => true,
        ],
      ];

      // format the options
      if( $require_options && isset( $args['options'] ) ) {
        // add selector notice
        if( isset( $args['css_selector'] ) ) {
          $args['options'] = $this->add_css_selector_notice( $args['css_selector'], $args['options'] );
        }

        $new_args['options'] = $this->format( $args['options'], $defaults[ $item_id ] );
      }

      $formatted_items[] = $new_args;
    }
    
    return $formatted_items;
  }

  /**
   * Format one section or item
   * 
   * @param $options (array) - List of customizer options
   * @param $defaults (bool) - List of default values using options ID as it's key
   * 
   * @return array - The formatted options
   */
  function format( $options, $defaults ) {
    foreach( $options as $id => &$args ):

      $args = $this->format_type_arg( $id, $args );

      // Skip if title or divider
      if( in_array( $args['type'], [ 'ct-title', 'ct-divider' ] ) ) {
        continue;
      }

      // set default value if 'value' args is empty
      if( !isset( $args['value']) ) {
        $args['value'] = $defaults[ $id ] ?? null;
      }

      switch( $args['type'] ):
        case 'tab':
        case 'ct-condition':
          $args['options'] = $this->format( $args['options'], $defaults );

          if( isset($args['css_selector']) ) {
            $args['options'] = $this->add_css_selector_notice( $args['css_selector'], $args['options'] );
          }
          continue;
       
        case 'ct-panel':
          $args['inner-options'] = $this->format( $args['inner-options'], $defaults );
          
          if( isset($args['css_selector']) ) {
            $args['inner-options'] = $this->create_css_notice( $args['css_selector'] ) + $args['inner-options'];
            
          }
          continue;
        
        case 'ct-color-palettes-picker':
          $args['predefined'] = true;
          $args['value'] = $this->format_color_palettes( $args['value'] );
          break;

        case 'ct-color-picker':
          $args['skipEditPalette'] = true;
          $args['pickers'] = $this->format_color_pickers( $args['pickers'] );
          break;

        case 'ct-slider':
          $args['units'] = $this->format_units( $args['units'] );
          break;

        // RADIO
        case 'ct-radio/alignment':
        case 'ct-radio/align':
          $args['type'] = 'ct-radio';
          $args['attr'] = [ 'data-type' => 'alignment' ];
          $args['choices'] = [ 'left' => '', 'center' => '', 'right' => '' ];
          break;

        case 'ct-radio/alignment-no-center':
          $args['type'] = 'ct-radio';
          $args['attr'] = [ 'data-type' => 'alignment' ];
          $args['choices'] = [ 'left' => '', 'right' => '' ];
          break;

        // SELECT
        case 'ct-select':
          $args['choices'] = blocksy_ordered_keys( $args['choices'] );
          break;

        case 'ct-select/shadow':
          $args['type'] = 'ct-select';
          $args['view'] = 'text';
          $args['choices'] = $this->get_shadow_choices();
          break;

        case 'ct-select/heading':
          $args['type'] = 'ct-select';
          $args['view'] = 'text';
          $args['choices'] = $this->get_heading_choices();
          break;

        case 'ct-select/text':
        case 'ct-select/text-size':
          $args['type'] = 'ct-select';
          $args['view'] = 'text';
          $args['choices'] = $this->get_text_size_choices();
          break;

        case 'ct-visibility':
          $args['choices'] = blocksy_ordered_keys([
            'desktop' => __( 'Desktop' ),
						'tablet' => __( 'Tablet' ),
						'mobile' => __( 'Mobile' ),
          ]);
          break;

      endswitch;

      // prevent responsive on some types
      $is_responsive = isset( $args['responsive'] ) && $args['responsive'];
      $type_disallow_responsive = [
        'ct-border',
        'ct-box-shadow',
        'ct-background'
      ];
      if( $is_responsive && in_array( $args['type'], $type_disallow_responsive ) ) {
        unset( $args['responsive'] );
      }

      $args['setting'] = $args['setting'] ?? [ 'transport' => 'postMessage' ];
      $args['design'] = $args['design'] ?? $this->get_default_design( $args['type'] );

      // add css variable
      if( isset( $args['css'] ) ) {
        $args['desc'] = $args['desc'] ?? '';
        $args['desc'] .= $this->format_css_desc( $args );
      }
      
    endforeach;

    return $options;    
  }

  /////


  /**
   * Check if type exists. If not, check if the type can be determined.
   */
  private function format_type_arg( $id, $args ) {

    if( isset( $args['type'] ) ) {
      return $args;
    }
    
    // If tab
    if( isset( $args['tab'] ) ) {
      $args['type'] = 'tab';
      $args['title'] = $args['tab'];
    }
    // If condition
    elseif( isset( $args['condition'] ) ) {
      $args['type'] = 'ct-condition';
    }
    // If divider or title
    elseif( isset( $args['divider'] ) ) {
      $args['type'] = empty( $args['divider'] ) ? 'ct-divider' : 'ct-title';

      if( $args['type'] == 'ct-title' ) {
        $args['label'] = $args['divider'];
      }
    }
    else {
      trigger_error( 'Option type not set: ' . $id , E_USER_ERROR );
    }

    return $args;
  }


  /**
   * Convert pickers to be ordered array
   */
  private function format_color_pickers( $pickers_raw ) {
    $pickers = [];
    foreach( $pickers_raw as $id => $arg ) {

      if( is_array( $arg ) ) {
        $pickers[] = [
          'id' => $id,
          'title' => $arg['title'] ?? $args['label'] ?? 'Default',
          'condition' => $arg['condition'] ?? [],
        ];
      } else {
        $pickers[] = [
          'id' => $id,
          'title' => $arg,
        ];
      }
    }
    
    return $pickers;
  }

  /**
   * Add palette selection
   */
  private function format_color_palettes( $value ) {
    return wp_parse_args( $value, [
      'current_palette' => 'palette-1',
      'palettes' => [ [
        'id' => 'palette-1',
        'color1' => [ 'color' => $value['color1']['color'] ],
        'color2' => [	'color' => $value['color2']['color'] ],
        'color3' => [	'color' => $value['color3']['color'] ],
        'color4' => [	'color' => $value['color4']['color'] ],
        'color5' => [	'color' => $value['color5']['color'] ]
      ] ]
    ] );
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
   * Add a toggle button to show CSS Variables
   */
  private function format_css_desc( $args ) {
    $content = '';
    $css = $args['css'];
    $vars = [];

    switch( $args['type'] ) {
      case 'ct-typography':
        $base_vars = [
          'fontSize',
          'fontFamily',
          'fontStyle',
          'fontWeight',
          'lineHeight',
          'letterSpacing',
          'textDecoration',
          'textTransform',
        ];

        $vars = $this->format_css_desc_prefix( $base_vars, $args['css'] );
        break;

      case 'ct-background':
        $base_vars = [
          'background',
          'backgroundColor',
          'backgroundSize'
        ];

        $vars = $this->format_css_desc_prefix( $base_vars, $args['css'] );
        break;

      default:
        $vars = is_array( $css ) ? array_keys( $css ) : [ $css ];
    }


    // wrap each vars with <code>...</code>
    if( count( $vars ) > 0 ) {
      $content = '<code>' . implode( '</code><code>', $vars ) . '</code>';
    }

    // if has its own selector
    $selector_override = $args['css_selector'] ?? false;
    if( $selector_override ) {
      $content .= "<br> CSS Selector: <code>$selector_override</code>";
    }
  
    return "<details> <summary>CSS</summary>
      $content
    </details>";
  }

  /**
   * Add prefix to all the CSS vars
   */
  function format_css_desc_prefix( $vars, $prefix = '--$' ) {
    $prefix = str_replace( '$', '', $prefix );

    foreach( $vars as &$v ) {
      if( $prefix !== '--' ) {
        $v = ucfirst( $v );
      }

      $v = $prefix . $v;
    }

    return $vars;
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

  
  /**
   * Return array for Title size selection
   */
  private function get_heading_choices() {
    return blocksy_ordered_keys([
      'var(--h1Size)' => __( 'Heading 1' ),
      'var(--h2Size)' => __( 'Heading 2' ),
      'var(--h3Size)' => __( 'Heading 3' ),
      'var(--h4Size)' => __( 'Heading 4' ),
      'var(--h5Size)' => __( 'Heading 5' ),
      'var(--h6Size)' => __( 'Heading 6' ),	
    ]);
  }

  /**
   * Return array for Text size selection
   */
  private function get_text_size_choices() {
    return blocksy_ordered_keys([
      'var(--fontSize)' => __( 'Normal' ),
      'var(--smallFontSize)' => __( 'Small' ),
      'var(--mediumFontSize)' => __( 'Medium' ),
      'var(--largeFontSize)' => __( 'Large' ),
      'var(--hugeFontSize)' => __( 'Huge' ),
      'inherit' => __( 'Inherit' ),
    ]);
  }


  /**
   * Get either "inline" or "block" depending on the type
   */
  private function get_default_design( $type ) {
    switch( $type ) {
      case 'ct-color-picker':
      case 'ct-background':
      case 'ct-select':
      case 'ct-border':
      case 'ct-number':
      case 'ct-text':
        return 'inline';

      case 'ct-color-palettes-picker':
      case 'ct-radio':
      case 'ct-visibility':
      case 'text':
      case 'ct-checkboxes':
        return 'block';

      default:
        return '';
    }
  }

  /**
   * Add a notice containing the CSS selector
   */
  private function add_css_selector_notice( $selector, $options ) {
    return array_merge([
      blocksy_rand_md5() => [
        'type' => 'ct-title',
        'variation' => 'notice',
        'desc' => "<div class='notice'> <p>CSS selector: <code>$selector</code></p> </div>",
      ],
    ], $options );
  }

}