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
 * Convert a titleized name into slug
 * 
 * @param string $text
 * @param string $separator - Default is underscore
 */
function custy_to_slug( $text, $separator = '_' ) {
  $targets = array( ' ', '[' , ']' );
  $replace_with = array( $separator, $separator, '' );

  $slug = strtolower( str_replace( $targets, $replace_with, $text ) );
  return $slug;
}


/**
 * Get all theme mods
 */
function custy_get_mods() {
  global $custy_mods;

  if( empty( $custy_mods ) ) {
    $defaults = custy_get_default_values();
    $custy_mods = wp_parse_args( get_theme_mods(), $defaults );
  }
  return $custy_mods;
}


/**
 * Get theme mod that is generated with Blocksy
 * 
 * @param $id (string) - The option ID
 * @return mixed - The mod value or "false" if not found
 */
function custy_get_mod( $id ) {
  $mods = custy_get_mods();
  return $mods[ $id ] ?? null;
}


/**
 * Get the default value of theme mods
 * 
 * @param $type (string) - Either 'footer', 'header', or 'all'
 */
function custy_get_default_values( $type = 'all' ) {
  global $custy_default_values;
  $custy_default_values = $custy_default_values ?? apply_filters( 'custy_default_values', [] );

  if( $type == 'all' ) {
    return $custy_default_values;
  } else {
    return $custy_default_values[ $type ] ?? null;
  }
}

/**
 * Get a single default value
 */
function custy_get_default_value( $option_id ) {
  $defaults = custy_get_default_values();
  return $defaults[ $option_id ] ?? null;
}


/**
 * Get the list of sections for theme mods
 */
function custy_get_sections( $filter = null ) {
  global $custy_sections;

  if( empty( $custy_sections ) ) {
    $custy_sections = apply_filters( 'custy_sections', [] );
  }

  if( $filter ) {
    // keeping it as array so the loop works
    return [ $filter => $custy_sections[ $filter ] ];
  }
  else {
    return $custy_sections;
  }
}



/**
 * Get color palette for Gutenberg
 */
function custy_get_editor_color_palette() {
  // Abort if not in Editor
  global $pagenow;
  if( $pagenow !== 'post.php' ) { return; }

  $raw_colors = _custy_get_color_palette();

  // Create array with the right format for Palette
  $palette = [];
  foreach( $raw_colors as $name => $value ) {
    $palette[] = [
      'name' => $name,
      'slug' => custy_to_slug( $name ),
      'color' => $value
    ];
  }

  return $palette;
}


/**
 * Get the color
 */
function _custy_get_color_palette() {
  $colors = [
    'Main'         => 'var(--main)',
    'Main Dark'    => 'var(--mainDark)',
    'Main Light'   => 'var(--mainLight)',
    'Sub'          => 'var(--sub)',
    'Sub Light'    => 'var(--subLight)',
    'Text'         => 'var(--text)',
    'Text Dim'     => 'var(--textDim)',
    'Text Invert'  => 'var(--textInvert)',
  ];

  // check for extra colors
  $extra_colors = custy_get_mod( 'extraColor' );

  $index = 1;
  foreach( $extra_colors as $slug => $c ) {
    if( $c['color'] !== 'CT_CSS_SKIP_RULE' ) {
      // format the title
      $title = preg_split( '/((?:^|[A-Z])[a-z]+)/', $slug, -1, PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_NO_EMPTY);
      $colors[ ucfirst( implode( ' ', $title ) ) ] = "var(--{$slug})";
    }
    
    $index++;
  }

  return $colors;
}


/**
 * Get font size list for Gutenberg
 */
function custy_get_editor_font_sizes() {
  // Abort if not in Editor
  global $pagenow;
  if( $pagenow !== 'post.php' && $pagenow !== 'post-new.php' ) { return; }

  $small = custy_get_mod( 'smallFontSize' );
  $medium = custy_get_mod( 'mediumFontSize' );
  $large = custy_get_mod( 'largeFontSize' );
  $huge = custy_get_mod( 'hugeFontSize' );

  return [
    [
      'name' => 'Small',
      'slug' => 'small',
      'size' => (int) str_replace( 'px', '', $small['desktop'] ?? $small ),
    ],
    [
      'name' => 'Medium',
      'slug' => 'medium',
      'size' => (int) str_replace( 'px', '', $medium['desktop'] ?? $medium ),
    ],
    [
      'name' => 'Large',
      'slug' => 'large',
      'size' => (int) str_replace( 'px', '', $large['desktop'] ?? $large ),
    ],
    [
      'name' => 'Huge',
      'slug' => 'huge',
      'size' => (int) str_replace( 'px', '', $huge['desktop'] ?? $huge ),
    ],
  ];
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
    'pocket' => [
      'label' => __( 'Pocket' ),
      'color' => '#ef4155',
      'placeholder' => 'https://getpocket.com/',
      'svg' => custy_get_svg( 'pocket' ),
    ],
    'skype' => [
      'label' => __( 'Skype' ),
      'color' => '#0478d7',
      'placeholder' => 'skype:your-username?chat',
      'svg' => custy_get_svg( 'skype' ),
    ],
    'reddit' => [
      'label' => __( 'reddit' ),
      'color' => '#fe4500',
      'placeholder' => 'https://www.reddit.com/user/yourname',
      'svg' => custy_get_svg( 'reddit' ),
    ],
		'telegram' => [
      'label' => __( 'Telegram' ),
      'color' => '#08c',
      'placeholder' => 'https://t.me/your-username',
      'svg' => custy_get_svg( 'telegram' ),
    ],
    'tumblr' => [
      'label' => __( 'Tumblr' ),
      'color' => '#011835',
      'placeholder' => 'https://www.tumblr.com/blog/yourname',
      'svg' => custy_get_svg( 'telegram' ),
		],
		'wechat' => [
      'label' => __( 'WeChat' ),
      'color' => '#7bb32e',
      'placeholder' => 'weixin://dl/chat?your-username',
      'svg' => custy_get_svg( 'wechat' ),
    ],
    'youtube' => [
      'label' => __( 'YouTube' ),
      'color' => '#ff0100',
      'placeholder' => 'https://www.youtube.com/channel/your-channel',
      'svg' => custy_get_svg( 'youtube' ),
		],
  ] );

  if( isset( $id ) ) {
    return $list[ $id ] ?? trigger_error( 'Social Item "' . $id . '" does not exists' );
  }

  return $list;
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