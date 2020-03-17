<?php

class Blocksy_Customizer_Builder_Render_Columns {
	private $placements_key = 'footer_placements';
	private $registered_items = [];
	private $section_value = null;

	public function __construct($placements_key = 'footer_placements') {
		$this->placements_key = $placements_key;
		$b = new Blocksy_Customizer_Builder();
		$this->registered_items = $b->get_registered_items_by('footer');
	}

	public function get_section_value() {
		$footer = new Blocksy_Customizer_Builder_Footer();

		// @changed - use default if $mod is empty
		$mod = get_theme_mod(
			$this->placements_key,
			$footer->get_default_value()
		);

		if( count( $mod['sections'] ) <= 0 ) {
			$mod = $footer->get_default_value();
		}
		// /changed
		
		return $mod;
	}

	public function get_current_section() {
		if (! $this->section_value) {
			$this->section_value = $this->get_section_value();
		}

		foreach ($this->section_value['sections'] as $single_section) {
			if ($single_section['id'] === $this->section_value['current_section']) {
				return $single_section;
			}
		}

		return $this->section_value['sections'][0];
	}

	public function render() {
		$content = '';

		$footer = $this->get_current_section();
		$atts = $footer['settings'];

		// if no content from filter, create default one
		$reveal_output = [];

		if (blocksy_default_akg('has_reveal_effect', $atts, 'no') === 'yes') {
			$reveal_output['data-footer-reveal'] = 'no';
		}

		foreach( $footer['rows'] as $row ) {
			$content .= $this->render_row($row);
		}

		return blocksy_html_tag(
			'footer',
			array_merge([
				'class' => 'site-footer',
			], $reveal_output, blocksy_schema_org_definitions('footer', [
				'array' => true
			])),
			blocksy_html_tag(
				'div',
				[
					'class' => 'footer-inner'
				],
				$content
			)
		);
	}

	public function render_row( $row ) {
		if ($this->is_row_empty($row)) {
			return '';
		}

		$row_config = $this->get_item_config_for( $row['id'] );

		$simplified_id = str_replace(
			'-row',
			'',
			$row['id']
		);

		$atts = $this->get_item_data_for($row['id']);

		$count = count($row['columns']);

		$data_stack = [];

		if ($count === 2) {
			$columns = blocksy_default_akg(
				'2_columns_layout',
				$atts,
				[
					'desktop' => 'repeat(2, 1fr)',
					'tablet' => 'initial',
					'mobile' => 'initial'
				]
			);

			if ($columns['tablet'] === 'initial') {
				$data_stack = ['data-stack' => 'tablet'];
			}
		}

		if ($count === 3) {
			$columns = blocksy_default_akg(
				'3_columns_layout',
				$atts,
				[
					'desktop' => 'repeat(3, 1fr)',
					'tablet' => 'initial',
					'mobile' => 'initial'
				]
			);

			if ($columns['tablet'] === 'initial') {
				$data_stack = ['data-stack' => 'tablet'];
			}
		}

		if ($count === 4) {
			$columns = blocksy_default_akg(
				'4_columns_layout',
				$atts,
				[
					'desktop' => 'repeat(4, 1fr)',
					'tablet' => 'initial',
					'mobile' => 'initial'
				]
			);

			if ($columns['tablet'] === 'initial') {
				$data_stack = ['data-stack' => 'tablet'];
			}
		}

		$container_class = 'ct-container';

		if (blocksy_default_akg('footerRowWidth', $atts, 'fixed') !== 'fixed') {
			$container_class = 'ct-container-fluid';
		}

		$divider_output = [];

		if (blocksy_default_akg('footerColumnsDivider', $atts, [
			'width' => 1,
			'style' => 'none',
			'color' => [
				'color' => '#dddddd',
			],

		])['style'] !== 'none') {
			$divider_output = ['data-divider' => 'columns'];
		}

		$row_divider_output = [];

		if (blocksy_default_akg('footerRowTopDivider', $atts, [
			'width' => 1,
			'style' => 'none',
			'color' => [
				'color' => '#dddddd',
			],
		])['style'] !== 'none') {
			$row_divider_output[] = 'top';
		}

		if (blocksy_default_akg('footerRowBottomDivider', $atts, [
			'width' => 1,
			'style' => 'none',
			'color' => [
				'color' => '#dddddd',
			],
		])['style'] !== 'none') {
			$row_divider_output[] = 'bottom';
		}

		if (! empty($row_divider_output)) {
			$row_divider_output = [
				'data-divider' => implode(':', $row_divider_output)
			];
		}

		$visibility_classes = blocksy_visibility_classes(
			blocksy_default_akg(
				'footerRowVisibility',
				$atts,
				[
					'desktop' => true,
					'tablet' => true,
					'mobile' => true,
				]
			)
		);

		if (! empty($visibility_classes)) {
			$row_divider_output['class'] = $visibility_classes;
		}

		$row_container_attr = array_merge([
			'data-row' => $simplified_id,
		], $row_divider_output, (
			is_customize_preview() ? [
				'data-item-label' => $row_config['config']['name'],
				'data-shortcut' => 'border',
				'data-location' => $this->get_customizer_location_for(
					$row['id']
				),
			] : []
		), (
			[]
		));

		$columns_wrapper_attr = array_merge([
			'class' => $container_class
		], $divider_output, $data_stack);

		$result = '<div ' . blocksy_attr_to_html($row_container_attr) . '>';
		$result .= '<div ' . blocksy_attr_to_html($columns_wrapper_attr) . '>';

		foreach ($row['columns'] as $index => $column) {
			$items = $this->render_items_collection($column);

			$column_id = '';

			$column_attr = [];

			$column_attr['data-column'] = '';

			if (count($column) > 0) {
				$column_attr['data-column'] = $column[0];

				if (
					strpos($column[0], 'widget-area') !== false
					&&
					is_customize_preview()
				) {
					$column_attr['data-shortcut'] = 'border-dashed';
					$column_attr['data-location'] = $this->get_customizer_location_for($column[0]);
				}
			}

			if (! empty(trim($items))) {
				$result .= '<div ' . blocksy_attr_to_html($column_attr) . '>';
				$result .= $items;
				$result .= '</div>';
			} else {
				$result .= '<span data-column>';
				$result .= '</span>';
			}
		}

		$result .= '</div>';
		$result .= '</div>';

		return $result;
	}

