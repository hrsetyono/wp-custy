<?php

$options = [

	blocksy_rand_md5() => [
		'title' => __( 'Page Title', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			blocksy_get_options('general/page-title', [
				'has_default' => true,
				'is_single' => true
			])

		],
	],

	blocksy_rand_md5() => [
		'title' => __( 'Page Structure', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			[
				'page_structure_type' => [
					'label' => __( 'Page Structure', 'blocksy' ),
					'type' => 'ct-image-picker',
					'value' => 'default',
					'design' => 'inline',
					'attr' => [
						'data-type' => 'background',
						'data-state' => 'sync',
					],
					'setting' => [ 'transport' => 'postMessage' ],
					'choices' => [

						'default' => [
							'src'   => blocksy_image_picker_url( 'default.svg' ),
							'title' => __( 'Inherit from customizer', 'blocksy' ),
						],

						'type-3' => [
							'src'   => blocksy_image_picker_url( 'narrow.svg' ),
							'title' => __( 'Narrow Width', 'blocksy' ),
						],

						'type-4' => [
							'src'   => blocksy_image_picker_url( 'normal.svg' ),
							'title' => __( 'Normal Width', 'blocksy' ),
						],

						'type-2' => [
							'src'   => blocksy_image_picker_url( 'left-single-sidebar.svg' ),
							'title' => __( 'Left Sidebar', 'blocksy' ),
						],

						'type-1' => [
							'src'   => blocksy_image_picker_url( 'right-single-sidebar.svg' ),
							'title' => __( 'Right Sidebar', 'blocksy' ),
						],

					],
				],

				'page_enable_vertical_spacing' => [
					'label' => __( 'Page Vertical Spacing', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'yes',
				],
			],

			apply_filters(
				'blocksy_extensions_metabox_page_bottom',
				[]
			)
		],
	],

];
