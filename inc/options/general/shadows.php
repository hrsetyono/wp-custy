<?php
/**
 * Shadow options
 */

$tmf = new ThemeMods_Formatter_Admin();

$options = $tmf->format( 'shadow_section_options', [
  'shadow0' => [
    'label' => __( 'Shadow 0' ),
    'desc' => my_css_desc([ '--shadow0' ]),
    'type' => 'ct-box-shadow',
  ],
  'shadow1' => [
    'label' => __( 'Shadow 1' ),
    'desc' => my_css_desc([ '--shadow1' ]),
    'type' => 'ct-box-shadow',
  ],
  'shadow2' => [
    'label' => __( 'Shadow 2' ),
    'desc' => my_css_desc([ '--shadow2' ]),
    'type' => 'ct-box-shadow',
  ],
  'shadow3' => [
    'label' => __( 'Shadow 3' ),
    'desc' => my_css_desc([ '--shadow3' ]),
    'type' => 'ct-box-shadow',
  ],
  'shadow4' => [
    'label' => __( 'Shadow 4' ),
    'desc' => my_css_desc([ '--shadow4' ]),
    'type' => 'ct-box-shadow',
  ],
] );