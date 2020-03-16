<?php

if (empty($selector)) {
	$selector = '.site-footer [data-row="middle"]';
}

// Items gap
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $selector . ' > div',
	'variableName' => 'itemsGap',
	'value' => blocksy_akg('footerItemsGap', $atts, [
		'mobile' => 60,
		'tablet' => 60,
		'desktop' => 60,
	])
]);

// Row top & bottom spacing
if (empty($default_top_bottom_spacing)) {
	$default_top_bottom_spacing = [
		'mobile' => '40px',
		'tablet' => '50px',
		'desktop' => '70px',
	];
}

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $selector . ' > div',
	'variableName' => 'containerSpacing',
	'unit' => '',
	'value' => blocksy_akg(
		'rowTopBottomSpacing',
		$atts,
		$default_top_bottom_spacing
	)
]);

// Widgets title font & color
blocksy_output_font_css([
	'font_value' => blocksy_akg( 'footerWidgetsTitleFont', $atts,
		blocksy_typography_default_values([
			'size' => '16px',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $selector . ' .widget-title'
]);

blocksy_output_colors([
	'value' => blocksy_akg('footerWidgetsTitleColor', $atts),
	'default' => [
		'default' => [ 'color' => 'var(--paletteColor4)' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => $selector . ' .widget-title',
			'variable' => 'color'
		],
	],
]);


// Widgets font & color
blocksy_output_font_css([
	'font_value' => blocksy_akg( 'footerWidgetsFont', $atts,
		blocksy_typography_default_values([
			// 'size' => '16px',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $selector . ' .ct-widget > *:not(.widget-title)'
]);

// Widgets font color
blocksy_output_colors([
	'value' => blocksy_akg('rowFontColor', $atts),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => $selector . ' .ct-widget > *:not(.widget-title)',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => $selector . ' .ct-widget > *:not(.widget-title)',
			'variable' => 'colorHover'
		],
	],
]);


// Columns divider
blocksy_output_border([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $selector . ' [data-divider="columns"]',
	'variableName' => 'border',
	'value' => blocksy_akg('footerColumnsDivider', $atts, [
		'width' => 1,
		'style' => 'none',
		'color' => [
			'color' => '#dddddd',
		],
	]),
]);


// Row border
blocksy_output_border([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $selector,
	'variableName' => 'borderTop',
	'value' => blocksy_akg('footerRowTopDivider', $atts, [
		'width' => 1,
		'style' => 'none',
		'color' => [
			'color' => '#dddddd',
		],
	]),
]);

blocksy_output_border([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => $selector,
	'variableName' => 'borderBottom',
	'value' => blocksy_akg('footerRowBottomDivider', $atts, [
		'width' => 1,
		'style' => 'none',
		'color' => [
			'color' => '#dddddd',
		],
	]),
]);


// Row background
if (empty($default_background)) {
	$default_background = blocksy_background_default_value([
		'backgroundColor' => [
			'default' => [
				'color' => Blocksy_Css_Injector::get_skip_rule_keyword()
			],
		],
	]);
}

blocksy_output_background_css([
	'selector' => $selector,
	'css' => $css,
	'value' => blocksy_akg('footerRowBackground', $atts,
		$default_background
	)
]);


$count = count($primary_item['columns']);

$gridTemplate = [
	'desktop' => 'initial',
	'tablet' => 'initial',
	'mobile' => 'initial'
];

if ($count === 2) {
	$gridTemplate = blocksy_default_akg('2_columns_layout', $atts, [
		'desktop' => 'repeat(2, 1fr)',
		'tablet' => 'initial',
		'mobile' => 'initial'
	]);
}

if ($count === 3) {
	$gridTemplate = blocksy_default_akg('3_columns_layout', $atts, [
		'desktop' => 'repeat(3, 1fr)',
		'tablet' => 'initial',
		'mobile' => 'initial',
	]);
}

if ($count === 4) {
	$gridTemplate = blocksy_default_akg('4_columns_layout', $atts, [
		'desktop' => 'repeat(4, 1fr)',
		'tablet' => 'initial',
		'mobile' => 'initial'
	]);
}

$css->put(
	$selector . ' > div',
	'--gridTemplateColummns: ' . $gridTemplate['desktop']
);

$tablet_css->put(
	$selector . ' > div',
	'--gridTemplateColummns: ' . $gridTemplate['tablet']
);

$mobile_css->put(
	$selector . ' > div',
	'--gridTemplateColummns: ' . $gridTemplate['mobile']
);

