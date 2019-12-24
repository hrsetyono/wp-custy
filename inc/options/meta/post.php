<?php

$options = [

	blocksy_rand_md5() => [
		'title' => __( 'Post Title', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			blocksy_get_options('general/page-title', [
				'has_default' => true,
				'is_single' => true
			])

		],
	],

	blocksy_rand_md5() => [
		'title' => __( 'Post Structure', 'blocksy' ),
		'type' => 'tab',
		'options' => [

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
	],

	blocksy_rand_md5() => [
		'title' => __( 'Post Elements', 'blocksy' ),
		'type' => 'tab',
		'options' => [
			[
				'disable_featured_image' => [
					'label' => __( 'Disable Featured Image', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'no',
				],

				'disable_post_tags' => [
					'label' => __( 'Disable Post Tags', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'no',
				],

				'disable_share_box' => [
					'label' => __( 'Disable Share Box', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'no',
				],

				'disable_author_box' => [
					'label' => __( 'Disable Author Box', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'no',
				],

				'disable_posts_navigation' => [
					'label' => __( 'Disable Posts Navigation', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'no',
				],

				'disable_related_posts' => [
					'label' => __( 'Disable Related Posts', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'no',
				],
			],

			apply_filters(
				'blocksy_extensions_metabox_post_bottom',
				[]
			)
		],
	],

];
