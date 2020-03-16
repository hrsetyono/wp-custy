<?php

$tablet_layout_choices = [
  'stacked' => [
    'src' => custy_get_svg( 'stacked' ),
    'title' => __( 'Stacked' ),
  ],
  'halved' => [
    'src' => custy_get_svg( '1-1' ),
    'title' => __( 'Halved' ),
  ]
];

$row_options = [
  'rowBackground' => [
    'label' => __( 'Row Background' ),
    'type'  => 'ct-background',
    'css' => '--row$',
  ],

  custy_rand_id() => [ 'divider' => '' ],

  // @todo: for unknown reason, this option is not saved to database. So you need to count() the items to get items_per_row
  'items_per_row' => [
    'label' => __( 'Items per Row' ),
    'type' => 'ct-radio',
    'disableRevertButton' => true,
    'choices' => [
      '1' => 1,
      '2' => 2,
      '3' => 3,
      '4' => 4,
    ],
  ],

  custy_rand_id() => [ 'condition' => [ 'items_per_row' => '2' ], 'options' => [

    '2_columns_layout' => [
      'label' => __( 'Columns Layout' ),
      'type' => 'ct-image-picker',
      'attr' => [
        'data-type' => 'background',
        'data-columns' => '2',
      ],
      'responsive' => [ 'mobile' => false ],
      'disableRevertButton' => true,
      'disabledDeviceMessage' => __( 'All columns on mobile are stacked and have 100% width.' ),
      'choices' => [
        'repeat(2, 1fr)' => [
          'src' => custy_get_svg( '1-1' ),
        ],
        '2fr 1fr' => [
          'src' => custy_get_svg( '2-1' ),
        ],
        '1fr 2fr' => [
          'src' => custy_get_svg( '1-2' ),
        ],
        '3fr 1fr' => [
          'src' => custy_get_svg( '3-1' ),
        ],
        '1fr 3fr' => [
          'src' => custy_get_svg( '1-3' ),
        ],
      ],

      'tabletChoices' => $tablet_layout_choices,
      'mobileChoices' => [],
    ] ],
  ],

  custy_rand_id() => [ 'condition' => [ 'items_per_row' => '3' ], 'options' => [

    '3_columns_layout' => [
      'label' => __( 'Columns Layout' ),
      'type' => 'ct-image-picker',
      'attr' => [
        'data-type' => 'background',
        'data-columns' => '2',
      ],
      'responsive' => [ 'mobile' => false ],
      'disableRevertButton' => true,
      'disabledDeviceMessage' => __( 'All columns on mobile are stacked and have 100% width.' ),
      'choices' => [
        'repeat(3, 1fr)' => [
          'src' => custy_get_svg( '1-1-1' ),
        ],
        '1fr 2fr 1fr' => [
          'src' => custy_get_svg( '1-2-1' ),
        ],
        '2fr 1fr 1fr' => [
          'src' => custy_get_svg( '2-1-1' ),
        ],
        '1fr 1fr 2fr' => [
          'src' => custy_get_svg( '1-1-2' ),
        ],
      ],
      'tabletChoices' => $tablet_layout_choices,
      'mobileChoices' => [],
    ] ],
  ],

  custy_rand_id() => [ 'condition' => [ 'items_per_row' => '4' ], 'options' => [

    '4_columns_layout' => [
      'label' => __( 'Columns Layout' ),
      'type' => 'ct-image-picker',
      'attr' => [
        'data-type' => 'background',
        'data-columns' => '2',
      ],
      'responsive' => [
        'mobile' => false
      ],
      'divider' => 'top',
      'disableRevertButton' => true,
      'disabledDeviceMessage' => __( 'All columns on mobile are stacked and have 100% width.' ),
      'choices' => [
        'repeat(4, 1fr)' => [
          'src'   => custy_get_svg( '1-1-1-1' ),
        ],

        '2fr 1fr 1fr 1fr' => [
          'src'   => custy_get_svg( '2-1-1-1' ),
        ],

        '1fr 1fr 1fr 2fr' => [
          'src'   => custy_get_svg( '1-1-1-2' ),
        ],
      ],

      'tabletChoices' => $tablet_layout_choices,
      'mobileChoices' => [],
    ] ],
  ],

  
  custy_rand_id() => [ 'divider' => '' ],
  
  'visibility' => [
    'label' => __( 'Visibility' ),
    'type' => 'ct-visibility',
  ],
];

$items = [
  'top-row' => [
    'title' => __( 'Top Row' ),
    'is_primary' => true,
    'css_selector' => '[data-id="footer-top-row"]',
    'options' => $row_options,
  ],
  'middle-row' => [
    'title' => __( 'Middle Row' ),
    'is_primary' => true,
    'css_selector' => '[data-id="footer-middle-row"]',
    'options' => $row_options,
  ],
  'bottom-row' => [
    'title' => __( 'Bottom Row' ),
    'is_primary' => true,
    'css_selector' => '[data-id="footer-bottom-row"]',
    'options' => $row_options,
  ],
];