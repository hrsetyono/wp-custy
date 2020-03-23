<?php

$header = new Blocksy_Customizer_Builder_Header();
$section = [
  'title' => __( 'Header' ),
  'container' => [ 'priority' => 4 ],
  'options' => [

    'header_placements' => [
      'type' => 'ct-header-builder',
      'setting' => ['transport' => 'postMessage'],
      'value' => $header->get_default_value(),
    ],
  ]
];