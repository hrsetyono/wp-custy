<?php

$section = [
  'title' => __( 'General' ),
  'container' => [ 'priority' => 0 ],
  'css_selector' => ':root',
  'options' => [
  
    'colorPalette' => [
      'label' => false,
      'type'  => 'ct-color-palettes-picker',
      'design' => 'block',
      'css' => [
        '--main' => 'color1',
        '--mainDark' => 'color2',
        '--mainLight' => 'color3',
        '--sub' => 'color4',
        '--subLight' => 'color5',
      ],
    ],
    
    'textColor' => [
      'label' => __( 'TEXT' ),
      'type'  => 'ct-color-picker',
      'design' => 'inline no-palette',
      'pickers' => [
        'default' => __( 'Text' ),
        'dim' => __( 'Text Dim' ),
        'invert' => __( 'Text Invert' ),
      ],
      'css' => [
        '--text' => 'default',
        '--textDim' => 'dim',
        '--textInvert' => 'invert',
      ],
    ],

    'extraColor' => [
      'label' => __( 'Extra Color' ),
      'desc' => __( 'Additional colors for Editor' ),
      'type'  => 'ct-color-picker',
      'pickers' => [
        'extra1' => __( 'Extra 1' ),
        'extraLight1' => __( 'Extra Light 1' ),
        'extra2' => __( 'Extra 2' ),
        'extraLight2' => __( 'Extra Light 2' ),
      ],
      'css' => [
        '--extra1' => 'extra1',
        '--extraLight1' => 'extraLight1',
        '--extra2' => 'extra2',
        '--extraLight2' => 'extraLight2',
      ],
    ],

    custy_rand_id() => [ 'divider' => '' ],

    'siteBackground' => [
      'label' => __( 'Site Background' ),
      'type' => 'ct-background',
      'css' => '--site$',
    ],

  ],
];