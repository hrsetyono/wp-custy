<?php

$page_title_source = blocksy_get_page_title_source(is_customize_preview());

if ($page_title_source) {
	$type = blocksy_akg_or_customizer(
		'hero_section',
		$page_title_source,
		'type-1'
	);

	if (
		function_exists('is_woocommerce')
		&&
		(
			is_product_category()
			||
			is_product_tag()
		)
	) {
		$type = 'type-2';
	}

	// title
	blocksy_output_font_css([
		'font_value' => blocksy_akg_or_customizer(
			'pageTitleFont',
			$page_title_source,
			blocksy_typography_default_values([
				'size' => [
					'desktop' => '32px',
					'tablet'  => '30px',
					'mobile'  => '25px'
				],
				'line-height' => '1.3',
			])
		),
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.entry-header .page-title'
	]);

	blocksy_output_colors([
		'value' => blocksy_akg_or_customizer( 'pageTitleFontColor', $page_title_source ),
		'default' => [
			'default' => [ 'color' => 'var(--paletteColor4)' ],
		],
		'css' => $css,
		'variables' => [
			'default' => [
				'selector' => '.entry-header .page-title',
				'variable' => 'color'
			],
		],
	]);


	// meta
	blocksy_output_font_css([
		'font_value' => blocksy_akg_or_customizer(
			'pageMetaFont',
			$page_title_source,
			blocksy_typography_default_values([
				'size' => [
					'desktop' => '12px',
					'tablet'  => '12px',
					'mobile'  => '12px'
				],
				'variation' => 'n6',
				'line-height' => '1.3',
				'text-transform' => 'uppercase',
			])
		),
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.entry-header .entry-meta'
	]);

	blocksy_output_colors([
		'value' => blocksy_akg_or_customizer( 'pageMetaFontColor', $page_title_source ),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'variables' => [
			'default' => [
				'selector' => '.entry-header .entry-meta',
				'variable' => 'color'
			],

			'hover' => [
				'selector' => '.entry-header .entry-meta',
				'variable' => 'colorHover'
			],
		],
	]);

	// excerpt
	blocksy_output_font_css([
		'font_value' => blocksy_akg_or_customizer(
			'pageExcerptFont',
			$page_title_source,
			blocksy_typography_default_values([
				'variation' => 'n5',
			])
		),
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.entry-header .page-description'
	]);

	blocksy_output_colors([
		'value' => blocksy_akg_or_customizer( 'pageExcerptColor', $page_title_source ),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'variables' => [
			'default' => [
				'selector' => '.entry-header .page-description',
				'variable' => 'color'
			],
		],
	]);


	if ($type === 'type-2' || is_customize_preview()) {
		// height
		blocksy_output_responsive([
			'css' => $css,
			'tablet_css' => $tablet_css,
			'mobile_css' => $mobile_css,
			'selector' => '.hero-section[data-type="type-2"]',
			'variableName' => 'minHeight',
			'unit' => '',
			'value' => blocksy_akg_or_customizer(
				'hero_height',
				$page_title_source,
				'230px'
			)
		]);

		// overlay color
		blocksy_output_colors([
			'value' => blocksy_akg_or_customizer(
				'pageTitleOverlay',
				$page_title_source
			),
			'default' => ['default' => ['color' => 'rgba(41, 51, 60, 0.2)']],
			'css' => $css,
			'variables' => [
				'default' => [
					'selector' => '.hero-section[data-type="type-2"]',
					'variable' => 'pageTitleOverlay'
				],
			],
		]);

		// background color
		blocksy_output_colors([
			'value' => blocksy_akg_or_customizer(
				'pageTitleBackground',
				$page_title_source
			),
			'default' => ['default' => ['color' => '#EDEFF2']],
			'css' => $css,
			'variables' => [
				'default' => [
					'selector' => '.hero-section[data-type="type-2"]',
					'variable' => 'pageTitleBackground'
				],
			],
		]);
	}
}
