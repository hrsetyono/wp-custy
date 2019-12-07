<?php

$options = [
	'woo_categories_section_options' => [
		'type' => 'ct-options',
		'setting' => [ 'transport' => 'postMessage' ],
		'inner-options' => [
			[
				'woo_categories_has_page_title' => [
					'label' => __( 'Shop Page Title', 'blocksy' ),
					'type' => 'ct-panel',
					'switch' => true,
					'value' => 'yes',
					'wrapperAttr' => [ 'data-label' => 'heading-label' ],
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_get_options('general/page-title', [
							'prefix' => 'woo_categories',
							'is_woo' => true
						]),

					],
				],

				blocksy_rand_md5() => [
					'type'  => 'ct-title',
					'label' => __( 'Shop Page Structure', 'blocksy' ),
				],

				'shop_structure' => [
					'label' => false,
					'type' => 'ct-image-picker',
					'value' => 'grid',
					'attr' => [ 'data-type' => 'background' ],
					'setting' => [ 'transport' => 'postMessage' ],
					'choices' => [

						'grid' => [
							'src'   => blocksy_image_picker_url( 'grid.svg' ),
							'title' => __( 'Grid', 'blocksy' ),
						],

						'shop-simple' => [
							'src'   => blocksy_image_picker_url( 'simple.svg' ),
							'title' => __( 'Simple', 'blocksy' ),
						],

					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-divider',
					'attr' => [ 'data-type' => 'small' ]
				],

				'product_card_options_panel' => [
					'label' => __( 'Cards Options', 'blocksy' ),
					'type' => 'ct-panel',
					'wrapperAttr' => [ 'data-panel' => 'only-arrow' ],
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_rand_md5() => [
							'title' => __( 'General', 'blocksy' ),
							'type' => 'tab',
							'options' => [
								[

									'woocommerce_thumbnail_image_width' => [
										'type' => 'text',
										'label' => __('Thumbnail width', 'blocksy'),
										'value' => 500,
										'design' => 'inline',
										'setting' => [
											'type' => 'option',
											'capability' => 'manage_woocommerce',
										]
									],

									'woocommerce_thumbnail_cropping' => [
										'label' => __('Thumbnail cropping', 'blocksy'),
										'type' => 'ct-select',
										'value' => '1:1',
										'view' => 'text',
										'design' => 'inline',
										'setting' => [ 'type' => 'option' ],
										'choices' => blocksy_ordered_keys(
											[
												'1:1' => '1:1',
												'custom' => __( 'Custom', 'blocksy' ),
												'uncropped' => __( 'Uncropped', 'blocksy' ),
											]
										),
									],

									blocksy_rand_md5() => [
										'type' => 'ct-condition',
										'condition' => [ 'woocommerce_thumbnail_cropping' => 'custom' ],
										'options' => [

											blocksy_rand_md5() => [
												'type' => 'ct-group',
												'attr' => [ 'data-columns' => '2' ],
												'options' => [

													'woocommerce_thumbnail_cropping_custom_width' => [
														'label' => false,
														'type' => 'text',
														'value' => 4,
														'setting' => [
															'type' => 'option',
															'capability' => 'manage_woocommerce',

														],
														'disableRevertButton' => true,
														'desc' => __('Width', 'blocksy'),
													],


													'woocommerce_thumbnail_cropping_custom_height' => [
														'label' => false,
														'type' => 'text',
														'value' => 3,
														'setting' => [
															'type' => 'option',
															'capability' => 'manage_woocommerce',

														],
														'disableRevertButton' => true,
														'desc' => __('Height', 'blocksy'),
													],

												],
											],

										],
									],

									'has_star_rating' => [
										'label' => __( 'Star Rating', 'blocksy' ),
										'type' => 'ct-switch',
										'value' => 'yes',
										'divider' => 'top',
										'setting' => [ 'transport' => 'postMessage' ],
									],

									'has_sale_badge' => [
										'label' => __( 'Sale Badge', 'blocksy' ),
										'type' => 'ct-switch',
										'value' => 'yes',
										'setting' => [ 'transport' => 'postMessage' ],
									],

									'has_product_categories' => [
										'label' => __( 'Product Categories', 'blocksy' ),
										'type' => 'ct-switch',
										'value' => 'yes',
										'setting' => [ 'transport' => 'postMessage' ],
									],
								],

								apply_filters(
									'blocksy_woo_card_options_elements',
									[]
								),

								[
									blocksy_rand_md5() => [
										'type' => 'ct-divider',
									],

									blocksy_rand_md5() => [
										'type' => 'ct-condition',
										'condition' => [ 'shop_structure' => 'grid' ],
										'options' => [

											'shop_columns' => [
												'label' => __( 'Products Per Row', 'blocksy' ),
												'type' => 'ct-number',
												'value' => 3,
												'min' => 2,
												'max' => 4,
												'design' => 'inline',
												'setting' => [ 'transport' => 'postMessage' ],
											],

										],
									],

									'shop_products' => [
										'label' => __( 'Products Per Page', 'blocksy' ),
										'type' => 'ct-number',
										'value' => 9,
										'min' => 1,
										'max' => 30,
										'design' => 'inline',
										'setting' => [ 'transport' => 'postMessage' ],
									],

									'shopCardsGap' => [
										'label' => __( 'Cards Gap', 'blocksy' ),
										'type' => 'ct-slider',
										'min' => 0,
										'max' => 100,
										'responsive' => true,
										'value' => [
											'mobile' => 30,
											'tablet' => 30,
											'desktop' => 30,
										],
										'divider' => 'top',
										'setting' => [ 'transport' => 'postMessage' ],
									],
								],

							],
						],

						blocksy_rand_md5() => [
							'title' => __( 'Design', 'blocksy' ),
							'type' => 'tab',
							'options' => [

								'cardProductTitleFont' => [
									'type' => 'ct-typography',
									'label' => __( 'Title Font', 'blocksy' ),
									'value' => blocksy_typography_default_values([
										'size' => '17px',
										'variation' => 'n5',
									]),
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'cardProductTitleColor' => [
									'label' => __( 'Title Color', 'blocksy' ),
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
											'inherit' => 'var(--color)'
										],

										[
											'title' => __( 'Hover', 'blocksy' ),
											'id' => 'hover',
											'inherit' => 'var(--colorHover)'
										],
									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-divider',
									'attr' => [ 'data-type' => 'small' ]
								],

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [ 'has_star_rating' => 'yes' ],
									'options' => [

										'cardStarRatingColor' => [
											'label' => __( 'Star Rating Color', 'blocksy' ),
											'type'  => 'ct-color-picker',
											'design' => 'inline',
											'setting' => [ 'transport' => 'postMessage' ],

											'value' => [
												'default' => [
													'color' => '#FDA256',
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
									'type' => 'ct-condition',
									'condition' => [ 'has_sale_badge' => 'yes' ],
									'options' => [

										'saleBadgeColor' => [
											'label' => __( 'Sale Badge Color', 'blocksy' ),
											'type'  => 'ct-color-picker',
											'design' => 'inline',
											'setting' => [ 'transport' => 'postMessage' ],

											'value' => [
												'background' => [
													'color' => 'var(--paletteColor1)',
												],

												'text' => [
													'color' => '#ffffff',
												],
											],

											'pickers' => [
												[
													'title' => __( 'Background', 'blocksy' ),
													'id' => 'background',
												],

												[
													'title' => __( 'Text', 'blocksy' ),
													'id' => 'text',
												],
											],
										],

									],
								],

								'cardProductImageOverlay' => [
									'label' => __( 'Image Overlay Color', 'blocksy' ),
									'type'  => 'ct-color-picker',
									'design' => 'inline',
									'setting' => [ 'transport' => 'postMessage' ],

									'value' => [
										'default' => [
											'color' => Blocksy_Css_Injector::get_skip_rule_keyword(),
										],
									],

									'pickers' => [
										[
											'title' => __( 'Initial', 'blocksy' ),
											'id' => 'default',
										],
									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [ 'has_product_categories' => 'yes' ],
									'options' => [

										'cardProductCategoriesColor' => [
											'label' => __( 'Categories Color', 'blocksy' ),
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
													'inherit' => 'var(--color)'
												],

												[
													'title' => __( 'Hover', 'blocksy' ),
													'id' => 'hover',
													'inherit' => 'var(--colorHover)'
												],
											],
										],

									],
								],

								'cardProductPriceColor' => [
									'label' => __( 'Price Color', 'blocksy' ),
									'type'  => 'ct-color-picker',
									'design' => 'inline',
									'setting' => [ 'transport' => 'postMessage' ],

									'value' => [
										'default' => [
											'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
										],
									],

									'pickers' => [
										[
											'title' => __( 'Initial', 'blocksy' ),
											'id' => 'default',
											'inherit' => 'var(--color)'
										],
									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [ 'shop_structure' => 'grid' ],
									'options' => [

										'cardProductAction1Color' => [
											'label' => __( 'Action Button Color', 'blocksy' ),
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
													'inherit' => 'var(--color)'
												],

												[
													'title' => __( 'Hover', 'blocksy' ),
													'id' => 'hover',
													'inherit' => 'var(--colorHover)'
												],
											],
										],

									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [ 'shop_structure' => 'shop-simple' ],
									'options' => [

										'cardProductAction2Color' => [
											'label' => __( 'Action Button Color', 'blocksy' ),
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

								'cardProductBackground' => [
									'label' => __( 'Card Background Color', 'blocksy' ),
									'type'  => 'ct-color-picker',
									'design' => 'inline',
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
									'value' => [
										'default' => [
											'color' => '#ffffff',
										],
									],

									'pickers' => [
										[
											'title' => __( 'Initial', 'blocksy' ),
											'id' => 'default',
										],
									],
								],

								'cardProductShadow' => [
									'label' => __( 'Card Shadow', 'blocksy' ),
									'type' => 'ct-box-shadow',
									'responsive' => true,
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
									'value' => blocksy_box_shadow_value([
										'enable' => true,
										'h_offset' => 0,
										'v_offset' => 12,
										'blur' => 18,
										'spread' => -6,
										'inset' => false,
										'color' => [
											'color' => 'rgba(34, 56, 101, 0.03)',
										],
									])
								],

							],
						],

					],
				],

				blocksy_rand_md5() => [
					'type'  => 'ct-title',
					'label' => __( 'Shop Page Elements', 'blocksy' ),
				],

				'has_shop_breadcrumbs' => [
					'label' => __( 'Breadcrumbs', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'yes',
					'setting' => [ 'transport' => 'postMessage' ],
				],

				'has_shop_sort' => [
					'label' => __( 'Shop Sort', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'yes',
					'setting' => [ 'transport' => 'postMessage' ],
				],

				'has_shop_results_count' => [
					'label' => __( 'Shop Results Count', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'yes',
					'setting' => [ 'transport' => 'postMessage' ],
				],
			],

			blocksy_get_options('general/sidebar-particular', [
				'prefix' => 'woo',
			]),

			blocksy_get_options('general/pagination', [
				'prefix' => 'woo',
			]),

			[
				blocksy_rand_md5() => [
					'type'  => 'ct-title',
					'label' => __( 'Functionality Options', 'blocksy' ),
				],

				'product_catalog_panel' => [
					'label' => __( 'Product Catalog', 'blocksy' ),
					'type' => 'ct-panel',
					'wrapperAttr' => [ 'data-panel' => 'only-arrow' ],
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						'woocommerce_shop_page_display' => [
							'label' => __( 'Shop page display', 'blocksy' ),
							'type' => 'ct-select',
							'value' => '',
							'view' => 'text',
							'placeholder' => __('Show products', 'blocksy'),
							'design' => 'block',
							'setting' => [
								'type' => 'option'
							],
							'desc' => __( 'Choose what to display on the main shop page.', 'blocksy' ),
							'choices' => blocksy_ordered_keys(
								[
									'' => __('Show products', 'blocksy'),
									'subcategories' => __('Show categories', 'blocksy'),
									'both' => __('Show categories & products', 'blocksy'),
								]
							),
						],

						'woocommerce_category_archive_display' => [
							'label' => __( 'Category display', 'blocksy' ),
							'type' => 'ct-select',
							'value' => '',
							'view' => 'text',
							'placeholder' => __('Show products', 'blocksy'),
							'design' => 'block',
							'setting' => [
								'type' => 'option'
							],
							'desc' => __( 'Choose what to display on product category pages.', 'blocksy' ),
							'choices' => blocksy_ordered_keys(
								[
									'' => __('Show products', 'blocksy'),
									'subcategories' => __('Show subcategories', 'blocksy'),
									'both' => __('Show subcategories & products', 'blocksy'),
								]
							),
						],

						'woocommerce_default_catalog_orderby' => [
							'label' => __( 'Default product sorting', 'blocksy' ),
							'type' => 'ct-select',
							'value' => 'menu_order',
							'view' => 'text',
							'design' => 'block',
							'desc' => __( 'How should products be sorted in the catalog by default?', 'blocksy' ),
							'setting' => [
								'type' => 'option'
							],
							'choices' => blocksy_ordered_keys(
								[
									'menu_order' => __('Default sorting (custom ordering + name)', 'blocksy'),
									'popularity' => __('Popularity (sales)', 'blocksy'),
									'rating' => __('Average rating', 'blocksy'),
									'date' => __('Sort by most recent', 'blocksy'),
									'price' => __('Sort by price (asc)', 'blocksy'),
									'price-desc' => __('Sort by price (desc)', 'blocksy'),
								]
							),
						],

					],
				],

				'woocommerce_demo_store' => [
					'label' => __( 'Store notice', 'blocksy' ),
					'type' => 'ct-panel',
					'value' => 'no',
					'switch' => true,
					'setting' => [
						'sanitize_callback' => 'wc_bool_to_string',
						'sanitize_js_callback' => 'wc_bool_to_string',
						'type' => 'option'
					],

					'inner-options' => [

						blocksy_rand_md5() => [
							'title' => __( 'General', 'blocksy' ),
							'type' => 'tab',
							'options' => [

								'woocommerce_demo_store_notice' => [
									'type' => 'textarea',
									'label' => __('Store notice', 'blocksy'),
									'value' => __( 'This is a demo store for testing purposes &mdash; no orders shall be fulfilled.', 'blocksy' ),
									'setting' => [
										'type' => 'option',
										'transport' => 'postMessage'
									],
									'disableRevertButton' => true,
								],

								'store_notice_position' => [
									'type' => 'ct-radio',
									'label' => __( 'Position', 'blocksy' ),
									'value' => 'bottom',
									'view' => 'text',
									'disableRevertButton' => true,
									'setting' => [ 'transport' => 'postMessage' ],
									'choices' => [
										'top' => __('Top', 'blocksy'),
										'bottom' => __('Bottom', 'blocksy'),
									],
								],

							],
						],

						blocksy_rand_md5() => [
							'title' => __( 'Design', 'blocksy' ),
							'type' => 'tab',
							'options' => [

								'wooNoticeContent' => [
									'label' => __( 'Font Color', 'blocksy' ),
									'type'  => 'ct-color-picker',
									'design' => 'inline',
									'skipEditPalette' => true,
									'setting' => [ 'transport' => 'postMessage' ],

									'value' => [
										'default' => [
											'color' => '#ffffff',
										],
									],

									'pickers' => [
										[
											'title' => __( 'Initial', 'blocksy' ),
											'id' => 'default',
										],
									],
								],

								'wooNoticeBackground' => [
									'label' => __( 'Background Color', 'blocksy' ),
									'type'  => 'ct-color-picker',
									'design' => 'inline',
									'skipEditPalette' => true,
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

			],
		],
	],
];
