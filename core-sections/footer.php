<?php

$footer = new Blocksy_Customizer_Builder_Footer();
$section = [
  'title' => __( 'Footer' ),
  'container' => [ 'priority' => 4 ],
  'options' => [

    'footer_placements' => [
      'type' => 'ct-footer-builder',
      'setting' => ['transport' => 'postMessage'], // postMessage
      'value' => $footer->get_default_value(),
      'selective_refresh' => [
        // [
        //   'id' => 'footer_placements_1',
        //   'fallback_refresh' => false,
        //   'container_inclusive' => true,
        //   'selector' => '#footer',
        //   'settings' => [ 'footer_placements' ],
        //   'render_callback' => function () {
        //     echo CustyBuilder::render( 'footer', get_theme_mod( 'footer_placements' ) );
        //   }
        // ],
      ]
      // 'selective_refresh' => [
      //   [
      //     'id' => 'footer_placements_1',
      //     'fallback_refresh' => false,
      //     'container_inclusive' => true,
      //     'selector' => '.site-footer',
      //     'settings' => ['footer_placements'],
      //     'render_callback' => function () {
      //       $footer = new Blocksy_Customizer_Builder_Footer();
      //       echo $footer->render();
      //     }
      //   ],

      //   [
      //     'id' => 'footer_placements_item:menu',
      //     'fallback_refresh' => false,
      //     'container_inclusive' => true,
      //     'selector' => '.footer-menu',
      //     'settings' => ['footer_placements'],
      //     'render_callback' => function () {
      //       $header = new Blocksy_Customizer_Builder_Render_Columns();
      //       echo $header->render_single_item('menu');
      //     }
      //   ],
      // ]
    ],
  ]
];