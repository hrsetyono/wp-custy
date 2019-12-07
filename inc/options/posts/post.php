<?php

$options = [

	'single_section_options' => [
		'type' => 'ct-options',
		'setting' => [ 'transport' => 'postMessage' ],
		'inner-options' => [

			[
				'single_blog_post_title_enabled' => [
					'label' => __( 'Post Title', 'blocksy' ),
					'type' => 'ct-panel',
					'switch' => true,
					'value' => 'yes',
					'wrapperAttr' => [ 'data-label' => 'heading-label' ],
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_get_options('general/page-title', [
							'prefix' => 'single_blog_post',
							'is_single' => true
						])

					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-title',
					'label' => __( 'Post Structure', 'blocksy' ),
				],

				blocksy_rand_md5() => [
					'title' => __( 'General', 'blocksy' ),
					'type' => 'tab',
					'options' => [

						'single_blog_post_structure' => [
							'label' => false,
							'type' => 'ct-image-picker',
							'value' => 'type-3',
							'attr' => [ 'data-type' => 'background' ],
							'setting' => [ 'transport' => 'postMessage' ],
							'choices' => [

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

						'single_content_style' => [
							'label' => __( 'Content Area Style', 'blocksy' ),
							'type' => 'ct-radio',
							'value' => 'wide',
							'view' => 'text',
							'design' => 'block',
							'setting' => [ 'transport' => 'postMessage' ],
							'choices' => [
								'wide' => __( 'Wide', 'blocksy' ),
								'boxed' => __( 'Boxed', 'blocksy' ),
							],
						],

					],
				],

				blocksy_rand_md5() => [
					'title' => __( 'Design', 'blocksy' ),
					'type' => 'tab',
					'options' => [

						'post_background' => [
							'label' => __( 'Page Background', 'blocksy' ),
							'type' => 'ct-background',
							'design' => 'inline',
							'setting' => [ 'transport' => 'postMessage' ],
							'value' => blocksy_background_default_value([
								'backgroundColor' => [
									'default' => [
										'color' => Blocksy_Css_Injector::get_skip_rule_keyword(),
									],
								],
							]),
							'desc' => sprintf(
								// translators: placeholder here means the actual URL.
								__( 'Please note: by default this option is inherited from %sGeneral ➝ Site Background%s.', 'blocksy' ),
								sprintf(
									'<a data-trigger-section="general" href="%s">',
									admin_url('/customize.php?autofocus[section]=general')
								),
								'</a>'
							),
						],

						blocksy_rand_md5() => [
							'type' => 'ct-condition',
							'condition' => [ 'single_content_style' => 'boxed' ],
							'options' => [

								'single_content_background' => [
									'label' => __( 'Content Area Background', 'blocksy' ),
									'type' => 'ct-background',
									'design' => 'inline',
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
									'value' => blocksy_background_default_value([
										'backgroundColor' => [
											'default' => [
												'color' => '#ffffff',
											],
										],
									])
								],

								'postContentBoxedShadow' => [
									'label' => __( 'Content Area Shadow', 'blocksy' ),
									'type' => 'ct-box-shadow',
									'responsive' => true,
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
									'value' => blocksy_box_shadow_value([
										'enable' => false,
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

								'singleContentBoxedSpacing' => [
									'label' => __( 'Content Area Spacing', 'blocksy' ),
									'type' => 'ct-slider',
									'value' => '40px',
									'units' => blocksy_units_config([
										[
											'unit' => 'px',
											'min' => 0,
											'max' => 200,
										],
									]),
									'responsive' => true,
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
								],

							],
						],

					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-title',
					'label' => __( 'Post Elements', 'blocksy' ),
				],

				'has_featured_image' => [
					'label' => __( 'Featured Image', 'blocksy' ),
					'type' => 'ct-panel',
					'switch' => true,
					'value' => 'no',
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_rand_md5() => [
							'type' => 'ct-condition',
							'condition' => [
								'single_blog_post_title_enabled' => 'yes',
								'single_blog_post_hero_section' => '!type-2'
							],
							'options' => [

								'single_featured_image_location' => [
									'label' => __( 'Image Location', 'blocksy' ),
									'type' => 'ct-radio',
									'value' => 'above',
									'view' => 'text',
									'design' => 'block',
									'divider' => 'bottom',
									'setting' => [ 'transport' => 'postMessage' ],
									'choices' => [
										'above' => __( 'Above Title', 'blocksy' ),
										'below' => __( 'Below Title', 'blocksy' ),
									],
								],

							]
						],

						'single_featured_image_ratio' => [
							'label' => __( 'Image Ratio', 'blocksy' ),
							'type' => 'ct-ratio',
							'value' => '4/3',
							'setting' => [ 'transport' => 'postMessage' ],
						],

						blocksy_rand_md5() => [
							'type' => 'ct-condition',
							'condition' => [ 'single_content_style' => 'boxed' ],
							'options' => [

								'single_featured_image_boundless' => [
									'label' => __( 'Boundless Image', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'no',
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
								],

							],
						],

						blocksy_rand_md5() => [
							'type' => 'ct-condition',
							'condition' => [
								'single_blog_post_structure' => 'type-3 | type-4',
								'single_content_style' => 'wide',
							],
							'options' => [

								'single_featured_image_width' => [
									'label' => __( 'Image Width', 'blocksy' ),
									'type' => 'ct-radio',
									'value' => 'default',
									'view' => 'text',
									'design' => 'block',
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
									'choices' => [
										'default' => __( 'Default Width', 'blocksy' ),
										'wide' => __( 'Wide Width', 'blocksy' ),
									],
								],

							],
						],

						blocksy_rand_md5() => [
							'type' => 'ct-divider',
						],

						'single_featured_image_visibility' => [
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

				'has_post_tags' => [
					'label' => __( 'Post Tags', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'yes',
					'setting' => [ 'transport' => 'postMessage' ],
				],

				'has_share_box' => [
					'label' => __( 'Share Box', 'blocksy' ),
					'type' => 'ct-panel',
					'switch' => true,
					'value' => 'yes',
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_rand_md5() => [
							'title' => __( 'General', 'blocksy' ),
							'type' => 'tab',
							'options' => [

								'share_box_type' => [
									'label' => false,
									'type' => 'ct-image-picker',
									'value' => 'type-1',
									'attr' => [ 'data-type' => 'background' ],
									'setting' => [ 'transport' => 'postMessage' ],
									'switchDeviceOnChange' => 'desktop',
									'choices' => [

										'type-1' => [
											'src'   => blocksy_image_picker_url( 'share-box-type-1.svg' ),
											'title' => __( 'Type 1', 'blocksy' ),
										],

										'type-2' => [
											'src'   => blocksy_image_picker_url( 'share-box-type-2.svg' ),
											'title' => __( 'Type 2', 'blocksy' ),
										],

									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [ 'share_box_type' => 'type-1' ],
									'options' => [

										'share_box1_location' => [
											'label' => __( 'Box Location', 'blocksy' ),
											'type' => 'ct-checkboxes',
											'design' => 'block',
											'view' => 'text',
											'setting' => [ 'transport' => 'postMessage' ],
											'value' => [
												'top' => false,
												'bottom' => true,
											],

											'choices' => blocksy_ordered_keys([
												'top' => __( 'Top', 'blocksy' ),
												'bottom' => __( 'Bottom', 'blocksy' ),
											]),
										],

									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [ 'share_box_type' => 'type-2' ],
									'options' => [

										'share_box2_location' => [
											'label' => __( 'Box Location', 'blocksy' ),
											'type' => 'ct-radio',
											'value' => 'right',
											'view' => 'text',
											'design' => 'block',
											'setting' => [ 'transport' => 'postMessage' ],
											'choices' => [
												'left' => __( 'Left', 'blocksy' ),
												'right' => __( 'Right', 'blocksy' ),
											],
										],

									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-title',
									'label' => __( 'Share Networks', 'blocksy' ),
								],

								'share_facebook' => [
									'label' => __( 'Facebook', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'yes',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'share_twitter' => [
									'label' => __( 'Twitter', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'yes',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'share_pinterest' => [
									'label' => __( 'Pinterest', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'yes',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'share_linkedin' => [
									'label' => __( 'LinkedIn', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'yes',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'share_reddit' => [
									'label' => __( 'Reddit', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'no',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'share_hacker_news' => [
									'label' => __( 'Hacker News', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'no',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'share_vk' => [
									'label' => __( 'VKontakte', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'no',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'share_ok' => [
									'label' => __( 'Odnoklassniki', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'no',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'share_telegram' => [
									'label' => __( 'Telegram', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'no',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'share_viber' => [
									'label' => __( 'Viber', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'no',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'share_whatsapp' => [
									'label' => __( 'WhatsApp', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'no',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-divider',
									'attr' => [ 'data-type' => 'small' ],
								],

								'share_box_visibility' => [
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

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [ 'share_box_type' => 'type-1' ],
									'options' => [

										'shareItemsIconColor' => [
											'label' => __( 'Icons Color', 'blocksy' ),
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

										'shareItemsBorder' => [
											'label' => __( 'Border Color', 'blocksy' ),
											'type'  => 'ct-color-picker',
											'design' => 'inline',
											'setting' => [ 'transport' => 'postMessage' ],

											'value' => [
												'default' => [
													'color' => '#e0e5eb',
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
											'type' => 'ct-divider',
											'attr' => [ 'data-type' => 'small' ],
										],

									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [
										'share_box_type' => 'type-1',
										'share_box1_location/top' => true
									],
									'options' => [

										'topShareBoxSpacing' => [
											'label' => __( 'Top Box Spacing', 'blocksy' ),
											'type' => 'ct-slider',
											'value' => [
												'mobile' => '30px',
												'tablet' => '50px',
												'desktop' => '70px',
											],
											'units' => blocksy_units_config([
												[
													'unit' => 'px',
													'min' => 0,
													'max' => 100,
												],
											]),
											'responsive' => true,
											'setting' => [ 'transport' => 'postMessage' ],
										],

									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [
										'share_box_type' => 'type-1',
										'share_box1_location/bottom' => true
									],
									'options' => [

										'bottomShareBoxSpacing' => [
											'label' => __( 'Bottom Box Spacing', 'blocksy' ),
											'type' => 'ct-slider',
											'value' => [
												'mobile' => '30px',
												'tablet' => '50px',
												'desktop' => '70px',
											],
											'units' => blocksy_units_config([
												[
													'unit' => 'px',
													'min' => 0,
													'max' => 100,
												],
											]),
											'responsive' => true,
											'setting' => [ 'transport' => 'postMessage' ],
										],

									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [ 'share_box_type' => 'type-2' ],
									'options' => [

										'shareItemsIcon' => [
											'label' => __( 'Icons Color', 'blocksy' ),
											'type'  => 'ct-color-picker',
											'design' => 'inline',
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

										'shareItemsBackground' => [
											'label' => __( 'Background Color', 'blocksy' ),
											'type'  => 'ct-color-picker',
											'design' => 'inline',
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

									],
								],

							],
						],
					],
				],

				'has_author_box' => [
					'label' => __( 'Author Box', 'blocksy' ),
					'type' => 'ct-panel',
					'switch' => true,
					'value' => 'no',
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_rand_md5() => [
							'title' => __( 'General', 'blocksy' ),
							'type' => 'tab',
							'options' => [

								'single_author_box_type' => [
									'label' => __( 'Box Type', 'blocksy' ),
									'type' => 'ct-image-picker',
									'value' => 'type-1',
									'attr' => [ 'data-type' => 'background' ],
									'setting' => [ 'transport' => 'postMessage' ],
									'choices' => [

										'type-1' => [
											'src'   => blocksy_image_picker_url( 'author-box-type-1.svg' ),
											'title' => __( 'Type 1', 'blocksy' ),
										],

										'type-2' => [
											'src'   => blocksy_image_picker_url( 'author-box-type-2.svg' ),
											'title' => __( 'Type 2', 'blocksy' ),
										],

									],
								],

								'single_author_box_social' => [
									'label' => __( 'Social Icons', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'yes',
									'desc' => sprintf(
										// translators: placeholder here is the link URL.
										__(
											'You can set the author sochial channels %shere%s.',
											'blocksy'
										),
										sprintf(
											'<a href="%s" target="_blank">',
											admin_url('/profile.php')
										),
										'</a>'
									),
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'singleAuthorBoxSpacing' => [
									'label' => __( 'Container Inner Spacing', 'blocksy' ),
									'type' => 'ct-slider',
									'value' => '40px',
									'units' => blocksy_units_config([
										[
											'unit' => 'px',
											'min' => 0,
											'max' => 100,
										],
									]),
									'responsive' => true,
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-divider',
								],

								'author_box_visibility' => [
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

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [ 'single_author_box_type' => 'type-2' ],
									'options' => [

										'singleAuthorBoxBorder' => [
											'label' => __( 'Border Color', 'blocksy' ),
											'type'  => 'ct-color-picker',
											'design' => 'inline',
											'setting' => [ 'transport' => 'postMessage' ],

											'value' => [
												'default' => [
													'color' => '#e8ebf0',
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
									'condition' => [ 'single_author_box_type' => 'type-1' ],
									'options' => [

										'singleAuthorBoxBackground' => [
											'label' => __( 'Background Color', 'blocksy' ),
											'type'  => 'ct-color-picker',
											'design' => 'inline',
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

										'singleAuthorBoxShadow' => [
											'label' => __( 'Shadow', 'blocksy' ),
											'type' => 'ct-box-shadow',
											'responsive' => true,
											'divider' => 'top',
											'setting' => [ 'transport' => 'postMessage' ],
											'value' => blocksy_box_shadow_value([
												'enable' => true,
												'h_offset' => 0,
												'v_offset' => 50,
												'blur' => 90,
												'spread' => 0,
												'inset' => false,
												'color' => [
													'color' => 'rgba(210, 213, 218, 0.4)',
												],
											])
										],

									],
								],

							],
						],

					],
				],

				'has_post_nav' => [
					'label' => __( 'Posts Navigation', 'blocksy' ),
					'type' => 'ct-panel',
					'switch' => true,
					'value' => 'yes',
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_rand_md5() => [
							'title' => __( 'General', 'blocksy' ),
							'type' => 'tab',
							'options' => [

								'has_post_nav_title' => [
									'label' => __( 'Post Title', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'yes',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'has_post_nav_thumb' => [
									'label' => __( 'Post Thumbnail', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'yes',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'postNavSpacing' => [
									'label' => __( 'Container Inner Spacing', 'blocksy' ),
									'type' => 'ct-slider',
									'value' => [
										'mobile' => '40px',
										'tablet' => '60px',
										'desktop' => '80px',
									],
									'units' => blocksy_units_config([
										[
											'unit' => 'px',
											'min' => 0,
											'max' => 200,
										],
									]),
									'responsive' => true,
									'setting' => [ 'transport' => 'postMessage' ],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-divider',
								],

								'post_nav_visibility' => [
									'label' => __( 'Visibility', 'blocksy' ),
									'type' => 'ct-visibility',
									'design' => 'block',
									'setting' => [ 'transport' => 'postMessage' ],

									'value' => [
										'desktop' => true,
										'tablet' => true,
										'mobile' => true,
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

								'postsNavFontColor' => [
									'label' => __( 'Font Color', 'blocksy' ),
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

					],
				],


				'has_related_posts' => [
					'label' => __( 'Related Posts', 'blocksy' ),
					'type' => 'ct-panel',
					'switch' => true,
					'value' => 'yes',
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_rand_md5() => [
							'title' => __( 'General', 'blocksy' ),
							'type' => 'tab',
							'options' => [

								'related_criteria' => [
									'label' => __( 'Related criteria', 'blocksy' ),
									'type' => 'ct-radio',
									'value' => 'categories',
									'view' => 'text',
									'design' => 'block',
									'choices' => [
										'categories' => __( 'Categories', 'blocksy' ),
										'tags' => __( 'Tags', 'blocksy' ),
									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-divider',
								],

								'related_label' => [
									'label' => __( 'Section Label', 'blocksy' ),
									'type' => 'text',
									'design' => 'inline',
									'value' => __( 'Related Posts', 'blocksy' ),
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'related_posts_count' => [
									'label' => __( 'Number of Posts', 'blocksy' ),
									'type' => 'ct-number',
									'value' => 3,
									'min' => 2,
									'max' => 8,
									'design' => 'inline',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'related_posts_columns' => [
									'label' => __( 'Posts Per Row', 'blocksy' ),
									'type' => 'ct-number',
									'value' => 3,
									'min' => 2,
									'max' => 4,
									'design' => 'inline',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								'related_featured_image_ratio' => [
									'label' => __( 'Image Ratio', 'blocksy' ),
									'type' => 'ct-ratio',
									'value' => '16/9',
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-divider',
								],

								'related_meta_elements' => [
									'label' => __( 'Meta Elements', 'blocksy' ),
									'type' => 'ct-checkboxes',
									'design' => 'block',
									'attr' => [ 'data-columns' => '2' ],
									'setting' => [ 'transport' => 'postMessage' ],
									'allow_empty' => true,
									'choices' => blocksy_ordered_keys(
										[
											'author' => __( 'Author', 'blocksy' ),
											'comments' => __( 'Comments', 'blocksy' ),
											'date' => __( 'Date', 'blocksy' ),
											'categories' => __( 'Categories', 'blocksy' ),
										]
									),

									'value' => [
										'author' => false,
										'date' => true,
										'categories' => false,
										'comments' => true,
									],
								],

								'has_related_meta_label' => [
									'label' => __( 'Meta Label', 'blocksy' ),
									'type' => 'ct-switch',
									'value' => 'yes',
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-condition',
									'condition' => [ 'related_meta_elements/date' => true ],
									'options' => [

										'related_date_format_source' => [
											'label' => __( 'Date Format', 'blocksy' ),
											'type' => 'ct-radio',
											'value' => 'default',
											'view' => 'text',
											'design' => 'block',
											'setting' => [ 'transport' => 'postMessage' ],
											'choices' => [
												'default' => __( 'Default', 'blocksy' ),
												'custom' => __( 'Custom', 'blocksy' ),
											],
										],

										blocksy_rand_md5() => [
											'type' => 'ct-condition',
											'condition' => [ 'related_date_format_source' => 'custom' ],
											'options' => [

												'related_meta_date_format' => [
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

								blocksy_rand_md5() => [
									'type' => 'ct-divider',
								],

								'related_location' => [
									'label' => __( 'Section Location', 'blocksy' ),
									'type' => 'ct-radio',
									'value' => 'before',
									'view' => 'text',
									'design' => 'block',
									'setting' => [ 'transport' => 'postMessage' ],
									'choices' => [
										'before' => __( 'Before Comments', 'blocksy' ),
										'after' => __( 'After Comments', 'blocksy' ),
									],
								],

								blocksy_rand_md5() => [
									'type' => 'ct-divider',
								],

								'related_visibility' => [
									'label' => __( 'Section Visibility', 'blocksy' ),
									'type' => 'ct-visibility',
									'design' => 'block',
									'setting' => [ 'transport' => 'postMessage' ],

									'value' => [
										'desktop' => true,
										'tablet' => false,
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

								'relatedPostsLabelColor' => [
									'label' => __( 'Label Color', 'blocksy' ),
									'type'  => 'ct-color-picker',
									'design' => 'inline',
									'setting' => [ 'transport' => 'postMessage' ],

									'value' => [
										'default' => [
											'color' => 'var(--paletteColor4)',
										],
									],

									'pickers' => [
										[
											'title' => __( 'Initial', 'blocksy' ),
											'id' => 'default',
										],
									],
								],

								'relatedPostsLinkColor' => [
									'label' => __( 'Posts Title Font Color', 'blocksy' ),
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

								'relatedPostsMetaColor' => [
									'label' => __( 'Meta Font Color', 'blocksy' ),
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

								'relatedThumbRadius' => [
									'label' => __( 'Image Border Radius', 'blocksy' ),
									'type' => 'ct-spacing',
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
									'value' => blocksy_spacing_value([
										'linked' => true,
										'top' => '5px',
										'left' => '5px',
										'right' => '5px',
										'bottom' => '5px',
									]),
									'responsive' => true
								],

								'related_posts_background' => [
									'label' => __( 'Container Background', 'blocksy' ),
									'type' => 'ct-background',
									'design' => 'inline',
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
									'value' => blocksy_background_default_value([
										'backgroundColor' => [
											'default' => [
												'color' => '#eff1f5',
											],
										],
									])
								],

								'relatedPostsContainerSpacing' => [
									'label' => __( 'Container Inner Spacing', 'blocksy' ),
									'type' => 'ct-slider',
									'value' => [
										'mobile' => '30px',
										'tablet' => '50px',
										'desktop' => '70px',
									],
									'units' => blocksy_units_config([
										[
											'unit' => 'px',
											'min' => 0,
											'max' => 150,
										],
									]),
									'responsive' => true,
									'setting' => [ 'transport' => 'postMessage' ],
								],

							],
						],
					],
				],


				'has_post_comments' => [
					'label' => __( 'Comments', 'blocksy' ),
					'type' => 'ct-panel',
					'switch' => true,
					'value' => 'yes',
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_rand_md5() => [
							'title' => __( 'General', 'blocksy' ),
							'type' => 'tab',
							'options' => [

								'postCommentsContainerWidth' => [
									'label' => __( 'Container Width', 'blocksy' ),
									'type' => 'ct-slider',
									'min' => 50,
									'max' => 100,
									'responsive' => true,
									'value' => [
										'mobile' => 100,
										'tablet' => 100,
										'desktop' => 60,
									],
									'defaultUnit' => '%',
									'setting' => [ 'transport' => 'postMessage' ],
								],

							],
						],

						blocksy_rand_md5() => [
							'title' => __( 'Design', 'blocksy' ),
							'type' => 'tab',
							'options' => [

								'postCommentsFontColor' => [
									'label' => __( 'Font Color', 'blocksy' ),
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

								'post_comments_background' => [
									'label' => __( 'Container Background', 'blocksy' ),
									'type' => 'ct-background',
									'design' => 'inline',
									'divider' => 'top',
									'setting' => [ 'transport' => 'postMessage' ],
									'value' => blocksy_background_default_value([
										'backgroundColor' => [
											'default' => [
												'color' => '#f8f9fb',
											],
										],
									])
								],

							],
						],

					],
				],

			],

			apply_filters(
				'blocksy_single_posts_end_customizer_options',
				[]
			),

		],
	],
];
