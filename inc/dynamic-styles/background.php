<?php

// Site background
// blocksy_output_background_css([
// 	'selector' => '.site-main',
// 	'css' => $css,
// 	'value' => get_theme_mod(
// 		'site_background',
// 		blocksy_background_default_value([
// 			'backgroundColor' => [
// 				'default' => [
// 					'color' => '#f8f9fb'
// 				],
// 			],
// 		])
// 	)
// ]);

// Post
blocksy_output_background_css([
	'selector' => '.single .site-main',
	'css' => $css,
	'value' => get_theme_mod(
		'post_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => Blocksy_Css_Injector::get_skip_rule_keyword()
				],
			],
		])
	)
]);

blocksy_output_background_css([
	'selector' => '.post[data-content="boxed"]',
	'css' => $css,
	'value' => get_theme_mod(
		'single_content_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#ffffff'
				],
			],
		])
	)
]);

blocksy_output_background_css([
	'selector' => '.ct-related-posts',
	'css' => $css,
	'value' => get_theme_mod(
		'related_posts_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#eff1f5'
				],
			],
		])
	)
]);

blocksy_output_background_css([
	'selector' => '.single .ct-comments-container',
	'css' => $css,
	'value' => get_theme_mod(
		'post_comments_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#f8f9fb'
				],
			],
		])
	)
]);

// Page
blocksy_output_background_css([
	'selector' => '.page .site-main',
	'css' => $css,
	'value' => get_theme_mod(
		'page_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => Blocksy_Css_Injector::get_skip_rule_keyword()
				],
			],
		])
	)
]);

// Page content
blocksy_output_background_css([
	'selector' => '.page[data-content="boxed"]',
	'css' => $css,
	'value' => get_theme_mod(
		'page_content_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#ffffff'
				],
			],
		])
	)
]);

blocksy_output_background_css([
	'selector' => '.page .ct-comments-container',
	'css' => $css,
	'value' => get_theme_mod(
		'page_comments_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#f8f9fb'
				],
			],
		])
	)
]);

// Footer
blocksy_output_background_css([
	'selector' => '.footer-widgets-area',
	'css' => $css,
	'value' => get_theme_mod(
		'widgets_area_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#f4f5f8'
				],
			],
		])
	)
]);

// Shop
blocksy_output_background_css([
	'selector' => '.single-product .site-main',
	'css' => $css,
	'value' => get_theme_mod(
		'product_page_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => Blocksy_Css_Injector::get_skip_rule_keyword()
				],
			],
		])
	)
]);
