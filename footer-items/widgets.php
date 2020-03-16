<?php

$items = [];

for( $i = 1; $i <= 4; $i++ ) {
  $items[ "widget-area-$i" ] = [
    'title' => __( 'Widget Area ' ) . $i,
    'css_selector' => "[data-id='widget{$i}']",
    'options' => [

      custy_rand_id() => [ 'tab' => __( 'Widgets' ), 'options' => [
        'widget' => [
          'type' => 'ct-widget-area',
          'sidebarId' => "footer-widget-$i"
        ],
      ] ],

      custy_rand_id() => [ 'tab' => __( 'Design' ), 'options' => [
        'widgetBackground' => [
          'label' => __( 'Widget Background' ),
          'type'  => 'ct-color-picker',
          'pickers' => [
            'default' => __( 'Default' ),
          ],
          'css' => [
            '--widgetBackground' => 'default',
          ]
        ],

        custy_rand_id() => [ 'divider' => '' ],

        'titleSize' => [
          'label' => __( 'Title Size' ),
          'type' => 'ct-select/heading',
          'css' => '--titleSize'
        ],

        'titleColor' => [
          'label' => __( 'Title Color' ),
          'type'  => 'ct-color-picker',
          'pickers' => [
            'default' => __( 'Default' ),
          ],
          'css' => [
            '--titleColor' => 'default',
          ]
        ],

        custy_rand_id() => [ 'divider' => '' ],

        'textSize' => [
          'label' => __( 'Text Size' ),
          'type' => 'ct-select/text',
          'css' => '--textSize'
        ],

        'textColor' => [
          'label' => __( 'Text Color' ),
          'type'  => 'ct-color-picker',
          'pickers' => [
            'default' => __( 'Default' ),
            'hover' => __( 'Hover' ),
          ],
          'css' => [
            '--textColor' => 'default',
            '--textColorHover' => 'hover'
          ]
        ],

      ] ],
      
    ]
  ];
}

