<?php

$options = [

	'has_reveal_effect' => [
		'label' => __( 'Reveal Effect', 'blocksy' ),
		'type' => 'ct-switch',
		'value' => 'no',
		'desc' => __( 'Enables a nice reveal effect as you scroll down.', 'blocksy' ),
		'setting' => [ 'transport' => 'postMessage' ],
	],

	// blocksy_rand_md5() => [
	// 	'type' => 'ct-condition',
	// 	'condition' => [ 'has_reveal_effect' => 'yes' ],
	// 	'options' => [

	// 		'footerShadow' => [
	// 			'label' => __( 'Shadow', 'blocksy' ),
	// 			'type' => 'ct-box-shadow',
	// 			'responsive' => true,
	// 			'divider' => 'top',
	// 			'hide_shadow_placement' => true,
	// 			'value' => blocksy_box_shadow_value([
	// 				'enable' => true,
	// 				'h_offset' => 0,
	// 				'v_offset' => 30,
	// 				'blur' => 50,
	// 				'spread' => 0,
	// 				'inset' => false,
	// 				'color' => [
	// 					'color' => 'rgba(0, 0, 0, 0.1)',
	// 				],
	// 			])
	// 		],

	// 	],
	// ],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	'headerBackground' => [
		'label' => __( 'Header Background', 'blocksy' ),
		'type' => 'ct-background',
		'design' => 'inline',
		'setting' => [ 'transport' => 'postMessage' ],
		'value' => blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#f4f5f8'
				],
			],
		]),
		'desc' => __( 'Please note, you can also change the background color for each row individually.', 'blocksy' ),
	],

];
