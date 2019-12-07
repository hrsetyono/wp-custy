<?php

if (empty($default_background)) {
	$default_background = blocksy_background_default_value([
		'backgroundColor' => [
			'default' => [
				'color' => Blocksy_Css_Injector::get_skip_rule_keyword(),
			],
		],
	]);
}

if (empty($default_top_bottom_spacing)) {
	$default_top_bottom_spacing = [
		'mobile' => '40px',
		'tablet' => '50px',
		'desktop' => '70px',
	];
}

$options = [
	blocksy_rand_md5() => [
		'title' => __( 'General', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			'items_per_row' => [
				'label' => __( 'Columns per row', 'blocksy' ),
				'type' => 'ct-radio',
				'value' => '3',
				'view' => 'text',
				'design' => 'block',
				'allow_empty' => true,
				'setting' => [ 'transport' => 'postMessage' ],
				'choices' => [
					'1' => 1,
					'2' => 2,
					'3' => 3,
					'4' => 4,
				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'items_per_row' => '2' ],
				'options' => [

					'2_columns_layout' => [
						'label' => __( 'Columns Layout', 'blocksy' ),
						'type' => 'ct-image-picker',
						'attr' => [
							'data-type' => 'background',
							'data-columns' => '2',
						],
						'value' => [
							'desktop' => 'repeat(2, 1fr)',
							'tablet' => 'initial',
							'mobile' => 'initial'
						],
						'responsive' => [
							'desktop' => true,
							'tablet' => true,
							'mobile' => false
						],
						'divider' => 'top',
						'setting' => [ 'transport' => 'postMessage' ],
						'disabledDeviceMessage' => __('Please note, all columns on mobile are stacked and have 100% width.', 'blocksy'),
						'choices' => [
							'repeat(2, 1fr)' => [
								'src' => blocksy_image_picker_file( '1-1' ),
							],

							'2fr 1fr' => [
								'src' => blocksy_image_picker_file( '2-1' ),
							],

							'1fr 2fr' => [
								'src' => blocksy_image_picker_file( '1-2' ),
							],

							'3fr 1fr' => [
								'src' => blocksy_image_picker_file( '3-1' ),
							],

							'1fr 3fr' => [
								'src' => blocksy_image_picker_file( '1-3' ),
							],
						],

						'tabletChoices' => [
							'initial' => [
								'src' => blocksy_image_picker_file( 'stacked' ),
								'title' => __( 'Stacked', 'blocksy' ),
							],

							'repeat(2, 1fr)' => [
								'src' => blocksy_image_picker_file( '1-1' ),
								'title' => __( 'Two Columns', 'blocksy' ),
							],
						],

						'mobileChoices' => [],
					],

				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'items_per_row' => '3' ],
				'options' => [

					'3_columns_layout' => [
						'label' => __( 'Columns Layout', 'blocksy' ),
						'type' => 'ct-image-picker',
						'attr' => [
							'data-type' => 'background',
							'data-columns' => '2',
						],
						'value' => [
							'desktop' => 'repeat(3, 1fr)',
							'tablet' => 'initial',
							'mobile' => 'initial',
						],
						'responsive' => [
							'desktop' => true,
							'tablet' => true,
							'mobile' => false,
						],
						'divider' => 'top',
						'setting' => ['transport' => 'postMessage'],
						'disabledDeviceMessage' => __('Please note, all columns on mobile are stacked and have 100% width.', 'blocksy'),
						'choices' => [
							'repeat(3, 1fr)' => [
								'src' => blocksy_image_picker_file( '1-1-1' ),
							],

							'1fr 2fr 1fr' => [
								'src' => blocksy_image_picker_file( '1-2-1' ),
							],

							'2fr 1fr 1fr' => [
								'src' => blocksy_image_picker_file( '2-1-1' ),
							],

							'1fr 1fr 2fr' => [
								'src' => blocksy_image_picker_file( '1-1-2' ),
							],
						],

						'tabletChoices' => [
							'initial' => [
								'src' => blocksy_image_picker_file( 'stacked' ),
								'title' => __( 'Stacked', 'blocksy' ),
							],

							'repeat(2, 1fr)' => [
								'src' => blocksy_image_picker_file( '1-1' ),
								'title' => __( 'Two Columns', 'blocksy' ),
							],
						],

						'mobileChoices' => [],
					],

				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'items_per_row' => '4' ],
				'options' => [

					'4_columns_layout' => [
						'label' => __( 'Columns Layout', 'blocksy' ),
						'type' => 'ct-image-picker',
						'attr' => [
							'data-type' => 'background',
							'data-columns' => '2',
						],
						'value' => [
							'desktop' => 'repeat(4, 1fr)',
							'tablet' => 'initial',
							'mobile' => 'initial'
						],
						'responsive' => [
							'mobile' => false
						],
						'divider' => 'top',
						'setting' => [ 'transport' => 'postMessage' ],
						'disabledDeviceMessage' => __('Please note, all columns on mobile are stacked and have 100% width.', 'blocksy'),
						'choices' => [
							'repeat(4, 1fr)' => [
								'src'   => blocksy_image_picker_file( '1-1-1-1' ),
							],

							'2fr 1fr 1fr 1fr' => [
								'src'   => blocksy_image_picker_file( '2-1-1-1' ),
							],

							'1fr 1fr 1fr 2fr' => [
								'src'   => blocksy_image_picker_file( '1-1-1-2' ),
							],
						],

						'tabletChoices' => [
							'initial' => [
								'src' => blocksy_image_picker_file( 'stacked' ),
								'title' => __( 'Stacked', 'blocksy' ),
							],

							'repeat(2, 1fr)' => [
								'src' => blocksy_image_picker_file( '1-1' ),
								'title' => __( 'Two Columns', 'blocksy' ),
							],
						],

						'mobileChoices' => [],
					],

				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'items_per_row' => '!1' ],
				'options' => [

					'footerItemsGap' => [
						'label' => __( 'Items Spacing', 'blocksy' ),
						'type' => 'ct-slider',
						'min' => 0,
						'max' => 200,
						'value' => 60,
						'responsive' => true,
						'divider' => 'bottom',
						'desc' => __( 'Space between columns, elements and widgets.', 'blocksy' ),
						'setting' => [ 'transport' => 'postMessage' ],
					],

				],
			],

			'rowTopBottomSpacing' => [
				'label' => __( 'Row Vertical Spacing', 'blocksy' ),
				'type' => 'ct-slider',
				'value' => $default_top_bottom_spacing,
				'units' => blocksy_units_config([
					[ 'unit' => 'px', 'min' => 0, 'max' => 500 ],
				]),
				'responsive' => true,
				'divider' => 'bottom',
				'desc' => __( 'Set the container\'s top and bottom inner spacing.', 'blocksy' ),
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'footerRowWidth' => [
				'label' => __( 'Row Container Width', 'blocksy' ),
				'type' => 'ct-radio',
				'value' => 'fixed',
				'view' => 'text',
				'design' => 'block',
				'setting' => [ 'transport' => 'postMessage' ],
				'choices' => [
					'fixed' => __( 'Fixed', 'blocksy' ),
					'fluid' => __( 'Fluid', 'blocksy' ),
				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],

			'footerRowVisibility' => [
				'label' => __( 'Row Visibility', 'blocksy' ),
				'type' => 'ct-visibility',
				'design' => 'block',
				'setting' => [ 'transport' => 'postMessage' ],

				'value' => [
					'desktop' => true,
					'tablet' => true,
					'mobile' => true,
				],

				'choices' => blocksy_ordered_keys([
					'desktop' => __( 'Desktop', 'blocksy' ),
					'tablet' => __( 'Tablet', 'blocksy' ),
					'mobile' => __( 'Mobile', 'blocksy' ),
				]),
			],

		],
	],

	blocksy_rand_md5() => [
		'title' => __( 'Design', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			'footerRowBackground' => [
				'label' => __( 'Row Background', 'blocksy' ),
				'type'  => 'ct-background',
				'design' => 'inline',
				'divider' => 'bottom',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $default_background
			],

			'footerRowTopDivider' => [
				'label' => __( 'Row Top Divider', 'blocksy' ),
				'type' => 'ct-border',
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => [
					'width' => 1,
					'style' => 'none',
					'color' => [
						'color' => '#dddddd',
					],
				]
			],

			'footerRowBottomDivider' => [
				'label' => __( 'Row Bottom Divider', 'blocksy' ),
				'type' => 'ct-border',
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => [
					'width' => 1,
					'style' => 'none',
					'color' => [
						'color' => '#dddddd',
					],
				]
			],

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'items_per_row' => '!1' ],
				'options' => [

					'footerColumnsDivider' => [
						'label' => __( 'Items Divider', 'blocksy' ),
						'type' => 'ct-border',
						'design' => 'inline',
						'desc' => __( 'Divider between columns, elements and widgets.', 'blocksy' ),
						'setting' => [ 'transport' => 'postMessage' ],
						'value' => [
							'width' => 1,
							'style' => 'none',
							'color' => [
								'color' => '#dddddd',
							],
						]
					],

				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'has_widget_areas' => 'yes' ],
				'options' => [
					blocksy_rand_md5() => [
						'type' => 'ct-divider',
					],

					'footerWidgetsTitleFont' => [
						'type' => 'ct-typography',
						'label' => __( 'Widgets Title Font', 'blocksy' ),
						'value' => blocksy_typography_default_values([
							'size' => '16px',
						]),
						'setting' => [ 'transport' => 'postMessage' ],
					],

					'footerWidgetsTitleColor' => [
						'label' => __( 'Widgets Title Font Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'block',
						'responsive' => true,
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

					'footerWidgetsFont' => [
						'type' => 'ct-typography',
						'label' => __( 'Widgets Font', 'blocksy' ),
						'value' => blocksy_typography_default_values([
							// 'size' => '16px',
						]),
						'divider' => 'top',
						'setting' => [ 'transport' => 'postMessage' ],
					],

					'rowFontColor' => [
						'label' => __( 'Widgets Font Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'block',
						'responsive' => true,
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
				]
			]


		],
	],
];