	public function is_row_empty($row) {
		if (! isset($row['columns'])) {
			return true;
		}

		if (count($row['columns']) === 0) {
			return true;
		}

		foreach ($row['columns'] as $column) {
			if (!is_array($column)) {
				continue;
			}

			if (! empty($column)) {
				return false;
			}
		}

		return true;
	}

	private function render_items_collection($items) {
		$result = '';

		foreach ($items as $item) {
			$result .= $this->render_single_item($item);
		}

		return $result;
	}

	public function render_single_item($item_id) {
		$item = null;

		foreach ($this->registered_items as $single_item) {
			if ($single_item['id'] === $item_id) {
				$item = $single_item;
				break;
			}
		}

		$not_registered_label = sprintf(
			// translated: %s is the panel builder item ID that is missing
			__(
				'Item %s not registered or doesn\'t have a view.php file.',
				'blocksy'
			),
			$item_id
		);

		if (! $item) {
			return $not_registered_label;
		}

		return blocksy_render_view(
			$item['path'] . '/view.php',
			[
				'atts' => $this->get_item_data_for($item_id),
				'attr' => array_merge([
					// 'data-id' => $item_id,
				], (
					is_customize_preview() ? [
						'data-item-label' => $item['config']['name'],
						'data-shortcut' => $item['config']['shortcut_style'],
						'data-location' => $this->get_customizer_location_for($item_id)
					] : []
				)),
			],
			$not_registered_label
		);
	}

	public function get_item_data_for($id) {
		if (! $this->section_value) {
			$this->section_value = $this->get_section_value();
		}

		$header = $this->section_value['sections'][0];

		foreach ($this->section_value['sections'] as $single_section) {
			if ($single_section['id'] === $this->section_value['current_section']) {
				$header = $single_section;
			}
		}

		if (! isset($header['items'][$id])) {
			return [];
		}

		if (! isset($header['items'][$id]['values'])) {
			return [];
		}

		return $header['items'][$id]['values'];
	}

	public function get_item_config_for($id) {
		foreach ($this->registered_items as $single_item) {
			if ($single_item['id'] === $id) {
				return $single_item;
			}
		}

		return [];
	}

	public function get_customizer_location_for($id) {
		return 'footer:builder_panel_' . $id;
	}

	public function get_primary_item($id) {
		$builder_value = $this->get_current_section();

		foreach ($builder_value['rows'] as $row) {
			if ($row['id'] === $id) {
				return $row;
			}
		}

		return [];
	}
}

