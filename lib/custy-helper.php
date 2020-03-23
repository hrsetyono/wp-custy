<?php

/**
 * Get random ID for options like Title / Divider / Condition / Tab
 * 
 * @return string
 */
function custy_rand_id() {
  return md5( time() . '-' . uniqid( wp_rand(), true ) . '-' . wp_rand() );
}


/**
 * Format array for Gutenberg's palette theme_suport. Also output CSS classes at HEAD.
 * 
 * @return array - Formatted colors array suitable for theme_support.
 */
function _custy_color_palette( $raw_colors ) {
  // parse raw colors
  $colors = [];
  foreach( $raw_colors as $name => $value ) {
    $slug = _H::to_slug( $name, '-' );
    
    // if color name is 'text' (which will clash with gutenberg class)
    if( $slug == 'text' ) {
      $slug = 'text-base';
    }
    
    $colors[ $name ] = [
      'color' => $value,
      'slug' => $slug
    ];
  }

  // format styles
  $styles = '';
  foreach( $colors as $name => $value ) {
    $slug = $value['slug'];
    $color = $value['color'];

    // if value is a CSS var
    if( strpos( $color, 'var' ) > -1 ) {
      $styles .= ".has-{$slug}-background-color { --bgColor: {$color}; --bgColorRGB: {$color}RGB }";
      $styles .= ".has-{$slug}-color { --textColor: {$color}; --textColorRGB: {$color}RGB }";
    }
    // else, it's a normal CSS
    else {
      $styles .= ".has-{$slug}-background-color { background-color: {$color}; }";
      $styles .= ".has-{$slug}-color { color: {$color}; }";
    }
  }

  // output the style in head
  add_action( 'wp_head', function() use ( $styles ) {
    echo "<style> $styles </style>";
  } );

  // format the array
  $parsed_colors = [];
  foreach( $colors as $name => $value ) {

    $parsed_colors[] = [
      'name' => $name,
      'slug' => $value['slug'],
      'color' => $value['color']
    ];
  }

  return $parsed_colors;
}


/**
 * Combine all variables from a directory
 */
function custy_combine_vars_from_dir( $dir, $single_var = 'section', $multi_var = 'sections' ) {
  $all = [];
  $files = glob( "$dir/*.php" );

  // Loop all files
  foreach( $files as $f ) {
    $item = null; $items = null; // reset
    $file_name = basename( $f, '.php' );
    
    // SKIP if first letter is underscore
    if( preg_match( '/^_/', $file_name, $matches ) ) { continue; }

    // Get variable $item or $items from file
    require $f;

    if( isset( $$single_var ) ) {
      $all[ $file_name ] = $$single_var;
    }
    elseif( isset( $$multi_var ) ) {
      $all = array_merge( $all, $$multi_var );
    }
  }

  return $all;
}



/**
 * Apply default value if missing from args
 */
function custy_parse_args( &$args, $defaults ) {
	$args = (array) $args;
	$defaults = (array) $defaults;
  $result = $defaults;
  
	foreach ( $args as $k => &$v ) {
		if ( is_array( $v ) && isset( $result[ $k ] ) ) {
			$result[ $k ] = custy_parse_args( $v, $result[ $k ] );
		} else {
			$result[ $k ] = $v;
		}
  }
  
	return $result;
}


/**
 * Get list for Social Links in Header/Footer
 * 
 * @param $id (string / optional) - The social key. If empty, will return all
 * @return (array)
 */
