<?php
/**
 * Visibility helpers
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

/**
 * Generate visibility classes
 *
 * @param string $data Devices state.
 */
function blocksy_visibility_classes( $data ) {
	$classes = [];

	if ( isset( $data['mobile'] ) && ! $data['mobile'] ) {
		$classes[] = 'ct-hidden-sm';
	}

	if ( isset( $data['tablet'] ) && ! $data['tablet'] ) {
		$classes[] = 'ct-hidden-md';
	}

	if ( isset( $data['desktop'] ) && ! $data['desktop'] ) {
		$classes[] = 'ct-hidden-lg';
	}

	return implode( ' ', $classes );
}


function blocksy_stacking( $data, $attr = 'data-stack' ) {
	$values = [];

	if ( isset( $data['mobile'] ) && $data['mobile'] ) {
		$values[] = 'mobile';
	}

	if ( isset( $data['tablet'] ) && $data['tablet'] ) {
		$values[] = 'tablet';
	}

	if ( isset( $data['desktop'] ) && $data['desktop'] ) {
		$values[] = 'desktop';
	}

	if ( empty( $values ) ) {
		return '';
	}

	return $attr . '="' . implode( ':', $values ) . '"';
}

function blocksy_visibility_matching($first_descriptor, $second_descriptor) {
	$classes = [];

	if (
		isset($first_descriptor['mobile'])
		&&
		! $first_descriptor['mobile']
		&&
		isset($second_descriptor['mobile'])
		&&
		! $second_descriptor['mobile']
	) {
		$classes[] = 'ct-hidden-sm';
	}

	if (
		isset($first_descriptor['tablet'])
		&&
		! $first_descriptor['tablet']
		&&
		isset($second_descriptor['tablet'])
		&&
		! $second_descriptor['tablet']
	) {
		$classes[] = 'ct-hidden-md';
	}

	if (
		isset($first_descriptor['desktop'])
		&&
		! $first_descriptor['desktop']
		&&
		isset($second_descriptor['desktop'])
		&&
		! $second_descriptor['desktop']
	) {
		$classes[] = 'ct-hidden-lg';
	}

	return implode( ' ', $classes );
}
