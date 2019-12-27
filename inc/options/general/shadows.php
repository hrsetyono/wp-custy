<?php
$defaults = my_get_default_mods();

/**
 * Shadow options
 */
$options = [ 'shadow_section_options' => [
  'type' => 'ct-options',
  'setting' => [ 'transport' => 'postMessage' ],
  'inner-options' => [
    'shadow0' => [
      'label' => __( 'Shadow 0' ),
      'desc' => '<code>--shadow0</code>',
      'type' => 'ct-box-shadow',
      'setting' => [ 'transport' => 'postMessage' ],
      'value' => $defaults['shadow0']
    ],
    'shadow1' => [
      'label' => __( 'Shadow 1' ),
      'desc' => '<code>--shadow1</code>',
      'type' => 'ct-box-shadow',
      'setting' => [ 'transport' => 'postMessage' ],
      'value' => $defaults['shadow1']
    ],
    'shadow2' => [
      'label' => __( 'Shadow 2' ),
      'desc' => '<code>--shadow2</code>',
      'type' => 'ct-box-shadow',
      'setting' => [ 'transport' => 'postMessage' ],
      'value' => $defaults['shadow2']
    ],
    'shadow3' => [
      'label' => __( 'Shadow 3' ),
      'desc' => '<code>--shadow3</code>',
      'type' => 'ct-box-shadow',
      'setting' => [ 'transport' => 'postMessage' ],
      'value' => $defaults['shadow3']
    ],
    'shadow4' => [
      'label' => __( 'Shadow 4' ),
      'desc' => '<code>--shadow4</code>',
      'type' => 'ct-box-shadow',
      'setting' => [ 'transport' => 'postMessage' ],
      'value' => $defaults['shadow4']
    ],
  ],
] ];