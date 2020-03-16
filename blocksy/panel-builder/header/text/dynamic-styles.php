<?php

// Container max-width
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-header-text',
	'variableName' => 'maxWidth',
	'value' => blocksy_akg('headerTextMaxWidth', $atts, [
		'mobile' => 100,
		'tablet' => 100,
		'desktop' => 100,
	]),
	'unit' => '%'
]);

// Font
blocksy_output_font_css([
	'font_value' => blocksy_akg( 'headerTextFont', $atts,
		blocksy_typography_default_values([
			'size' => '15px',
			'line-height' => '1.3',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-header-text'
]);

// Font color
blocksy_output_colors([
	'value' => blocksy_akg('headerTextColor', $atts),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-header-text',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.ct-header-text',
			'variable' => 'colorHover'
		],
	],
]);


// Margin
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-header-text',
	'important' => true,
	'value' => blocksy_default_akg(
		'headerTextMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);