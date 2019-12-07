<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Blocksy
 */

/**
 * Note to code reviewers: This line doesn't need to be escaped.
 * Function blocksy_single_content() used here escapes the value properly.
 */
echo blocksy_single_content();

if (is_customize_preview()) {
	blocksy_add_customizer_preview_cache(
		blocksy_html_tag(
			'div',
			['class' => 'single-content-cache'],
			blocksy_single_content(true)
		)
	);
}


