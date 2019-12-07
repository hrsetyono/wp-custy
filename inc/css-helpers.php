<?php
/**
 * Helpers for generating CSS output.
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

/**
 * Generate colors based on input.
 *
 * @param array $color_descriptor Colors array.
 */
function blocksy_get_colors( $color_descriptor, $defaults ) {
	$result = [];

	foreach ($defaults as $id => $default_data) {
		$data = $default_data;

		if (
			is_array($color_descriptor)
			&&
			isset($color_descriptor[$id])
			&&
			is_array($color_descriptor[$id])
		) {
			$data = $color_descriptor[$id];
		}

		$result[$id] = blocksy_get_color($data);
	}

	return $result;
}

/**
 * Extract color from a descriptor.
 * id:
 *   - fw-custom
 *   - fw-no-color
 *   - color_skin_*
 *   - fw-inherit:location
 *   - fw-inherit:location:hover
 *   - fw-inherit:location:default
 *
 * @param array $color_descriptor Single color descriptor.
 */
function blocksy_get_color($color_descriptor) {
	if ( ! isset( $color_descriptor['color'] ) ) {
		return null;
	}

	return $color_descriptor['color'];
}

function blocksy_output_colors($args = []) {
	$args = wp_parse_args(
		$args,
		[
			'css' => null,
			'tablet_css' => null,
			'mobile_css' => null,
			'value' => null,
			'default' => null,
			'variables' => [],
			'responsive' => false
		]
	);

	blocksy_assert_args($args, ['css', 'default']);

	if ($args['responsive']) {
		blocksy_assert_args($args, ['tablet_css', 'mobile_css']);
	}

	$responsive_value = blocksy_expand_responsive_value($args['value']);
	$responsive_default_value = blocksy_expand_responsive_value($args['default']);

	$desktop_colors = blocksy_get_colors(
		$responsive_value['desktop'],
		$responsive_default_value['desktop']
	);

	$tablet_colors = blocksy_get_colors(
		$responsive_value['tablet'],
		$responsive_default_value['tablet']
	);

	$mobile_colors = blocksy_get_colors(
		$responsive_value['mobile'],
		$responsive_default_value['mobile']
	);

	foreach ($args['variables'] as $key => $descriptor) {
		if (! isset($descriptor['selector'])) {
			$descriptor['selector'] = ':root';
		}

		$args['css']->put(
			$descriptor['selector'],
			"--" . $descriptor['variable'] . ": {$desktop_colors[$key]}"
		);

		if ($args['responsive']) {
			$args['tablet_css']->put(
				$descriptor['selector'],
				"--" . $descriptor['variable'] . ": {$tablet_colors[$key]}"
			);

			$args['mobile_css']->put(
				$descriptor['selector'],
				"--" . $descriptor['variable'] . ": {$mobile_colors[$key]}"
			);
		}
	}
}

function blocksy_expand_responsive_value( $value ) {
	if ( is_array( $value ) && isset( $value['desktop'] ) ) {
		return $value;
	}

	return [
		'desktop' => $value,
		'tablet' => $value,
		'mobile' => $value,
	];
}

function blocksy_output_responsive_variable( $css, $selector, $variableName, $value ) {
	$value = blocksy_expand_responsive_value( $value );

	$css->put( $selector, '--' . $variableName . '-sm: ' . $value['mobile'] . 'px' );
	$css->put( $selector, '--' . $variableName . '-md: ' . $value['tablet'] . 'px' );
	$css->put( $selector, '--' . $variableName . '-lg: ' . $value['desktop'] . 'px' );
}

function blocksy_output_responsive($args = []) {
	$args = wp_parse_args(
		$args,
		[
			'css' => null,
			'tablet_css' => null,
			'mobile_css' => null,
			'selector' => null,
			'variableName' => null,
			'unit' => 'px',
			'value' => null,
		]
	);

	if (! $args['variableName']) {
		throw new Error('variableName missing in args!');
	}

	$value = blocksy_expand_responsive_value( $args['value'] );

	$args['mobile_css']->put( $args['selector'], '--' . $args['variableName'] . ': ' . $value['mobile'] . $args['unit'] );
	$args['tablet_css']->put( $args['selector'], '--' . $args['variableName'] . ': ' . $value['tablet'] . $args['unit'] );
	$args['css']->put( $args['selector'], '--' . $args['variableName'] . ': ' . $value['desktop'] . $args['unit'] );
}

function blocksy_units_config( $overrides = [] ) {
	$units = [
		[
			'unit' => 'px',
			'min' => 0,
			'max' => 40,
		],
		[
			'unit' => 'em',
			'min' => 0,
			'max' => 30,
		],
		[
			'unit' => '%',
			'min' => 0,
			'max' => 100,
		],
		[
			'unit' => 'vw',
			'min' => 0,
			'max' => 100,
		],
		[
			'unit' => 'vh',
			'min' => 0,
			'max' => 100,
		],
		[
			'unit' => 'pt',
			'min' => 0,
			'max' => 100,
		],
		[
			'unit' => 'rem',
			'min' => 0,
			'max' => 30,
		],
	];

	foreach ( $overrides as $single_override ) {
		foreach ( $units as $key => $single_unit ) {
			if ( $single_override['unit'] === $single_unit['unit'] ) {
				$units[ $key ] = $single_override;
			}
		}
	}

	return $units;
}

