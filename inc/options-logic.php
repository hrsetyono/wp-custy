<?php
/**
 * Options logic.
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

/**
 * Transform key-value pairs into ordered arrays.
 *
 * @param array $choices key-value pairs.
 */
function blocksy_ordered_keys( $choices ) {
	if (isset($choices[0])) {
		return $choices;
	}

	$result = [];

	foreach ( $choices as $key => $val ) {
		$result[] = [
			'key' => $key,
			'value' => $val,
		];
	}

	return $result;
}

/**
 * Post name.
 */
function blocksy_post_name() {
	return 'ct_options';
}

/**
 * Output options panel input.
 *
 * @param array $args Basic arguments for the panel.
 */
function blocksy_output_options_panel( $args = [] ) {
	$args = wp_parse_args(
		$args,
		[
			'options' => [],
			'values' => [],
			'name_prefix' => '',
			'id_prefix' => '',
			'attr' => []
		]
	);

	if ( ! $args['values'] ) {
		$args['values'] = [];
	}

	$class = 'ct-options-panel';

	if (isset($args['attr']['class'])) {
		$class .= ' ' . $args['attr']['class'];
		unset($args['attr']['class']);
	}

	return blocksy_html_tag(
		'div',
		array_merge(
			['class' => $class],
			$args['attr']
		),
		blocksy_html_tag(
			'input',
			[
				'type' => 'text',
				'data-ct-options' => wp_json_encode( $args['options'] ),
				'class' => 'ct-options-panel-storage',
				'value' => wp_json_encode( $args['values'] ),
				'id' => $args['id_prefix'] . blocksy_post_name(),
				'name' => $args['name_prefix'] . '[' . blocksy_post_name() . ']',
			]
		)
	);
}

/**
 * Transform options into a structure that is parseable from JavaScript.
 *
 * @param array $options Options to transform.
 * @param array $current_data Data that has to be passed recursively.
 */
function blocksy_transform_options(
	$options, $current_data = [ 'transformed-options' => [] ]
) {
	$current_data['transformed-options'] = $options;
	$our_new_array_keys = array_keys( $options );

	$current_data['transformed-options']['__CT_KEYS_ORDER__'] = $our_new_array_keys;

	foreach ( $options as $option_id => &$option ) {
		if ( isset( $option['options'] ) ) {

			$new_current_data = blocksy_transform_options( $option['options'] );

			$current_data['transformed-options'][
				$option_id
			]['options'] = $new_current_data['transformed-options'];

			$current_data = array(
				'transformed-options' => $current_data['transformed-options'],
			);
		} elseif (
			is_int( $option_id )
			&&
			is_array( $option )
			&&
			isset( $options[0] )
		) {
			$new_current_data = blocksy_transform_options( $option );

			foreach (
				$new_current_data['transformed-options']
				as
				$transformed_option_id => $transform_option
			) {
				if ( '__CT_KEYS_ORDER__' !== $transformed_option_id ) {
					$current_data['transformed-options'][
						$transformed_option_id
					] = $transform_option;
				}
			}

			$current_key_to_be_removed = array_search(
				(string) $option_id,
				$current_data['transformed-options']['__CT_KEYS_ORDER__'],
				true
			);

			$first_part = array_slice(
				$current_data['transformed-options']['__CT_KEYS_ORDER__'],
				0,
				$current_key_to_be_removed
			);

			$second_part = array_slice(
				$current_data['transformed-options']['__CT_KEYS_ORDER__'],
				$current_key_to_be_removed + 1
			);

			if ( 0 === $current_key_to_be_removed ) {
				$first_part = array();
			}

			$current_data['transformed-options']['__CT_KEYS_ORDER__'] = array_merge(
				$first_part,
				$new_current_data['transformed-options']['__CT_KEYS_ORDER__'],
				$second_part
			);

			unset( $current_data['transformed-options'][ $option_id ] );
		} elseif ( isset( $option['type'] ) ) {
			$possible_nested_keys = array(
				'inner-options',
				'box-options',
				'popup-options',
			);

			$possible_nested_key = null;

			foreach (
				$possible_nested_keys as $nested_possible_nested_key
			) {
				if ( isset( $option[ $nested_possible_nested_key ] ) ) {
					$possible_nested_key = $nested_possible_nested_key;
				}
			}

			if (
				$possible_nested_key && isset( $option[ $possible_nested_key ] )
			) {
				$new_current_data = blocksy_transform_options(
					$option[ $possible_nested_key ]
				);

				$current_data['transformed-options'][
					$option_id
				][ $possible_nested_key ] = $new_current_data['transformed-options'];
			}

			/**
			 * TODO:
			 * Crazy hack that _yet_ does not have a name, because I don't
			 * have time to give it a proper name.
			 *
			 * I'll just handle layers differently and be done for the day.
			 */
			if ( 'ct-layers' === $option['type'] ) {
				foreach (
					$option['settings'] as $layers_nested_id => $layers_nested_val
				) {
					$new_current_data = blocksy_transform_options(
						$option['settings'][ $layers_nested_id ]['options']
					);

					$current_data['transformed-options'][
						$option_id
					]['settings'][ $layers_nested_id ]['options'] = $new_current_data['transformed-options'];
				}
			}
		} else {
			if ( '__CT_KEYS_ORDER__' !== $option_id ) {
				// phpcs:ignore
				trigger_error( 'Invalid option: ' . esc_html($option_id), E_USER_WARNING );
			}
		}
	}

	return $current_data;
}

