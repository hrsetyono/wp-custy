<?php

class Blocksy_Customizer_Builder_Header {
	public function get_default_value() {
		// @new - hijack the default value
		$values = Custy::get_default_value( 'header_placements' );
		if( !empty( $values ) ) {
			return $values;
		}

		return [
			'current_section' => 'type-1',
			'sections' => [
				$this->get_structure_for([
					'id' => 'type-1',
					'mode' => 'placements',
					'items' => [
						'desktop' => [
							'middle-row' => [
								'start' => ['logo'],
								'end' => ['menu', 'search']
							]
						],

						'mobile' => [
							'middle-row' => [
								'start' => ['logo'],
								'end' => ['trigger']
							],

							'offcanvas' => [
								'start' => [
									'mobile-menu',
									'button'
								]
							]
						]
					]
				]),

				$this->get_structure_for([
					'id' => 'type-2',
					'mode' => 'placements',
					'items' => [

						'desktop' => [
							'middle-row' => [
								'start' => ['logo'],
								'middle' => ['menu'],
								'end' => ['search', 'button']
							]
						],

						'mobile' => [
							'middle-row' => [
								'start' => ['search'],
								'middle' => ['logo'],
								'end' => ['trigger']
							],

							'offcanvas' => [
								'start' => [
									'mobile-menu',
									'button'
								]
							]
						]
					]
				]),

				$this->get_structure_for([
					'id' => 'type-3',
					'mode' => 'placements',
					'items' => [

						'desktop' => [
							'middle-row' => [
								'start' => ['search'],
								'middle' => ['logo'],
								'end' => ['socials']
							],

							'bottom-row' => [
								'middle' => ['menu'],
							],
						],

						'mobile' => [
							'middle-row' => [
								'start' => ['search'],
								'middle' => ['logo'],
								'end' => ['trigger']
							],

							'offcanvas' => [
								'start' => [
									'mobile-menu',
									'button'
								]
							]
						]
					]
				]),
			]
		];
	}

	public function get_structure_for($args = []) {
		$args = wp_parse_args($args, [
			'id' => null,
			'mode' => 'placements',
			'items' => []
		]);

		$args['items'] = wp_parse_args($args['items'], [
			'desktop' => [],
			'mobile' => []
		]);

		$args['items']['desktop'] = wp_parse_args($args['items']['desktop'], [
			'top-row' => [],
			'middle-row' => [],
			'bottom-row' => [],
		]);

		$args['items']['mobile'] = wp_parse_args($args['items']['mobile'], [
			'top-row' => [],
			'middle-row' => [],
			'bottom-row' => [],
			'offcanvas' => [],
		]);

		$base = [
			'id' => $args['id'],
			'mode' => $args['mode'],
			'items' => []
		];

		if ($args['mode'] === 'placements') {
			$base['desktop'] = [
				$this->get_bar_structure_for([
					'id' => 'top-row',
					'mode' => $args['mode'],
					'items' => $args['items']['desktop']['top-row']
				]),
				$this->get_bar_structure_for([
					'id' => 'middle-row',
					'mode' => $args['mode'],
					'items' => $args['items']['desktop']['middle-row']
				]),
				$this->get_bar_structure_for([
					'id' => 'bottom-row',
					'mode' => $args['mode'],
					'items' => $args['items']['desktop']['bottom-row']
				]),
			];

			$base['mobile'] = [
				$this->get_bar_structure_for([
					'id' => 'top-row',
					'mode' => $args['mode'],
					'items' => $args['items']['mobile']['top-row']
				]),
				$this->get_bar_structure_for([
					'id' => 'middle-row',
					'mode' => $args['mode'],
					'items' => $args['items']['mobile']['middle-row']
				]),
				$this->get_bar_structure_for([
					'id' => 'bottom-row',
					'mode' => $args['mode'],
					'items' => $args['items']['mobile']['bottom-row']
				]),
				$this->get_bar_structure_for([
					'id' => 'offcanvas',
					'mode' => $args['mode'],
					'has_secondary' => false,
					'items' => $args['items']['mobile']['offcanvas']
				]),
			];
		}

		if ($args['mode'] === 'rows') {
			$base['desktop'] = [
				$this->get_bar_structure_for([
					'id' => 'top-row',
					'mode' => $args['mode']
				]),
				$this->get_bar_structure_for([
					'id' => 'middle-row',
					'mode' => $args['mode']
				]),
				$this->get_bar_structure_for([
					'id' => 'bottom-row',
					'mode' => $args['mode']
				]),
			];
		}

		return $base;
	}

