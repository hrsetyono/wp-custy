<?php

if (! isset($prefix)) {
	$prefix = '';
} else {
	$prefix = $prefix . '_';
}

if (! isset($title)) {
	$title = __('blog', 'blocksy');
}

$options = [
	blocksy_rand_md5() => [
		'type'  => 'ct-title',
		'label' => sprintf(
			// translators: placeholder here means the actual structure title.
			__( '%s Structure', 'blocksy' ),
			$title
		),
		'desc'  => sprintf(
			// translators: placeholder here means the actual structure title.
			__( 'Set the %s entries default structure.', 'blocksy' ),
			$title
		),
	],

	$prefix . 'structure' => [
		'label' => false,
		'type' => 'ct-image-picker',
		'value' => 'grid',
		'attr' => [ 'data-type' => 'background' ],
		'setting' => [ 'transport' => 'postMessage' ],
		'choices' => [

			'simple' => [
				'src'   => blocksy_image_picker_url( 'simple.svg' ),
				'title' => __( 'Simple', 'blocksy' ),
			],

			'classic' => [
				'src'   => blocksy_image_picker_url( 'classic.svg' ),
				'title' => __( 'Classic', 'blocksy' ),
			],

			'grid' => [
				'src'   => blocksy_image_picker_url( 'grid.svg' ),
				'title' => __( 'Grid', 'blocksy' ),
			],

			'enhanced-grid' => [
				'src'   => blocksy_image_picker_url( 'enhanced-grid.svg' ),
				'title' => __( 'Enhanced Grid', 'blocksy' ),
			],

			'gutenberg' => [
				'src'   => blocksy_image_picker_url( 'gutenberg.svg' ),
				'title' => __( 'Gutenberg', 'blocksy' ),
			],

		],
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
		'attr' => [ 'data-type' => 'small' ]
	],

	$prefix . 'archive_listing_panel' => [
		'label' => __( 'Cards Options', 'blocksy' ),
		'type' => 'ct-panel',
		'value' => 'yes',
		'wrapperAttr' => [ 'data-panel' => 'only-arrow' ],
		'setting' => [ 'transport' => 'postMessage' ],
		'inner-options' => [

			blocksy_rand_md5() => [
				'title' => __( 'General', 'blocksy' ),
				'type' => 'tab',
				'options' => [

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [
							$prefix . 'structure' => '!gutenberg'
						],
						'options' => [

							$prefix . 'card_type' => [
								'label' => __( 'Card Type', 'blocksy' ),
								'type' => 'ct-radio',
								'value' => 'boxed',
								'view' => 'text',
								'setting' => [ 'transport' => 'postMessage' ],
								'choices' => [
									'boxed' => __( 'Boxed', 'blocksy' ),
									'simple' => __( 'Simple', 'blocksy' ),
								],
							],

						],
					],

					$prefix . 'archive_order' => [
						'label' => __( 'Card Elements', 'blocksy' ),
						'type' => 'ct-layers',
						'value' => [
							[
								'id' => 'post_meta',
								'enabled' => true,
								'meta' => [
									'categories' => true,
									'author' => false,
									'date' => false,
									'comments' => false,
								],
								'meta_type' => 'simple',
								'has_meta_label' => 'no',
								'category_style' => 'simple',
								'has_author_avatar' => 'no',
								'avatar_size' => '25',
								'date_format' => 'M j, Y',
							],

							[
								'id' => 'title',
								'heading_tag' => 'h2',
								'enabled' => true,
							],

							[
								'id' => 'featured_image',
								'thumb_ratio' => '4/3',
								'is_boundless' => 'yes',
								'enabled' => true,
							],

							[
								'id' => 'excerpt',
								'excerpt_length' => '40',
								'enabled' => true,
							],

							[
								'id' => 'read_more',
								'button_type' => 'background',
								'enabled' => false,
							],

							[
								'id' => 'post_meta',
								'enabled' => true,
								'meta' => [
									'categories' => false,
									'author' => true,
									'date' => true,
									'comments' => true,
								],
								'meta_type' => 'simple',
								'has_meta_label' => 'no',
								'category_style' => 'simple',
								'has_author_avatar' => 'no',
								'avatar_size' => '25',
								'date_format' => 'M j, Y',
							],
						],

						'settings' => [
							'title' => [
								'label' => __( 'Title', 'blocksy' ),
								'options' => [

									'heading_tag' => [
										'label' => __( 'Heading tag', 'blocksy' ),
										'type' => 'ct-select',
										'value' => 'h2',
										'view' => 'text',
										'design' => 'inline',
										'choices' => blocksy_ordered_keys(
											[
												'h1' => 'H1',
												'h2' => 'H2',
												'h3' => 'H3',
												'h4' => 'H4',
												'h5' => 'H5',
												'h6' => 'H6',
											]
										),
									],

								],
							],

							'featured_image' => [
								'label' => __( 'Featured Image', 'blocksy' ),
								'options' => [

									'thumb_ratio' => [
										'label' => __( 'Image Ratio', 'blocksy' ),
										'type' => 'ct-ratio',
										'value' => '4/3',
									],

									blocksy_rand_md5() => [
										'type' => 'ct-condition',
										'condition' => [
											$prefix . 'card_type' => 'boxed',
											$prefix . 'structure' => '!gutenberg'
										],
                                        'global' => true,
										'options' => [

											'is_boundless' => [
												'label' => __( 'Boundless', 'blocksy' ),
												'type' => 'ct-switch',
												'value' => 'yes',
											],

										],
									],

								],
							],

							'excerpt' => [
								'label' => __( 'Excerpt', 'blocksy' ),
								'options' => [

									'excerpt_length' => [
										'label' => __( 'Length', 'blocksy' ),
										'type' => 'ct-number',
										'design' => 'inline',
										'value' => 40,
										'min' => 10,
										'max' => 100,
									],

								],
							],

							'read_more' => [
								'label' => __( 'Read More Button', 'blocksy' ),
								'options' => [

									'button_type' => [
										'label' => false,
										'type' => 'ct-radio',
										'value' => 'background',
										'inline' => true,
										'view' => 'text',
										'choices' => [
											'simple' => __( 'Simple', 'blocksy' ),
											'background' => __( 'Background', 'blocksy' ),
											'outline' => __( 'Outline', 'blocksy' ),
										],
									],

									'read_more_text' => [
										'label' => __( 'Text', 'blocksy' ),
										'type' => 'text',
										'design' => 'inline',
										'value' => __( 'Read More', 'blocksy' ),
									],

									'read_more_arrow' => [
										'label' => __( 'Show Arrow', 'blocksy' ),
										'type' => 'ct-switch',
										'value' => 'no',
									],

									'read_more_alignment' => [
										'type' => 'ct-radio',
										'label' => __( 'Alignment', 'blocksy' ),
										'value' => 'left',
										'view' => 'text',
										'attr' => [ 'data-type' => 'alignment' ],
										'design' => 'block',
										'choices' => [
											'left' => '',
											'center' => '',
											'right' => '',
										],
									],

								],
							],

							'post_meta' => [
								'label' => __( 'Post Meta', 'blocksy' ),
								'clone' => true,
								'options' => [

									'meta' => [
										'label' => false,
										'type' => 'ct-checkboxes',
										'attr' => [ 'data-columns' => '2' ],
										'choices' => blocksy_ordered_keys(
											[
												'author' => __( 'Author', 'blocksy' ),
												'comments' => __( 'Comments', 'blocksy' ),
												'date' => __( 'Published', 'blocksy' ),
												'updated' => __( 'Updated', 'blocksy' ),
												'categories' => __( 'Categories', 'blocksy' ),
												'tags' => __( 'Tags', 'blocksy' ),
											]
										),

										'value' => [
											'author' => true,
											'date' => true,
											'updated' => false,
											'categories' => true,
											'comments' => true,
											'tags' => false,
										],
									],

									'meta_type' => [
										'label' => __( 'Meta Type', 'blocksy' ),
										'type' => 'ct-radio',
										'value' => 'simple',
										'setting' => [ 'transport' => 'postMessage' ],
										'inline' => true,
										'view' => 'radio',
										'choices' => [
											'simple' => __( 'Simple', 'blocksy' ),
											'icons' => __( 'With Icons', 'blocksy' ),
										],
									],

									blocksy_rand_md5() => [
										'type' => 'ct-condition',
										'condition' => [ 'meta_type' => 'simple' ],
										'options' => [

											'has_meta_label' => [
												'label' => __( 'Meta Label', 'blocksy' ),
												'type' => 'ct-switch',
												'value' => 'no',
											],

										],
									],

									blocksy_rand_md5() => [
										'type' => 'ct-condition',
										'condition' => [
											'meta/categories' => true,
											'meta_type' => 'simple'
										],
										'options' => [

											'category_style' => [
												'label' => __( 'Category Style', 'blocksy' ),
												'type' => 'ct-radio',
												'value' => 'simple',
												'setting' => [ 'transport' => 'postMessage' ],
												'inline' => true,
												'view' => 'radio',
												'choices' => [
													'simple' => __( 'Simple', 'blocksy' ),
													'pill' => __( 'Pill', 'blocksy' ),
													'underline' => __( 'Underline', 'blocksy' ),
												],
											],

										],
									],

									blocksy_rand_md5() => [
										'type' => 'ct-group',
										'attr' => [ 'data-columns' => '1' ],
										'options' => [

											blocksy_rand_md5() => [
												'type' => 'ct-condition',
												'condition' => [
													'any' => [
														'meta/date' => true,
														'meta/updated' => true
													]
												],
												'options' => [

													'date_format_source' => [
														'label' => __( 'Date Format', 'blocksy' ),
														'type' => 'ct-radio',
														'value' => 'custom',
														'view' => 'text',
														'setting' => [ 'transport' => 'postMessage' ],
														'choices' => [
															'default' => __( 'Default', 'blocksy' ),
															'custom' => __( 'Custom', 'blocksy' ),
														],
													],

													blocksy_rand_md5() => [
														'type' => 'ct-condition',
														'condition' => [
															'date_format_source' => 'custom'
														],
														'options' => [

															'date_format' => [
																'label' => false,
																'type' => 'text',
																'design' => 'block',
																'value' => 'M j, Y',
																'setting' => [ 'transport' => 'postMessage' ],
																// translators: The interpolations addes a html link around the word.
																'desc' => sprintf(
																	__('Documentation on date %sformatting%s.', 'blocksy'),
																	'<a href="https://wordpress.org/support/article/formatting-date-and-time/#format-string-examples" target="_blank">',
																	'</a>'
																),
																'disableRevertButton' => true,
															],

														],
													],

												],
											],


										],
									],

									blocksy_rand_md5() => [
										'type' => 'ct-condition',
										'condition' => [
											'meta/author' => true,
										],
										'options' => [

											'has_author_avatar' => [
												'label' => __( 'Avatar', 'blocksy' ),
												'type' => 'ct-switch',
												'value' => 'no',
											],

										],
									],

									blocksy_rand_md5() => [
										'type' => 'ct-condition',
										'condition' => [
											'meta/author' => 'true',
											'has_author_avatar' => 'yes',
										],
										'options' => [
											'avatar_size' => [
												'label' => __( 'Avatar Size', 'blocksy' ),
												'type' => 'ct-number',
												'design' => 'inline',
												'value' => 25,
												'min' => 15,
												'max' => 50,
											],
										],
									],

								],
							],
						],

						'setting' => [ 'transport' => 'postMessage' ],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-divider',
					],

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [ $prefix . 'structure' => 'grid' ],
						'options' => [

							$prefix . 'columns' => [
								'label' => __( 'Cards Per Row', 'blocksy' ),
								'type' => 'ct-number',
								'value' => 3,
								'min' => 2,
								'max' => 4,
								'design' => 'inline',
								'setting' => [ 'transport' => 'postMessage' ],
							],

						],
					],

					$prefix . 'archive_per_page' => [
						'label' => __( 'Cards Per page', 'blocksy' ),
						'type' => 'ct-number',
						'value' => 10,
						'min' => 1,
						'max' => 30,
						'design' => 'inline',
						// 'setting' => [ 'transport' => 'postMessage' ],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-divider',
						'attr' => [ 'data-type' => 'small' ],
					],

					$prefix . 'cardsGap' => [
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
							$prefix . 'archive_order:array-ids:title:enabled' => '!no'
						],
						'options' => [

							$prefix . 'cardTitleFont' => [
								'type' => 'ct-typography',
								'label' => __( 'Title Font', 'blocksy' ),
								'value' => blocksy_typography_default_values([
									'size' => [
										'desktop' => '20px',
										'tablet'  => '20px',
										'mobile'  => '18px'
									],
									'line-height' => '1.3'
								]),
								'setting' => [ 'transport' => 'postMessage' ],
							],

							$prefix . 'cardTitleColor' => [
								'label' => __( 'Title Font Color', 'blocksy' ),
								'type'  => 'ct-color-picker',
								'design' => 'inline',
								'setting' => [ 'transport' => 'postMessage' ],

								'value' => [
									'default' => [
										'color' => 'var(--paletteColor4)',
									],

									'hover' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
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
										'inherit' => 'var(--colorHover)'
									],
								],
							],

							blocksy_rand_md5() => [
								'type' => 'ct-divider',
							],

						],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [
							$prefix . 'archive_order:array-ids:excerpt:enabled' => '!no'
						],
						'options' => [

							$prefix . 'cardExcerptSize' => [
								'label' => __( 'Excerpt Font Size', 'blocksy' ),
								'type' => 'ct-slider',
								'min' => 0,
								'max' => 100,
								'responsive' => true,
								'value' => [
									'mobile' => 16,
									'tablet' => 16,
									'desktop' => 16,
								],
								'setting' => [ 'transport' => 'postMessage' ],
							],

							$prefix . 'cardExcerptColor' => [
								'label' => __( 'Excerpt Color', 'blocksy' ),
								'type'  => 'ct-color-picker',
								'design' => 'inline',
								'setting' => [ 'transport' => 'postMessage' ],
								'noColor' => [ 'background' => 'var(--color)'],
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
								'type' => 'ct-divider',
							],

						],
					],

					$prefix . 'cardMetaFont' => [
						'type' => 'ct-typography',
						'label' => __( 'Meta Font', 'blocksy' ),
						'value' => blocksy_typography_default_values([
							'size' => [
								'desktop' => '12px',
								'tablet'  => '12px',
								'mobile'  => '12px'
							],
							'variation' => 'n6',
							'line-height' => '1.3',
							'text-transform' => 'uppercase',
						]),
						'setting' => [ 'transport' => 'postMessage' ],
					],

					$prefix . 'cardMetaColor' => [
						'label' => __( 'Meta Font Color', 'blocksy' ),
						'type'  => 'ct-color-picker',
						'design' => 'inline',
						'setting' => [ 'transport' => 'postMessage' ],
						'noColor' => [ 'background' => 'var(--color)'],
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
						'type' => 'ct-condition',
						'condition' => [
							$prefix . 'archive_order:array-ids:read_more:button_type' => 'simple',
							$prefix . 'archive_order:array-ids:read_more:enabled' => '!no'
						],
						'options' => [

							blocksy_rand_md5() => [
								'type' => 'ct-divider',
							],

							$prefix . 'cardButtonSimpleTextColor' => [
								'label' => __( 'Button Font Color', 'blocksy' ),
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
						'condition' => [
							$prefix . 'archive_order:array-ids:read_more:button_type' => 'background',
							$prefix . 'archive_order:array-ids:read_more:enabled' => '!no'
						],
						'options' => [

							blocksy_rand_md5() => [
								'type' => 'ct-divider',
							],

							$prefix . 'cardButtonBackgroundTextColor' => [
								'label' => __( 'Button Font Color', 'blocksy' ),
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
										'inherit' => 'var(--buttonTextInitialColor)'
									],

									[
										'title' => __( 'Hover', 'blocksy' ),
										'id' => 'hover',
										'inherit' => 'var(--buttonTextHoverColor)'
									],
								],
							],

						],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [
							$prefix . 'archive_order:array-ids:read_more:button_type' => 'outline',
							$prefix . 'archive_order:array-ids:read_more:enabled' => '!no'
						],
						'options' => [

							blocksy_rand_md5() => [
								'type' => 'ct-divider',
							],

							$prefix . 'cardButtonOutlineTextColor' => [
								'label' => __( 'Button Font Color', 'blocksy' ),
								'type'  => 'ct-color-picker',
								'design' => 'inline',
								'setting' => [ 'transport' => 'postMessage' ],

								'value' => [
									'default' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
									],

									'hover' => [
										'color' => '#ffffff',
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
									],
								],
							],

						],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [
							$prefix . 'archive_order:array-ids:read_more:button_type' => '!simple',
							$prefix . 'archive_order:array-ids:read_more:enabled' => '!no'
						],
						'options' => [

							$prefix . 'cardButtonColor' => [
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
							$prefix . 'card_type' => 'simple',
							$prefix . 'archive_order:array-ids:featured_image:enabled' => '!no'

						],
						'options' => [

							blocksy_rand_md5() => [
								'type' => 'ct-divider',
							],

							$prefix . 'cardThumbRadius' => [
								'label' => __( 'Featured Image Radius', 'blocksy' ),
								'type' => 'ct-spacing',
								'setting' => [ 'transport' => 'postMessage' ],
								'value' => blocksy_spacing_value([
									'linked' => true,
								]),
								'responsive' => true
							],

							$prefix . 'cardDivider' => [
								'label' => __( 'Card bottom divider', 'blocksy' ),
								'type' => 'ct-border',
								'design' => 'inline',
								'divider' => 'top',
								'setting' => [ 'transport' => 'postMessage' ],
								'value' => [
									'width' => 1,
									'style' => 'dashed',
									'color' => [
										'color' => 'rgba(224, 229, 235, 0.8)',
									],
								]
							],
						],
					],

					blocksy_rand_md5() => [
						'type' => 'ct-condition',
						'condition' => [
							$prefix . 'card_type' => 'boxed',
							$prefix . 'structure' => '!gutenberg'
						],
						'options' => [

							blocksy_rand_md5() => [
								'type' => 'ct-divider',
							],

							$prefix . 'card_spacing' => [
								'label' => __( 'Card Inner Spacing', 'blocksy' ),
								'type' => 'ct-slider',
								'min' => 0,
								'max' => 100,
								'responsive' => true,
								'value' => [
									'mobile' => 25,
									'tablet' => 35,
									'desktop' => 35,
								],
								'setting' => [ 'transport' => 'postMessage' ],
							],

							$prefix . 'cardBorder' => [
								'label' => __( 'Card Border', 'blocksy' ),
								'type' => 'ct-border',
								'design' => 'inline',
								'divider' => 'top',
								'setting' => [ 'transport' => 'postMessage' ],
								'value' => [
									'width' => 1,
									'style' => 'none',
									'color' => [
										'color' => 'rgba(44,62,80,0.2)',
									],
								]
							],

							$prefix . 'cardBackground' => [
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

							$prefix . 'cardShadow' => [
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
										'color' => 'rgba(34, 56, 101, 0.04)',
									],
								])
							],

						],
					],

				],
			],
		]
	],
];
