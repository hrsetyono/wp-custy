<?php

remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10);
remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5);
remove_action('woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30);
remove_action('woocommerce_before_shop_loop', 'woocommerce_result_count', 20);
remove_action(
	'woocommerce_before_shop_loop_item_title',
	'woocommerce_show_product_loop_sale_flash',
	10
);
remove_action('woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10);
remove_action('woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10);
remove_action(
	'woocommerce_before_shop_loop_item_title',
	'woocommerce_template_loop_product_thumbnail'
);

function blocksy_generate_content_product($for_preview = false) {
	$structure = get_theme_mod('shop_structure', 'grid');

	global $product;

	if (isset($GLOBALS['forced_layout']) && $GLOBALS['forced_layout']) {
		$structure = $GLOBALS['forced_layout'];
	}

	if ($for_preview) {
		$structure = 'shop-simple';
	}

	ob_start();

	?>

	<article <?php wc_product_class('shop-entry-card', $product->get_id()); ?>>
		<?php

		$image_output = blocksy_image([
			'attachment_id' => $product->get_image_id(),
			'size' => $structure === 'shop-simple' ? 'woocommerce_single' : 'woocommerce_thumbnail',
			'ratio' => $structure === 'shop-simple' ? '3/4' : blocksy_get_woocommerce_ratio(),
			'tag_name' => 'a',
			'html_atts' => [
				'href' => get_permalink($product->get_id())
			]
		]);

		echo '<figure>';
		echo wp_kses_post($image_output);

		if (function_exists('blocksy_output_quick_view_link')) {
			echo blocksy_output_quick_view_link($for_preview);
		}

		if ($structure === 'shop-simple') {
			echo '<div class="woo-card-actions">';
			echo wp_kses_post(woocommerce_template_loop_add_to_cart());
			echo '</div>';

		}

		if (get_theme_mod('has_sale_badge', 'yes') === 'yes' || $for_preview) {
			woocommerce_show_product_loop_sale_flash();
		}

		echo '</figure>';

		echo '<div class="ct-card-content">';

		/**
		 * Hook: woocommerce_before_shop_loop_item.
		 *
		 * @hooked woocommerce_template_loop_product_link_open - 10
		 */
		do_action( 'woocommerce_before_shop_loop_item' );

		/**
		 * Hook: woocommerce_before_shop_loop_item_title.
		 *
		 * @hooked woocommerce_show_product_loop_sale_flash - 10
		 * @hooked woocommerce_template_loop_product_thumbnail - 10
		 */
		do_action( 'woocommerce_before_shop_loop_item_title' );

		/**
		 * Hook: woocommerce_shop_loop_item_title.
		 *
		 * @hooked woocommerce_template_loop_product_title - 10
		 */
		do_action( 'woocommerce_shop_loop_item_title' );

		if (get_theme_mod('has_star_rating', 'yes') === 'yes' || $for_preview) {
			woocommerce_template_loop_rating();
		}

		echo '<h2 class="woocommerce-loop-product__title">';

		woocommerce_template_loop_product_link_open();
		echo wp_kses_post(get_the_title());
		woocommerce_template_loop_product_link_close();

		echo '</h2>';

		/**
		 * Hook: woocommerce_after_shop_loop_item_title.
		 *
		 * @hooked woocommerce_template_loop_rating - 5
		 * @hooked woocommerce_template_loop_price - 10
		 */
		do_action( 'woocommerce_after_shop_loop_item_title' );

		/**
		 * Hook: woocommerce_after_shop_loop_item.
		 *
		 * @hooked woocommerce_template_loop_product_link_close - 5
		 * @hooked woocommerce_template_loop_add_to_cart - 10
		 */
		do_action( 'woocommerce_after_shop_loop_item' );

		if (
			get_theme_mod('has_product_categories', 'yes') === 'yes'
			||
			$for_preview
		) {
			echo blocksy_post_meta([
				'categories' => true
			], [
				'plain' => true
			]);
		}


		if ($structure === 'shop-simple') {
			echo wp_kses_post(blocksy_entry_excerpt(15));
			echo wp_kses_post(woocommerce_template_loop_price());
		}

		if ($structure === 'grid') {
			echo '<div class="ct-ghost-item"></div>';
			echo '<div class="woo-card-actions">';
			echo wp_kses_post(woocommerce_template_loop_price());
			echo wp_kses_post(woocommerce_template_loop_add_to_cart());
			echo '</div>';
		}

		echo '</div>';

		?>
	</article>

	<?php

	return ob_get_clean();
}
