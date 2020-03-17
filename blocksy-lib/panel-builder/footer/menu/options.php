<?php

if (! isset($location)) {
	$location = 'Menu';
}

$menu_options = [
	'label' => __('Select Menu', 'blocksy'),
	'type' => 'ct-select',
	'value' => blocksy_get_default_menu(),
	'view' => 'text',
	'design' => 'inline',
	'setting' => [ 'transport' => 'postMessage' ],
	'placeholder' => __('Select menu...', 'blocksy'),
	'choices' => blocksy_ordered_keys(blocksy_get_menus_items()),
	'desc' => sprintf(
		// translators: placeholder here means the actual URL.
		__( 'Manage your menus in the %sMenus screen%s.', 'blocksy' ),
		sprintf(
			'<a href="%s" target="_blank">',
			admin_url('/nav-menus.php')
		),
		'</a>'
	),
];

$options = [

	(
		blocksy_has_i18n_plugin() ? [

			'menu_source' => [
				'label' => __('Menu Source', 'blocksy'),
				'type' => 'ct-radio',
				'value' => 'menu',
				'view' => 'text',
				'design' => 'block',
				'setting' => [ 'transport' => 'postMessage' ],
				'choices' => [
					'menu' => __( 'Select Menu', 'blocksy' ),
					'location' => __( 'Use Location', 'blocksy' ),
				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'menu_source' => 'menu' ],
				'options' => [
					'menu' => $menu_options
				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'menu_source' => 'location' ],
				'options' => [

					blocksy_rand_md5() => [
						'type' => 'ct-title',
						'variation' => 'menu-location',
						'label' => sprintf(
							// translators: placeholders is menu location
							__( 'Location Name: %s', 'blocksy' ),
							$location
						),
						'desc' => sprintf(
							// translators: placeholder here means the actual URL.
							__( 'Chose this option only if you use a multilingual plugin in order to assign different menus to the same location. Go to %sMenus screen%s and assign a menu to this location.', 'blocksy' ),
							sprintf(
								'<a href="%s" target="_blank">',
								admin_url('/nav-menus.php')
							),
							'</a>'
						),
					],

				],
			],

		] : [
			'menu' => $menu_options
		]
	),

	blocksy_rand_md5() => [
		'title' => __( 'General', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			'footerMenuItemsSpacing' => [
				'label' => __( 'Items Spacing', 'blocksy' ),
				'type' => 'ct-slider',
				'min' => 5,
				'max' => 100,
				'responsive' => true,
				'value' => [
					'mobile' => 20,
					'tablet' => 25,
					'desktop' => 25,
				],
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'stretch_menu' => [
				'label' => __( 'Stretch Menu', 'blocksy' ),
				'type' => 'ct-switch',
				'value' => 'no',
				'divider' => 'top',
				'desc' => __('Enabling this option will make the menu to stretch and fit the width of its parent column. ', 'blocksy'),
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'footerMenuAlignment' => [
				'type' => 'ct-radio',
				'label' => __( 'Menu Alignment', 'blocksy' ),
				'view' => 'text',
				'design' => 'block',
				'divider' => 'top',
				'disableRevertButton' => true,
				'responsive' => true,
				'attr' => [ 'data-type' => 'alignment' ],
				'setting' => [ 'transport' => 'postMessage' ],

				'choices' => [
					'flex-start' => '',
					'center' => '',
					'flex-end' => '',
				],

				'value' => [
					'desktop' => 'flex-start',
					'tablet' => 'flex-start',
					'mobile' => 'center'
				],
			],

		],
	],

	blocksy_rand_md5() => [
		'title' => __( 'Design', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			'footerMenuFont' => [
				'type' => 'ct-typography',
				'label' => __( 'Font', 'blocksy' ),
				'value' => blocksy_typography_default_values([
					'size' => '12px',
					'variation' => 'n7',
					'line-height' => '1.3',
					'text-transform' => 'uppercase',
				]),
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'footerMenuFontColor' => [
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
						'title' => __( 'Hover/Active', 'blocksy' ),
						'id' => 'hover',
						'inherit' => 'var(--colorHover)',
					],
				],
			],

			'footerMenuMargin' => [
				'label' => __( 'Margin', 'blocksy' ),
				'type' => 'ct-spacing',
				'divider' => 'top',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => blocksy_spacing_value([
					'linked' => true,
				]),
				'responsive' => true
			],

		],
	],
];
