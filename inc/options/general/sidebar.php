<?php
$defaults = my_get_default_mods();

/**
 * Colors options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$options = [ 'sidebar_section_options' => [
	'type' => 'ct-options',
	'setting' => [ 'transport' => 'postMessage' ],
	'inner-options' => [

		blocksy_rand_md5() => [
			'title' => __( 'Layout', 'blocksy' ),
			'type' => 'tab',
			'options' => [

				blocksy_rand_md5() => [
					'type' => 'ct-title',
					'desc' => '<div class="notice"> <p>CSS is applied to <code>[data-sidebar]</code></p>	</div>',
				],

				'sidebar_type' => [
					'label' => false,
					'type' => 'ct-image-picker',
					'value' => $defaults['sidebar_type'],
					'attr' => [ 'data-type' => 'background' ],
					'setting' => [ 'transport' => 'postMessage' ],
					'choices' => [
						'type-1' => [
							'src' => blocksy_image_picker_url( 'sidebar-type-1.svg' ),
						],
						'type-2' => [
							'src' => blocksy_image_picker_url( 'sidebar-type-2.svg' ),
						],
						'type-3' => [
							'src' => blocksy_image_picker_url( 'sidebar-type-3.svg' ),
						],
						'type-4' => [
							'src' => blocksy_image_picker_url( 'sidebar-type-4.svg' ),
						],

					],
				],

				'sidebarWidth' => [
					'label' => __( 'Sidebar Width', 'blocksy' ),
					'desc' => my_css_desc([
						'--sidebarWidth'
					]),
					'type' => 'ct-slider',
					'value' => $defaults['sidebarWidth'],
					'units' => [
						[ 'unit' => '%', 'min' => 10, 'max' => 30 ],
						[ 'unit' => 'px', 'min' => 100, 'max' => 300 ]
					],
					'setting' => [ 'transport' => 'postMessage' ],
				],
					
				'sidebarGap' => [
					'label' => __( 'Sidebar Gap', 'blocksy' ),
					'type' => 'ct-slider',
					'desc' => my_css_desc([
						'--sidebarGap'
					]),
					'value' => $defaults['sidebarGap'],
					'units' => [
						[ 'unit' => '%', 'min' => 0, 'max' => 10 ],
						[ 'unit' => 'px', 'min' => 0, 'max' => 100 ],
						[ 'unit' => 'rem', 'min' => 0, 'max' => 6 ],
					],
					'setting' => [ 'transport' => 'postMessage' ],
				],

				// Type Options
				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ 'sidebar_type' => 'type-2 | type-3 | type-4' ],
					'options' => [
						blocksy_rand_md5() => [
							'type' => 'ct-divider',
						],
						'sidebarInnerSpacing' => [
							'label' => __( 'Inner Spacing', 'blocksy' ),
							'type' => 'ct-slider',
							'desc' => my_css_desc([
								'--sidebarInnerSpacing'
							]),
							'responsive' => true,
							'value' => $defaults['sidebarInnerSpacing'],
							'units' => [
								[ 'unit' => 'px', 'min' => 5, 'max' => 50 ],
								[ 'unit' => 'rem', 'min' => 0, 'max' => 3 ],
							],
							'setting' => [ 'transport' => 'postMessage' ],
						],
					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ 'sidebar_type' => 'type-2' ],
					'options' => [
						'sidebarShadow' => [
							'label' => __( 'Shadow', 'blocksy' ),
							'type' => 'ct-select',
							'divider' => 'top',
							'design' => 'inline',
							'setting' => [ 'transport' => 'postMessage' ],
							'value' => $defaults['sidebarShadow'],
							'choices' => my_shadow_choices(),
						],
					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ 'sidebar_type' => 'type-2 | type-3' ],
					'options' => [
						'sidebarBorder' => [
							'label' => __( 'Border', 'blocksy' ),
							'type' => 'ct-border',
							'design' => 'inline',
							'setting' => [ 'transport' => 'postMessage' ],
							'value' => $defaults['sidebarBorder'],
						],
					],
				],
				
				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ 'sidebar_type' => 'type-2 | type-4' ],
					'options' => [
						'sidebarBackgroundColor' => [
							'label' => __( 'Background Color', 'blocksy' ),
							'type'  => 'ct-color-picker',
							'design' => 'inline',
							'setting' => [ 'transport' => 'postMessage' ],
							'value' => $defaults['sidebarBackgroundColor'],
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
					'condition' => [ 'sidebar_type' => 'type-2' ],
					'options' => [
						'separated_widgets' => [
							'label' => __( 'Separate Widgets', 'blocksy' ),
							'type' => 'ct-switch',
							'value' => $defaults['separated_widgets'],
							'setting' => [ 'transport' => 'postMessage' ],
						],
					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-divider',
				],

				'has_sticky_sidebar' => [
					'label' => __( 'Sticky Sidebar', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => $defaults['has_sticky_sidebar'],
					'setting' => [ 'transport' => 'postMessage' ],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ 'has_sticky_sidebar' => 'yes' ],
					'options' => [
						'sidebarOffset' => [
							'label' => __( 'Top Offset', 'blocksy' ),
							'desc' => my_css_desc([
								'--sidebarOffset'
							]),
							'type' => 'ct-slider',
							'units' => [
								[ 'unit' => 'px', 'min' => 0, 'max' => 50 ],
								[ 'unit' => 'rem', 'min' => 0, 'max' => 3 ]
							],
							'value' => $defaults['sidebarOffset'],
							'divider' => 'top',
							'setting' => [ 'transport' => 'postMessage' ],
						],
					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-divider',
				],

				'sidebar_visibility' => [
					'label' => __( 'Visibility', 'blocksy' ),
					'type' => 'ct-visibility',
					'design' => 'block',
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => $defaults['sidebar_visibility'],
					'choices' => blocksy_ordered_keys([
						'desktop' => __( 'Desktop', 'blocksy' ),
						'tablet' => __( 'Tablet', 'blocksy' ),
						'mobile' => __( 'Mobile', 'blocksy' ),
					]),
				],

			],
		],

		blocksy_rand_md5() => [
			'title' => __( 'Content', 'blocksy' ),
			'type' => 'tab',
			'options' => [

				blocksy_rand_md5() => [
					'type' => 'ct-title',
					'desc' => '<div class="notice"> <p>CSS is applied to <code>.ct-sidebar</code></p> </div>',
				],

				'sidebarWidgetsSpacing' => [
					'label' => __( 'Widgets Spacing' ),
					'type' => 'ct-slider',
					'desc' => my_css_desc([
						'--sidebarWidgetsSpacing'
					]),
					'responsive' => true,
					'value' => $defaults['sidebarWidgetsSpacing'],
					'units' => [
						[ 'unit' => 'px', 'min' => 0, 'max' => 80 ],
						[ 'unit' => 'rem', 'min' => 0, 'max' => 5 ], 
					],
					'setting' => [ 'transport' => 'postMessage' ],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-title',
					'label' => __( 'Sidebar Text' ),
				],

				'sidebarTitleSize' => [
					'type' => 'ct-select',
					'desc' => my_css_desc([
						'--sidebarTitleSize'
					]),
					'design' => 'inline',
					'label' => __( 'Title Size' ),
					'value' => $defaults['sidebarTitleSize'],
					'choices' => my_heading_size_choices(),
					'setting' => [ 'transport' => 'postMessage' ],
				],

				'sidebarTitleColor' => [
					'label' => __( 'Title Color', 'blocksy' ),
					'desc' => my_css_desc([
						'--sidebarTitleColor'
					]),
					'type'  => 'ct-color-picker',
					'design' => 'inline',
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => $defaults['sidebarTitleColor'],
					'pickers' => [
						[
							'title' => __( 'Initial', 'blocksy' ),
							'id' => 'default',
						],
					],
				],

				'sidebarFontSize' => [
					'type' => 'ct-select',
					'desc' => my_css_desc([
						'--sidebarFontSize'
					]),
					'design' => 'inline',
					'label' => __( 'Font Size' ),
					'value' => $defaults['sidebarFontSize'],
					'choices' => my_font_size_choices(),
					'setting' => [ 'transport' => 'postMessage' ],
				],

				'sidebarFontColor' => [
					'label' => __( 'Font Color', 'blocksy' ),
					'desc' => my_css_desc([
						'--color',
						'--colorHover'
					]),
					'type'  => 'ct-color-picker',
					'design' => 'inline',
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => $defaults['sidebarFontColor'],
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

				blocksy_rand_md5() => [
					'type' => 'ct-divider',
				],

			],
		],
	],

] ];
