<?php

$options = [
	blocksy_rand_md5() => [
		'title' => __( 'General', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			'logo_type' => [
				'label' => __( 'Logo Type', 'blocksy' ),
				'type' => 'ct-radio',
				'value' => 'text',
				'view' => 'text',
				'design' => 'block',
				'allow_empty' => true,
				'setting' => [ 'transport' => 'postMessage' ],
				'choices' => [
					'text' => __( 'Text', 'blocksy' ),
					'image' => __( 'Image', 'blocksy' ),
				],

			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'logo_type' => 'text' ],
				'options' => [

					'blogname' => [
						'label' => __( 'Site Title', 'blocksy' ),
						'type' => 'text',
						'design' => 'block',
						'value' => get_option('blogname'),
						'setting' => [
							'transport' => 'postMessage'
						],
					],

				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'logo_type' => 'image' ],
				'options' => [

					'custom_logo' => [
						'label' => false,
						'type' => 'ct-image-uploader',
						'value' => '',
						// 'inline_value' => true,
						'divider' => 'bottom',
						'attr' => [ 'data-height' => 'small' ],
						'setting' => [ 'transport' => 'postMessage' ],
					],

					'has_mobile_logo' => [
						'label' => __( 'Mobile Logo', 'blocksy' ),
						'type' => 'ct-switch',
						'value' => 'no',
						'switchDeviceOnChange' => 'mobile',
						'desc' => __( 'Set up a different logo for mobile devices.', 'blocksy' ),
						'setting' => [ 'transport' => 'postMessage' ],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [ 'has_mobile_logo' => 'yes' ],
						'options' => [

							'mobile_header_logo' => [
								'label' => false,
								'type' => 'ct-image-uploader',
								// 'inline_value' => true,
								'value' => [ 'attachment_id' => null ],
								'switchDeviceOnChange' => 'mobile',
								'attr' => [ 'data-height' => 'small' ],
								'setting' => [ 'transport' => 'postMessage' ],
							],

						],
					],

					'logoMaxHeight' => [
						'label' => __( 'Logo Maximum Height', 'blocksy' ),
						'type' => 'ct-slider',
						'min' => 0,
						'max' => 300,
						'value' => 50,
						'responsive' => true,
						'divider' => 'top',
						'setting' => [ 'transport' => 'postMessage' ],
					],

				],
			],

			'site_title_wrapper' => [
				'label' => __( 'Wrapper Tag', 'blocksy' ),
				'type' => 'ct-select',
				'value' => 'h1',
				'view' => 'text',
				'design' => 'inline',
				'choices' => blocksy_ordered_keys(
					[
						'h1' => 'H1',
						'h2' => 'H2',
						'h3' => 'H3',
						'div' => 'div',
					]
				),
			],


			'has_tagline' => [
				'label' => __( 'Site Tagline', 'blocksy' ),
				'type' => 'ct-switch',
				'value' => 'no',
				'divider' => 'top',
				'setting' => [ 'transport' => 'postMessage' ],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'has_tagline' => 'yes' ],
				'options' => [

					'blogdescription' => [
						'label' => false,
						'type' => 'text',
						'design' => 'block',
						'value' => get_option( 'blogdescription' ),
						'disableRevertButton' => true,
						'setting' => [
							'transport' => 'postMessage'
						],
					],

					'site_description_wrapper' => [
						'label' => __( 'Wrapper Tag', 'blocksy' ),
						'type' => 'ct-select',
						'value' => 'h2',
						'view' => 'text',
						'design' => 'inline',
						'choices' => blocksy_ordered_keys(
							[
								'h1' => 'H1',
								'h2' => 'H2',
								'h3' => 'H3',
								'h4' => 'H4',
								'h5' => 'H5',
								'h6' => 'H6',
								'div' => 'div',
							]
						),
					],

				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [
					'has_tagline' => 'yes',
					'wp_customizer_current_view' => 'mobile'
				],
				'options' => [

					'tagline_visibility' => [
						'label' => __( 'Site Tagline Visibility', 'blocksy' ),
						'type' => 'ct-visibility',
						'design' => 'block',
						'divider' => 'top',
						'setting' => [ 'transport' => 'postMessage' ],
						// 'allow_empty' => true,
						'value' => [
							'tablet' => true,
							'mobile' => true,
						],

						'choices' => blocksy_ordered_keys([
							'tablet' => __( 'Tablet', 'blocksy' ),
							'mobile' => __( 'Mobile', 'blocksy' ),
						]),
					],

				],
			],

		],
	],

	blocksy_rand_md5() => [
		'title' => __( 'Design', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'logo_type' => 'text' ],
				'options' => [

					'siteTitle' => [
						'type' => 'ct-typography',
						'label' => __( 'Site Title', 'blocksy' ),
						'value' => blocksy_typography_default_values([
							'size' => '25px',
						]),
						'setting' => [ 'transport' => 'postMessage' ],
					],

					'siteTitleColor' => [
						'label' => __( 'Site Title Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'block',
						'divider' => 'bottom',
						'responsive' => true,
						'setting' => [ 'transport' => 'postMessage' ],

						'value' => [
							'default' => [
								'color' => 'var(--paletteColor4)',
							],

							'hover' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],
						],

						'pickers' => [
							[
								'title' => __( 'Initial', 'blocksy' ),
								'id' => 'default',
							],

							[
								'title' => __( 'Hover', 'blocksy' ),
								'id' => 'hover',
								'inherit' => 'var(--colorHover)'
							],
						],
					],

				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'has_tagline' => 'yes' ],
				'options' => [

					'siteTagline' => [
						'type' => 'ct-typography',
						'label' => __( 'Site Tagline Font', 'blocksy' ),
						'value' => blocksy_typography_default_values([
							'size' => [
								'desktop' => '13px',
								'tablet'  => '13px',
								'mobile'  => '12px'
							],
							'variation' => 'n5',
						]),
						'setting' => [ 'transport' => 'postMessage' ],
					],

					'siteTaglineColor' => [
						'label' => __( 'Site Tagline Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'block',
						'divider' => 'bottom',
						'responsive' => true,
						'setting' => [ 'transport' => 'postMessage' ],

						'value' => [
							'default' => [
								'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
							],
						],

						'pickers' => [
							[
								'title' => __( 'Initial', 'blocksy' ),
								'id' => 'default',
								'inherit' => 'var(--color)'
							],
						],
					],

				],
			],

			'headerLogoMargin' => [
				'label' => __( 'Margin', 'blocksy' ),
				'type' => 'ct-spacing',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => blocksy_spacing_value([
					'linked' => true,
				]),
			],

		],
	],
];