function blocksy_output_border($args = []) {
	$args = wp_parse_args(
		$args,
		[
			'css' => null,
			'tablet_css' => null,
			'mobile_css' => null,

			'selector' => null,

			'variableName' => null,
			'value' => null,

			'responsive' => false
		]
	);

	if (! $args['responsive']) {
		if ($args['value']['style'] === 'none') {
			$args['css']->put($args['selector'], '--' . $args['variableName'] . ': none');
			return;
		}

		$color = blocksy_get_colors([
			'default' => $args['value']['color']
		], [
			'default' => $args['value']['color']
		]);

		$args['css']->put(
			$args['selector'],
			'--' . $args['variableName'] .
			': ' . $args['value']['width'] . 'px ' .
			$args['value']['style'] . ' ' . $color['default']
		);

		return;
	}

	$value = blocksy_expand_responsive_value($args['value']);

	if ($value['desktop']['style'] === 'none') {
		$args['css']->put($args['selector'], '--' . $args['variableName'] . ': none');
	} else {
		$color = blocksy_get_colors([
			'default' => $value['desktop']['color']
		], [
			'default' => $value['desktop']['color']
		]);

		$args['css']->put(
			$args['selector'],
			'--' . $args['variableName'] .
			': ' . $value['desktop']['width'] . 'px ' .
			$value['desktop']['style'] . ' ' . $color['default']
		);
	}

	if ($value['tablet']['style'] === 'none') {
		$args['tablet_css']->put($args['selector'], '--' . $args['variableName'] . ': none');
	} else {
		$color = blocksy_get_colors([
			'default' => $value['tablet']['color']
		], [
			'default' => $value['tablet']['color']
		]);

		$args['tablet_css']->put(
			$args['selector'],
			'--' . $args['variableName'] .
			': ' . $value['tablet']['width'] . 'px ' .
			$value['tablet']['style'] . ' ' . $color['default']
		);
	}

	if ($value['mobile']['style'] === 'none') {
		$args['mobile_css']->put($args['selector'], '--' . $args['variableName'] . ': none');
	} else {
		$color = blocksy_get_colors([
			'default' => $value['mobile']['color']
		], [
			'default' => $value['mobile']['color']
		]);

		$args['mobile_css']->put(
			$args['selector'],
			'--' . $args['variableName'] .
			': ' . $value['mobile']['width'] . 'px ' .
			$value['mobile']['style'] . ' ' . $color['default']
		);
	}
}

function blocksy_output_spacing($args = []) {
	$args = wp_parse_args(
		$args,
		[
			'css' => null,
			'tablet_css' => null,
			'mobile_css' => null,

			'selector' => null,
			'property' => 'margin',

			'important' => false,

			'value' => null,
		]
	);

	$value = blocksy_expand_responsive_value($args['value']);

	$args['css']->put(
		$args['selector'],
		'--' . $args['property'] . ': ' . blocksy_spacing_prepare_for_device(
			$value['desktop']
		) . (
			$args['important'] ? ' !important' : ''
		)
	);

	$args['tablet_css']->put(
		$args['selector'],
		'--' . $args['property'] . ': ' . blocksy_spacing_prepare_for_device(
			$value['tablet']
		) . (
			$args['important'] ? ' !important' : ''
		)
	);

	$args['mobile_css']->put(
		$args['selector'],
		'--' . $args['property'] . ': ' . blocksy_spacing_prepare_for_device(
			$value['mobile']
		) . (
			$args['important'] ? ' !important' : ''
		)
	);
}

function blocksy_spacing_prepare_for_device($value) {
	$result = [];

	$is_value_compact = true;

	foreach ([
		$value['top'],
		$value['right'],
		$value['bottom'],
		$value['left']
	] as $val) {
		if ($val !== 'auto' && preg_match('/\\d/', $val) > 0) {
			$is_value_compact = false;
			break;
		}
	}

	if ($is_value_compact) {
		return 'CT_CSS_SKIP_RULE';
	}

	if (
		$value['top'] === 'auto'
		||
		preg_match('/\\d/', $value['top']) === 0
	) {
		$result[] = 0;
	} else {
		$result[] = $value['top'];
	}

	if (
		$value['right'] === 'auto'
		||
		preg_match('/\\d/', $value['right']) === 0
	) {
		$result[] = 0;
	} else {
		$result[] = $value['right'];
	}

	if (
		$value['bottom'] === 'auto'
		||
		preg_match('/\\d/', $value['bottom']) === 0
	) {
		$result[] = 0;
	} else {
		$result[] = $value['bottom'];
	}

	if (
		$value['left'] === 'auto'
		||
		preg_match('/\\d/', $value['left']) === 0
	) {
		$result[] = 0;
	} else {
		$result[] = $value['left'];
	}

	if (
		$result[0] === $result[1]
		&&
		$result[0] === $result[2]
		&&
		$result[0] === $result[3]
	) {
		return $result[0];
	}

	if (
		$result[0] === $result[2]
		&&
		$result[1] === $result[3]
	) {
		return $result[0] . ' ' . $result[3];
	}

	return implode(' ', $result);
}

function blocksy_spacing_value($args = []) {
	return wp_parse_args(
		$args,
		[
			'top' => '',
			'bottom' => '',
			'left' => '',
			'right' => '',
			'linked' => true
		]
	);
}

