<?php

// Notice colors
blocksy_output_colors([
	'value' => get_theme_mod('wooNoticeContent'),
	'default' => [
		'default' => ['color' => '#ffffff']
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.demo_store',
			'variable' => 'color'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('wooNoticeBackground'),
	'default' => [
		'default' => ['color' => 'var(--paletteColor1)']
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.demo_store',
			'variable' => 'backgroundColor'
		],
	],
]);

if (! function_exists('is_woocommerce')) {
	return;
}

if (! is_woocommerce() && $context === 'inline') {
	return;
}

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.shop-entries',
	'variableName' => 'cardsGap',
	'value' => get_theme_mod('shopCardsGap', [
		'mobile' => 30,
		'tablet' => 30,
		'desktop' => 30,
	])
]);

blocksy_output_colors([
	'value' => get_theme_mod('cardProductTitleColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.woocommerce-loop-product__title',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.woocommerce-loop-product__title',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('cardProductCategoriesColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => 'article .product-categories',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => 'article .product-categories',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('cardProductPriceColor'),
	'default' => [
		'default' => ['color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ]
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.shop-entry-card .price',
			'variable' => 'color'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('cardStarRatingColor'),
	'default' => ['default' => ['color' => '#FDA256']],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.shop-entry-card',
			'variable' => 'starRatingColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('saleBadgeColor'),
	'default' => [
		'text' => [ 'color' => '#ffffff' ],
		'background' => [ 'color' => 'var(--paletteColor1)' ],
	],
	'css' => $css,
	'variables' => [
		'text' => [
			'selector' => '.shop-entry-card',
			'variable' => 'saleBadgeTextColor'
		],

		'background' => [
			'selector' => '.shop-entry-card',
			'variable' => 'saleBadgeBackgroundColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('cardProductImageOverlay'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword() ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.shop-entry-card',
			'variable' => 'imageOverlay'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('cardProductAction1Color'),
	'default' => [
		'default' => ['color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT')],
		'hover' => ['color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT')],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '[data-layout="grid"] .woo-card-actions',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '[data-layout="grid"] .woo-card-actions',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('cardProductAction2Color'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '[data-layout="shop-simple"] .woo-card-actions',
			'variable' => 'buttonInitialColor'
		],

		'hover' => [
			'selector' => '[data-layout="shop-simple"] .woo-card-actions',
			'variable' => 'buttonHoverColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('cardProductBackground'),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.shop-entry-card',
			'variable' => 'backgroundColor'
		],
	],
]);

// Box shadow
blocksy_output_box_shadow([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.shop-entry-card',
	'value' => get_theme_mod('cardProductShadow', blocksy_box_shadow_value([
		'enable' => true,
		'h_offset' => 0,
		'v_offset' => 12,
		'blur' => 18,
		'spread' => -6,
		'inset' => false,
		'color' => [
			'color' => 'rgba(34, 56, 101, 0.03)',
		],
	])),
	'responsive' => true
]);


// woo single product
$productGalleryWidth = get_theme_mod( 'productGalleryWidth', 50 );
$css->put(
	'.product-entry-wrapper',
	'--productGalleryWidth: ' . $productGalleryWidth . '%'
);

blocksy_output_colors([
	'value' => get_theme_mod('singleProductTitleColor'),
	'default' => [
		'default' => [ 'color' => 'var(--paletteColor4)' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.entry-summary .product_title',
			'variable' => 'color'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('singleProductPriceColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.entry-summary .price',
			'variable' => 'color'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('singleSaleBadgeColor'),
	'default' => [
		'text' => [ 'color' => '#ffffff' ],
		'background' => [ 'color' => 'var(--paletteColor1)' ],
	],
	'css' => $css,
	'variables' => [
		'text' => [
			'selector' => '.product > span.onsale',
			'variable' => 'saleBadgeTextColor'
		],

		'background' => [
			'selector' => '.product > span.onsale',
			'variable' => 'saleBadgeBackgroundColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('singleStarRatingColor'),
	'default' => [
		'default' => [ 'color' => '#FDA256' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.entry-summary,.woocommerce-tabs',
			'variable' => 'starRatingColor'
		],
	],
]);

blocksy_output_font_css([
	'font_value' => get_theme_mod(
		'cardProductTitleFont',
		blocksy_typography_default_values([
			'size' => '17px',
			'variation' => 'n5',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.woocommerce-loop-product__title, .woocommerce-loop-category__title'
]);
