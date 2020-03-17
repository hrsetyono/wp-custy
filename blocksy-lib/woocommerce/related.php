<?php

function blocksy_generate_related_output(
	$related_products,
	$for_preview = false,
	$echo = false
) {
	$limit = intval(get_theme_mod('related_products', 4));

	$columns_output = 'data-columns="' . esc_attr(
		get_theme_mod('related_products_columns', 4)
	) . '"';

	$class = 'related products';

	$class .= ' ' . blocksy_visibility_classes(
		get_theme_mod('related_products_visibility', [
			'desktop' => true,
			'tablet' => false,
			'mobile' => false,
		])
	);

	if (! $echo) {
		ob_start();
	}

	?>

	<section class="<?php echo esc_attr($class) ?>">

		<h2><?php esc_html_e( 'Related products', 'blocksy' ); ?></h2>

		<div class="shop-entries" data-layout="grid" <?php echo wp_kses_post($columns_output) ?>>

			<?php foreach ( $related_products as $index => $related_product ) : ?>
				<?php
					$post_object = get_post( $related_product->get_id() );

					setup_postdata( $GLOBALS['post'] =& $post_object );

					if (! $for_preview && $index + 1 > $limit) {
						break;
					}

					$GLOBALS['forced_layout'] = 'grid';

					wc_get_template_part( 'content', 'product' );

					$GLOBALS['forced_layout'] = null;
				?>
			<?php endforeach; ?>

		</div>

	</section>

	<?php

	wp_reset_postdata();

	if (! $echo) {
		return ob_get_clean();
	}
}

