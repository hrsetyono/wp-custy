<?php


// 
$item = [
  'title' => __( 'Logo' ),
  'options' => [

    'logo_type' => [
      'label' => __( 'Logo Type' ),
      'type' => 'ct-radio',
      'view' => 'text',
      'choices' => [
        'text' => __( 'Text' ),
        'image' => __( 'Image' ),
        'svg' => __( 'SVG' )
      ],
    ],

    // TEXT LOGO
    custy_rand_id() => [ 'condition' => [ 'logo_type' => 'text' ], 'options' => [

      'text' => [
        'label' => __( 'Text' ),
        'type' => 'text',
      ],

    ] ],

    // SVG LOGO
    custy_rand_id() => [ 'condition' => [ 'logo_type' => 'svg' ], 'options' => [

      'svg_code' => [
        'label' => __( 'SVG Code' ),
        'desc' => __( 'Paste in raw SVG Code here' ),
        'type' => 'textarea',
        'disableRevertButton' => true,
        'attr' => [ 'placeholder' => '<svg> ... </svg>' ]
      ],

    ] ],

    // IMAGE LOGO
    custy_rand_id() => [ 'condition' => [ 'logo_type' => 'image' ], 'options' => [

      'image' => [
        'label' => __( 'Image' ),
        'type' => 'ct-image-uploader',
        'disableRevertButton' => true,
        'attr' => [ 'data-height' => 'small' ],
      ],

      'has_mobile_image' => [
        'label' => __( 'Has Mobile Image?' ),
        'type' => 'ct-switch',
      ],

      custy_rand_id() => [ 'condition' => [ 'has_mobile_image' => 'yes' ], 'options' => [

        'mobile_image' => [
          'label' => __( 'Mobile Image' ),
          'type' => 'ct-image-uploader',
          // 'switchDeviceOnChange' => 'mobile',
          'disableRevertButton' => true,
          'attr' => [ 'data-height' => 'small' ],
        ],
        

      ] ],

    ] ],

    custy_rand_id() => [ 'divider' => '' ],

    
    // TAGLINE
    'has_tagline' => [
      'label' => __( 'Has Tagline?' ),
      'type' => 'ct-switch',
    ],

    custy_rand_id() => [ 'condition' => [ 'has_tagline' => 'yes' ], 'options' => [

      'tagline' => [
        'label' => __( 'Tagline' ),
        'type' => 'text',
      ],

      'tagline_visibility' => [
        'label' => __( 'Visibility' ),
        'type' => 'ct-visibility',
      ],

    ] ],


    
  ]
  
];