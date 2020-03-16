<?php

$items = [];
$rows = [ 'top', 'middle', 'bottom' ];

foreach( $rows as $row ) {
  $items[ "{$row}-row" ] = [
    'title' => ucfirst( $row ) . ' Row',
    'is_primary' => true,
    'options' => [
      'rowBackground' => [
        'label' => __( 'Row Background' ),
        'type'  => 'ct-background',
        'css' => '--row$',
      ],
    
      custy_rand_id() => [ 'divider' => '' ],
    
      'rowHeight' => [
        'label' => __( 'Row Height' ),
        'type' => 'ct-slider',
        'responsive' => true,
        'units' => [
          'px' => [ 'min' => 32, 'max' => 80 ],
        ],
        'css' => "--{$row}RowHeight",
        'css_selector' => ':root'
      ],
    
      custy_rand_id() => [ 'divider' => '' ],
    
      'is_sticky' => [
        'label' => __( 'Is Sticky?' ),
        'type' => 'ct-switch',
      ]
    ],
    'css_selector' => "[data-id=\"header-{$row}-row\"]",
  ];
}