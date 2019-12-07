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

$joined_date = date( "F j, Y", strtotime(get_userdata(
	get_the_author_meta('ID')
)->user_registered) );

$comments_count = get_comments([
	'type' => '',
	'user_id' => get_the_author_meta('ID'),
	'count' => true,
]);

$posts_count = count_user_posts(get_the_author_meta('ID'));

?>

<section id="primary" class="content-area">
	<div class="ct-container" <?php echo wp_kses( blocksy_sidebar_position_attr(), [] ); ?>>

		<section>
			<?php if ( have_posts() ) { ?>
				<?php if ( ! is_home() ) { ?>
					<header class="page-header">
						<?php echo get_avatar( get_the_author_meta( 'ID' ), '60' ); ?>

						<h1 class="page-title">
							<?php echo wp_kses_post(get_the_author_meta( 'display_name' )) ?>
						</h1>

						<ul class="ct-meta-info">
							<li>
								<?php echo esc_html(__( 'Joined', 'blocksy' )); ?>:

								<span>
									<?php echo esc_html($joined_date) ?>
								</span>
							</li>

							<li>
								<?php echo esc_html(__( 'Articles', 'blocksy' )); ?>:
								<span><?php echo esc_html($posts_count) ?></span>
							</li>

							<?php if (intval($comments_count) > 0) { ?>
								<li>
									<?php echo esc_html(__( 'Comments', 'blocksy' )); ?>:

									<span>
										<?php echo esc_html($comments_count) ?>
									</span>
								</li>
							<?php } ?>
						</ul>

						<?php if (! empty(trim(get_the_author_meta( 'user_description' )))) { ?>
							<div class="archive-description">
								<?php echo wp_kses_post(get_the_author_meta( 'user_description' )) ?>
							</div>
						<?php } ?>

						<?php blocksy_author_social_channels() ?>
					</header>
				<?php }

				if ( have_posts() ) { ?>
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

				if ( have_posts() ) { ?>
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