	private function get_bar_structure_for($args = []) {
		$args = wp_parse_args($args, [
			'id' => null,
			'mode' => 'placements',
			'has_secondary' => true,
			'items' => []
		]);

		$args['items'] = wp_parse_args($args['items'], [
			'start' => [],
			'middle' => [],
			'end' => [],
			'start-middle' => [],
			'end-middle' => [],
		]);

		$placements = [
			['id' => 'start', 'items' => $args['items']['start']]
		];

		if ($args['has_secondary']) {
			$placements[] = ['id' => 'middle', 'items' => $args['items']['middle']];
			$placements[] = ['id' => 'end', 'items' => $args['items']['end']];

			$placements[] = ['id' => 'start-middle', 'items' => $args['items']['start-middle']];
			$placements[] = ['id' => 'end-middle', 'items' => $args['items']['end-middle']];
		}

		return array_merge([
			'id' => $args['id'],
		], (
			$args['mode'] === 'rows' ? [
				'row' => []
			] : ['placements' => $placements]
		));
	}

	public function output_footer_templates() {
		if (wp_is_mobile()) {
			return '';
		}

		return $this->output_header_template('desktop') . (
			$this->output_header_template('mobile')
		);
	}

	public function output_header_template($type = 'desktop') {
		return blocksy_html_tag(
			'script',
			[
				'id' => 'ct-header-template-' . $type,
				'type' => 'text-template/' . $type
			],
			$this->render($type)
		);
	}

	public function render($device = null) {
		if (! $device) {
			$device = wp_is_mobile() ? 'mobile' : 'desktop';
		}

		$renderer = new Blocksy_Customizer_Builder_Render_Placements(
			$device,
			'header_placements'
		);

		return $renderer->render();
	}

    public function render_offcanvas($device = 'mobile', $has_container = true) {
		$optionsMapping = [
			'header' => 'header_placements',
			'footer' => 'footer_placements'
		];

		$renderer = new Blocksy_Customizer_Builder_Render_Placements(
			$device,
			'header_placements'
		);

		return $renderer->render_offcanvas($has_container);
    }

	public function typography_keys() {
		$render = new Blocksy_Customizer_Builder_Render_Placements();
		$section = $render->get_current_section();

		$result = [];

		foreach ($section['items'] as $item) {
			$nested_item = $render->get_item_config_for($item['id']);

			if (
				! isset($nested_item['config']['typography_keys'])
				||
				empty($nested_item['config']['typography_keys'])
			) {
				continue;
			}

			$data = $render->get_item_data_for($item['id']);

			foreach ($nested_item['config']['typography_keys'] as $key) {
				$result[] = blocksy_akg($key, $data, []);
			}
		}

		return $result;
	}

	public function patch_value_for($processed_terms) {
		$current_value = get_theme_mod(
			'header_placements',
			$this->get_default_value()
		);

		foreach ($current_value['sections'] as $index => $header) {
			if (! isset($header['items'])) {
				continue;
			}

			foreach ($header['items'] as $item_index => $item) {
				if (! isset($item['values'])) {
					continue;
				}

				if (! isset($item['values']['menu'])) {
					continue;
				}

				if (! isset($processed_terms[$item['values']['menu']])) {
					continue;
				}

				$current_value['sections'][$index][
					'items'
				][$item_index]['values']['menu'] = $processed_terms[$item['values']['menu']];
			}
		}

		set_theme_mod('header_placements', $current_value);
	}
}
