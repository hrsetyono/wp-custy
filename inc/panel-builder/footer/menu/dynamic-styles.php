<?php

if (empty($selector)) {
	$selector = '.footer-menu';
}

// Items spacing
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $selector,
	'variableName' => 'menuItemsSpacing',
	'value' => blocksy_akg('footerMenuItemsSpacing', $atts, [
		'mobile' => 20,
		'tablet' => 25,
		'desktop' => 25,
	])
]);

// Alignment
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '[data-column="menu"]',
	'variableName' => 'alignment',
	'unit' => '',
	'value' => blocksy_akg('footerMenuAlignment', $atts, [
		'desktop' => 'flex-start',
		'tablet' => 'flex-start',
		'mobile' => 'center'
	])
]);

// Top level font
blocksy_output_font_css([
	'font_value' => blocksy_akg( 'footerMenuFont', $atts,
		blocksy_typography_default_values([
			'size' => '12px',
			'variation' => 'n7',
			'line-height' => '1.3',
			'text-transform' => 'uppercase',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $selector . ' ul'
]);


// Font color
blocksy_output_colors([
	'value' => blocksy_akg('footerMenuFontColor', $atts),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => $selector . ' > ul > li > a',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => $selector . ' > ul > li > a',
			'variable' => 'colorHover'
		],
	],
]);

// Top level margin
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $selector,
	'important' => true,
	'value' => blocksy_default_akg(
		'footerMenuMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);