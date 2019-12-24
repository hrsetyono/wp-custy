<?php
$defaults = my_get_default_mods();

/**
 * Colors options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$options = [ 'colors_section_options' => [
	'type' => 'ct-options',
	'setting' => [ 'transport' => 'postMessage' ],
	'inner-options' => [

		'colorPalette' => [
			'label' => __( 'Color Palettes', 'blocksy' ),
			'desc' => "<code>--c1</code> to <code>--c5</code>
			<ul>
			<li>Color 1 is main color </li>
			<li>Color 2 is darker main color </li>
			<li>Color 3 is lighter main color </li>
			<li>Color 4 is text color</li>
			<li>Color 5 is panel color</li>
			</ul>",
			'type'  => 'ct-color-palettes-picker',
			'design' => 'block',
			'setting' => [ 'transport' => 'postMessage' ],
			'predefined' => true,


			'value' => wp_parse_args( $defaults['colorPalette'], [
				'current_palette' => 'palette-1',
				'palettes' => [
					[
						'id' => 'palette-1',

						'color1' => [
							'color' => '#1976d2',
						],
						'color2' => [
							'color' => '#0d47a1',
						],
						'color3' => [
							'color' => '#bbdefb',
						],
						'color4' => [
							'color' => '#2c3e50',
						],
						'color5' => [
							'color' => '#ffffff',
						],
					],
					[
						'id' => 'palette-2',

						'color1' => [
							'color' => '#d32f2f',
						],
						'color2' => [
							'color' => '#b71c1c',
						],
						'color3' => [
							'color' => '#ffcdd2',
						],
						'color4' => [
							'color' => '#2c3e50',
						],
						'color5' => [
							'color' => '#ffffff',
						],
					],
					[
						'id' => 'palette-3',

						'color1' => [
							'color' => '#43a047',
						],
						'color2' => [
							'color' =>  '#2E7D32',
						],
						'color3' => [
							'color' => '#c8E6c9',
						],
						'color4' => [
							'color' => '#2c3e50',
						],
						'color5' => [
							'color' => '#ffffff',
						],
					]
				]
			] ),
		],

		blocksy_rand_md5() => [
			'type' => 'ct-title',
			'label' => __( 'Global Colors', 'blocksy' ),
		],

		'fontColor' => [
			'label' => __( 'Font Color', 'blocksy' ),
			'desc' => '<code>--color</code>, <code>--colorHover</code>',
			'type'  => 'ct-color-picker',
			'skipEditPalette' => true,
			'design' => 'inline',
			'setting' => [ 'transport' => 'postMessage' ],
			'value' => $defaults['fontColor'],

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

		'headingColor' => [
			'label' => __( 'Heading Color', 'blocksy' ),
			'desc' => '<code>--headingColor</code>',
			'type'  => 'ct-color-picker',
			'skipEditPalette' => true,
			'design' => 'inline',
			'setting' => [ 'transport' => 'postMessage' ],
			'value' => $defaults['headingColor'],
			'pickers' => [
				[
					'title' => __( 'Initial', 'blocksy' ),
					'id' => 'default',
				],
			],
		],

		blocksy_rand_md5() => [
			'label' => __( 'Button', 'blocksy' ),
			'type' => 'ct-title',
		],

		'buttonTextColor' => [
			'label' => __( 'Button Text Color', 'blocksy' ),
			'desc' => '<code>--buttonTextInitialColor</code>, <code>--buttonTextHoverColor</code>',
			'type'  => 'ct-color-picker',
			'design' => 'inline',
			'skipEditPalette' => true,
			'setting' => [ 'transport' => 'postMessage' ],
			'value' => $defaults['buttonTextColor'],
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
			'label' => __( 'Button Color', 'blocksy' ),
			'desc' => '<code>--buttonInitialColor</code>, <code>--buttonHoverColor</code>',
			'type'  => 'ct-color-picker',
			'design' => 'inline',
			'skipEditPalette' => true,
			'setting' => [ 'transport' => 'postMessage' ],
			'value' => $defaults['buttonColor'],
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


		blocksy_rand_md5() => [
			'type' => 'ct-title',
			'label' => __( 'Content Links', 'blocksy' ),
			'desc' => __( 'These options will affect only the links that are inside the posts & pages content area.', 'blocksy' ),
		],

		'contentLinkType' => [
			'label' => __( 'Content Link Type', 'blocksy' ),
			'type' => 'ct-select',
			'value' => $defaults['contentLinkType'],
			'view' => 'text',
			'design' => 'inline',
			'setting' => [ 'transport' => 'postMessage' ],
			'choices' => blocksy_ordered_keys(
				[
					'type-1' => __( '1 - Normal', 'blocksy' ),
					'type-2' => __( '2 - Underline', 'blocksy' ),
					'type-3' => __( '3 - Underline on Hover', 'blocksy' ),
					'type-4' => __( '4 - Background on Hover', 'blocksy' ),
					// 'type-5' => __( '5 - Type 4 but from Left', 'blocksy' ),
				]
			),
		],

		'contentLinksColor' => [
			'label' => __( 'Content Links Color', 'blocksy' ),
			'desc' => '<code>--entryLinkColor</code>, <code>--entryLinkColorHover</code> <br> Only for type 4: <code>--entryLinkTextColor</code>',
			'type'  => 'ct-color-picker',
			'skipEditPalette' => true,
			'design' => 'inline',
			'setting' => [ 'transport' => 'postMessage' ],
			'value' => $defaults['contentLinksColor'],
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
					'condition' => [ 'contentLinkType' => 'type-4|type-5' ]
				],
			],
		],


	],
], ];
