<?php

$options = [
	'single_categories_section_options' => [
		'type' => 'ct-options',
		'setting' => [ 'transport' => 'postMessage' ],
		'inner-options' => [

			[
				'categories_has_page_title' => [
					'label' => __( 'Page Title', 'blocksy' ),
					'type' => 'ct-panel',
					'switch' => true,
					'value' => 'yes',
					'wrapperAttr' => [ 'data-label' => 'heading-label' ],
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_get_options('general/page-title', [
							'prefix' => 'categories'
						]),

					],
				],
			],

			blocksy_get_options('general/posts-listing', [
				'prefix' => 'categories',
				'title' => __('categories', 'blocksy')
			]),

			[
				blocksy_rand_md5() => [
					'type'  => 'ct-title',
					'label' => __( 'Categories Elements', 'blocksy' ),
				],
			],

			blocksy_get_options('general/sidebar-particular', [
				'prefix' => 'categories',
			]),

		],
	],
];
