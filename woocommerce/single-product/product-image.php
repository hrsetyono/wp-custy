<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.5.1
 */

defined( 'ABSPATH' ) || exit;

// Note: `wc_get_gallery_image_html` was added in WC 3.3.2 and did not exist prior. This check protects against theme overrides being used on older versions of WC.
if ( ! function_exists( 'wc_get_gallery_image_html' ) ) {
	return;
}

global $product;

$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
$post_thumbnail_id = $product->get_image_id();
$wrapper_classes   = apply_filters( 'woocommerce_single_product_image_gallery_classes', array(
	'woocommerce-product-gallery',
	'woocommerce-product-gallery--' . ( $product->get_image_id() ? 'with-images' : 'without-images' ),
	'woocommerce-product-gallery--columns-' . absint( $columns ),
	'images',
) );

ob_start();

?>

<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', $wrapper_classes ) ) ); ?>" data-columns="<?php echo esc_attr( $columns ); ?>" style="opacity: 0; transition: opacity .25s ease-in-out;">
	<figure class="woocommerce-product-gallery__wrapper">
		<?php
		if ( $product->get_image_id() ) {
			$html = wc_get_gallery_image_html( $post_thumbnail_id, true );
		} else {
			$html  = '<div class="woocommerce-product-gallery__image--placeholder">';
			$html .= sprintf( '<img src="%s" alt="%s" class="wp-post-image" />', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'blocksy' ) );
			$html .= '</div>';
		}

		echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, $post_thumbnail_id ); // phpcs:disable WordPress.XSS.EscapeOutput.OutputNotEscaped

		do_action( 'woocommerce_product_thumbnails' );
		?>
	</figure>
</div>

<?php

ob_get_clean();

$thumb_id = get_post_thumbnail_id();

$gallery_images = $product->get_gallery_image_ids();

if ($thumb_id) {
	array_unshift($gallery_images, intval($thumb_id));
}

$ratio = '3/4';
$single_ratio = get_theme_mod('product_gallery_ratio', '3/4');

echo '<div class="ct-product-view">';

if (count($gallery_images) === 1) {
	$image_href = wp_get_attachment_image_src(
		$gallery_images[0],
		'woocommerce_single'
	);

	if ($image_href) {
		$image_href = $image_href[0];
	}

	echo blocksy_image([
		'attachment_id' => $gallery_images[0],
		'size' => 'woocommerce_single',
		'ratio' => is_single() ? $single_ratio : '3/4',
		'tag_name' => 'a',
		'size' => 'woocommerce_single',
		'html_atts' => [
			'href' => $image_href
		],
	]);
} else if (count($gallery_images) > 0) {
	echo blocksy_flexy([
		'images' => $gallery_images,
		'size' => 'woocommerce_single',
		'pills_images' => is_single() ? $gallery_images : null,
		'images_ratio' => is_single() ? $single_ratio : '3/4'
	]);
}

echo '</div>';

