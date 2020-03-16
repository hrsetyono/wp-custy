<?php
 
$item = [
  'title' => __( 'Search' ),
  'css_selector' => '[data-id="search"]',
  'options' => [

    'search_icon' => [
      'label' => __( 'Search Icon' ),
      'desc' => __( 'Paste in SVG code here' ),
      'type' => 'textarea',
    ],

    'placeholder' => [
      'label' => __( 'Placeholder Text' ),
      'type' => 'text',
    ],

    custy_rand_id() => [ 'divider' => '' ],

    'has_submit_button' => [
      'label' => __( 'Has Submit Button?' ),
      'type' => 'ct-switch',
    ],

    custy_rand_id() => [ 'condition' => [ 'has_submit_button' => 'yes' ], 'options' => [

      'submit_text' => [
        'label' => __( 'Submit Text' ),
        'desc' => __( 'Can be a simple text or SVG Icon' ),
        'type' => 'textarea',
      ],

    ] ],
  ]
];
