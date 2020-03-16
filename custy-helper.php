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

    custy_rand_id() => [ 'divider' => '' ],

    'phone' => [
      'label' => __( 'Phone' ),
      'color' => 'var(--main)',
      'placeholder' => 'tel:+6224-1234-567',
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

    custy_rand_id() => [ 'divider' => '' ],

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

  // Remove the divider in list
  $clean_list = array_filter( $list, function( $item ) {
    return !isset( $item['divider'] );
  } );

  // Parse each item into Social Link option
  $social_links = array_map( function( $item ) {
    if( isset( $item['divider'] ) ) {
      return $item;
    }

    return [
      'label' => $item['label'],
      'type' => 'text',
      'value' => '',
      'attr' => [ 'placeholder' => $item['placeholder'] ],
      'disableRevertButton' => true,
    ];
  }, $list );

  // Parse each item into Social Label option
  $social_labels = array_reduce( array_keys( $list ), function( $result, $key ) use ( $list ) {
    
    if( isset( $list[ $key ]['divider'] ) ) {
      $result[ custy_rand_id() ] = [ 'divider' => '' ];
    }
    else {
      $item = $list[ $key ];

      $result[ $key . '_label' ] = [
        'label' => $item['label'],
        'design' => 'inline',
        'type' => 'text',
        'value' => $item['label'],
      ];  
    }

    return $result;
  }, [] );

  // Add extra option depending on the type
  $extra_design_options = [];
  if( $type === 'footer' ) {
    $extra_design_options = [
      'alignment' => [
        'label' => __( 'Alignment' ),
        'type' => 'ct-radio/alignment',
      ],

      custy_rand_id() => [ 'divider' => '' ],
    ];
  }


  return [
    custy_rand_id() => [ 'tab' => 'Links', 'options' => array_merge( [

      'links' => [
        'label' => __( 'Links' ),
        'type' => 'ct-layers',
        'manageable' => true,
        'desc' => __( 'Fill in the links below' ),
        'settings' => $clean_list,
      ],

    ], $social_links ) ],

    custy_rand_id() => [ 'tab' => 'Design', 'options' => array_merge( $extra_design_options, [

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

      // LABELS
      'has_label' => [
        'label' => __( 'Has Label?' ),
        'type' => 'ct-switch',
      ],

      custy_rand_id() => [ 'condition' => [ 'has_label' => 'yes' ], 'options' => array_merge( [

        'label_visibility' => [
          'label' => __( 'Label Visibility' ),
          'type' => 'ct-visibility',
        ],
        
        custy_rand_id() => [ 'divider' => '' ],

      ], $social_labels ) ],

    ] ) ],
  ];
}



/**
 * SVG image for customizer options. Can be used in front-end too.
 * 
 * @param $id 
 */
