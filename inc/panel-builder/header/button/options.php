<?php

$options = [
	blocksy_rand_md5() => [
		'title' => __( 'General', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			'header_button_type' => [
				'label' => false,
				'type' => 'ct-image-picker',
				'value' => 'type-1',
				'attr' => [ 'data-type' => 'background' ],
				'setting' => [ 'transport' => 'postMessage' ],
				'choices' => [

					'type-1' => [
						'src'   => blocksy_image_picker_file( 'button-1' ),
						'title' => __( 'Default', 'blocksy' ),
					],

					'type-2' => [
						'src'   => blocksy_image_picker_file( 'button-2' ),
						'title' => __( 'Ghost', 'blocksy' ),
					],

				],
			],

			'header_button_size' => [
				'label' => __('Size', 'blocksy'),
				'type' => 'ct-radio',
				'value' => 'medium',
				'view' => 'text',
				'design' => 'block',
				'divider' => 'bottom',
				'setting' => [ 'transport' => 'postMessage' ],
				'choices' => [
					'small' => __( 'Small', 'blocksy' ),
					'medium' => __( 'Medium', 'blocksy' ),
					'large' => __( 'Large', 'blocksy' ),
				],
			],

			'header_button_text' => [
				'label' => __( 'Label', 'blocksy' ),
				'type' => 'text',
				'design' => 'inline',
				'value' => __( 'Download', 'blocksy' ),
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'header_button_link' => [
				'label' => __( 'URL', 'blocksy' ),
				'type' => 'text',
				'design' => 'inline',
				'value' => '',
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'header_button_target' => [
				'label' => __( 'Open in a new tab', 'blocksy' ),
				'type'  => 'ct-switch',
				'value' => 'no',
				'divider' => 'bottom',
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'header_button_effect' => [
				'label' => __( 'Hover Effect', 'blocksy' ),
				'type'  => 'ct-switch',
				'value' => 'no',
				'desc' => __( 'This option will enable a nice hover effect with shadow and transform.', 'blocksy' ),
				'setting' => [ 'transport' => 'postMessage' ],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'wp_customizer_current_view' => 'mobile' ],
				'options' => [

					blocksy_rand_md5() => [
						'type' => 'ct-divider',
					],

					'visibility' => [
						'label' => __( 'Visibility', 'blocksy' ),
						'type' => 'ct-visibility',
						'design' => 'block',
						'setting' => [ 'transport' => 'postMessage' ],
						'allow_empty' => true,
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

			'headerButtonFontColor' => [
				'label' => __( 'Font Color', 'blocksy' ),
				'type'  => 'ct-color-picker',
				'design' => 'block',
				'divider' => 'bottom',
				'responsive' => true,
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

			'headerButtonForeground' => [
				'label' => __( 'Background Color', 'blocksy' ),
				'label' => [
					__('Background Color', 'blocksy') => [
						'header_button_type' => 'type-1'
					],

					__('Border Color', 'blocksy') => [
						'header_button_type' => 'type-2'
					]
				],
				'type'  => 'ct-color-picker',
				'design' => 'block',
				'divider' => 'bottom',
				'responsive' => true,
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


			'headerCtaMargin' => [
				'label' => __( 'Margin', 'blocksy' ),
				'type' => 'ct-spacing',
				'divider' => 'bottom',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => blocksy_spacing_value([
					'linked' => true,
				]),
				'responsive' => true,
			],

			'headerCtaRadius' => [
				'label' => __( 'Border Radius', 'blocksy' ),
				'type' => 'ct-spacing',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => blocksy_spacing_value([
					'linked' => true,
				]),
				'responsive' => true
			],

		],
	],
];
