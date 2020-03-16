<?php

$button_options = [
  custy_rand_id() => [ 'tab' => __( 'Content' ), 'options' => [ 
    'text' => [
      'label' => __( 'Text' ),
      'type' => 'text',
      'disableRevertButton' => true,
    ],
    'link' => [
      'label' => __( 'Link' ),
      'type' => 'text',
      'disableRevertButton' => true,
      'attr' => [ 'placeholder' => 'https://yoursite.com' ],
      'design' => 'block'
    ],
    'target' => [
      'label' => __( 'Open in a new tab?' ),
      'type'  => 'ct-switch',
    ],

    custy_rand_id() => [ 'type' => 'ct-divider' ],

    'has_icon' => [
      'label' => __( 'Has Icon?' ),
      'type' => 'ct-radio',
      'choices' => [
        'no' => __( 'No' ),
        'png' => __( 'PNG' ),
        'svg' => __( 'SVG' ),
      ],
    ],


    custy_rand_id() => [ 'condition' => [ 'has_icon' => 'png' ], 'options' => [
      'png_icon' => [
        'label' => __( 'Icon' ),
        'desc' => __( 'PNG file recommended.' ),
        'type' => 'ct-image-uploader',
        'disableRevertButton' => true,
        'attr' => [ 'data-height' => 'small' ],
      ],
    ] ],

    custy_rand_id() => [ 'condition' => [ 'has_icon' => 'svg' ], 'options' => [
      'svg_icon' => [
        'label' => __( 'SVG' ),
        'desc' => __( 'Paste in raw SVG code here' ),
        'type' => 'textarea',
        'disableRevertButton' => true,
        'attr' => [ 'placeholder' => '<svg> ... </svg>' ]
      ],
    ] ],

  ] ],


  custy_rand_id() => [ 'tab' => __( 'Design' ), 'options' => [ 

    'size' => [
      'label' => __( 'Size' ),
      'type' => 'ct-radio',
      'choices' => [
        'small' => __( 'Small' ),
        'normal' => __( 'Normal' ),
        'large' => __( 'Large' ),
      ],
    ],

    custy_rand_id() => [ 'divider' => '' ],

    'style' => [
      'label' => __( 'Style' ),
      'type' => 'ct-radio',
      'attr' => [ 'data-type' => 'background' ],
      'choices' => [
        'solid' => __( 'Solid' ),
        'outline' => __( 'Outline' ),
        'transparent' => __( 'Transparent' ),
      ],
    ],
    
    'buttonBackground' => [
      'label' => __( 'Button Background' ),
      'type'  => 'ct-color-picker',
      'pickers' => [
        'default' => [
          'title' => __( 'Default' ),
          'condition' => [ 'style' => 'solid' ]
        ],
        'hover' => __( 'Hover' ),
      ],
      'css' => [
        '--buttonBg' => 'default',
        '--buttonBgHover' => 'hover',
      ],
    ],

    'buttonColor' => [
      'label' => __( 'Button Color' ),
      'type'  => 'ct-color-picker',
      'pickers' => [
        'default' => __( 'Default' ),
        'hover' => __( 'Hover' ),
      ],
      'css' => [
        '--buttonColor' => 'default',
        '--buttonColorHover' => 'hover',
      ],
    ],
  ] ]

];

$items = [
  'button' => [
    'title' => __( 'Button 1' ),
    'css_selector' => '[data-id="button"]',
    'options' => $button_options,
  ],
  'button2' => [
    'title' => __( 'Button 2' ),
    'css_selector' => '[data-id="button2"]',
    'options' => $button_options,
  ],
];