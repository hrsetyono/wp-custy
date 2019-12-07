<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

get_header( 'shop' );

/**
 * Note to code reviewers: This line doesn't need to be escaped.
 * Function blocksy_output_hero_section() used here escapes the value properly.
 */
echo blocksy_output_hero_section( 'type-2' );

global $wp_query;

?>


<section id="primary" class="content-area">
	<div class="ct-container" <?php echo wp_kses( blocksy_sidebar_position_attr(), [] ); ?>>
		<section>

			<?php

			if (is_shop()) {
				/**
				 * Note to code reviewers: This line doesn't need to be escaped.
				 * Function blocksy_output_hero_section() used here escapes the value properly.
				 */
				echo blocksy_output_hero_section( 'type-1' );
			}

			if ( woocommerce_product_loop() ) {
				echo '<div class="woo-listing-top">';

				/**
				 * Hook: woocommerce_before_main_content.
				 *
				 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
				 * @hooked woocommerce_breadcrumb - 20
				 * @hooked WC_Structured_Data::generate_website_data() - 30
				 */
				do_action( 'woocommerce_before_main_content' );

				if (get_theme_mod('has_shop_breadcrumbs', 'yes') === 'yes') {
					woocommerce_breadcrumb();
				}

				blocksy_add_customizer_preview_cache(function () {
					return blocksy_html_tag(
						'div',
						['data-id' => 'shop-breadcrumbs'],
						blocksy_collect_and_return(function () {
							woocommerce_breadcrumb();
						})
					);
				});

				/**
				 * Hook: woocommerce_before_shop_loop.
				 *
				 * @hooked woocommerce_output_all_notices - 10
				 * @hooked woocommerce_result_count - 20
				 * @hooked woocommerce_catalog_ordering - 30
				 */
				do_action( 'woocommerce_before_shop_loop' );

				if (get_theme_mod('has_shop_results_count', 'yes') === 'yes') {
					woocommerce_result_count();
				}

				blocksy_add_customizer_preview_cache(function () {
					return blocksy_html_tag(
						'div',
						['data-id' => 'shop-results-count'],
						blocksy_collect_and_return(function () {
							woocommerce_result_count();
						})
					);
				});

				if (get_theme_mod('has_shop_sort', 'yes') === 'yes') {
					woocommerce_catalog_ordering();
				}

				blocksy_add_customizer_preview_cache(function () {
					return blocksy_html_tag(
						'div',
						['data-id' => 'shop-sort'],
						blocksy_collect_and_return(function () {
							woocommerce_catalog_ordering();
						})
					);
				});

				echo '</div>';

				woocommerce_product_loop_start();

				if ( wc_get_loop_prop( 'total' ) ) {
					while ( have_posts() ) {
						the_post();

						/**
						 * Hook: woocommerce_shop_loop.
						 *
						 * @hooked WC_Structured_Data::generate_product_data() - 10
						 */
						do_action( 'woocommerce_shop_loop' );

						wc_get_template_part( 'content', 'product' );
					}
				}

				woocommerce_product_loop_end();

				/**
				 * Hook: woocommerce_after_shop_loop.
				 *
				 * @hooked woocommerce_pagination - 10
				 */
				do_action( 'woocommerce_after_shop_loop' );
			} else {
				/**
				 * Hook: woocommerce_no_products_found.
				 *
				 * @hooked wc_no_products_found - 10
				 */
				do_action( 'woocommerce_no_products_found' );
			}

			/**
			 * Hook: woocommerce_after_main_content.
			 *
			 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
			 */
			do_action( 'woocommerce_after_main_content' );

			/**
			 * Hook: woocommerce_sidebar.
			 *
			 * @hooked woocommerce_get_sidebar - 10
			 */
			// do_action( 'woocommerce_sidebar' );

			?>

		</section>

		<?php get_sidebar(); ?>

	</div>
</section>

<?php

get_footer( 'shop' );
