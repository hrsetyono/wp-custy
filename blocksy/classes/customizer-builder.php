<?php

require_once dirname( __FILE__ ) . '/builder/builder-header-renderer.php';
require_once dirname( __FILE__ ) . '/builder/builder-footer-renderer.php';
require_once dirname( __FILE__ ) . '/builder/header-logic.php';
require_once dirname( __FILE__ ) . '/builder/footer-logic.php';

class Blocksy_Customizer_Builder {
	public function __construct() {
	}

	public function patch_header_value_for($processed_terms) {
		$header = new Blocksy_Customizer_Builder_Header();
		$header->patch_value_for($processed_terms);
	}

	public function typography_keys($panel_type = 'header') {
		$header = new Blocksy_Customizer_Builder_Header();
		$footer = new Blocksy_Customizer_Builder_Footer();

		return array_merge(
			$header->typography_keys(),
			$footer->typography_keys()
		);
	}

	public function dynamic_css($panel_type = 'header', $args = []) {
		// TODO: add footer handling for dynamic CSS
		foreach ($this->get_registered_items_by($panel_type) as $item) {
			if (! file_exists($item['path'] . '/dynamic-styles.php')) {
				continue;
			}

			if ($panel_type === 'header') {
				$render = new Blocksy_Customizer_Builder_Render_Placements();
			} else {
				$render = new Blocksy_Customizer_Builder_Render_Columns();
			}

			$args['atts'] = $render->get_item_data_for($item['id']);
			$args['item'] = $item;

			if (isset($item['is_primary']) && $item['is_primary']) {
				$args['primary_item'] = $render->get_primary_item($item['id']);
			}

			blocksy_theme_get_dynamic_styles(array_merge([
				'path' => $item['path'] . '/dynamic-styles.php',
			], $args));
		}

		if ($panel_type === 'footer') {
			$path = BLOCKSY_DIR . '/panel-builder/footer/dynamic-styles.php';
			$render = new Blocksy_Customizer_Builder_Render_Columns();
			$footer = $render->get_current_section();

			if (! isset($footer['settings'])) {
				$footer['settings'] = [];
			}

			$args['atts'] = $footer['settings'];

			if (file_exists($path)) {
				blocksy_theme_get_dynamic_styles(array_merge([
					'path' => $path
				], $args));
			}
		}
	}

	public function get_data_for_customizer() {
		$result = [];

		$result['header'] = $this->get_registered_items_by('header', 'all', true);
		$result['footer'] = $this->get_registered_items_by('footer', 'all', true);
		
		$result['footer_data'] = [
			'footer_options' => [],

			// @changed - footer tabs are removed, so no need for getting the data
			// 'footer_options' => blocksy_get_options(
			// 	BLOCKSY_DIR . '/panel-builder/footer/options.php',
			// 	[],
			// 	false
			// )
		];

		$result['secondary_items'] = [
			'header' => $this->get_registered_items_by('header', 'secondary'),
			'footer' => $this->get_registered_items_by('footer', 'secondary'),
		];

		return $result;
	}

	public function get_option_id_for($panel_type = 'header', $item) {
		return $panel_type . '_item_' . str_replace('-', '_', $item['id']);
	}
	

	public function get_registered_items_by( $panel_type = 'header', $include = 'all', $require_options = false) {

		// @new - Get items using new function. Only continue if doesn't exist
		$items = CustyBuilder::get_items( $panel_type, $include, $require_options );
		if( !empty( $items ) ) {
			return $items;
		}
		// /new

		$paths_to_look_for_items = [
			BLOCKSY_DIR . '/panel-builder/' . $panel_type
		];

		$items = [];

		$primary_items = [
			'top-row',
			'middle-row',
			'bottom-row',
			'offcanvas'
		];

		foreach ($paths_to_look_for_items as $single_path) {
			$all_items = glob(
				$single_path . '/*',
				GLOB_ONLYDIR
			);

			foreach ($all_items as $single_item) {
				$id = str_replace('_', '-', basename($single_item));

				if (in_array($id, $primary_items)) {
					if ($include === 'secondary') {
						continue;
					}
				} else {
					if ($include === 'primary') {
						continue;
					}
				}

				$future_data = [
					'id' => $id,
					'config' => $this->read_config_for($single_item),
					'path' => $single_item,
					'is_primary' => in_array($id, $primary_items)
				];

				if ($require_options) {
					$future_data['options'] = $this->get_options_for(
						$panel_type,
						$future_data
					);
				}

				$items[] = $future_data;
			}
		}

		return $items;
	}

	private function read_config_for( $file_path ) {
		$name = explode( '-', basename($file_path) );
		$name = array_map( 'ucfirst', $name );
		$name = implode( ' ', $name );

		$_extract_variables = [ 'config' => [] ];

		if (is_readable($file_path . '/config.php')) {
			require $file_path . '/config.php';

			foreach ( $_extract_variables as $variable_name => $default_value ) {
				if ( isset( $$variable_name ) ) {
					$_extract_variables[ $variable_name ] = $$variable_name;
				}
			}
		}

		$_extract_variables['config'] = array_merge(
			[
				'name' => $name,
				'description' => '',
				'typography_keys' => [],
				'devices' => ['desktop', 'mobile'],
				'selective_refresh' => [],
				'allowed_in' => [],
				'excluded_from' => [],

				// border | drop
				'shortcut_style' => 'drop',
				'enabled' => true
			],
			$_extract_variables['config']
		);

		return $_extract_variables['config'];
	}

	public function get_options_for($panel_type = 'header', $item) {
		if (!is_array($item)) {
			return [];
		}

		if (! isset($item['path'])) {
			return [];
		}

		return blocksy_get_options($item['path'] . '/options.php', [
			'prefix' => $this->get_option_id_for($panel_type, $item) . '_'
		], false);
	}
}

