<?php

// Icon size
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-header-search',
	'variableName' => 'iconSize',
	'value' => blocksy_akg('searchHeaderIconSize', $atts, [
		'mobile' => 15,
		'tablet' => 15,
		'desktop' => 15,
	])
]);


// Icon color
blocksy_output_colors([
	'value' => blocksy_akg('searchHeaderIconColor', $atts),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '.ct-header-search',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.ct-header-search',
			'variable' => 'colorHover'
		],
	],
	'responsive' => true
]);


// Links color
blocksy_output_colors([
	'value' => blocksy_akg('searchHeaderLinkColor', $atts),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '#search-modal',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '#search-modal',
			'variable' => 'colorHover'
		],
	],
]);


// Modal background
blocksy_output_background_css([
	'selector' => '#search-modal',
	'css' => $css,
	'value' => blocksy_akg('searchHeaderBackground', $atts,
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => 'rgba(18, 21, 25, 0.98)'
				],
			],
		])
	)
]);


// Icon margin
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-header-search',
	'important' => true,
	'value' => blocksy_default_akg(
		'headerSearchMargin', $atts,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);