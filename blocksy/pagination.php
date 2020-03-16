<?php
/**
 * Pagination helpers
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

function blocksy_get_pagination_source() {
	static $result = null;

	if (! is_null($result)) {
		if (! is_customize_preview()) {
			return $result;
		}
	}

	if (function_exists('is_woocommerce')) {
		if (is_woocommerce()) {
			$result = [
				'strategy' => 'customizer',
				'prefix' => 'woo'
			];

			return $result;
		}
	}

	$result = [
		'strategy' => 'customizer',
		'prefix' => 'blog'
	];

	return $result;
}

/**
 * Dispaly post pagination.
 *
 * @param array $args Pagination config.
 */
function blocksy_display_posts_pagination( $args = [] ) {
	$source = blocksy_get_pagination_source();

	// Don't print empty markup if there's only one page.

	if (isset($args['source'])) {
		$source = $args['source'];
	}

	$args = wp_parse_args(
		$args,
		[
			'source' => $source,
			'has_pagination' => true,
			'pagination_type' => blocksy_akg_or_customizer(
				'pagination_global_type',
				$source,
				'simple'
			),
			'last_page_text' => __('No more posts to load', 'blocksy')
		]
	);

	if ($source['prefix'] === 'woo') {
		$args['last_page_text'] = __('No more products to load', 'blocksy');
	}

	if (! $args['has_pagination']) {
		return '';
	}

	global $wp_query, $wp_rewrite;

	$current_page = $wp_query->get( 'paged' );

	if ( ! $current_page ) {
		$current_page = 1;
	}

	if ( $wp_query->max_num_pages <= 1 ) {
		return '';
	}

	$button_output = '';

	if (
		$args['pagination_type'] === 'load_more'
		&&
		intval($current_page) !== intval($wp_query->max_num_pages)
	) {
		$label_button = blocksy_akg_or_customizer(
			'load_more_label',
			$source,
			__('Load More', 'blocksy')
		);

		$button_output = '<a class="ct-button ct-load-more">' . $label_button . '</a>';
	}

    if (
		$args['pagination_type'] !== 'simple'
		&&
		$args['pagination_type'] !== 'next_prev'
	) {
		if (intval($current_page) === intval($wp_query->max_num_pages)) {
			return '';
		}

		$button_output = '<div class="ct-load-more-helper">' . $button_output;
		$button_output .= '<span data-loader="circles"><span></span><span></span><span></span></span>';
		$button_output .= '<div class="ct-last-page-text">' . $args['last_page_text'] . '</div>';
		$button_output .= '</div>';
	}

	$pagination_class = 'ct-pagination';
	$divider_output = '';

	$divider = blocksy_akg_or_customizer(
		'paginationDivider',
		$source,
		[
			'width' => 1,
			'style' => 'none',
			'color' => [
				'color' => 'rgba(224, 229, 235, 0.5)',
			]
		]
	);

	if (
		$divider['style'] !== 'none'
		&&
		$args['pagination_type'] !== 'infinite_scroll'
	) {
		$divider_output = 'data-divider';
	}

	$template = '
		<div class="' . $pagination_class . '" role="navigation" data-type="' . $args['pagination_type'] . '" ' . $divider_output . '>
			<nav>%1$s</nav>
			%2$s
		</div>';

	$links = paginate_links(
		[
			'mid_size' => 0,
			'end_size' => 0,
			'type' => 'array',
			'prev_text' => '<svg width="9px" height="9px" viewBox="0 0 15 15"><path class="st0" d="M10.9,15c-0.2,0-0.4-0.1-0.6-0.2L3.6,8c-0.3-0.3-0.3-0.8,0-1.1l6.6-6.6c0.3-0.3,0.8-0.3,1.1,0c0.3,0.3,0.3,0.8,0,1.1L5.2,7.4l6.2,6.2c0.3,0.3,0.3,0.8,0,1.1C11.3,14.9,11.1,15,10.9,15z"/></svg>' . __('Prev', 'blocksy'),

			'next_text' => __('Next', 'blocksy') . ' <svg width="9px" height="9px" viewBox="0 0 15 15"><path class="st0" d="M4.1,15c0.2,0,0.4-0.1,0.6-0.2L11.4,8c0.3-0.3,0.3-0.8,0-1.1L4.8,0.2C4.5-0.1,4-0.1,3.7,0.2C3.4,0.5,3.4,1,3.7,1.3l6.1,6.1l-6.2,6.2c-0.3,0.3-0.3,0.8,0,1.1C3.7,14.9,3.9,15,4.1,15z"/></svg>',
		]
	);

	$proper_links = $links;

    if ($args['pagination_type'] === 'next_prev') {
		$proper_links = [];

		foreach ($links as $link) {
			preg_match('/class="[^"]+"/', $link, $matches);

			if (count($matches) > 0) {
				if (
					strpos($matches[0], 'next') !== false
					||
					strpos($matches[0], 'prev') !== false
				) {
					$proper_links[] = $link;
				}
			}
		}
	}

	return sprintf(
		$template,
		join("\n", $proper_links),
		$button_output
	);
}

