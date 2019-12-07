<?php
/**
 * The template for displaying product category thumbnails within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product_cat.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 2.6.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$structure = get_theme_mod('shop_structure', 'grid');

$small_thumbnail_size = apply_filters( 'subcategory_archive_thumbnail_size', 'woocommerce_thumbnail' );
$dimensions           = wc_get_image_size( $small_thumbnail_size );
$thumbnail_id         = get_term_meta( $category->term_id, 'thumbnail_id', true );

$image_output = blocksy_image([
	'attachment_id' => $thumbnail_id,
	'size' => 'woocommerce_thumbnail',
	'ratio' => $structure === 'shop-simple' ? '3/4' : blocksy_get_woocommerce_ratio(),
	'tag_name' => 'a',
	'html_atts' => [
		'href' => esc_url( get_term_link( $category, 'product_cat' ) )
	]
]);

// <article wc_product_cat_class( '', $category );>
?>
<article class="shop-entry-card product-category">
	<?php
	/**
	 * woocommerce_before_subcategory hook.
	 *
	 * @hooked woocommerce_template_loop_category_link_open - 10
	 */
	// do_action( 'woocommerce_before_subcategory', $category );

	/**
	 * woocommerce_before_subcategory_title hook.
	 *
	 * @hooked woocommerce_subcategory_thumbnail - 10
	 */
	// do_action( 'woocommerce_before_subcategory_title', $category );

	echo '<figure>';
	echo wp_kses_post($image_output);
	echo '</figure>';

	/**
	 * woocommerce_shop_loop_subcategory_title hook.
	 *
	 * @hooked woocommerce_template_loop_category_title - 10
	 */
	// do_action( 'woocommerce_shop_loop_subcategory_title', $category );

	/**
	 * woocommerce_after_subcategory_title hook.
	 */
	do_action( 'woocommerce_after_subcategory_title', $category );

	?>

		<div class="ct-card-content">

			<h2 class="woocommerce-loop-category__title">
				<a href="<?php echo esc_url(get_term_link($category, 'product_cat')) ?>">
					<?php
					echo esc_html($category->name);

					if ( $category->count > 0 ) {
						echo apply_filters('woocommerce_subcategory_count_html', ' <span class="count">(' . esc_html($category->count) . ')</span>', $category); // WPCS: XSS ok.
					}
					?>
				</a>
			</h2>

		</div>

	<?php

	/**
	 * woocommerce_after_subcategory hook.
	 *
	 * @hooked woocommerce_template_loop_category_link_close - 10
	 */
	// do_action( 'woocommerce_after_subcategory', $category ); ?>
</article>

