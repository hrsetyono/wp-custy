<?php

/**
 * Page title options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

if (! isset($is_woo)) {
	$is_woo = false;
}

if (! isset($is_page)) {
	$is_page = false;
}

if (! isset($has_default)) {
	$has_default = false;
}

if (! isset($is_home)) {
	$is_home = false;
}

if (! isset($is_single)) {
	$is_single = false;
}

if (! isset($is_search)) {
	$is_search = false;
}

if (! isset($prefix)) {
	$prefix = '';
} else {
	$prefix = $prefix . '_';
}

$when_enabled_general_settings = [
	[
		$prefix . 'hero_section' => [
			'label' => $has_default ? __('Type', 'blocksy') : false,
			'type' => $is_woo ? 'hidden' : 'ct-image-picker',
			'value' => $is_woo ? 'type-2' : 'type-1',
			'attr' => [ 'data-type' => 'background' ],
			'design' => $is_woo ? 'none' : ($has_default ? 'inline' : 'block'),
			'setting' => [ 'transport' => 'postMessage' ],
			'choices' => [

				'type-1' => [
					'src'   => blocksy_image_picker_url( 'hero-type-1.svg' ),
					'title' => __( 'Type 1', 'blocksy' ),
				],

				'type-2' => [
					'src'   => blocksy_image_picker_url( 'hero-type-2.svg' ),
					'title' => __( 'Type 2', 'blocksy' ),
				],

			],
		],

		blocksy_rand_md5() => [
			'type' => 'ct-condition',
			'condition' => [
				$prefix . 'hero_section' => 'type-1'
			],
			'options' => [

				$prefix . 'hero_alignment1' => [
					'type' => 'ct-radio',
					'label' => __( 'Content Alignment', 'blocksy' ),
					'value' => 'left',
					'view' => 'text',
					'attr' => [ 'data-type' => 'alignment' ],
					'disableRevertButton' => true,
					'design' => $has_default ? 'inline' : 'block',
					'setting' => [ 'transport' => 'postMessage' ],
					'choices' => [
						'left' => '',
						'center' => '',
						'right' => '',
					],
				],

			],
		],

		blocksy_rand_md5() => [
			'type' => 'ct-condition',
			'condition' => [
				$prefix . 'hero_section' => 'type-2'
			],
			'options' => [

				$prefix . 'hero_alignment2' => [
					'type' => 'ct-radio',
					'label' => __( 'Content Alignment', 'blocksy' ),
					'value' => 'center',
					'view' => 'text',
					'attr' => [ 'data-type' => 'alignment' ],
					'disableRevertButton' => true,
					'design' => $has_default ? 'inline' : 'block',
					'setting' => [ 'transport' => 'postMessage' ],
					'choices' => [
						'left' => '',
						'center' => '',
						'right' => '',
					],
				],

			],
		],

	],


	[
		$is_home ? [

			$prefix . 'custom_title' => [
				'label' => __('Title', 'blocksy'),
				'type' => 'text',
				'value' => $is_woo ? __('Products', 'blocksy') : __('Home', 'blocksy'),
				'disableRevertButton' => true,
				'design' => $has_default ? 'inline' : 'block',
				'setting' => [ 'transport' => 'postMessage' ],
			],

			$prefix . 'custom_description' => [
				'label' => __('Description', 'blocksy'),
				'type' => 'textarea',
				'value' => $is_woo ? __('This is where you can add new products to your store.', 'blocksy') : '',
				'disableRevertButton' => true,
				'design' => $has_default ? 'inline' : 'block',
				'setting' => [ 'transport' => 'postMessage' ],
			],

		] : [],

		blocksy_rand_md5() => [
			'type' => 'ct-condition',
			'condition' => [
				$prefix . 'hero_section' => 'type-2'
			],
			'options' => [

				$prefix . 'hero_height' => [
					'label' => __( 'Container Min Height', 'blocksy' ),
					'type' => 'ct-slider',
					'divider' => 'top',
					'value' => '230px',
					'design' => $has_default ? 'inline' : 'block',
					'units' => blocksy_units_config([
						[
							'unit' => 'px',
							'min' => 0,
							'max' => 1000,
						],
					]),
					'responsive' => true,
					'setting' => [ 'transport' => 'postMessage' ],
				],

			],
		],

		blocksy_rand_md5() => [
			'type' => 'ct-condition',
			'condition' => [ $prefix . 'hero_section' => 'type-2' ],
			'options' => [

				blocksy_rand_md5() => [
					'type' => 'ct-group',
					'attr' => [ 'data-type' => 'small-space' ],
					'options' => [

						$prefix . 'page_title_bg_type' => [
							'label' => __( 'Background type', 'blocksy' ),
							'type' => 'ct-radio',
							'value' => 'color',
							'setting' => [ 'transport' => 'postMessage' ],
							'view' => 'text',
							'design' => $has_default ? 'inline' : 'block',
							'divider' => 'top',
							'attr' => [ 'data-radio-text' => 'small' ],
							'choices' => array_merge([
								'color' => __( 'Color', 'blocksy' ),
							], $is_woo ? [] : [
								'featured_image' => __( 'Featured Image', 'blocksy' ),
							], [
								'custom_image' => __( 'Custom Image', 'blocksy' ),
							])
						],

						blocksy_rand_md5() => [
							'type' => 'ct-condition',
							'condition' => [
								$prefix . 'page_title_bg_type' => 'featured_image' . (!$is_single ? '' : '...')
							],
							'options' => [

								blocksy_rand_md5() => [
									'type' => 'ct-notification',
									'text' => __( 'By default is used the featured image from the last published post.', 'blocksy' ),
								],

							],
						],

						blocksy_rand_md5() => [
							'type' => 'ct-condition',
							'condition' => [ $prefix . 'page_title_bg_type' => 'custom_image' ],
							'options' => [

								$prefix . 'custom_hero_background' => [
									'label' => $has_default ? __('Upload Image', 'blocksy') : false,
									'type' => 'ct-image-uploader',
									'design' => $has_default ? 'inline' : false,
									'value' => [ 'attachment_id' => null ],
									'setting' => [ 'transport' => 'postMessage' ],
									'emptyLabel' => __('Select Image', 'blocksy'),
									'filledLabel' => __('Change Image', 'blocksy'),
								],
							],
						],

						blocksy_rand_md5() => [
							'type' => 'ct-condition',
							'condition' => [
								$prefix . 'page_title_bg_type' => 'custom_image | featured_image',
							],
							'options' => [

								$prefix . 'parallax' => [
									'label' => __( 'Enable Parallax Effect On', 'blocksy' ),
									'type' => 'ct-visibility',
									'design' => $has_default ? 'inline' : 'block',
									'allow_empty' => true,
									'setting' => [ 'transport' => 'postMessage' ],

									'value' => [
										'desktop' => false,
										'tablet' => false,
										'mobile' => false,
									],

									'choices' => blocksy_ordered_keys([
										'desktop' => __( 'Desktop', 'blocksy' ),
										'tablet' => __( 'Tablet', 'blocksy' ),
										'mobile' => __( 'Mobile', 'blocksy' ),
									]),
								],

							],
						],
					],
				],
			],
		],
	],

	[
		$is_single ? [

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],

			$prefix . 'single_meta_elements' => [
				'label' => __( 'Meta Elements', 'blocksy' ),
				'type' => 'ct-checkboxes',
				'design' => $has_default ? 'inline' : 'block',
				'attr' => [ 'data-columns' => '2' ],
				'setting' => [ 'transport' => 'postMessage' ],
				'allow_empty' => true,
				'choices' => blocksy_ordered_keys(
					[
						'author' => __( 'Author', 'blocksy' ),
						'comments' => __( 'Comments', 'blocksy' ),
						'date' => __( 'Published Date', 'blocksy' ),
						'updated' => __( 'Updated Date', 'blocksy' ),
						'categories' => __( 'Categories', 'blocksy' ),
						'tags' => __( 'Tags', 'blocksy' ),
					]
				),

				'value' => [
					'author' => !$is_page,
					'date' => !$is_page,
					'categories' => !$is_page,
					'comments' => !$is_page,
					'updated' => false,
					'tags' => false,
				],
			],

			$prefix . 'has_meta_label' => [
				'label' => __( 'Meta Label', 'blocksy' ),
				'type' => 'ct-switch',
				'value' => 'yes',
				'divider' => 'top',
				'setting' => [ 'transport' => 'postMessage' ],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [
					$prefix . 'single_meta_elements/author' => true,
				],
				'options' => [

					$prefix . 'has_meta_avatar' => [
						'label' => __( 'Author Avatar', 'blocksy' ),
						'type' => 'ct-switch',
						'value' => 'yes',
						'setting' => [ 'transport' => 'postMessage' ],
					],

				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-group',
				'attr' => [ 'data-type' => 'small-space' ],
				'options' => [

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [
							'any' => [
								$prefix . 'single_meta_elements/date' => true,
								$prefix . 'single_meta_elements/updated' => true,
							]
						],
						'options' => [
							$prefix . 'date_format_source' => [
								'label' => __( 'Date Format', 'blocksy' ),
								'type' => 'ct-radio',
								'value' => 'custom',
								'view' => 'text',
								'divider' => 'top',
								'design' => $has_default ? 'inline' : 'block',
								'setting' => [ 'transport' => 'postMessage' ],
								'choices' => [
									'default' => __( 'Default', 'blocksy' ),
									'custom' => __( 'Custom', 'blocksy' ),
								],
							],

							blocksy_rand_md5() => [
								'type' => 'ct-condition',
								'condition' => [
									$prefix . 'date_format_source' => 'custom'
								],
								'options' => [

									$prefix . 'single_meta_date_format' => [
										'label' => $has_default ? __( 'Custom Format', 'blocksy' ) : false,
										'type' => 'text',
										'design' => $has_default ? 'inline' : 'block',
										'value' => 'M j, Y',
										'setting' => [ 'transport' => 'postMessage' ],
										// translators: The interpolations addes a html link around the word.
										'desc' => sprintf(
											__('Documentation on date %sformatting%s.', 'blocksy'),
											'<a href="https://wordpress.org/support/article/formatting-date-and-time/#format-string-examples" target="_blank">',
											'</a>'
										),
										'disableRevertButton' => true,
									],

								],
							],
						],
					],

				],
			],

		] : []
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	$prefix . 'page_excerpt_visibility' => [
		'label' => $is_single ? __( 'Excerpt Visibility', 'blocksy' ) : __(
			'Description Visibility', 'blocksy'
		),
		'type' => 'ct-visibility',
		'design' => $has_default ? 'inline' : false,
		'allow_empty' => true,
		'setting' => [ 'transport' => 'postMessage' ],

		'value' => [
			'desktop' => true,
			'tablet' => true,
			'mobile' => false,
		],

		'choices' => blocksy_ordered_keys([
			'desktop' => __( 'Desktop', 'blocksy' ),
			'tablet' => __( 'Tablet', 'blocksy' ),
			'mobile' => __( 'Mobile', 'blocksy' ),
		]),
	],
];

$when_enabled_design_settings = [

	$prefix . 'pageTitleFont' => [
		'type' => 'ct-typography',
		'label' => __( 'Title Font', 'blocksy' ),
		'value' => blocksy_typography_default_values([
			'size' => [
				'desktop' => '32px',
				'tablet'  => '30px',
				'mobile'  => '25px'
			],
			'line-height' => '1.3',
		]),
		'design' => $has_default ? 'inline' : 'block',
		'setting' => [ 'transport' => 'postMessage' ],
	],

	$prefix . 'pageTitleFontColor' => [
		'label' => __( 'Title Font Color', 'blocksy' ),
		'type'  => 'ct-color-picker',
		'design' => 'inline',
		'setting' => [ 'transport' => 'postMessage' ],

		'value' => [
			'default' => [
				'color' => 'var(--paletteColor4)',
			],
		],

		'pickers' => [
			[
				'title' => __( 'Initial', 'blocksy' ),
				'id' => 'default',
			],
		],
	],

	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => [
			'any' => [
				$prefix . 'single_meta_elements/author:truthy' => 'yes',
				$prefix . 'single_meta_elements/comments:truthy' => 'yes',
				$prefix . 'single_meta_elements/date:truthy' => 'yes',
				$prefix . 'single_meta_elements/updated:truthy' => 'yes',
				$prefix . 'single_meta_elements/categories:truthy' => 'yes',
				$prefix . 'single_meta_elements/tags:truthy' => 'yes',
			]
		],
		'options' => [

			$prefix . 'pageMetaFont' => [
				'type' => 'ct-typography',
				'label' => __( 'Meta Font', 'blocksy' ),
				'value' => blocksy_typography_default_values([
					'size' => [
						'desktop' => '12px',
						'tablet'  => '12px',
						'mobile'  => '12px'
					],
					'variation' => 'n6',
					'line-height' => '1.3',
					'text-transform' => 'uppercase',
				]),
				'divider' => 'top',
				'design' => $has_default ? 'inline' : 'block',
				'setting' => [ 'transport' => 'postMessage' ],
			],

			$prefix . 'pageMetaFontColor' => [
				'label' => __( 'Meta Font Color', 'blocksy' ),
				'type'  => 'ct-color-picker',
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],

				'value' => [
					'default' => [
						'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
					],

					'hover' => [
						'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
					],
				],

				'pickers' => [
					[
						'title' => __( 'Initial', 'blocksy' ),
						'id' => 'default',
						'inherit' => 'var(--color)'
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
		'condition' => [
			'any' => [
				$prefix . 'page_excerpt_visibility/desktop:truthy' => 'yes',
				$prefix . 'page_excerpt_visibility/tablet:truthy' => 'yes',
				$prefix . 'page_excerpt_visibility/mobile:truthy' => 'yes',
			]
		],
		'options' => [

			$prefix . 'pageExcerptFont' => [
				'type' => 'ct-typography',
				'label' => $is_single ? __( 'Excerpt Font', 'blocksy' ) : __(
					'Description Font', 'blocksy'
				),
				'value' => blocksy_typography_default_values([
					'variation' => 'n5',
				]),
				'divider' => 'top',
				'design' => $has_default ? 'inline' : 'block',
				'setting' => [ 'transport' => 'postMessage' ],
			],

			$prefix . 'pageExcerptColor' => [
				'label' => $is_single ? __( 'Excerpt Font Color', 'blocksy' ) : __(
					'Description Font Color', 'blocksy'
				),
				'type'  => 'ct-color-picker',
				'design' => 'inline',
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


	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => [
			$prefix . 'hero_section' => 'type-2'
		],
		'options' => [

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ $prefix . 'page_title_bg_type' => '!color' ],
				'options' => [

					$prefix . 'pageTitleOverlay' => [
						'label' => __( 'Image Overlay Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'inline',
						'divider' => 'top',
						'setting' => [ 'transport' => 'postMessage' ],

						'value' => [
							'default' => [
								'color' => 'rgba(41, 51, 60, 0.2)',
							],
						],

						'pickers' => [
							[
								'title' => __( 'Initial color', 'blocksy' ),
								'id' => 'default',
							],
						],
					],

				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ $prefix . 'page_title_bg_type' => 'color' ],
				'options' => [

					$prefix . 'pageTitleBackground' => [
						'label' => __( 'Background Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'inline',
						'divider' => 'top',
						'setting' => [ 'transport' => 'postMessage' ],

						'value' => [
							'default' => [
								'color' => '#EDEFF2',
							],
						],

						'pickers' => [
							[
								'title' => __( 'Initial color', 'blocksy' ),
								'id' => 'default',
							],
						],
					],
				],
			],
		],
	],
];

$options = [

	blocksy_rand_md5() => [
		'title' => __( 'General', 'blocksy' ),
		'type' => 'tab',
		'options' => [
			(
				$has_default ? [
					$prefix . 'has_hero_section' => [
						'label' => __('Display Page Title', 'blocksy'),
						'type' => 'ct-radio',
						'value' => 'default',
						'view' => 'text',
						'inline' => true,
						'design' => 'inline',
						'setting' => [ 'transport' => 'postMessage' ],
						'choices' => [
							'default' => __( 'Default', 'blocksy' ),
							'enabled' => __( 'Enabled', 'blocksy' ),
							'disabled' => __( 'Disabled', 'blocksy' ),
						],
					],
				] : []
			),

			$has_default ? [
				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ $prefix . 'has_hero_section' => 'enabled' ],
					'options' => $when_enabled_general_settings
				],
			] : $when_enabled_general_settings
		],
	],

	blocksy_rand_md5() => [
		'title' => __( 'Design', 'blocksy' ),
		'type' => 'tab',
		'condition' => $has_default ? [
			$prefix . 'has_hero_section' => 'enabled'
		] : false,
		'options' => [

			$has_default ? [
				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ $prefix . 'has_hero_section' => 'enabled' ],
					'options' => $when_enabled_design_settings
				],
			] : $when_enabled_design_settings

		],
	],
];