function custy_get_svg( $id ) {
	$list = apply_filters( 'custy_svg_list', [
		'cart-1' => '<svg viewBox="0 0 100 70"><path d="M62.5,44.8l-0.9-19.8c0-1.3-1.1-2.6-2.6-2.6H41c-1.5,0-2.7,1.2-2.7,2.6l-0.8,19.8l0,0c0,1.5,1.1,2.7,2.7,2.7h19.8C61.4,47.5,62.5,46.4,62.5,44.8L62.5,44.8z M59.8,45.2H40.2c-0.2,0-0.4-0.2-0.4-0.4l0.8-19.8l0,0c0-0.2,0.2-0.3,0.4-0.3h18.1c0.2,0,0.4,0.1,0.4,0.3l0,0l0.8,19.8C60.2,45.2,60.2,45.2,59.8,45.2z M53.8,26.8c-0.7,0-1.1,0.5-1.1,1.2v3.2c0,1.4-1.1,2.7-2.7,2.7c-1.4,0-2.7-1.2-2.7-2.7v-3.3c0-0.7-0.5-1.2-1.1-1.2s-1.1,0.5-1.1,1.2v3.3c0,2.7,2.1,4.8,4.8,4.8s4.8-2.1,4.8-4.8v-3.3C54.8,27.4,54.3,26.8,53.8,26.8z"/></svg>
		',

		'cart-2' => '<svg viewBox="0 0 100 70"><path d="M38.4,23.5c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9l0,0h1.7c0.2,0,0.4,0.2,0.4,0.3L44.5,39c0.3,1.2,1.4,2,2.7,2h10.1c1.2,0,2.3-0.8,2.7-2.1l2.5-8.7c0.2-0.5-0.2-1-0.7-1.2c-0.1,0-0.2,0-0.2,0H43.5l-1.2-3.9l0,0c-0.2-1-1.2-1.7-2.2-1.7C40.1,23.5,38.4,23.5,38.4,23.5z M47.6,42.9c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8C49.6,43.7,48.7,42.9,47.6,42.9zM56.9,42.9c-1,0-1.8,0.8-1.8,1.8c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8C58.8,43.7,58,42.9,56.9,42.9z"/></svg>
		',

		'cart-3' => '<svg viewBox="0 0 100 70"><path d="M45.1,24.2c-0.9,0-1.7,0.5-2.1,1.4l-2.8,6.6h-1.5c-0.4,0-0.7,0.2-0.9,0.4c-0.2,0.3-0.3,0.6-0.2,1l2.9,10.5c0.3,1,1.2,1.7,2.2,1.7h14.7c1,0,1.9-0.7,2.2-1.7l2.9-10.5c0.1-0.3,0-0.7-0.2-1c-0.2-0.3-0.6-0.4-0.9-0.4h-1.5L57,25.6h0c-0.4-0.8-1.2-1.4-2.1-1.4H45.1z M45.1,26.5h9.9l2.4,5.7H42.6L45.1,26.5zM45.5,35.6c0.6,0,1.1,0.5,1.1,1.1v4.5c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1v-4.5C44.3,36.1,44.8,35.6,45.5,35.6z M50,35.6c0.6,0,1.1,0.5,1.1,1.1v4.5c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1v-4.5C48.9,36.1,49.4,35.6,50,35.6zM54.5,35.6c0.6,0,1.1,0.5,1.1,1.1v4.5c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1v-4.5C53.4,36.1,53.9,35.6,54.5,35.6z"/></svg>
    ',



		'norepeat' => '<svg viewBox="0 0 16 16"><rect x="6" y="6" width="4" height="4"/></svg>
		',

		'repeat' => '<svg viewBox="0 0 16 16"><path d="M0,0h4v4H0V0z M6,0h4v4H6V0z M12,0h4v4h-4V0z M0,6h4v4H0V6z M6,6h4v4H6V6z M12,6h4v4h-4V6z M0,12h4v4H0V12z M6,12h4v4H6V12zM12,12h4v4h-4V12z"/></svg>
		',

		'repeat_h' => '<svg viewBox="0 0 16 16"><rect y="6" width="4" height="4"/><rect x="6" y="6" width="4" height="4"/><rect x="12" y="6" width="4" height="4"/></svg>
		',

		'repeat_v' => '<svg viewBox="0 0 16 16"><rect x="6" width="4" height="4"/><rect x="6" y="6" width="4" height="4"/><rect x="6" y="12" width="4" height="4"/></svg>
		',

    // FOOTER COLUMNS

		// 2 columns layout
		'1-1' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M24,2h2v22h-2V2z"/></svg>
		',

		'2-1' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M32,2h2v22h-2V2z"/></svg>
		',

		'1-2' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M16,2h2v22h-2V2z"/></svg>
		',

		'3-1' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M34,2h2v22h-2V2z"/></svg>
		',

		'1-3' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M14,2h2v22h-2V2z"/></svg>
		',

		// 3 columns layout
		'1-1-1' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M32,2h2v22h-2V2z M16,2h2v22h-2V2z"/></svg>
		',

		'1-2-1' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M11,2h2v22h-2V2z M37,2h2v22h-2V2z"/></svg>
		',

		'2-1-1' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M36,2h2v22h-2V2z M24,2h2v22h-2V2z"/></svg>
		',

		'1-1-2' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M11,2h2v22h-2V2z M24,2h2v22h-2V2z"/></svg>
		',

		// 4 columns layout
		'1-1-1-1' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M12,2h2v22h-2V2z M24,2h2v22h-2V2z M36,2h2v22h-2V2z"/></svg>
		',

		'2-1-1-1' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V2C50,0.9,49.1,0,48.1,0zM48.1,24H1.9V2h46.2V24z M18,2h2v22h-2V2z M28,2h2v22h-2V2z M38,2h2v22h-2V2z"/></svg>
		',

		'1-1-1-2' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M1.9,26h46.2c1.1,0,1.9-0.9,1.9-2V2c0-1.1-0.9-2-1.9-2H1.9C0.9,0,0,0.9,0,2v22C0,25.1,0.9,26,1.9,26zM1.9,2h46.2v22H1.9V2zM11,24H9V2h2V24z M20,24h-2V2h2V24z M30,24h-2V2h2V24z"/></svg>
		',

		'stacked' => '<svg width="50" height="26" viewBox="0 0 50 26"><path d="M48.1,0H1.9C0.9,0,0,0.9,0,2v10v2v10c0,1.1,0.9,2,1.9,2h46.2c1.1,0,1.9-0.9,1.9-2V14v-2V2C50,0.9,49.1,0,48.1,0z M48.1,24H1.9V14h46.2V24z M1.9,12V2h46.2v10H1.9z"/></svg>
    ',

    // TRIGGER
    'trigger-1' => '<svg viewBox="0 0 100 70"><path d="M45.352,73.825H1.248A1.248,1.248,0,0,1,0,72.577V69.248A1.248,1.248,0,0,1,1.248,68h44.1A1.248,1.248,0,0,1,46.6,69.248v3.329A1.248,1.248,0,0,1,45.352,73.825Zm0,16.643H1.248A1.248,1.248,0,0,1,0,89.22V85.891a1.248,1.248,0,0,1,1.248-1.248h44.1A1.248,1.248,0,0,1,46.6,85.891V89.22A1.248,1.248,0,0,1,45.352,90.468Zm0,16.643H1.248A1.248,1.248,0,0,1,0,105.863v-3.329a1.248,1.248,0,0,1,1.248-1.248h44.1a1.248,1.248,0,0,1,1.248,1.248v3.329A1.248,1.248,0,0,1,45.352,107.111Z" transform="translate(27 -53)"/></svg>',

		'trigger-2' => '<svg viewBox="0 0 100 70"><path d="M77.879,214.887A6.887,6.887,0,1,1,70.992,208,6.889,6.889,0,0,1,77.879,214.887ZM95.1,208a6.887,6.887,0,1,0,6.887,6.887A6.889,6.889,0,0,0,95.1,208Zm-48.209,0a6.887,6.887,0,1,0,6.887,6.887A6.889,6.889,0,0,0,46.887,208Z" transform="translate(-21 -180)"/></svg>',
    
    'trigger-3' => '<svg viewBox="0 0 100 70"><path d="M22.888,77.812A6.888,6.888,0,1,1,16,84.7,6.89,6.89,0,0,1,22.888,77.812ZM16,62.888A6.888,6.888,0,1,0,22.888,56,6.89,6.89,0,0,0,16,62.888Zm0,43.624a6.888,6.888,0,1,0,6.888-6.888A6.89,6.89,0,0,0,16,106.512Z" transform="translate(27 -50)"/></svg>',


    // OFFCANVAS CLOSE
    'close' => '<svg viewBox="0 0 70 70"><path d="M25.957,116l13.465-13.465a2,2,0,0,0,0-2.823l-3.129-3.129a2,2,0,0,0-2.823,0L20.007,110.048,6.542,96.583a2,2,0,0,0-2.823,0L.592,99.71a2,2,0,0,0,0,2.823L14.057,116,.592,129.463a2,2,0,0,0,0,2.823l3.129,3.129a2,2,0,0,0,2.823,0l13.464-13.466,13.465,13.465a2,2,0,0,0,2.823,0l3.129-3.129a2,2,0,0,0,0-2.823Z" transform="translate(14.993 -80.997)"/></svg>',

    'close-circle' => '<svg viewBox="0 0 70 70"><path d="M34,8A26,26,0,1,0,60,34,26,26,0,0,0,34,8Zm0,46.968A20.968,20.968,0,1,1,54.968,34,20.962,20.962,0,0,1,34,54.968ZM44.673,27.479,38.152,34l6.521,6.521a1.259,1.259,0,0,1,0,1.782L42.3,44.673a1.259,1.259,0,0,1-1.782,0L34,38.152l-6.521,6.521a1.259,1.259,0,0,1-1.782,0L23.327,42.3a1.259,1.259,0,0,1,0-1.782L29.848,34l-6.521-6.521a1.259,1.259,0,0,1,0-1.782L25.7,23.327a1.259,1.259,0,0,1,1.782,0L34,29.848l6.521-6.521a1.259,1.259,0,0,1,1.782,0L44.673,25.7a1.259,1.259,0,0,1,0,1.782Z" transform="translate(1 1)"/></svg>',

    'close-square' => '<svg viewBox="0 0 70 70"><path d="M36.362,50.058,29.42,57l6.942,6.942a1.34,1.34,0,0,1,0,1.9l-2.522,2.522a1.34,1.34,0,0,1-1.9,0L25,61.42l-6.942,6.942a1.34,1.34,0,0,1-1.9,0l-2.522-2.522a1.34,1.34,0,0,1,0-1.9L20.58,57l-6.942-6.942a1.34,1.34,0,0,1,0-1.9l2.522-2.522a1.34,1.34,0,0,1,1.9,0L25,52.58l6.942-6.942a1.34,1.34,0,0,1,1.9,0l2.522,2.522a1.34,1.34,0,0,1,0,1.9ZM50,37.357V76.643A5.359,5.359,0,0,1,44.643,82H5.357A5.359,5.359,0,0,1,0,76.643V37.357A5.359,5.359,0,0,1,5.357,32H44.643A5.359,5.359,0,0,1,50,37.357ZM44.643,75.973V38.027a.672.672,0,0,0-.67-.67H6.027a.672.672,0,0,0-.67.67V75.973a.672.672,0,0,0,.67.67H43.973A.672.672,0,0,0,44.643,75.973Z" transform="translate(10 -22)"/></svg>',
    
    // SOCIAL MEDIA
    'facebook' => '<svg width="20px" height="20px" viewBox="0 0 20 20">
        <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"/>
      </svg>',
    
    'twitter' => '<svg width="20px" height="20px" viewBox="0 0 20 20">
        <path d="M20,3.8c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.4,6.7,3.4,5.1,1.4,2.6C1,3.2,0.8,3.9,0.8,4.7c0,1.4,0.7,2.7,1.8,3.4C2,8.1,1.4,7.9,0.8,7.6c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5C18.8,5.3,19.4,4.6,20,3.8z"/>
      </svg>',

    'instagram' => '<svg width="20" height="20" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="3.3"/>
        <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z"/>
      </svg>',

    'pinterest' => '<svg width="20px" height="20px" viewBox="0 0 20 20">
        <path d="M10,0C4.5,0,0,4.5,0,10c0,4.1,2.5,7.6,6,9.2c0-0.7,0-1.5,0.2-2.3c0.2-0.8,1.3-5.4,1.3-5.4s-0.3-0.6-0.3-1.6c0-1.5,0.9-2.6,1.9-2.6c0.9,0,1.3,0.7,1.3,1.5c0,0.9-0.6,2.3-0.9,3.5c-0.3,1.1,0.5,1.9,1.6,1.9c1.9,0,3.2-2.4,3.2-5.3c0-2.2-1.5-3.8-4.2-3.8c-3,0-4.9,2.3-4.9,4.8c0,0.9,0.3,1.5,0.7,2C6,12,6.1,12.1,6,12.4c0,0.2-0.2,0.6-0.2,0.8c-0.1,0.3-0.3,0.3-0.5,0.3c-1.4-0.6-2-2.1-2-3.8c0-2.8,2.4-6.2,7.1-6.2c3.8,0,6.3,2.8,6.3,5.7c0,3.9-2.2,6.9-5.4,6.9c-1.1,0-2.1-0.6-2.4-1.2c0,0-0.6,2.3-0.7,2.7c-0.2,0.8-0.6,1.5-1,2.1C8.1,19.9,9,20,10,20c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z"/>
      </svg>',

    'linkedin' => '<svg width="20px" height="20px" viewBox="0 0 20 20">
        <path d="M18.6,0H1.4C0.6,0,0,0.6,0,1.4v17.1C0,19.4,0.6,20,1.4,20h17.1c0.8,0,1.4-0.6,1.4-1.4V1.4C20,0.6,19.4,0,18.6,0z M6,17.1h-3V7.6h3L6,17.1L6,17.1zM4.6,6.3c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C6.3,5.5,5.5,6.3,4.6,6.3z M17.2,17.1h-3v-4.6c0-1.1,0-2.5-1.5-2.5c-1.5,0-1.8,1.2-1.8,2.5v4.7h-3V7.6h2.8v1.3h0c0.4-0.8,1.4-1.5,2.8-1.5c3,0,3.6,2,3.6,4.5V17.1z"/>
      </svg>',

    'youtube' => '<svg width="20" height="20" viewbox="0 0 20 20">
        <path d="M15,0H5C2.2,0,0,2.2,0,5v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V5C20,2.2,17.8,0,15,0z M14.5,10.9l-6.8,3.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-1-0.4-1-1l0,0V6.2c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l6.8,3.8c0.5,0.3,0.7,0.8,0.4,1.3C14.8,10.6,14.6,10.8,14.5,10.9z"/>
      </svg>',

    'whatsapp' => '<svg width="20px" height="20px" viewBox="0 0 20 20">
        <path d="M10,0C4.5,0,0,4.5,0,10c0,1.9,0.5,3.6,1.4,5.1L0.1,20l5-1.3C6.5,19.5,8.2,20,10,20c5.5,0,10-4.5,10-10S15.5,0,10,0zM6.6,5.3c0.2,0,0.3,0,0.5,0c0.2,0,0.4,0,0.6,0.4c0.2,0.5,0.7,1.7,0.8,1.8c0.1,0.1,0.1,0.3,0,0.4C8.3,8.2,8.3,8.3,8.1,8.5C8,8.6,7.9,8.8,7.8,8.9C7.7,9,7.5,9.1,7.7,9.4c0.1,0.2,0.6,1.1,1.4,1.7c0.9,0.8,1.7,1.1,2,1.2c0.2,0.1,0.4,0.1,0.5-0.1c0.1-0.2,0.6-0.7,0.8-1c0.2-0.2,0.3-0.2,0.6-0.1c0.2,0.1,1.4,0.7,1.7,0.8s0.4,0.2,0.5,0.3c0.1,0.1,0.1,0.6-0.1,1.2c-0.2,0.6-1.2,1.1-1.7,1.2c-0.5,0-0.9,0.2-3-0.6c-2.5-1-4.1-3.6-4.2-3.7c-0.1-0.2-1-1.3-1-2.6c0-1.2,0.6-1.8,0.9-2.1C6.1,5.4,6.4,5.3,6.6,5.3z"/>
      </svg>',

    'skype' => '<svg width="20px" height="20px" viewBox="0 0 448 512">
        <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"/>
      </svg>',

    'telegram' => '<svg width="20px" height="20px" viewBox="0 0 20 20">
        <path d="M19.9,3.1l-3,14.2c-0.2,1-0.8,1.3-1.7,0.8l-4.6-3.4l-2.2,2.1c-0.2,0.2-0.5,0.5-0.9,0.5l0.3-4.7L16.4,5c0.4-0.3-0.1-0.5-0.6-0.2L5.3,11.4L0.7,10c-1-0.3-1-1,0.2-1.5l17.7-6.8C19.5,1.4,20.2,1.9,19.9,3.1z"/>
      </svg>',

    'wechat' => '<svg width="20" height="20" viewBox="0 0 20 20">
        <path d="M13.5,6.8c0.2,0,0.5,0,0.7,0c-0.6-2.9-3.7-5-7.1-5C3.2,1.9,0,4.5,0,7.9c0,1.9,1.1,3.5,2.8,4.8l-0.7,2.1l2.5-1.2c0.9,0.2,1.6,0.4,2.5,0.4c0.2,0,0.4,0,0.7,0c-0.1-0.5-0.2-1-0.2-1.5C7.5,9.3,10.2,6.8,13.5,6.8L13.5,6.8zM9.7,4.9c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-1.1-0.4-1.1-0.9C8.7,5.2,9.2,4.9,9.7,4.9zM4.8,6.6c-0.5,0-1.1-0.4-1.1-0.9c0-0.5,0.5-0.9,1.1-0.9c0.5,0,0.9,0.4,0.9,0.9C5.7,6.3,5.3,6.6,4.8,6.6z M20,12.3c0-2.8-2.8-5.1-6-5.1c-3.4,0-6,2.3-6,5.1s2.6,5.1,6,5.1c0.7,0,1.4-0.2,2.1-0.4l1.9,1.1l-0.5-1.8C18.9,15.3,20,13.9,20,12.3zM12,11.4c-0.4,0-0.7-0.4-0.7-0.7c0-0.4,0.4-0.7,0.7-0.7c0.5,0,0.9,0.4,0.9,0.7C12.9,11.1,12.6,11.4,12,11.4zM15.9,11.4c-0.4,0-0.7-0.4-0.7-0.7c0-0.4,0.4-0.7,0.7-0.7c0.5,0,0.9,0.4,0.9,0.7C16.8,11.1,16.5,11.4,15.9,11.4z"/>
      </svg>',

    // NON-SOCIAL LINKS
    'email' => '<svg width="20" height="20" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>',

    'location' => '<svg width="20" height="20" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>',

    'phone' => '<svg width="20" height="20" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>',
	] );

	if ( !isset( $list[ $id ] ) ) {
		return 'SVG Not Found';
	}

	return $list[ $id ];
}