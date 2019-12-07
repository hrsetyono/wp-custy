<?php

$options = [

	blocksy_rand_md5() => [
		'title' => __( 'Page Title', 'blocksy' ),
		'type' => 'tab',
		'options' => [

			blocksy_get_options('general/page-title', [
				'has_default' => true,
			])

		],
	],
];
