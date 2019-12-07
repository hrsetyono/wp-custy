<?php

$source = blocksy_get_pagination_source();

// Pagination
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-pagination',
	'variableName' => 'spacing',
	'value' => blocksy_akg_or_customizer('paginationSpacing', $source, [
		'mobile' => 50,
		'tablet' => 60,
		'desktop' => 80,
	])
]);

blocksy_output_border([
	'css' => $css,
	'selector' => '.ct-pagination[data-divider]',
	'variableName' => 'border',
	'value' => blocksy_akg_or_customizer('paginationDivider', $source, [
		'width' => 1,
		'style' => 'none',
		'color' => [
			'color' => 'rgba(224, 229, 235, 0.5)',
		],
	])
]);


blocksy_output_colors([
	'value' => blocksy_akg_or_customizer(
		'simplePaginationFontColor',
		$source,
		[]
	),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'active' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-pagination[data-type="simple"], .ct-pagination[data-type="nex_prev"]',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.ct-pagination[data-type="simple"], .ct-pagination[data-type="nex_prev"]',
			'variable' => 'colorHover'
		],

		'active' => [
			'selector' => '.ct-pagination[data-type="simple"]',
			'variable' => 'colorActive'
		]
	],
]);


blocksy_output_colors([
	'value' => blocksy_akg_or_customizer('paginationButtonText', $source, []),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
		'hover' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-pagination[data-type="load_more"]',
			'variable' => 'buttonTextInitialColor'
		],

		'hover' => [
			'selector' => '.ct-pagination[data-type="load_more"]',
			'variable' => 'buttonTextHoverColor'
		],
	],
]);

blocksy_output_colors([
	'value' => blocksy_akg_or_customizer('paginationButton', $source, []),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-pagination[data-type="load_more"]',
			'variable' => 'buttonInitialColor'
		],

		'hover' => [
			'selector' => '.ct-pagination[data-type="load_more"]',
			'variable' => 'buttonHoverColor'
		],
	],
]);

