<?php
$defaults = my_get_default_mods();

/**
 * General options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$options = [ 'general_section_options' => [
	'type' => 'ct-options',
	'setting' => [ 'transport' => 'postMessage' ],
	'customizer_section' => 'layout',
	'inner-options' => [

		[
			'site_background' => [
				'label' => __( 'Site Background', 'blocksy' ),
				'type' => 'ct-background',
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $defaults['site_background'],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],

			'maxSiteWidth' => [
				'label' => __( 'Maximum Site Width', 'blocksy' ),
				'desc' => my_css_desc( [
					'--maxSiteWidth'
				] ),
				'type' => 'ct-slider',
				'value' => $defaults['maxSiteWidth'],
				'units' => [
					[ 'unit' => 'px', 'min' => 700, 'max' => 1920 ],
				],
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'contentAreaSpacing' => [
				'label' => __( 'Content Area Spacing', 'blocksy' ),
				'desc' => '<p>Main content area top and bottom spacing.</p>' . 
					my_css_desc( [
						'--contentAreaSpacing'
					] ),
				'type' => 'ct-slider',
				'value' => $defaults['contentAreaSpacing'],
				'units' => blocksy_units_config([
					[ 'unit' => 'px', 'min' => 0, 'max' => 100 ],
				]),
				'responsive' => true,
				'divider' => 'top',
				'setting' => [ 'transport' => 'postMessage' ]
			],

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],

			// TODO deprecated?
			'narrowContainerWidth' => [
				'label' => __( 'Narrow Container Width', 'blocksy' ),
				'desc' => '<p>This option will apply only on single posts & pages that have a Narrow Width page structure.</p>' . 
					my_css_desc( [
						'--narrowContainerWidth',
						'--narrowContainerWidthNoUnit'
					] ),
				'type' => 'ct-slider',
				'value' => $defaults['narrowContainerWidth'],
				'units' => [
					[ 'unit' => '%', 'min' => 40, 'max' => 95 ],
				],
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'wideOffset' => [
				'label' => __( 'Wide Alignment Offset', 'blocksy' ),
				'desc' => '<p>This option will apply only to those elements that have a wide alignment option.</p>' .
				  my_css_desc( [
						'--wideOffset'
					] ),
				'type' => 'ct-slider',
				'value' => $defaults['wideOffset'],
				'units' => [
					[ 'unit' => 'px', 'min' => 50, 'max' => 200 ],
				],
				'divider' => 'top',
				'setting' => [ 'transport' => 'postMessage' ],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],
		],

		'has_back_top' => [
			'label' => __( 'Scroll to Top', 'blocksy' ),
			'desc' => 'Vars are applied to <code>.ct-back-to-top</code>',
			'type' => 'ct-panel',
			'switch' => true,
			'value' => $defaults['has_back_top'],
			'setting' => [ 'transport' => 'postMessage' ],
			'inner-options' => [

				blocksy_rand_md5() => [
					'title' => __( 'General', 'blocksy' ),
					'type' => 'tab',
					'options' => [

						'top_button_type' => [
							'label' => false,
							'type' => 'ct-image-picker',
							'value' => $defaults['top_button_type'],
							'attr' => [
								'data-type' => 'background',
								'data-columns' => '3',
							],
							'setting' => [ 'transport' => 'postMessage' ],
							'choices' => [

								'type-1' => [
									'src'   => blocksy_image_picker_file( 'top-1' ),
									'title' => __( 'Type 1', 'blocksy' ),
								],

								'type-2' => [
									'src'   => blocksy_image_picker_file( 'top-2' ),
									'title' => __( 'Type 2', 'blocksy' ),
								],

								'type-3' => [
									'src'   => blocksy_image_picker_file( 'top-3' ),
									'title' => __( 'Type 3', 'blocksy' ),
								],
							],
						],

						'top_button_shape' => [
							'label' => __( 'Button Shape', 'blocksy' ),
							'type' => 'ct-radio',
							'value' => $defaults['top_button_shape'],
							'view' => 'text',
							'inline' => true,
							'design' => 'block',
							'divider' => 'top',
							'setting' => [ 'transport' => 'postMessage' ],
							'choices' => [
								'square' => __( 'Square', 'blocksy' ),
								'circle' => __( 'Circle', 'blocksy' ),
							],
						],

						'topButtonOffset' => [
							'label' => __( 'Button Offset', 'blocksy' ),
							'desc' => my_css_desc( [
								'--bottom'
							] ),
							'type' => 'ct-slider',
							'value' => $defaults['topButtonOffset'],
							'responsive' => true,
							'divider' => 'top',
							'units' => [
								[ 'unit' => 'px', 'min' => 0, 'max' => 50 ],
								[ 'unit' => 'rem', 'min' => 0, 'max' => 3 ],
							],
							'setting' => [ 'transport' => 'postMessage' ],
						],

						'top_button_alignment' => [
							'label' => __( 'Alignment', 'blocksy' ),
							'type' => 'ct-radio',
							'value' => $defaults['top_button_alignment'],
							'setting' => [ 'transport' => 'postMessage' ],
							'view' => 'text',
							'divider' => 'top',
							'attr' => [ 'data-type' => 'alignment' ],
							'choices' => [
								'left' => '',
								'right' => '',
							],
						],

						blocksy_rand_md5() => [
							'type' => 'ct-divider',
						],

						'back_top_visibility' => [
							'label' => __( 'Visibility', 'blocksy' ),
							'type' => 'ct-visibility',
							'design' => 'block',
							'setting' => [ 'transport' => 'postMessage' ],
							'value' => $defaults['back_top_visibility'],
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

						'topButtonIconColor' => [
							'label' => __( 'Icon Color', 'blocksy' ),
							'desc' => my_css_desc( [
								'--color',
								'--colorHover'
							] ),
							'type'  => 'ct-color-picker',
							'design' => 'inline',
							'setting' => [ 'transport' => 'postMessage' ],
							'value' => $defaults['topButtonIconColor'],
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

						'topButtonShapeBackground' => [
							'label' => __( 'Shape Background', 'blocksy' ),
							'desc' => my_css_desc( [
								'--backgroundColor',
								'--backgroundColorHover'
							] ),
							'type'  => 'ct-color-picker',
							'design' => 'inline',
							'setting' => [ 'transport' => 'postMessage' ],
							'value' => $defaults['topButtonShapeBackground'],
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

						'topButtonShadow' => [
							'label' => __( 'Shadow', 'blocksy' ),
							'desc' => my_css_desc( [
								'--boxShadow',
							] ),
							'type' => 'ct-select',
							'value' => $defaults['topButtonShadow'],
							'view' => 'text',
							'design' => 'inline',
							'setting' => [ 'transport' => 'postMessage' ],
							'choices' => my_shadow_choices(),
						],
					],
				],

			],
		],


		'has_passepartout' => [
			'label' => __( 'Viewport Frame', 'blocksy' ),
			'desc' => 'Vars are applied to <code>.ct-passepartout</code>',
			'type' => 'ct-panel',
			'switch' => true,
			'value' => $defaults['has_passepartout'],
			'setting' => [ 'transport' => 'postMessage' ],
			'inner-options' => [
				'passepartoutSize' => [
					'label' => __( 'Size' ),
					'desc' => my_css_desc( [
						'--passepartoutSize',
					] ),
					'type' => 'ct-slider',
					'responsive' => true,
					'units' => [
						[ 'unit' => 'px', 'min' => 0, 'max' => 50 ],
					],
					'value' => $defaults['passepartoutSize'],
					'setting' => [ 'transport' => 'postMessage' ],
				],
				'passepartoutColor' => [
					'label' => __( 'Color' ),
					'desc' => my_css_desc( [
						'--passepartoutColor',
					] ),
					'type'  => 'ct-color-picker',
					'design' => 'inline',
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => $defaults['passepartoutColor'],
					'pickers' => [
						[
							'title' => __( 'Initial', 'blocksy' ),
							'id' => 'default',
						],
					],
				],
			],
		],

	], ],

	'customizer_color_scheme' => [
		'label' => __( 'Color scheme', 'blocksy' ),
		'type' => 'hidden',
		'label' => '',
		'value' => 'no',
		'setting' => [ 'transport' => 'postMessage' ],
	],
];
