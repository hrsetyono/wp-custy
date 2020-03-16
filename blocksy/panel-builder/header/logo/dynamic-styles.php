<?php

// Logo size
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.custom-logo-link',
	'variableName' => 'maxHeight',
	'value' => blocksy_akg('logoMaxHeight', $atts, [
		'mobile' => 50,
		'tablet' => 50,
		'desktop' => 50,
	])
]);

// Site title font
blocksy_output_font_css([
	'font_value' => blocksy_akg('siteTitle', $atts,
		blocksy_typography_default_values([
			'size' => '25px',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.site-title'
]);


// Site title color
blocksy_output_colors([
	'value' => blocksy_akg('siteTitleColor', $atts),
	'default' => [
		'default' => [ 'color' => 'var(--paletteColor4)' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '.site-title',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.site-title',
			'variable' => 'colorHover'
		],
	],
	'responsive' => true
]);


// Site tagline font
blocksy_output_font_css([
	'font_value' => blocksy_akg('siteTagline', $atts,
		blocksy_typography_default_values([
			'size' => [
				'desktop' => '13px',
				'tablet'  => '13px',
				'mobile'  => '12px'
			],
			'variation' => 'n5',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.site-description'
]);


// Site tagline color
blocksy_output_colors([
	'value' => blocksy_akg('siteTaglineColor', $atts),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '.site-description',
			'variable' => 'color'
		],
	],
	'responsive' => true
]);


blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.site-branding',
	'important' => true,
	'value' => blocksy_default_akg(
		'headerLogoMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);
