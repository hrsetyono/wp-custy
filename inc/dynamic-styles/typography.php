<?php

// blocksy_output_font_css([
// 	'font_value' => get_theme_mod(
// 		'rootTypography',
// 		blocksy_typography_default_values([
// 			'family' => 'System Default',
// 			'variation' => 'n4',
// 			'size' => '17px',
// 			'line-height' => '1.65',
// 			'letter-spacing' => '0em',
// 			'text-transform' => 'none',
// 			'text-decoration' => 'none',
// 		])
// 	),
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => ':root'
// ]);

// blocksy_output_font_css([
// 	'font_value' => get_theme_mod(
// 		'h1Typography',
// 		blocksy_typography_default_values([
// 			'size' => '40px',
// 			'variation' => 'n7',
// 			'line-height' => '1.5'
// 		])
// 	),
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => 'h1'
// ]);

// blocksy_output_font_css([
// 	'font_value' => get_theme_mod(
// 		'h2Typography',
// 		blocksy_typography_default_values([
// 			'size' => '35px',
// 			'variation' => 'n7',
// 			'line-height' => '1.5'
// 		])
// 	),
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => 'h2'
// ]);

// blocksy_output_font_css([
// 	'font_value' => get_theme_mod(
// 		'h3Typography',
// 		blocksy_typography_default_values([
// 			'size' => '30px',
// 			'variation' => 'n7',
// 			'line-height' => '1.5'
// 		])
// 	),
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => 'h3'
// ]);

// blocksy_output_font_css([
// 	'font_value' => get_theme_mod(
// 		'h4Typography',
// 		blocksy_typography_default_values([
// 			'size' => '25px',
// 			'variation' => 'n7',
// 			'line-height' => '1.5'
// 		])
// 	),
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => 'h4'
// ]);

// blocksy_output_font_css([
// 	'font_value' => get_theme_mod(
// 		'h5Typography',
// 		blocksy_typography_default_values([
// 			'size' => '20px',
// 			'variation' => 'n7',
// 			'line-height' => '1.5'
// 		])
// 	),
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => 'h5'
// ]);

// blocksy_output_font_css([
// 	'font_value' => get_theme_mod(
// 		'h6Typography',
// 		blocksy_typography_default_values([
// 			'size' => '16px',
// 			'variation' => 'n7',
// 			'line-height' => '1.5'
// 		])
// 	),
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => 'h6'
// ]);

// blocksy_output_font_css([
// 	'font_value' => get_theme_mod(
// 		'buttons',
// 		blocksy_typography_default_values([
// 			'size' => '15px',
// 			'variation' => 'n5',
// 		])
// 	),
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => ':root',
// 	'prefix' => 'button'
// ]);

// blocksy_output_font_css([
// 	'font_value' => get_theme_mod(
// 		'blockquote',
// 		blocksy_typography_default_values([
// 			'family' => 'Georgia',
// 			'size' => '25px',
// 			'variation' => 'n6',
// 		])
// 	),
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => '.entry-content blockquote p, .ct-quote-widget blockquote p'
// ]);

// blocksy_output_font_css([
// 	'font_value' => get_theme_mod(
// 		'pre',
// 		blocksy_typography_default_values([
// 			'family' => 'monospace',
// 			'size' => '16px',
// 			'variation' => 'n4',
// 		])
// 	),
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => 'code, kbd, samp, pre'
// ]);

blocksy_output_font_css([
	'font_value' => get_theme_mod(
		'sidebarWidgetsTitleFont',
		blocksy_typography_default_values([
			'size' => '18px',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-sidebar .widget-title'
]);

blocksy_output_font_css([
	'font_value' => get_theme_mod(
		'singleProductTitleFont',
		blocksy_typography_default_values([
			'size' => '30px',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.product_title'
]);
