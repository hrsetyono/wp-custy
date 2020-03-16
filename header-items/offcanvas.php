<?php

$item = [
  'title' => __( 'Offcanvas' ),
  'is_primary' => true,
  'css_selector' => '[data-id="offcanvas"]',
  'options' => [

    
    'offcanvasBackground' => [
      'label' => __( 'Offcanvas Background' ),
      'type'  => 'ct-background',
      'css' => '--offcanvas$'
    ],

    custy_rand_id() => [ 'divider' => '' ],

    'reveal_from' => [
      'label' => __( 'Reveal From' ),
      'type' => 'ct-radio',
      'choices' => [
        'left' => __( 'Left' ),
        'above' => __( 'Above' ),
        'right' => __( 'Right' ),
      ],
    ],

    'items_alignment' => [
      'label' => __( 'Items Alignment' ),
      'type' => 'ct-radio/alignment',
    ],

    custy_rand_id() => [ 'divider' => '' ],
    
    'close_button_style' => [
      'label' => __( 'Close Button Style' ),
      'type' => 'ct-image-picker',
      'attr' => [
        'data-type' => 'background',
        'data-columns' => '3',
        'data-padding' => 'medium',
      ],
      'choices' => [
        'close' => [
          'src'   => custy_get_svg( 'close' ),
          'title' => __( 'Standard' ),
        ],
        'close-circle' => [
          'src'   => custy_get_svg( 'close-circle' ),
          'title' => __( 'Circle' ),
        ],
        'close-square' => [
          'src'   => custy_get_svg( 'close-square' ),
          'title' => __( 'Square' ),
        ],
      ],
    ],

    'closeButtonColor' => [
      'label' => __( 'Close Button Color' ),
      'type'  => 'ct-color-picker',
      'pickers' => [
        'default' => __( 'Default' ),
        'hover' => __( 'Hover' ),
      ],
      'css' => [
        '--closeButtonColor' => 'default',
        '--closeButtonColorHover' => 'hover'
      ]
    ],

  ],
];