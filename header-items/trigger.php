<?php

$item = [
  'title' => __( 'Trigger' ),
  'devices' => [ 'mobile' ],
  'excluded_from' => [ 'offcanvas' ],
  'css_selector' => '[data-id="trigger"]',
  'options' => [

    'style' => [
      'label' => __( 'Style' ),
      'type' => 'ct-image-picker',
      'attr' => [
        'data-type' => 'background',
        'data-columns' => '3',
        'data-padding' => 'medium',
      ],
      'choices' => [
        'trigger-1' => [
          'src'   => custy_get_svg( 'trigger-1' ),
          'title' => __( 'Type 1' ),
        ],
        'trigger-2' => [
          'src'   => custy_get_svg( 'trigger-2' ),
          'title' => __( 'Type 2' ),
        ],
        'trigger-3' => [
          'src'   => custy_get_svg( 'trigger-3' ),
          'title' => __( 'Type 3' ),
        ],
      ],
    ],

    custy_rand_id() => [ 'divider' => '' ],

    'triggerColor' => [
      'label' => __( 'Trigger Color' ),
      'type'  => 'ct-color-picker',
      'pickers' => [
        'default' => __( 'Default' ),
        'hover' => __( 'Hover' ),
      ],
      'css' => [
        '--triggerColor' => 'default',
        '--triggerColorHover' => 'hover'
      ]
    ],

  ]
];