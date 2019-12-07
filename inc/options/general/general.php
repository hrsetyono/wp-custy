<?php
/**
 * General options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$options = [
	'general_section_options' => [
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
					'value' => blocksy_background_default_value([
						'backgroundColor' => [
							'default' => [
								'color' => '#f8f9fb'
							],
						],
					])
				],

				blocksy_rand_md5() => [
					'type' => 'ct-divider',
				],

				'maxSiteWidth' => [
					'label' => __( 'Maximum Site Width', 'blocksy' ),
					'type' => 'ct-slider',
					'value' => 1290,
					'min' => 700,
					'max' => 1900,
					'setting' => [ 'transport' => 'postMessage' ],
				],

				'contentAreaSpacing' => [
					'label' => __( 'Content Area Spacing', 'blocksy' ),
					'type' => 'ct-slider',
					'value' => [
						'desktop' => '80px',
						'tablet' => '60px',
						'mobile' => '50px',
					],
					'units' => blocksy_units_config([
						[ 'unit' => 'px', 'min' => 0, 'max' => 300 ],
					]),
					'responsive' => true,
					'divider' => 'top',
					'setting' => [ 'transport' => 'postMessage' ],
					'desc' => __( 'Main content area top and bottom spacing.', 'blocksy' ),
				],

				blocksy_rand_md5() => [
					'type' => 'ct-divider',
				],

				'narrowContainerWidth' => [
					'label' => __( 'Narrow Container Width', 'blocksy' ),
					'type' => 'ct-slider',
					'defaultUnit' => '%',
					'value' => 60,
					'min' => 40,
					'max' => 95,
					'setting' => [ 'transport' => 'postMessage' ],
					'desc' => __( 'This option will apply only on single posts & pages that have a Narrow Width page structure.', 'blocksy' ),
				],

				'wideOffset' => [
					'label' => __( 'Wide Alignment Offset', 'blocksy' ),
					'type' => 'ct-slider',
					'defaultUnit' => 'px',
					'value' => 130,
					'min' => 50,
					'max' => 200,
					'divider' => 'top',
					'setting' => [ 'transport' => 'postMessage' ],
					'desc' => __( 'This option will apply only to those elements that have a wide alignment option.', 'blocksy' ),
				],

				blocksy_rand_md5() => [
					'type' => 'ct-divider',
				],
			],

			
			blocksy_get_options('general/form-elements'),


			'has_back_top' => [
				'label' => __( 'Scroll to Top', 'blocksy' ),
				'type' => 'ct-panel',
				'switch' => true,
				'value' => 'no',
				'setting' => [ 'transport' => 'postMessage' ],
				'inner-options' => [

					blocksy_rand_md5() => [
						'title' => __( 'General', 'blocksy' ),
						'type' => 'tab',
						'options' => [

							'top_button_type' => [
								'label' => false,
								'type' => 'ct-image-picker',
								'value' => 'type-1',
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
								'value' => 'square',
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
								'label' => __( 'Bottom Offset', 'blocksy' ),
								'type' => 'ct-slider',
								'min' => 25,
								'max' => 300,
								'value' => 25,
								'responsive' => true,
								'divider' => 'top',
								'setting' => [ 'transport' => 'postMessage' ],
							],

							'top_button_alignment' => [
								'label' => __( 'Alignment', 'blocksy' ),
								'type' => 'ct-radio',
								'value' => 'right',
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

						],
					],

					blocksy_rand_md5() => [
						'title' => __( 'Design', 'blocksy' ),
						'type' => 'tab',
						'options' => [

							'topButtonIconColor' => [
								'label' => __( 'Icon Color', 'blocksy' ),
								'type'  => 'ct-color-picker',
								'design' => 'inline',
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

							'topButtonShapeBackground' => [
								'label' => __( 'Shape Background Color', 'blocksy' ),
								'type'  => 'ct-color-picker',
								'design' => 'inline',
								'setting' => [ 'transport' => 'postMessage' ],

								'value' => [
									'default' => [
										'color' => 'var(--paletteColor3)',
									],

									'hover' => [
										'color' => 'var(--paletteColor4)',
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

							'topButtonShadow' => [
								'label' => __( 'Shadow', 'blocksy' ),
								'type' => 'ct-box-shadow',
								'divider' => 'top',
								'responsive' => true,
								'setting' => [ 'transport' => 'postMessage' ],
								'value' => blocksy_box_shadow_value([
									'enable' => false,
									'h_offset' => 0,
									'v_offset' => 5,
									'blur' => 20,
									'spread' => 0,
									'inset' => false,
									'color' => [
										'color' => 'rgba(210, 213, 218, 0.2)',
									],
								])
							],

						],
					],

				],
			],


			'has_passepartout' => [
				'label' => __( 'Viewport Frame', 'blocksy' ),
				'type' => 'ct-panel',
				'switch' => true,
				'value' => 'no',
				'setting' => [ 'transport' => 'postMessage' ],
				'inner-options' => [

					'passepartoutSize' => [
						'label' => __( 'Frame Size', 'blocksy' ),
						'type' => 'ct-slider',
						'min' => 0,
						'max' => 50,
						'responsive' => true,
						'value' => [
							'mobile' => 0,
							'tablet' => 10,
							'desktop' => 10,
						],
						'setting' => [ 'transport' => 'postMessage' ],
					],

					'passepartoutColor' => [
						'label' => __( 'Frame Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'inline',
						'setting' => [ 'transport' => 'postMessage' ],
						'value' => [
							'default' => [
								'color' => 'var(--paletteColor1)',
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

		],
	],

	'customizer_color_scheme' => [
		'label' => __( 'Color scheme', 'blocksy' ),
		'type' => 'hidden',
		'label' => '',
		'value' => 'no',
		'setting' => [ 'transport' => 'postMessage' ],
	],
];
