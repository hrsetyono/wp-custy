<?php

$header = new Blocksy_Customizer_Builder_Header();
$section = [
  'title' => __( 'Header' ),
  'container' => [ 'priority' => 3 ],
  'options' => [

    'header_placements' => [
      'type' => 'ct-header-builder',
      'setting' => ['transport' => 'postMessage'],
      'value' => $header->get_default_value(),
      'selective_refresh' => [
        // [
        //   'id' => 'header_placements_desktop',
        //   'fallback_refresh' => false,
        //   'container_inclusive' => true,
        //   'selector' => '.site-header[data-visible="desktop"]',
        //   'settings' => [ 'header_placements' ],
        //   'render_callback' => function() {
        //     echo CustyBuilder::render( 'header', get_theme_mod( 'header_placements' ) );
        //   }
        // ],
        // [
        //   'id' => 'header_placements_mobile',
        //   'fallback_refresh' => false,
        //   'container_inclusive' => true,
        //   'selector' => '.site-header[data-visible="mobile"]',
        //   'settings' => [ 'header_placements' ],
        //   'render_callback' => function() {
        //     echo CustyBuilder::render( 'header', get_theme_mod( 'header_placements' ), '_header-mobile.twig' );
        //   }
        // ],
      ],
    ],
  ]
];