function custy_get_social_list( $id = null ) {
  $list = apply_filters( 'custy_social_list', [
    'facebook' => [
      'label' => __( 'Facebook' ),
      'color' => '#1977f2',
      'placeholder' => 'https://www.facebook.com/your-page',
      'svg' => custy_get_svg( 'facebook' ),
		],
		'twitter' => [
      'label' => __( 'Twitter' ),
      'color' => '#21a1f3',
      'placeholder' => 'https://twitter.com/your-username',
      'svg' => custy_get_svg( 'twitter' ),
		],
		'instagram' => [
      'label' => __( 'Instagram' ),
      'color' => '#f00075',
      'placeholder' => 'https://instagram.com/your-username',
      'svg' => custy_get_svg( 'instagram' ),
    ],
    'whatsapp' => [
      'label' => __( 'WhatsApp' ),
      'color' => '#25d366',
      'placeholder' => 'https://wa.me/6281234567890',
      'svg' => custy_get_svg( 'whatsapp' ),
    ],

    'phone' => [
      'label' => __( 'Phone' ),
      'color' => 'var(--main)',
      'placeholder' => 'tel:+12-3456-789',
      'svg' => custy_get_svg( 'phone' ),
    ],

    'email' => [
      'label' => __( 'Email' ),
      'color' => 'var(--main)',
      'placeholder' => 'mailto:yourname@gmail.com',
      'svg' => custy_get_svg( 'email' ),
    ],

    'location' => [
      'label' => __( 'Location' ),
      'color' => 'var(--main)',
      'placeholder' => 'https://goo.gl/maps/abcdefghij',
      'svg' => custy_get_svg( 'location' ),
    ],

		'linkedin' => [
      'label' => __( 'LinkedIn' ),
      'color' => '#0577b5',
      'placeholder' => 'https://www.linkedin.com/in/your-username',
      'svg' => custy_get_svg( 'linkedin' ),
    ],
    'pinterest' => [
      'label' => __( 'Pinterest' ),
      'color' => '#e60122',
      'placeholder' => 'https://pinterest.com/your-username',
      'svg' => custy_get_svg( 'pinterest' ),
		],
    'skype' => [
      'label' => __( 'Skype' ),
      'color' => '#0478d7',
      'placeholder' => 'skype:your-username?chat',
      'svg' => custy_get_svg( 'skype' ),
    ],
		// 'telegram' => [
    //   'label' => __( 'Telegram' ),
    //   'color' => '#08c',
    //   'placeholder' => 'https://t.me/your-username',
    //   'svg' => custy_get_svg( 'telegram' ),
		// ],
		// 'wechat' => [
    //   'label' => __( 'WeChat' ),
    //   'color' => '#7bb32e',
    //   'placeholder' => 'weixin://dl/chat?your-username',
    //   'svg' => custy_get_svg( 'wechat' ),
    // ],
    'youtube' => [
      'label' => __( 'YouTube' ),
      'color' => '#ff0100',
      'placeholder' => 'https://www.youtube.com/channel/your-channel',
      'svg' => custy_get_svg( 'youtube' ),
		],
  ] );

  return isset( $id ) ? $list[ $id ] : $list;
}


/**
 * Get the options for Social links in Header / Footer builder
 */
function _custy_get_social_options( $type = 'header' ) {
  $list = custy_get_social_list();

  // Parse each item into Social Link layer
  $social_links = [];
  foreach( $list as $id => $args ) {
    $social_links[ $id ] = [
      'label' => $args['label'],
      'options' => [

        'link' => [
          'label' => __( 'URL' ),
          'type' => 'text',
          'attr' => [ 'placeholder' => $args['placeholder'] ],
          'value' => '',
        ],

        'label' => [
          'label' => __( 'Label' ),
          'type' => 'text',
          'design' => 'inline',
          'value' => $args['label'],
        ],

      ]
    ];
  }

  return [
    'links' => [
      'label' => __( 'Links' ),
      'type' => 'ct-layers',
      'manageable' => true,
      'desc' => __( 'Fill in the links below' ),
      'settings' => $social_links,
    ],

    custy_rand_id() => [ 'divider' => '' ],

    // LABELS
    'has_label' => [
      'label' => __( 'Has Label?' ),
      'type' => 'ct-switch',
    ],

    custy_rand_id() => [ 'condition' => [ 'has_label' => 'yes' ], 'options' => [

      'label_visibility' => [
        'label' => __( 'Label Visibility' ),
        'type' => 'ct-visibility',
      ],

    ] ],

    custy_rand_id() => [ 'divider' => '' ],      

    'color_style' => [
      'label' => __( 'Color Style' ),
      'type' => 'ct-radio',
      'choices' => [
        'custom' => __( 'Custom' ),
        'official' => __( 'Official' ),
      ],
    ],

    'shape_style' => [
      'label' => __( 'Shape Style' ),
      'type' => 'ct-radio',
      'choices' => [
        'icon-only' => __( 'Icon Only' ),
        'circle' => __( 'Circle' ),
        'square' => __( 'Square' ),
      ],
    ],

    custy_rand_id() => [ 'condition' => [ 'color_style' => 'custom' ], 'options' => [
      'customColor' => [
        'label' => __( 'Custom Color' ),
        'type'  => 'ct-color-picker',
        'pickers' => [
          'icon' => __( 'Icon' ),
          'background' => [
            'title' => __( 'Background' ),
            'condition' => [ 'icon_style' => '!none' ]
          ],
        ],
        'css' => [
          '--iconColor' => 'icon',
          '--iconBackground' => 'background'
        ],
      ],
    ] ],

    custy_rand_id() => [ 'divider' => '' ],

    'alignment' => [
      'label' => __( 'Alignment' ),
      'type' => 'ct-radio/alignment',
    ],

  ];
}