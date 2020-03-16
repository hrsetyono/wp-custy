<?php

// link font
blocksy_output_font_css([
	'font_value' => blocksy_akg('mobileMenuFont', $atts,
		blocksy_typography_default_values([
			'size' => [
				'desktop' => '30px',
				'tablet'  => '30px',
				'mobile'  => '23px'
			],
			'variation' => 'n7',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.mobile-menu'
]);


// link color
blocksy_output_colors([
	'value' => blocksy_akg('mobileMenuColor', $atts),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.mobile-menu',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.mobile-menu',
			'variable' => 'colorHover'
		],
	],
]);


// Margin
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '[data-id="mobile-menu"]',
	'value' => blocksy_default_akg(
		'mobileMenuMargin', $atts,
		blocksy_spacing_value([
			'left' => 'auto',
			'right' => 'auto',
			'linked' => true,
		])
	)
]);
