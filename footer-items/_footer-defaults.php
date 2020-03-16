<?php

/**
 * Add default values for Footer items
 * 
 * @filter custy_default_values
 */
function _custy_footer_default_values( $defaults ) {

  $row_values = [
    'rowBackground' => blocksy_background_default_value([
      'background_type' => 'color',
      'backgroundColor' => [
        'default' => [ 'color' => 'var(--text)' ],
      ],
    ]),
    //
    'items_per_row' => '2',
    '2_columns_layout' => [
      'desktop' => 'repeat(2, 1fr)',
      'tablet' => 'stacked',
    ],
    '3_columns_layout' => [
      'desktop' => 'repeat(3, 1fr)',
      'tablet' => 'stacked',
    ],
    '4_columns_layout' => [
      'desktop' => 'repeat(4, 1fr)',
      'tablet' => 'stacked',
    ],
    //
    'visibility' => [
      'desktop' => true,
      'tablet' => true,
      'mobile' => true
    ],
  ];

  $menu_values = [
    'menu_id' => blocksy_get_default_menu(),
    'style' => 'only-parent',
    'alignment' => 'left',
  ];

  $widget_values = [
    'widget' => 'footer-widget-1',
    'widgetBackground' => [
      'default' => [ 'color' => 'CT_CSS_SKIP_RULE' ],
    ],
    'titleSize' => 'var(--h5Size)',
    'titleColor' => [
      'default' => [ 'color' => 'var(--textInvert)' ],
    ],

    'textSize' => 'var(--smallFontSize)',
    'textColor' => [
      'default' => [ 'color' => 'var(--textInvert)' ],
      'hover' => [ 'color' => 'var(--mainLight)' ]
    ],
  ];

  $copyright_values = [
    'copyright_text' => __( 'Copyright &copy; [current-year] - [site-title]' ),
  ];

  $social_values = [
    'links' => [
      [ 'id' => 'facebook', 'enabled' => true ],
      [ 'id' => 'twitter', 'enabled' => true ],
      [ 'id' => 'instagram', 'enabled' => true ],
    ],
    'alignment' => 'right',
    'color_style' => 'official',
    'shape_style' => 'circle',

    'customColor' => [
      'icon' => [ 'color' => 'var(--textInvert)' ],
      'background' => [ 'color' => 'var(--main)' ]
    ],
    'has_label' => 'no',
    'label_visibility' => [
      'desktop' => true,
      'tablet' => false,
      'mobile' => false
    ],
  ];

  
  $defaults = wp_parse_args( [ 'footer' => [
    // Rows
    'top-row' => wp_parse_args( [
      'items_per_row' => 2,
      '2_columns_layout' => [
        'desktop' => '2fr 1fr',
        'tablet' => 'stacked',
      ],
    ], $row_values ),
    
    'middle-row' => wp_parse_args( [
      'items_per_row' => 3,
    ], $row_values ),
    
    'bottom-row' => wp_parse_args( [
      'items_per_row' => 1,
    ], $row_values ),
    
    // Widgets
    'widget-area-1' => $widget_values,
  
    'widget-area-2' => wp_parse_args( [
      'widget' => 'footer-widget-2',
    ], $widget_values),
    
    'widget-area-3' => wp_parse_args( [
      'widget' => 'footer-widget-3',
    ], $widget_values),

    'widget-area-4' => wp_parse_args( [
      'widget' => 'footer-widget-4',
    ], $widget_values),

    // Other
    'menu' => $menu_values,
    'copyright' => $copyright_values,
    'social' => $social_values
  
  ] ], $defaults );


  // FOOTER PLACEMENTS
  $defaults = wp_parse_args([ 'footer_placements' => [
    'current_section' => 'main',
    'sections' => [ [
      'id' => 'main',
      'label' => __( 'Main Footer' ),
      'mode' => 'columns',
      'settings' => [],
      'items' => [
        [ 'id' => 'menu', 'values' => $defaults['footer']['menu'] ],
        [ 'id' => 'social', 'values' => $defaults['footer']['social'] ],
        [ 'id' => 'copyright', 'values' => $defaults['footer']['copyright'] ],
        [ 'id' => 'widget-area-1', 'values' => $defaults['footer']['widget-area-1'] ],
        [ 'id' => 'widget-area-2', 'values' => $defaults['footer']['widget-area-2'] ],
        [ 'id' => 'widget-area-3', 'values' => $defaults['footer']['widget-area-3'] ],
        
        [ 'id' => 'top-row', 'values' => $defaults['footer']['top-row'] ],
        [ 'id' => 'middle-row', 'values' => $defaults['footer']['middle-row'] ],
        [ 'id' => 'bottom-row', 'values' => $defaults['footer']['bottom-row'] ],
      ],
      'rows' => [
        [ 'id' => 'top-row', 'columns' => [
          [ 'menu' ],
          [ 'social' ]
        ] ],
        [ 'id' => 'middle-row', 'columns' => [
          [ 'widget-area-1' ],
          [ 'widget-area-2' ],
          [ 'widget-area-3' ],
        ] ],
        [ 'id' => 'bottom-row', 'columns' => [
          [ 'copyright' ]
        ] ],
      ],
    ] ],
  ] ], $defaults );

  return $defaults;
}