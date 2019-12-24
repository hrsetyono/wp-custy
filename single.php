<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Blocksy
 */

$has_related_posts = get_theme_mod( 'has_related_posts', 'yes' ) === 'yes' && (
	blocksy_default_akg(
		'disable_related_posts',
		blocksy_get_post_options(),
		'no'
	) !== 'yes'
);

$has_post_comments = get_theme_mod( 'has_post_comments', 'yes' ) === 'yes';

if (blocksy_is_page()) {
	$has_post_comments = get_theme_mod('has_page_comments', 'yes') === 'yes';
}

get_header();

if (
	blocksy_default_akg(
		'page_structure_type',
		blocksy_get_post_options(),
		'default'
	) !== 'default'
) {
	blocksy_add_customizer_preview_cache(
		function () {
			return blocksy_html_tag(
				'div',
				[
					'data-page-structure-custom' => '',
				],
				''
			);
		}
	);
}

?>

<?php

the_post();

?>

	<?php
		/**
		 * Note to code reviewers: This line doesn't need to be escaped.
		 * Function blocksy_output_hero_section() used here escapes the value properly.
		 */
		echo blocksy_output_hero_section( 'type-2' );
	?>

	<div id="primary" class="content-area">

		<div class="<?php echo esc_attr(blocksy_get_page_container_width()) ?>" <?php echo wp_kses_post(blocksy_sidebar_position_attr()); ?>>

			<section>
				<?php
					get_template_part( 'template-parts/content', get_post_type() );
				?>
			</section>

			<?php get_sidebar(); ?>

		</div>

	</div>

<?php
	ob_start();

	if ( $has_related_posts ) {
		blocksy_related_posts();
	}

	$related_posts_output = ob_get_clean();

	ob_start();

	blocksy_related_posts(true);

	$related = ob_get_clean();

	blocksy_add_customizer_preview_cache(
		function () use ($related) {
			return blocksy_html_tag(
				'div',
				[
					'data-part' => 'related-posts',
				],
				$related
			);
		}
	);

	if (
		get_theme_mod(
			'related_location', 'before'
		) === 'before' && $has_related_posts
	) {
		/**
		 * Note to code reviewers: This line doesn't need to be escaped.
		 * The var $related_posts_output used here escapes the value properly.
		 */
		echo $related_posts_output;
	}

	ob_start();

	// If comments are open or we have at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) {
		?>
		<div class="ct-comments-container">
			<div class="ct-container">
				<?php comments_template(); ?>
			</div>
		</div>
		<?php
	}

	$comments = ob_get_clean();

	if ( $has_post_comments ) {
		/**
		 * Note to code reviewers: This line doesn't need to be escaped.
		 * The val $comments used here escapes the value properly.
		 */
		echo $comments;
	}

	if (
		get_theme_mod(
			'related_location', 'before'
		) === 'after' && $has_related_posts
	) {
		/**
		 * Note to code reviewers: This line doesn't need to be escaped.
		 * The var $related_posts_output used here escapes the value properly.
		 */
		echo $related_posts_output;
	}

	blocksy_add_customizer_preview_cache(
		function () use ($comments) {
			return blocksy_html_tag(
				'div',
				[
					'data-part' => 'comments',
				],
				$comments
			);
		}
	);

	?>


<?php

get_footer();

