<?php

$item = [
  'title' => __( 'Copyright' ),
  'css_selector' => '[data-id="copyright"]',
  'options' => [
    
    'copyright_text' => [
      'label' => __( 'Copyright Text' ),
      'desc' => __( 'Available tags: [current-year] and [site-title]' ),
      'type' => 'wp-editor',
      
      'disableRevertButton' => true,
      'quicktags' => false,
      'mediaButtons' => false,
      'tinymce' => [
        'toolbar1' => 'bold,italic,link,undo,redo',
        'toolbar2' => ''
      ],
    ],
  ]
];