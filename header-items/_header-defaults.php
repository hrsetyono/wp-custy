<?php

/**
 * Add default values for Header items
 * 
 * @filter custy_default_values
 */
function _custy_header_default_values( $defaults ) {
  $menu_values = [
    'menu_id' => blocksy_get_default_menu(),
  ];

  $row_values = [
    'rowBackground' => blocksy_background_default_value([
      'backgroundColor' => [
        'default' => [ 'color' => 'var(--textInvert)' ],
      ],
    ]),
    'rowHeight' => [
      'desktop' => '60px',
      'tablet' => '50px',
      'mobile' => '50px',
    ],
    'is_sticky' => 'no',
  ];

  $logo_values = [
    'logo_type' => 'text',

    // Logo text
    'text' => get_option('blogname'),
    // Logo Image
    'image' => [ 'attachment_id' => null, 'url' => null ],
    'has_mobile_image' => 'no',
    'mobile_image' => [ 'attachment_id' => null, 'url' => null ],
    // Logo SVG
    'svg_code' => '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="60" viewBox="0 0 452 389"><defs><clipPath id="b"><rect width="452" height="389"/></clipPath></defs><g id="a" clip-path="url(#b)"><rect width="452" height="389" fill="rgba(255,255,255,0)"/><path d="M0-225,225-612,450-225Zm391-32L327.222-368.035,263.406-257ZM59-257H223.1l84.459-145.268L225-546Zm391,32v0Z" transform="translate(1 613)" fill="#fff"/></g></svg>',

    'has_tagline' => 'no',
    'tagline' => get_option('blogdescription'),
    'tagline_visibility' => [
      'desktop' => true,
      'tablet' => true,
      'mobile' => false,
    ]
  ];

  $mobile_menu_values = [
    'menu_id' => blocksy_get_default_menu(),
    'style' => 'default',
  ];

  $button_values = [
    'text' => __( 'Contact Us' ),
    'link' => '',
    'target' => 'no',
    'has_icon' => 'no',
    'png_icon' => [],
    'svg_icon' => '',
    
    'size' => 'normal',
    'style' => 'outline',
    'buttonBackground' => [
      'default' => [ 'color' => 'var(--main)' ],
      'hover' => [ 'color' => 'var(--mainDark)' ]
    ],
    'buttonColor' => [
      'default' => [ 'color' => 'var(--textInvert)' ],
      'hover' => [ 'color' => 'var(--textInvert)' ],
    ],
  ];

  $search_values = [
    'placeholder' => __( 'Search...' ),
    
    'search_icon' => '<svg width="20" height="20" viewBox="0 0 512 512"><path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"/></svg>',

    'has_submit_button' => 'yes',
    'submit_text' => '<svg width="18" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"/></svg>'

  ];

  $social_values = [
    'links' => [
      [ 'id' => 'location', 'enabled' => true ],
      [ 'id' => 'email', 'enabled' => true ],
      [ 'id' => 'phone', 'enabled' => true ],
    ],
    'color_style' => 'custom',
    'shape_style' => 'icon-only',
    'customColor' => [
      'icon' => [ 'color' => 'var(--textInvert)' ],
      'background' => [ 'color' => 'var(--main)' ]
    ],
    
    'has_label' => 'yes',
    'label_visibility' => [
      'desktop' => true,
      'tablet' => true,
      'mobile' => true
    ],
    'phone_label' => '+123-456-789',
    'location_label' => '',
    'email_label' => '',
  ];


  $defaults = wp_parse_args( [ 'header' => [
    // ROWS
    'top-row' => wp_parse_args( [
      'rowBackground' => blocksy_background_default_value([
        'backgroundColor' => [ 'default' => [ 'color' => 'var(--text)' ] ],
      ]),
      'rowHeight' => [
        'desktop' => '40px',
        'tablet' => '36px',
        'mobile' => '36px',
      ],
    ], $row_values ),
    
    'middle-row' => wp_parse_args([
      'is_sticky' => 'yes'
    ], $row_values ),

    'bottom-row' => $row_values,
    
    // OFF CANVAS
    'offcanvas' => [
      'reveal_from' => 'right',
      'offcanvasBackground' => blocksy_background_default_value([
        'backgroundColor' => [
          'default' => [ 'color' => 'var(--text)' ],
        ],
      ]),
      'items_alignment' => 'left',
      'close_button_style' => 'close-circle',
      'closeButtonColor' => [
        'default' => [ 'color' => 'rgba(255,255,255, .5)' ],
        'hover' => [ 'color' => 'white' ],
      ],
    ],

    // MENU
    'menu' => $menu_values,
    'menu2' => $menu_values,

    // LOGO
    'logo' => $logo_values,

    'button' => $button_values,
    'button2' => $button_values,
    
    'search' => $search_values,
    
    'social' => $social_values,

    'mobile-menu' => $mobile_menu_values,
    'mobile-menu2' => $mobile_menu_values,

    'trigger' => [
      'style' => 'trigger-1',
      'triggerColor' => [
        'default' => [ 'color' => 'var(--text)' ],
        'hover' => [ 'color' => 'var(--main)' ],
      ],
    ],
  
  ] ], $defaults );


  // PLACEMENTS
  $defaults = wp_parse_args( [ 'header_placements' => [
    'current_section' => 'main',
    'sections' => [ [
      'id' => 'main',
      'label' => 'Main Header',
      'mode' => 'placements',
      'items' => [
        [ 'id' => 'menu', 'values' => $defaults['header']['menu'] ],
        [ 'id' => 'logo', 'values' => $defaults['header']['logo'] ],
        [ 'id' => 'social', 'values' => $defaults['header']['social'] ],
        [ 'id' => 'search', 'values' => $defaults['header']['search'] ],
        [ 'id' => 'mobile-menu', 'values' => $defaults['header']['mobile-menu'] ],
        [ 'id' => 'trigger', 'values' => $defaults['header']['trigger'] ],

        [ 'id' => 'top-row', 'values' => $defaults['header']['top-row'] ],
        [ 'id' => 'middle-row', 'values' => $defaults['header']['middle-row'] ],
        [ 'id' => 'bottom-row', 'values' => $defaults['header']['bottom-row'] ],
        [ 'id' => 'offcanvas', 'values' => $defaults['header']['offcanvas'] ],
      ],
      'desktop' => [
        [ 'id' => 'top-row', 'placements' => [
          [ 'id' => 'start', 'items' => ['search'] ],
          [ 'id' => 'middle', 'items' => [] ],
          [ 'id' => 'end', 'items' => [ 'social' ] ],
          [ 'id' => 'start-middle', 'items' => [] ],
          [ 'id' => 'end-middle', 'items' => [] ],
        ] ],
        [ 'id' => 'middle-row', 'placements' => [
          [ 'id' => 'start', 'items' => [ 'logo' ] ],
          [ 'id' => 'middle', 'items' => [] ],
          [ 'id' => 'end', 'items' => [ 'menu' ] ],
          [ 'id' => 'start-middle', 'items' => [] ],
          [ 'id' => 'end-middle', 'items' => [] ],
        ] ],
        [ 'id' => 'bottom-row', 'placements' => [
          [ 'id' => 'start', 'items' => [] ],
          [ 'id' => 'middle', 'items' => [] ],
          [ 'id' => 'end', 'items' => [] ],
          [ 'id' => 'start-middle', 'items' => [] ],
          [ 'id' => 'end-middle', 'items' => [] ],
        ] ],
      ],
      'mobile' => [
        [ 'id' => 'top-row', 'placements' => [
          [ 'id' => 'start', 'items' => [ 'search' ] ],
          [ 'id' => 'middle', 'items' => [] ],
          [ 'id' => 'end', 'items' => [ 'social' ] ],
          [ 'id' => 'start-middle', 'items' => [] ],
          [ 'id' => 'end-middle', 'items' => [] ],
        ] ],
        [ 'id' => 'middle-row', 'placements' => [
          [ 'id' => 'start', 'items' => [ 'logo' ] ],
          [ 'id' => 'middle', 'items' => [] ],
          [ 'id' => 'end', 'items' => [ 'trigger' ] ],
          [ 'id' => 'start-middle', 'items' => [] ],
          [ 'id' => 'end-middle', 'items' => [] ],
        ] ],
        [ 'id' => 'bottom-row', 'placements' => [
          [ 'id' => 'start', 'items' => [] ],
          [ 'id' => 'middle', 'items' => [] ],
          [ 'id' => 'end', 'items' => [] ],
          [ 'id' => 'start-middle', 'items' => [] ],
          [ 'id' => 'end-middle', 'items' => [] ],
        ] ],
        [ 'id' => 'offcanvas', 'placements' => [
          [ 'id' => 'start', 'items' => [ 'mobile-menu', 'button' ] ],
        ] ],
      ],
    ] ], // sections
  ] ], $defaults );


  return $defaults;
}