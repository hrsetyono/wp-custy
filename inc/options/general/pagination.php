<?php


if (! isset($prefix)) {
	$prefix = '';
	$initial_prefix = '';
} else {
	$initial_prefix = $prefix;
	$prefix = $prefix . '_';
}

$selectors = [
	'woo' => 'body.woocommerce',
	'blog' => 'body:not(.woocommerce)'
];

$options = [
	'pagination_section_panel' => [
		'label' => __( 'Pagination', 'blocksy' ),
		'type' => 'ct-panel',
		'value' => 'yes',
		'wrapperAttr' => [ 'data-panel' => 'only-arrow' ],
		'setting' => [ 'transport' => 'postMessage' ],
		'inner-options' => [

			blocksy_rand_md5() => [
				'title' => __( 'General', 'blocksy' ),
				'type' => 'tab',
				'options' => [

					$prefix . 'pagination_global_type' => [
						'label' => __( 'Pagination Type', 'blocksy' ),
						'type' => 'ct-select',
						'value' => 'simple',
						'view' => 'text',
						'design' => 'inline',
						'setting' => [ 'transport' => 'postMessage' ],
						'choices' => blocksy_ordered_keys(
							[
								'simple' => __( 'Standard', 'blocksy' ),
								'next_prev' => __( 'Next/Prev', 'blocksy' ),
								'load_more' => __( 'Load More', 'blocksy' ),
								'infinite_scroll' => __( 'Infinite Scroll', 'blocksy' ),
							]
						),

						'selective_refresh' => [
							[
								'id' => $prefix . 'pagination_global_type',
								'container_inclusive' => true,
								'selector' => $selectors[$initial_prefix] . ' .ct-pagination',
								'fallbackRefresh' => false,
								'render_callback' => function () use ($initial_prefix) {
									/**
									 * Note to code reviewers: This line doesn't need to be escaped.
									 * Function blocksy_display_posts_pagination() used here escapes the value properly.
									 */
									echo blocksy_display_posts_pagination([
										'source' => [
											'strategy' => 'customizer',
											'prefix' => $initial_prefix
										]
									]);
								}
							]
						],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [
							$prefix . 'pagination_global_type' => 'load_more'
						],
						'options' => [

							$prefix . 'load_more_label' => [
								'label' => __( 'Label', 'blocksy' ),
								'type' => 'text',
								'design' => 'inline',
								'value' => __( 'Load More', 'blocksy' ),
								'setting' => [ 'transport' => 'postMessage' ],
							],

						],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-divider',
						'attr' => [ 'data-type' => 'small' ],
					],

					$prefix . 'paginationSpacing' => [
						'label' => __( 'Pagination Top Spacing', 'blocksy' ),
						'type' => 'ct-slider',
						'min' => 0,
						'max' => 200,
						'responsive' => true,
						'value' => [
							'mobile' => 50,
							'tablet' => 60,
							'desktop' => 80,
						],
						'setting' => [ 'transport' => 'postMessage' ],
					],

				],
			],

			blocksy_rand_md5() => [
				'title' => __( 'Design', 'blocksy' ),
				'type' => 'tab',
				'options' => [

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [
							$prefix . 'pagination_global_type' => 'simple|next_prev'
						],
						'options' => [

							$prefix . 'simplePaginationFontColor' => [
								'label' => __( 'Colors', 'blocksy' ),
								'type'  => 'ct-color-picker',
								'design' => 'inline',
								'setting' => [ 'transport' => 'postMessage' ],
								'value' => [
									'default' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
									],

									'active' => [
										'color' => '#ffffff',
									],

									'hover' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
									],
								],

								'pickers' => [
									[
										'title' => __( 'Text Initial', 'blocksy' ),
										'id' => 'default',
										'inherit' => 'var(--color)'
									],

									[
										'title' => __( 'Text Active', 'blocksy' ),
										'id' => 'active',
										'condition' => [ 'pagination_global_type' => 'simple' ]
									],

									[
										'title' => __( 'Accent', 'blocksy' ),
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
							$prefix . 'pagination_global_type' => 'load_more'
						],
						'options' => [

							$prefix . 'paginationButtonText' => [
								'label' => __( 'Font Color', 'blocksy' ),
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

							$prefix . 'paginationButton' => [
								'label' => __( 'Button Color', 'blocksy' ),
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
										'inherit' => 'var(--buttonInitialColor)'
									],

									[
										'title' => __( 'Hover', 'blocksy' ),
										'id' => 'hover',
										'inherit' => 'var(--buttonHoverColor)'
									],
								],
							],

						],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [
							$prefix . 'pagination_global_type' => '!infinite_scroll'
						],
						'options' => [

							$prefix . 'paginationDivider' => [
								'label' => __( 'Divider', 'blocksy' ),
								'type' => 'ct-border',
								'design' => 'inline',
								'divider' => 'top',
								'setting' => [ 'transport' => 'postMessage' ],
								'value' => [
									'width' => 1,
									'style' => 'none',
									'color' => [
										'color' => 'rgba(224, 229, 235, 0.5)',
									],
								]
							],

						],
					],

				],
			],
		],
	],
];
