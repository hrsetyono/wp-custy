<?php

add_action('wp_ajax_blocsky_get_woo_minicart', 'blocksy_get_woocommerce_minicart');
add_action('wp_ajax_nopriv_blocsky_get_woo_minicart', 'blocksy_get_woocommerce_minicart');

function blocksy_get_woocommerce_minicart() {
	ob_start();
	woocommerce_mini_cart();
	$content = ob_get_clean();

	wp_send_json_success([
		'minicart' => blocksy_html_tag(
			'div',
			['class' => 'ct-cart-content'],
			$content
		)
	]);
}
