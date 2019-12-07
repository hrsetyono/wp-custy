<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Blocksy
 */

get_header();

$listing_source = blocksy_get_posts_listing_source();

$blog_post_structure = blocksy_akg_or_customizer(
	'structure',
	$listing_source,
	'grid'
);

$blog_post_columns = blocksy_akg_or_customizer(
	'columns',
	$listing_source,
	'3'
);

$columns_output = '';

if ( $blog_post_structure === 'grid' ) {
	$columns_output = 'data-columns="' . $blog_post_columns . '"';
}

?>

<?php

/**
 * Note to code reviewers: This line doesn't need to be escaped.
 * Function blocksy_output_hero_section() used here escapes the value properly.
 */
echo blocksy_output_hero_section( 'type-2' );

?>

<section id="primary" class="content-area">
	<div class="ct-container" <?php echo wp_kses_post(blocksy_sidebar_position_attr()); ?>>

		<section>
			<?php
				/**
				 * Note to code reviewers: This line doesn't need to be escaped.
				 * Function blocksy_output_hero_section() used here
				 * escapes the value properly.
				 */
				echo blocksy_output_hero_section( 'type-1' );
			?>

			<?php if ( have_posts() ) { ?>
				<?php if ( have_posts() ) { ?>
					<div class="entries"
						data-layout="<?php echo esc_attr($blog_post_structure); ?>"
						<?php echo blocksy_get_listing_card_type() ?>
						<?php echo blocksy_listing_page_structure() ?>
						<?php echo wp_kses_post($columns_output); ?>
						<?php blocksy_schema_org_definitions_e('blog') ?>>
				<?php }

					while ( have_posts() ) {
						the_post();
						get_template_part(
							'template-parts/content-loop', get_post_type()
						);
					}
				?>

				<?php if ( have_posts() ) { ?>
					</div>
				<?php }

				/**
				 * Note to code reviewers: This line doesn't need to be escaped.
				 * Function blocksy_display_posts_pagination() used here escapes the value properly.
				 */
				echo blocksy_display_posts_pagination();
			} else {
				get_template_part( 'template-parts/content', 'none' );
			}

			?>
		</section>

		<?php get_sidebar(); ?>
	</div>
</section>

<?php
get_footer();
