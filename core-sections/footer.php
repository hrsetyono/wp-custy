<?php

$footer = new Blocksy_Customizer_Builder_Footer();
$section = [
  'title' => __( 'Footer' ),
  'container' => [ 'priority' => 6 ],
  'options' => [

    'footer_placements' => [
      'type' => 'ct-footer-builder',
      'setting' => ['transport' => 'postMessage'],
      'value' => $footer->get_default_value(),
    ],
  ]
];