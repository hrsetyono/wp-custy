<?php
/**
 * Related Products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/related.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if (! $related_products) {
	return;
}

if (get_theme_mod('has_product_related', 'yes') === 'yes') {
	blocksy_generate_related_output($related_products, false, true);
}


if (is_customize_preview()) {
	blocksy_add_customizer_preview_cache(blocksy_html_tag(
		'div',
		['data-id' => 'single-related'],
		blocksy_generate_related_output($related_products, true)
	));
}

