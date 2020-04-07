<?php

$items = [];
$rows = [ 'top', 'middle', 'bottom' ];

foreach( $rows as $row ) {
  $items[ "{$row}-row" ] = [
    'title' => ucfirst( $row ) . ' Row',
    'is_primary' => true,
    'css_selector' => "[data-header=\"{$row}-row\"]",
    'options' => [
      'rowBackground' => [
        'label' => __( 'Row Background' ),
        'type'  => 'ct-background',
        'css' => '--row$',
      ],
    
      custy_rand_id() => [ 'divider' => '' ],

      'style' => [
        'label' => __( 'Style' ),
        'type' => 'ct-radio',
        'choices' => [
          'auto-height' => __( 'Auto Height' ),
          'fixed-height' => __( 'Fixed Height' ),
          'sticky' => __( 'Sticky' ),
        ], 
      ],
      
      custy_rand_id() => [ 'condition' => [ 'style' => 'fixed-height|sticky' ], 'options' => [
        'rowHeight' => [
          'label' => __( 'Row Height' ),
          'type' => 'ct-slider',
          'responsive' => true,
          'units' => [
            'px' => [ 'min' => 0, 'max' => 120 ],
          ],
          'css' => "--{$row}RowHeight",
          'css_selector' => ':root'
        ],
      ] ],

      custy_rand_id() => [ 'divider' => '' ],

      'width_style' => [
        'label' => __( 'Width Style' ),
        'type' => 'ct-radio',
        'choices' => [
          'full-width' => __( 'Full Width' ),
          'centered' => __( 'Centered' ),
        ], 
      ],
      
    ],
  ];
}