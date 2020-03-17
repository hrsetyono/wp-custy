<?php

class Blocksy_Customizer_Builder_Render_Placements {
	private $device = 'desktop';
	private $placements_key = 'header_placements';

	private $registered_items = [];

	private $section_value = null;

	public function __construct($device = 'desktop', $placements_key = 'header_placements') {
		$this->device = $device;
		$this->placements_key = $placements_key;

		$b = new Blocksy_Customizer_Builder();

		$this->registered_items = $b->get_registered_items_by('header');
	}

	public function get_section_value() {
		$b = new Blocksy_Customizer_Builder();
		$header = new Blocksy_Customizer_Builder_Header();

		return get_theme_mod(
			$this->placements_key,
			$header->get_default_value()
		);
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

	public function contains_item($item) {
		if (is_customize_preview()) {
			return true;
		}

		$section = $this->get_current_section();

		foreach ($section['desktop'] as $desktop_row) {
			foreach ($desktop_row['placements'] as $single_placement) {
				if (in_array($item, $single_placement['items'])) {
					return true;
				}
			}
		}

		foreach ($section['mobile'] as $mobile_row) {
			foreach ($mobile_row['placements'] as $single_placement) {
				if (in_array($item, $single_placement['items'])) {
					return true;
				}
			}
		}

		return false;
	}

	public function render() {
		$content = '';

		$header = $this->get_current_section()[$this->device];

		foreach ($header as $row) {
			if ($row['id'] === 'offcanvas') {
				continue;
			}

			$content .= $this->render_row($row);
		}

		return blocksy_html_tag(
			'header',
			array_merge([
				'id' => 'header',
				'class' => 'site-header',
				'data-device' => $this->device
			], blocksy_schema_org_definitions('header', ['array' => true])),
			$content
		);
	}

	public function render_offcanvas($has_container = true) {
		if (! $this->contains_item('trigger')) {
			return '';
		}

		$content = '';

		$current_layout = $this->get_current_section()[$this->device];

		foreach ($current_layout as $row) {
			if ($row['id'] !== 'offcanvas') {
				continue;
			}

			if ($this->is_row_empty($row)) {
				// return '';
			}

			$content .= $this->render_items_collection(
				$row['placements'][0]['items']
			);
		}

		$atts = $this->get_item_data_for('offcanvas');
		$row_config = $this->get_item_config_for('offcanvas');

		$class = 'ct-panel';
		$behavior = 'modal';

		$position_output = [];

		if (blocksy_default_akg('offcanvas_behavior', $atts, 'panel') !== 'modal') {
			$behavior = blocksy_default_akg(
				'side_panel_position', $atts, 'right'
			) . '-side';
		}

		$without_container = blocksy_html_tag(
			'div',
			array_merge([
				'class' => 'content-container',
			], (
				is_customize_preview() ? [
					'data-item-label' => $row_config['config']['name'],
					'data-location' => $this->get_customizer_location_for('offcanvas')
				] : []
			)),
			blocksy_html_tag(
				'section',
				[
					'data-align' => blocksy_default_akg(
						'offcanvasContentAlignment',
						$atts,
						'left'
					)
				],
				$content
			)
		);

		if (! $has_container) {
			return $without_container;
		}

		return blocksy_html_tag(
			'div',
			array_merge(
				[
					'id' => 'offcanvas',
					'class' => $class,
					'data-behaviour' => $behavior,
					'data-device' => $this->device
				],
				$position_output
			),

			'<div class="close-button">
				<span class="lines-button close"></span>
			</div>' .  $without_container
		);
	}

	public function render_search_modal() {
		if (! $this->contains_item('search')) {
			return;
		}

		?>

		<div id="search-modal" class="ct-panel" data-behaviour="modal">
			<div class="close-button">
				<span class="lines-button close"></span>
			</div>

			<div class="content-container" data-align="middle">
				<?php get_search_form([
					'enable_search_field_class' => true
				]); ?>
			</div>
		</div>

		<?php
	}

	public function render_row($row) {
		if ($this->is_row_empty($row)) {
			return '';
		}

		$row_config = $this->get_item_config_for($row['id']);

		$simplified_id = str_replace(
			'-row',
			'',
			$row['id']
		);

        $atts = $this->get_item_data_for($row['id']);

		$container_class = 'ct-container';

		if (blocksy_default_akg('headerRowWidth', $atts, 'fixed') !== 'fixed') {
			$container_class = 'ct-container-fluid';
		}

		$start_placement = $this->render_start_placement($row);
		$middle_placement = $this->render_middle_placement($row);
		$end_placement = $this->render_end_placement($row);

		$count = 0;

		if (! empty(trim($start_placement))) {
			$count++;
		}

		if (! empty(trim($middle_placement))) {
			$count++;
		}

		if (! empty(trim($end_placement))) {
			$count++;
		}

		$topBorder = blocksy_expand_responsive_value(
			blocksy_akg('headerRowTopBorder', $atts, [
				'width' => 1,
				'style' => 'none',
				'color' => [
					'color' => 'rgba(44,62,80,0.2)',
				],
			])
		);

		$bottomBorder = blocksy_expand_responsive_value(
			blocksy_akg('headerRowBottomBorder', $atts, [
				'width' => 1,
				'style' => 'none',
				'color' => [
					'color' => 'rgba(44,62,80,0.2)',
				],
			])
		);

		$border_behavior = [];

		if (
			$topBorder['desktop']['style'] !== 'none'
			||
			$topBorder['tablet']['style'] !== 'none'
			||
			$topBorder['mobile']['style'] !== 'none'
		) {
			if (blocksy_akg(
				'headerRowTopBorderFullWidth',
				$atts,
				'no'
			) === 'no') {
				$border_behavior[] = 'top';
			} else {
				$border_behavior[] = 'top-full';
			}
		}

		if (
			$bottomBorder['desktop']['style'] !== 'none'
			||
			$bottomBorder['tablet']['style'] !== 'none'
			||
			$bottomBorder['mobile']['style'] !== 'none'
		) {
			if (blocksy_akg(
				'headerRowBottomBorderFullWidth',
				$atts,
				'no'
			) === 'no') {
				$border_behavior[] = 'bottom';
			} else {
				$border_behavior[] = 'bottom-full';
			}
		}

		$row_container_attr = array_merge([
			'data-row' => $simplified_id,
			'data-columns' => $count,
		], (
			is_customize_preview() ? [
				'data-item-label' => $row_config['config']['name'],
				'data-shortcut' => 'border',
				'data-location' => $this->get_customizer_location_for(
					$row['id']
				),
			] : []
		), (
			count($border_behavior) > 0 ? [
				'data-border' => implode(':', $border_behavior)
			] : []
		));

		$result = '<div ' . blocksy_attr_to_html($row_container_attr) . '>';
		$result .= '<div class="' . $container_class . '">';

		$result .= $start_placement;
		$result .= $middle_placement;
		$result .= $end_placement;

		$result .= '</div>';
		$result .= '</div>';

		return $result;
	}

	private function render_start_placement($row) {
		$placement = $this->get_placement_by($row, 'start');

		$middle_placement = $this->get_placement_by($row, 'middle');
		$end_placement = $this->get_placement_by($row, 'end');
		$start_secondary = $this->get_placement_by($row, 'start-middle');
		$end_secondary = $this->get_placement_by($row, 'end-middle');

		if (! $placement) {
			return '';
		}

		if ($start_secondary && $end_secondary && $end_placement) {
			if (
				count($start_secondary['items']) === 0
				&&
				count($end_secondary['items']) === 0
				&&
				count($placement['items']) === 0
				&&
				count($end_placement['items']) === 0
			) {
				return '';
			}
		}

		if ($middle_placement && $end_placement) {
			if (
				count($middle_placement['items']) === 0
				&&
				count($placement['items']) === 0
			) {
				return '';
			}
		}

		$secondary_output = '';
		$primary_output = '';

		if (count($placement['items']) > 0) {
			$primary_output = blocksy_html_tag(
				'div',
				[
					'data-items' => 'primary'
				],
				$this->render_items_collection($placement['items'])
			);
		}

		if (
			$middle_placement
			&&
			$start_secondary
			&&
			count($middle_placement['items']) > 0
			&&
			count($start_secondary['items']) > 0
		) {
			$secondary_output = blocksy_html_tag(
				'div',
				[
					'data-items' => 'secondary'
				],
				$this->render_items_collection($start_secondary['items'])
			);
		}

		$count = 0;

		if (! empty(trim($primary_output))) {
			$count++;
		}

		if (! empty(trim($secondary_output))) {
			$count++;
		}

		return blocksy_html_tag(
			'div',
			array_merge([
				'data-column' => 'start'
			], (
				$count > 0 ? [
					'data-placements' => $count
				] : []
			)),
			$primary_output . $secondary_output
		);
	}

	private function render_middle_placement($row) {
		$placement = $this->get_placement_by($row, 'middle');

		if (! $placement) {
			return '';
		}

		if (count($placement['items']) === 0) {
			return '';
		}

		return blocksy_html_tag(
			'div',
			['data-column' => 'middle'],
			blocksy_html_tag(
				'div',
				['data-items' => ''],
				$this->render_items_collection($placement['items'])
			)
		);
	}

	private function render_end_placement($row) {
		$placement = $this->get_placement_by($row, 'end');

		$middle_placement = $this->get_placement_by($row, 'middle');
		$start_placement = $this->get_placement_by($row, 'start');
		$start_secondary = $this->get_placement_by($row, 'start-middle');
		$end_secondary = $this->get_placement_by($row, 'end-middle');

		if (! $placement) {
			return '';
		}

		if ($start_secondary && $end_secondary && $start_placement) {
			if (
				count($start_secondary['items']) === 0
				&&
				count($end_secondary['items']) === 0
				&&
				count($placement['items']) === 0
				&&
				count($start_placement['items']) === 0
			) {
				return '';
			}
		}

		if ($middle_placement && $start_placement) {
			if (
				count($middle_placement['items']) === 0
				&&
				count($placement['items']) === 0
			) {
				return '';
			}
		}

		$secondary_output = '';
		$primary_output = '';

		if (count($placement['items']) > 0) {
			$primary_output = blocksy_html_tag(
				'div',
				[
					'data-items' => 'primary'
				],
				$this->render_items_collection($placement['items'])
			);
		}

		if (
			$middle_placement
			&&
			$end_secondary
			&&
			count($middle_placement['items']) > 0
			&&
			count($end_secondary['items']) > 0
		) {
			$secondary_output = blocksy_html_tag(
				'div',
				[
					'data-items' => 'secondary'
				],
				$this->render_items_collection($end_secondary['items'])
			);
		}

		$count = 0;

		if (! empty(trim($primary_output))) {
			$count++;
		}

		if (! empty(trim($secondary_output))) {
			$count++;
		}

		return blocksy_html_tag(
			'div',
			array_merge([
				'data-column' => 'end'
			], (
				$count > 0 ? [
					'data-placements' => $count
				] : []
			)),
			$secondary_output . $primary_output
		);
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
			__('Item %s not registered or doesn\'t have a view.php file.', 'blocksy'),
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
					'data-id' => $item_id,
				], (
					is_customize_preview() ? [
						'data-item-label' => $item['config']['name'],
						'data-shortcut' => $item['config']['shortcut_style'],
						'data-location' => $this->get_customizer_location_for($item_id)
					] : []
				)),
				'device' => $this->device
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

		foreach ($header['items'] as $single_item) {
			if (
				$single_item['id'] === $id
				&&
				isset($single_item['values'])
				&&
				is_array($single_item['values'])
			) {
				return $single_item['values'];
			}
		}

		return [];
	}

	public function get_item_config_for($id) {
		foreach ($this->registered_items as $single_item) {
			if ($single_item['id'] === $id) {
				return $single_item;
			}
		}

		return [];
	}

	private function get_placement_by($row, $id) {
		foreach ($row['placements'] as $placement) {
			if ($placement['id'] === $id) {
				return $placement;
			}
		}

		return null;
	}

	private function is_row_empty($row) {
		$columns_to_check = ['start', 'middle', 'end'];

		foreach ($row['placements'] as $single_column) {
			if (
				in_array($single_column['id'], ['start', 'middle', 'end'])
				&&
				isset($single_column['items'])
				&&
				count($single_column['items']) > 0
			) {
				return false;
			}
		}

		return true;
	}

	public function get_customizer_location_for($id) {
		return 'header:builder_panel_' . $id;
	}

	public function get_primary_item($id) {
		return [];
	}
}

