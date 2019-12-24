<?php

function blocksy_single_content( $check_for_preview = false ) {
	$page_structure_output = '';

	if ( blocksy_get_page_structure() !== 'none' ) {
		$page_structure_output = 'data-page-structure="' . blocksy_get_page_structure() . '"';
	}

    $post_options = blocksy_get_post_options();

	$has_share_box = get_theme_mod('has_share_box', 'yes') === 'yes';
	$has_post_tags = get_theme_mod('has_post_tags', 'yes') === 'yes';
	$has_author_box = get_theme_mod('has_author_box', 'no') === 'yes';
	$has_post_nav = get_theme_mod('has_post_nav', 'yes') === 'yes';

	if ($check_for_preview) {
		$has_share_box = true;
		$has_post_tags = true;
		$has_author_box = true;
		$has_post_nav = true;
	}

	if (
		blocksy_default_akg(
			'disable_posts_navigation', $post_options, 'no'
		) === 'yes'
	) {
		$has_post_nav = false;
	}

	if (
		blocksy_default_akg(
			'disable_author_box', $post_options, 'no'
		) === 'yes'
	) {
		$has_author_box = false;
	}

	if (
		blocksy_default_akg(
			'disable_post_tags', $post_options, 'no'
		) === 'yes'
	) {
		$has_post_tags = false;
	}

	if (
		blocksy_default_akg(
			'disable_share_box', $post_options, 'no'
		) === 'yes'
	) {
		$has_share_box = false;
	}

	$featured_image_location = 'none';

	if (get_post_type() === 'post') {
		$page_title_source = blocksy_get_page_title_source();

		if ($page_title_source) {
			$actual_type = blocksy_akg_or_customizer(
				'hero_section',
				blocksy_get_page_title_source(),
				'type-1'
			);

			if ($actual_type !== 'type-2') {
				$featured_image_location = get_theme_mod(
					'single_featured_image_location',
					'above'
				);
			} else {
				$featured_image_location = 'below';
			}
		} else {
			$featured_image_location = 'above';
		}
	}

	$share_box_type = get_theme_mod('share_box_type', 'type-1');

	if ($check_for_preview) {
		$share_box_type = 'type-1';
	}

	$share_box1_location = get_theme_mod(
		'share_box1_location',
		[
			'top' => false,
			'bottom' => true,
		]
	);

	$share_box2_location = get_theme_mod('share_box2_location', 'right');

	if ( $check_for_preview ) {
		$share_box1_location = [
			'top' => true,
			'bottom' => true,
		];
	}

	$content_style = get_theme_mod('single_content_style', 'wide');

	if (blocksy_is_page()) {
		$content_style = get_theme_mod('page_content_style', 'wide');
	}

	$content_output = 'data-content="' . $content_style . '"';

	ob_start();

	?>

	<article
		id="post-<?php the_ID(); ?>"
		<?php post_class(); ?>
		<?php echo $content_output ?>
		<?php echo wp_kses( $page_structure_output, [] ); ?>>

		<?php
			if ($featured_image_location === 'above' || $check_for_preview) {
				echo blocksy_get_featured_image_output($check_for_preview);
			}

			if (!is_singular([ 'product' ])) {
				/**
				 * Note to code reviewers: This line doesn't need to be escaped.
				 * Function blocksy_output_hero_section() used here escapes the value properly.
				 */
				echo blocksy_output_hero_section( 'type-1' );
			}

			if ($featured_image_location === 'below' && !$check_for_preview) {
				echo blocksy_get_featured_image_output();
			}
		?>

		<?php if (
			(
				(
					$share_box_type === 'type-1'
					&&
					$share_box1_location['top']
				) || $share_box_type === 'type-2'
			)
			&&
			$has_share_box
			&&
			!is_page()
		) { ?>
			<?php
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				/**
				 * Note to code reviewers: This line doesn't need to be escaped.
				 * Function blocksy_get_social_share_box() used here escapes the value properly.
				 */
				echo blocksy_get_social_share_box($check_for_preview, [
					'html_atts' => $share_box_type === 'type-1' ? [
						'data-location' => 'top'
					] : [
						'data-location' => $share_box2_location,
					],
					'type' => $share_box_type
				]);
			?>
		<?php } ?>

		<div class="entry-content">
			<?php

			the_content(
				sprintf(
					wp_kses(
						/* translators: %s: Name of current post. Only visible to screen readers */
						__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'blocksy' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					get_the_title()
				)
			);

			wp_link_pages(
				[
					'before' => '<div class="page-links"><span class="post-pages-label">' . esc_html__( 'Pages', 'blocksy' ) . '</span>',
					'after'  => '</div>',
				]
			);

			?>
		</div>

		<?php if (
			$has_post_tags
			||
			blocksy_is_page()
		) { ?>
			<?php
				/**
				 * Note to code reviewers: This line doesn't need to be escaped.
				 * Function blocksy_post_meta() used here escapes the value properly.
				 */
				echo blocksy_post_meta( [ 'tags' => true ], [
					'class' => 'entry-tags',
					'tags_format' => 'simple'
				] );
			?>
		<?php } ?>

		<?php if (
			$share_box_type === 'type-1'
			&&
			$share_box1_location['bottom']
			&&
			$has_share_box
			&&
			!is_page()
		) { ?>
			<?php
				/**
				 * Note to code reviewers: This line doesn't need to be escaped.
				 * Function blocksy_get_social_share_box() used here escapes the value properly.
				 */
				echo blocksy_get_social_share_box($check_for_preview, [
					'html_atts' => ['data-location' => 'bottom'],
					'type' => 'type-1'
				]);
			?>
		<?php } ?>

		<?php

		if ( $has_author_box && ! is_page() ) {
			blocksy_author_box( $check_for_preview );
		}

		if ( $has_post_nav && ! is_page() ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			/**
			 * Note to code reviewers: This line doesn't need to be escaped.
			 * Function blocksy_post_navigation() used here escapes the value properly.
			 */
			echo blocksy_post_navigation( $check_for_preview );
		}

		if (function_exists('blc_ext_mailchimp_subscribe_form')) {
			if (! blocksy_is_page()) {
				/**
				 * Note to code reviewers: This line doesn't need to be escaped.
				 * Function blc_ext_mailchimp_subscribe_form() used here escapes the value properly.
				 */
				echo blc_ext_mailchimp_subscribe_form();
			}
		}

		?>

	</article>

	<?php

	return ob_get_clean();
}

