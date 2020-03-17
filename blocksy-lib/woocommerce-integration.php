<?php

require __DIR__ . '/woocommerce/content-product.php';
require __DIR__ . '/woocommerce/related.php';
require __DIR__ . '/woocommerce/load-mini-cart.php';

remove_action(
	'woocommerce_before_single_product_summary',
	'woocommerce_show_product_sale_flash'
);

remove_action(
	'woocommerce_single_product_summary',
	'woocommerce_template_single_rating'
);

remove_action(
	'woocommerce_single_product_summary',
	'woocommerce_template_single_meta',
	40
);

add_filter(
	'woocommerce_demo_store',
	function ($notice) {
		$parser = new Blocksy_Attributes_Parser();

		$notice = $parser->add_attribute_to_images_with_tag(
			$notice,
			'data-position',
			get_theme_mod('store_notice_position', 'bottom'),
			'p'
		);

		return $notice;
	}
);

add_action(
	'woocommerce_single_product_summary',
	function () {
		if (get_theme_mod('has_product_single_rating', 'yes') === 'yes') {
			woocommerce_template_single_rating();
		}

		blocksy_add_customizer_preview_cache(function () {
			return blocksy_html_tag(
				'div',
				['data-id' => 'single-rating'],
				blocksy_collect_and_return(function () {
					woocommerce_template_single_rating();
				})
			);
		});
	},
	9
);

add_action(
	'woocommerce_single_product_summary',
	function () {
		if (get_theme_mod('has_product_single_meta', 'yes') === 'yes') {
			woocommerce_template_single_meta();
		}

		blocksy_add_customizer_preview_cache(function () {
			return blocksy_html_tag(
				'div',
				['data-id' => 'single-meta'],
				blocksy_collect_and_return(function () {
					woocommerce_template_single_meta();
				})
			);
		});
	},
	39
);

function blocksy_get_woocommerce_ratio() {
	$cropping = get_option( 'woocommerce_thumbnail_cropping', '1:1' );

	if ($cropping === '1:1') {
		return '1/1';
	}

	if ($cropping === 'custom') {
		$width = get_option('woocommerce_thumbnail_cropping_custom_width', 4);
		$height = get_option('woocommerce_thumbnail_cropping_custom_height', 3);

		return $width . '/' . $height;
	}

	return '1/1';
}

add_filter('woocommerce_output_related_products_args', function ($args) {
	if (! is_customize_preview()) {
		$args['posts_per_page'] = intval(get_theme_mod('related_products', 4));
	} else {
		$args['posts_per_page'] = 8;
	}

	return $args;
});

add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

add_action('wp_enqueue_scripts', function () {
	if (! function_exists('is_shop')) return;

	if (
		is_shop()
		||
		is_product_category()
		||
		is_product_tag()
	) {
		wp_enqueue_script('selectWoo');
		wp_enqueue_style('select2');
	}

	$theme = wp_get_theme();

	wp_enqueue_style(
		'ct-woocommerce-styles',
		get_template_directory_uri() . '/static/bundle/woocommerce.css',
		[],
		$theme->get( 'Version' )
	);

	// wp_dequeue_style( 'wc-block-style' );

	wp_dequeue_style( 'selectWoo' );
	wp_deregister_style( 'selectWoo' );

	wp_dequeue_script( 'selectWoo');
	call_user_func('wp_' . 'deregister_script', 'selectWoo');
});

add_filter('woocommerce_product_review_comment_form_args', function ($comment_form) {
	$comment_form['comment_field'] = '';
	if ( get_option( 'woocommerce_enable_review_rating' ) === 'yes' ) {
		$comment_form['comment_field'] = '<div class="comment-form-rating"><label for="rating">' . esc_html__( 'Your rating', 'blocksy' ) . '</label><select name="rating" id="rating" required>
			<option value="">' . esc_html__( 'Rate&hellip;', 'blocksy' ) . '</option>
			<option value="5">' . esc_html__( 'Perfect', 'blocksy' ) . '</option>
			<option value="4">' . esc_html__( 'Good', 'blocksy' ) . '</option>
			<option value="3">' . esc_html__( 'Average', 'blocksy' ) . '</option>
			<option value="2">' . esc_html__( 'Not that bad', 'blocksy' ) . '</option>
			<option value="1">' . esc_html__( 'Very poor', 'blocksy' ) . '</option>
		</select></div>';
	}

	$comment_form['comment_field'] .= '<p class="comment-form-comment"><textarea id="comment" name="comment" cols="45" rows="8" required></textarea><label for="comment">' . esc_html__( 'Your review', 'blocksy' ) . '&nbsp;<span class="required">*</span></label></p>';
	$comment_form['submit_button'] = '<button name="%1$s" type="submit" id="%2$s" class="%3$s woo-review-submit" value="%4$s" />%4$s</button>';

	$comment_form['fields']['author'] = '<p class="comment-form-author"><input id="author" name="author" type="text" value="" size="30" required /><label for="author">Name&nbsp;<span class="required">*</span></label></p>';
	$comment_form['fields']['email'] = '<p class="comment-form-email"> <input id="email" name="email" type="email" value="" size="30" required /><label for="email">Email&nbsp;<span class="required">*</span></label></p>';

	return $comment_form;
}, 10, 1);

remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);

add_filter('post_class', function ($classes, $class, $product_id) {
	if (! function_exists('is_product')) return $classes;
	if (! is_product()) return $classes;

	if (get_theme_mod('gallery_style', 'horizontal') === 'vertical') {
		global $product;

		if (count($product->get_gallery_image_ids()) > 0) {
			$classes[] = 'thumbs-left';
		}
	}

	return $classes;
}, 10, 3);

add_filter( 'loop_shop_per_page', function () {
    return intval(get_theme_mod('shop_products', 9));
}, 20 );


