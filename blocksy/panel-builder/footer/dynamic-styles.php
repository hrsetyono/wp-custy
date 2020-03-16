<?php

// Box shadow
blocksy_output_box_shadow([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.site-footer:before',
	'value' => blocksy_akg('footerShadow', $atts, blocksy_box_shadow_value([
		'enable' => true,
		'h_offset' => 0,
		'v_offset' => 30,
		'blur' => 50,
		'spread' => 0,
		'inset' => false,
		'color' => [
			'color' => 'rgba(0, 0, 0, 0.1)',
		],
	])),
	'responsive' => true
]);

blocksy_output_background_css([
	'selector' => 'footer',
	'css' => $css,
	'value' => blocksy_akg(
		'footerBackground',
		$atts,
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#f4f5f8'
				],
			],
		])
	)
]);
