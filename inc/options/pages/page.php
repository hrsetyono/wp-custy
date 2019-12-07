<?php

/**
 * Page options.
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$options = [
	'page_section_options' => [
		'type' => 'ct-options',
		'setting' => [ 'transport' => 'postMessage' ],
		'inner-options' => [
			'single_page_title_enabled' => [
				'label' => __( 'Page Title', 'blocksy' ),
				'type' => 'ct-panel',
				'switch' => true,
				'value' => 'yes',
				'wrapperAttr' => [ 'data-label' => 'heading-label' ],
				'setting' => [ 'transport' => 'postMessage' ],
				'inner-options' => [

					blocksy_get_options('general/page-title', [
						'prefix' => 'single_page',
						'is_single' => true,
						'is_page' => true
					])

				],
			],

			blocksy_rand_md5() => [
				'label' => __( 'Page Structure', 'blocksy' ),
				'type' => 'ct-title',
			],

			blocksy_rand_md5() => [
				'title' => __( 'General', 'blocksy' ),
				'type' => 'tab',
				'options' => [

					'single_page_structure' => [
						'label' => false,
						'type' => 'ct-image-picker',
						'value' => 'type-4',
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

					'page_content_style' => [
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

					'page_background' => [
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
						'condition' => [ 'page_content_style' => 'boxed' ],
						'options' => [

							'page_content_background' => [
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

							'pageContentBoxedShadow' => [
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

							'pageContentBoxedSpacing' => [
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
				'label' => __( 'Page Elements', 'blocksy' ),
			],

			'has_page_comments' => [
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

							'pageCommentsContainerWidth' => [
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

							'pageCommentsFontColor' => [
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

							'page_comments_background' => [
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
	],
];
