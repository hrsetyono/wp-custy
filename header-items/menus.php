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
];


$items = [
  'menu' => [
    'title' => __( 'Menu 1' ),
    'devices' => [ 'desktop' ],
    'css_selector' => '[data-header="menu"]',
    'options' => apply_filters( 'custy_header_menu_options', $menu_options )
  ],
  'menu2' => [
    'title' => __( 'Menu 2' ),
    'devices' => [ 'desktop' ],
    'css_selector' => '[data-header="menu2"]',
    'options' => apply_filters( 'custy_header_menu2_options', $menu_options )
  ],
];