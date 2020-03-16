<?php

// Font color
blocksy_output_colors([
	'value' => blocksy_akg('headerButtonFontColor', $atts),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
		'hover' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '.ct-header-cta',
			'variable' => 'buttonTextInitialColor'
		],

		'hover' => [
			'selector' => '.ct-header-cta',
			'variable' => 'buttonTextHoverColor'
		],
	],
	'responsive' => true
]);

// Background color
blocksy_output_colors([
	'value' => blocksy_akg('headerButtonForeground', $atts),
	'default' => [
		'default' => [ 'color' => 'var(--paletteColor1)' ],
		'hover' => [ 'color' => 'var(--paletteColor2)' ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '.ct-header-cta',
			'variable' => 'buttonInitialColor'
		],

		'hover' => [
			'selector' => '.ct-header-cta',
			'variable' => 'buttonHoverColor'
		],
	],
	'responsive' => true
]);

// Margin
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-header-cta',
    'important' => true,
	'value' => blocksy_default_akg( 'headerCtaMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);

// Border radius
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-header-cta',
	'property' => 'borderRadius',
	'value' => blocksy_default_akg( 'headerCtaRadius', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);
