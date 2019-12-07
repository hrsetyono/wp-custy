<?php

if (empty($default_height)) {
	$default_height = [
		'mobile' => 70,
		'tablet' => 70,
		'desktop' => 120,
	];
}

if (empty($default_background)) {
	$default_background = blocksy_background_default_value([
		'backgroundColor' => [
			'default' => [
				'color' => '#ffffff',
			],
		],
	]);
}

$options = [
	blocksy_rand_md5() => [
		'title' => __( 'General', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			'headerRowWidth' => [
				'label' => __( 'Container Width', 'blocksy' ),
				'type' => 'ct-radio',
				'value' => 'fixed',
				'view' => 'text',
				'design' => 'block',
				'setting' => [ 'transport' => 'postMessage' ],
				'choices' => [
					'fixed' => __( 'Fixed', 'blocksy' ),
					'fluid' => __( 'Fluid', 'blocksy' ),
				],
			],

			'headerRowHeight' => [
				'label' => __( 'Min Height', 'blocksy' ),
				'type' => 'ct-slider',
				'min' => 20,
				'max' => 300,
				'responsive' => true,
				'value' => $default_height,
				'divider' => 'top',
				'setting' => [ 'transport' => 'postMessage' ],
			],

		],
	],

	blocksy_rand_md5() => [
		'title' => __( 'Design', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			'headerRowTopBorder' => [
				'label' => __( 'Top Border', 'blocksy' ),
				'type' => 'ct-border',
				'design' => 'block',
				'responsive' => true,
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => [
					'width' => 1,
					'style' => 'none',
					'color' => [
						'color' => 'rgba(44,62,80,0.2)',
					],
				]
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'headerRowTopBorder/style:responsive' => '!none' ],
				'options' => [

					'headerRowTopBorderFullWidth' => [
						'label' => __( 'Top Border - Full Width', 'blocksy' ),
						'type' => 'ct-switch',
						'value' => 'no',
						'setting' => [ 'transport' => 'postMessage' ],
					],

				],
			],

			'headerRowBottomBorder' => [
				'label' => __( 'Bottom Border', 'blocksy' ),
				'type' => 'ct-border',
				'design' => 'block',
				'responsive' => true,
				'divider' => 'top',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => [
					'width' => 1,
					'style' => 'none',
					'color' => [
						'color' => 'rgba(44,62,80,0.2)',
					],
				]
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'headerRowBottomBorder/style:responsive' => '!none' ],
				'options' => [

					'headerRowBottomBorderFullWidth' => [
						'label' => __( 'Bottom Border - Full Width', 'blocksy' ),
						'type' => 'ct-switch',
						'value' => 'no',
						'setting' => [ 'transport' => 'postMessage' ],
					],

				],
			],

			'headerRowBackground' => [
				'label' => __( 'Background', 'blocksy' ),
				'type'  => 'ct-background',
				'design' => 'inline',
				'divider' => 'top',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $default_background
			],

			'headerRowShadow' => [
				'label' => __( 'Shadow', 'blocksy' ),
				'type' => 'ct-box-shadow',
				'responsive' => true,
				'divider' => 'top',
				'value' => blocksy_box_shadow_value([
					'enable' => false,
					'h_offset' => 0,
					'v_offset' => 10,
					'blur' => 20,
					'spread' => 0,
					'inset' => false,
					'color' => [
						'color' => 'rgba(44,62,80,0.15)',
					],
				])
			],

		],
	],
];
