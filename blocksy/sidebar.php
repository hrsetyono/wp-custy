<?php
/**
 * Sidebar helpers
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

/**
 * Get sidebar position.
 */
function blocksy_sidebar_position_attr() {
	return (
		blocksy_sidebar_position() === 'none'
	) ? '' : 'data-sidebar="' . blocksy_sidebar_position() . '"';
}

/**
 * Get single page structure.
 */
function blocksy_get_single_page_structure() {
	$default_page_structure = blocksy_default_akg(
		'page_structure_type',
		blocksy_get_post_options(),
		'default'
	);

	if ( $default_page_structure !== 'default' ) {
		return $default_page_structure;
	}

	if ( is_page() ) {
		return get_theme_mod( 'single_page_structure', 'type-4' );
	}

	if ( ! is_single() ) {
		return 'none';
	}

	return get_theme_mod( 'single_blog_post_structure', 'type-3' );
}

/**
 * Sidebar position.
 */
function blocksy_sidebar_position() {
	$listing_source = blocksy_get_posts_listing_source();

	$blog_post_structure = blocksy_akg_or_customizer(
		'structure',
		$listing_source,
		'grid'
	);

	if (is_search()) {
		if (
			get_theme_mod('search_has_sidebar', 'no') === 'no'
			||
			$blog_post_structure === 'gutenberg'
		) {
			return 'none';
		}

		return get_theme_mod( 'search_sidebar_position', 'right' );
	}

	if ( get_post_type() === 'post' ) {
		if (is_category() || is_tag()) {
			if (
				get_theme_mod('categories_has_sidebar', 'no') === 'no'
				||
				$blog_post_structure === 'gutenberg'
			) {
				return 'none';
			}

			return get_theme_mod( 'categories_sidebar_position', 'right' );
		}

		if (is_author()) {
			if (
				get_theme_mod('author_has_sidebar', 'no') === 'no'
				||
				$blog_post_structure === 'gutenberg'
			) {
				return 'none';
			}

			return get_theme_mod( 'author_sidebar_position', 'right' );
		}

		if (! is_single()) {
			if (
				get_theme_mod('blog_has_sidebar', 'no') === 'no'
				||
				$blog_post_structure === 'gutenberg'
			) {
				return 'none';
			}

			return get_theme_mod( 'blog_sidebar_position', 'right' );
		}
	}

	if ( get_post_type() === 'product' ) {
		if ( ! is_single() ) {
			if ( get_theme_mod( 'woo_has_sidebar', 'no' ) === 'no' ) {
				return 'none';
			}

			return get_theme_mod( 'woo_sidebar_position', 'right' );
		}

		if ( get_theme_mod( 'product_has_sidebar', 'no' ) === 'no' ) {
			return 'none';
		}

		return get_theme_mod( 'product_sidebar_position', 'right' );
	}

	if (!is_single() && !is_page()) {
		return 'right';
	}

	$page_structure_type = blocksy_get_single_page_structure();

	if ( 'type-1' === $page_structure_type ) {
		return 'right';
	}

	if ( 'type-2' === $page_structure_type ) {
		return 'left';
	}

	return 'none';
}

/**
 * Get page structure.
 */
function blocksy_get_page_structure() {
	$page_structure_type = blocksy_get_single_page_structure();

	if ( 'type-3' === $page_structure_type ) {
		return 'narrow';
	}

	if ( 'type-4' === $page_structure_type ) {
		return 'normal';
	}

	if ( 'type-5' === $page_structure_type ) {
		return 'normal';
	}

	if ( 'type-6' === $page_structure_type ) {
		return 'normal:enhanced';
	}

	if ( 'type-7' === $page_structure_type ) {
		return 'boundless';
	}

	return 'none';
}

function blocksy_get_page_container_width() {
	$page_structure_type = blocksy_get_single_page_structure();

	if ( 'type-7' === $page_structure_type ) {
		return 'ct-container-boundless';
	}

	return 'ct-container';
}
