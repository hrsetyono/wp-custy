<?php
/**
 * Colors options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$options = [
	'colors_section_options' => [
		'type' => 'ct-options',
		'setting' => [ 'transport' => 'postMessage' ],
		'inner-options' => [

			'colorPalette' => [
				'label' => __( 'Color Palettes', 'blocksy' ),
				'type'  => 'ct-color-palettes-picker',
				'design' => 'block',
				'setting' => [ 'transport' => 'postMessage' ],
				'predefined' => true,
				'wrapperAttr' => [
					'data-type' => 'color-palette',
					'data-label' => 'heading-label'
				],

				'value' => [
					'color1' => [
						'color' => '#3eaf7c',
					],

					'color2' => [
						'color' => '#33a370',
					],

					'color3' => [
						'color' => 'rgba(44, 62, 80, 0.9)',
					],

					'color4' => [
						'color' => 'rgba(44, 62, 80, 1)',
					],

					'color5' => [
						'color' => '#ffffff',
					],

					'current_palette' => 'palette-1',

					'palettes' => [
						[
							'id' => 'palette-1',

							'color1' => [
								'color' => '#3eaf7c',
							],

							'color2' => [
								'color' => '#33a370',
							],

							'color3' => [
								'color' => 'rgba(44, 62, 80, 0.9)',
							],

							'color4' => [
								'color' => 'rgba(44, 62, 80, 1)',
							],

							'color5' => [
								'color' => '#ffffff',
							],
						],

						[
							'id' => 'palette-2',

							'color1' => [
								'color' => '#2872fa',
							],

							'color2' => [
								'color' => '#1559ed',
							],

							'color3' => [
								'color' => 'rgba(36,59,86,0.9)',
							],

							'color4' => [
								'color' => 'rgba(36,59,86,1)',
							],

							'color5' => [
								'color' => '#ffffff',
							],
						],

						[
							'id' => 'palette-3',

							'color1' => [
								'color' => '#FB7258',
							],

							'color2' => [
								'color' => '#F74D67',
							],

							'color3' => [
								'color' => '#6e6d76',
							],

							'color4' => [
								'color' => '#0e0c1b',
							],

							'color5' => [
								'color' => '#ffffff',
							],
						]
					]
				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-title',
				'label' => __( 'Global Colors', 'blocksy' ),
			],

			'fontColor' => [
				'label' => __( 'Base Font Color', 'blocksy' ),
				'type'  => 'ct-color-picker',
				'skipEditPalette' => true,
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],

				'value' => [
					'default' => [
						'color' => 'var(--paletteColor3)',
					],

					'hover' => [
						'color' => 'var(--paletteColor1)',
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
					],
				],
			],

			'content_elements_color_panel' => [
				'label' => __( 'Content Elements', 'blocksy' ),
				'type' => 'ct-panel',
				'value' => 'yes',
				'wrapperAttr' => [ 'data-panel' => 'only-arrow' ],
				'setting' => [ 'transport' => 'postMessage' ],
				'inner-options' => [

					blocksy_rand_md5() => [
						'type' => 'ct-title',
						'label' => __( 'Content Links', 'blocksy' ),
						'desc' => __( 'These options will affect only the links that are inside the posts & pages content area.', 'blocksy' ),
					],

					'content_link_type' => [
						'label' => __( 'Links Type', 'blocksy' ),
						'type' => 'ct-select',
						'value' => 'type-1',
						'view' => 'text',
						'design' => 'inline',
						'setting' => [ 'transport' => 'postMessage' ],
						'choices' => blocksy_ordered_keys(
							[
								'type-1' => __( 'Type 1', 'blocksy' ),
								'type-2' => __( 'Type 2', 'blocksy' ),
								'type-3' => __( 'Type 3', 'blocksy' ),
								'type-4' => __( 'Type 4', 'blocksy' ),
								'type-5' => __( 'Type 5', 'blocksy' ),
							]
						),
					],

					'contentLinksColor' => [
						'label' => __( 'Links Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'skipEditPalette' => true,
						'design' => 'inline',
						'setting' => [ 'transport' => 'postMessage' ],

						'value' => [
							'default' => [
								'color' => 'var(--paletteColor1)',
							],

							'hover' => [
								'color' => 'var(--colorHover)',
							],

							'text' => [
								'color' => '#ffffff',
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
							],

							[
								'title' => __( 'Text Alt', 'blocksy' ),
								'id' => 'text',
								'condition' => [ 'content_link_type' => 'type-4|type-5' ]
							],
						],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-title',
						'label' => __( 'Headings', 'blocksy' ),
						'desc' => __( 'These options will affect only the headings that are inside the posts & pages content area.', 'blocksy' ),
					],

					'h1Color' => [
						'label' => __( 'H1', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'skipEditPalette' => true,
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

					'h2Color' => [
						'label' => __( 'H2', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'inline',
						'skipEditPalette' => true,
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

					'h3Color' => [
						'label' => __( 'H3', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'inline',
						'skipEditPalette' => true,
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

					'h4Color' => [
						'label' => __( 'H4', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'inline',
						'skipEditPalette' => true,
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

					'h5Color' => [
						'label' => __( 'H5', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'inline',
						'skipEditPalette' => true,
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

					'h6Color' => [
						'label' => __( 'H6', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'inline',
						'skipEditPalette' => true,
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

				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
				'attr' => [ 'data-type' => 'small' ],
			],

			'buttonTextColor' => [
				'label' => __( 'Buttons Font Color', 'blocksy' ),
				'type'  => 'ct-color-picker',
				'design' => 'inline',
				'skipEditPalette' => true,
				'setting' => [ 'transport' => 'postMessage' ],

				'value' => [
					'default' => [
						'color' => '#ffffff',
					],

					'hover' => [
						'color' => '#ffffff',
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
					],
				],
			],

			'buttonColor' => [
				'label' => __( 'Buttons Background Color', 'blocksy' ),
				'type'  => 'ct-color-picker',
				'design' => 'inline',
				'skipEditPalette' => true,
				'setting' => [ 'transport' => 'postMessage' ],

				'value' => [
					'default' => [
						'color' => 'var(--paletteColor1)',
					],

					'hover' => [
						'color' => 'var(--paletteColor2)',
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
					],
				],
			],

		],
	],
];
