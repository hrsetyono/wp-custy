<?php

$menu_options = [
  'menu_id' => [
    'label' => __( 'Select Menu' ),
    'type' => 'ct-select',
    'placeholder' => __( 'Select menu...' ),
    'choices' => blocksy_get_menus_items(),
    'desc' => sprintf(
      __( 'Manage your menus in the <a href="%s" target="_blank">Menus screen</a>.' ),
      admin_url('/nav-menus.php')
    ), 
  ],

  'style' => [
    'label' => __( 'Style' ),
    'type' => 'ct-radio',
    'choices' => [
      'default' => __( 'Default' ),
      'compact' => __( 'Compact' ),
    ],
  ],
  
];


$items = [
  'mobile-menu' => [
    'title' => __( 'Mobile Menu 1' ),
    'devices' => [ 'mobile' ],
    'css_selector' => '[data-id="mobile-menu"]',
    'allowed_in' => [ 'offcanvas' ],
    'options' => $menu_options
  ],
  'mobile-menu2' => [
    'title' => __( 'Mobile Menu 2' ),
    'devices' => [ 'mobile' ],
    'css_selector' => '[data-id="mobile-menu2"]',
    'allowed_in' => [ 'offcanvas' ],
    'options' => $menu_options
  ]
];