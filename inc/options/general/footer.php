<?php

$footer = new Blocksy_Customizer_Builder_Footer();

$options = [
	'footer_general_section_options' => [
		'type' => 'ct-options',
		'setting' => [ 'transport' => 'postMessage' ],
		'customizer_section' => 'layout',
		'inner-options' => [
			'footer_placements' => [
				'type' => 'ct-footer-builder',
				'setting' => ['transport' => 'postMessage'],
				'value' => $footer->get_default_value(),
				'selective_refresh' => [
					[
						'id' => 'footer_placements_1',
						'fallback_refresh' => false,
						'container_inclusive' => true,
						'selector' => '#main-container > footer.site-footer',
						'settings' => ['footer_placements'],
						'render_callback' => function () {
							$footer = new Blocksy_Customizer_Builder_Footer();
							echo $footer->render();
						}
					],

					[
						'id' => 'footer_placements_item:menu',
						'fallback_refresh' => false,
						'container_inclusive' => true,
						'selector' => '.footer-menu',
						'settings' => ['footer_placements'],
						'render_callback' => function () {
							$header = new Blocksy_Customizer_Builder_Render_Columns();
							echo $header->render_single_item('menu');
						}
					],
				]
			],
		]
	],
];

