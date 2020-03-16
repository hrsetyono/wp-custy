<?php
/**
 * Single post helpers
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

add_filter( 'body_class', function ( $classes ) {
	if (get_theme_mod('has_passepartout', 'no') === 'yes') {
		$classes[] = 'ct-passepartout';
	}

	$classes[] = 'ct-loading';
	$classes[] = 'ct-no-js';

    if (
		blocksy_sidebar_position() !== 'none'
		||
		function_exists('is_product') && is_product()
    ) {
		$classes[] = 'sidebar';
	}

	if ( is_single() || is_page() ) {
		if (
			blocksy_default_akg(
				'page_enable_vertical_spacing',
				blocksy_get_post_options(),
				'yes'
			) === 'no'
		) {
			$classes[] = 'main-content-area-boundless';
		}

		if ( class_exists( 'FLBuilderModel' ) ) {
			if ( FLBuilderModel::is_builder_enabled() ) {
				if (
					intval(blocksy_akg(
						'row_width',
						FLBuilderModel::get_global_settings(),
						'1290'
					)) === 1290
				) {
					$classes[] = 'builder-raw-width';
				}
			}
		}

		global $post;

		if ( class_exists( '\Elementor\Plugin' ) ) {
			if ( \Elementor\Plugin::$instance->db->is_built_with_elementor(
				$post->ID
			) ) {
				if ( intval( get_option( 'elementor_container_width' ) ) === 1290 ) {
					$classes[] = 'builder-raw-width';
				}
			}
		}

		if (class_exists('Brizy_Editor')) {
			$pid = Brizy_Editor::get()->currentPostId();

			$is_using_brizy = false;

			try {
				if ( in_array( get_post_type( $pid ), Brizy_Editor::get()->supported_post_types() ) ) {
					$is_using_brizy = Brizy_Editor_Post::get( $pid )->uses_editor();
				}
			} catch ( Exception $e ) {
			}

			if ($is_using_brizy) {
				$classes[] = 'builder-raw-width';
			}
		}
	}

	if (function_exists('is_product_category')) {
		if (is_product_category() || is_product_tag()) {
			$classes[] = 'woocommerce-archive';
		}

		if (is_product() || is_woocommerce()) {
			if (get_theme_mod('has_ajax_add_to_cart', 'yes') === 'yes') {
				$classes[] = 'ct-ajax-add-to-cart';
			}
		}
	}


	return $classes;
});

/**
 * User social channels
 *
 * @param string $tooltip Should output tooltips.
 */
function blocksy_author_social_channels( $tooltip = 'yes' ) {
	$facebook = get_the_author_meta( 'facebook' );
	$linkedin = get_the_author_meta( 'linkedin' );
	$dribbble = get_the_author_meta( 'dribbble' );
	$website = get_the_author_meta( 'user_url' );
	$twitter = get_the_author_meta( 'twitter' );
	$instagram = get_the_author_meta( 'instagram' );

	if (
		! (
			$website
			||
			$facebook
			||
			$twitter
			||
			$linkedin
			||
			$dribbble
			||
			$instagram
		)
	) {
		return;
	}

	$class = 'author-box-social';

	?>

	<ul class="<?php echo esc_attr($class); ?>">
		<?php if ( $website ) { ?>
			<li>
				<a href="<?php echo esc_url( $website ); ?>" target="_blank">
					<svg width="20px" height="20px" viewBox="0 0 24 24">
						<path d="M12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm8.3 7.2h-3.5c-.5-2.2-1.7-4.3-1.7-4.3s3.4 1 5.2 4.3zm-8.3-4.8s1.5 2.1 2.3 4.8h-4.6c.9-2.9 2.3-4.8 2.3-4.8zm-9.3 12s-.7-2.2 0-4.8h4.1c-.4 2.2 0 4.8 0 4.8h-4.1zm1 2.4h3.5c.7 2.7 1.7 4.3 1.7 4.3-3.7-1.3-5.2-4.3-5.2-4.3zm3.5-9.6h-3.5c1.9-3.3 5.2-4.3 5.2-4.3s-1.2 2.1-1.7 4.3zm4.8 14.4s-1.6-2.3-2.3-4.8h4.6c-.7 2.5-2.3 4.8-2.3 4.8zm2.8-7.2h-5.6s-.4-2.4 0-4.8h5.6c.4 2.2 0 4.8 0 4.8zm.3 6.7s1.2-2.2 1.7-4.3h3.5c-1.9 3.3-5.2 4.3-5.2 4.3zm2.1-6.7s.4-2.5 0-4.8h4.1c.7 2.6 0 4.8 0 4.8h-4.1z"/>
					</svg>

					<?php if ( 'yes' === $tooltip ) { ?>
						<span class="ct-tooltip-top">
							<?php echo esc_html( __( 'Website', 'blocksy' ) ); ?>
						</span>
					<?php } ?>
				</a>
			</li>
		<?php } ?>

		<?php if ( $twitter ) { ?>
			<li>
				<a href="<?php echo esc_url( $twitter ); ?>" target="_blank">
					<svg width="20px" height="20px" viewBox="0 0 24 24">
						<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,4,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.4,23.3,5.5,24,4.6z"/>
					</svg>

					<?php if ( 'yes' === $tooltip ) { ?>
						<span class="ct-tooltip-top">
							<?php echo esc_html( __( 'Twitter', 'blocksy' ) ); ?>
						</span>
					<?php } ?>
				</a>
			</li>
		<?php } ?>

		<?php if ( $facebook ) { ?>
			<li>
				<a href="<?php echo esc_url( $facebook ); ?>" target="_blank">
					<svg width="20px" height="20px" viewBox="0 0 24 24">
						<path d="M18.3,8.7h-4.7V5.8c0-0.8,0.6-1.4,1.4-1.4H18V0h-3.6c-3.2,0-5.8,2.6-5.8,5.8v2.9H5.7V13h2.9v11h5.1V13h3.6L18.3,8.7z"/>
					</svg>

					<?php if ( 'yes' === $tooltip ) { ?>
						<span class="ct-tooltip-top">
							<?php echo esc_html( __( 'Facebook', 'blocksy' ) ); ?>
						</span>
					<?php } ?>
				</a>
			</li>
		<?php } ?>

		<?php if ( $linkedin ) { ?>
			<li>
				<a href="<?php echo esc_url( $linkedin ); ?>" target="_blank">
					<svg width="20px" height="20px" viewBox="0 0 24 24">
						<path d="M5.2,24H0.1V6.9h5.1V24z M24,24h-5.1v-9.1c0-2.4-0.8-3.6-2.5-3.6c-1.3,0-2.2,0.7-2.6,2c0,2.2,0,10.7,0,10.7H8.6c0,0,0.1-15.4,0-17.1h4l0.3,3.4h0.1c1.1-1.7,2.7-2.9,5-2.9c1.8,0,3.2,0.5,4.2,1.7c1.1,1.2,1.6,2.9,1.6,5.2V24z"/>
						<ellipse cx="2.6" cy="2.6" rx="2.6" ry="2.6"/>
					</svg>

					<?php if ( 'yes' === $tooltip ) { ?>
						<span class="ct-tooltip-top">
							<?php echo esc_html( __( 'Linked In', 'blocksy' ) ); ?>
						</span>
					<?php } ?>
				</a>
			</li>
		<?php } ?>

		<?php if ( $dribbble ) { ?>
			<li>
				<a href="<?php echo esc_url( $dribbble ); ?>" target="_blank">
					<svg width="20px" height="20px" viewBox="0 0 24 24">
						<path d="M13.3,12.3c-0.4-0.8-0.7-1.6-1.1-2.4C7,11.7,1.9,11.9,0,11.9c0,0,0,0.1,0,0.1c0,2.9,1.1,5.7,2.8,7.7C4.2,17.9,7.6,14.1,13.3,12.3z M11,7.7C8.8,3.8,6.8,1.4,6.8,1.3L7.2,1c-3.4,1.5-6,4.6-6.9,8.3C2.2,9.3,6.5,9,11,7.7z M13.5,6.8c2.3-0.9,4.5-2.2,6.3-3.9C17.6,1.1,14.9,0,12,0c-0.9,0-1.8,0.1-2.7,0.3C10.1,1.4,11.7,3.6,13.5,6.8z M15.9,11.7c2.4-0.4,5.1-0.5,8.1,0c-0.1-2.6-1-5.1-2.5-7c-2,1.9-4.4,3.3-6.9,4.4C15.1,9.9,15.5,10.8,15.9,11.7z M16.4,23.1c-0.4-2.9-1.2-5.8-2.1-8.4c-5.6,1.6-8.6,5.4-9.6,6.8c2,1.5,4.5,2.5,7.3,2.5c1.6,0,3.2-0.3,4.6-0.9L16.4,23.1z M16.9,14.2c0.9,2.4,1.6,5,2,7.7c2.5-1.8,4.3-4.4,4.9-7.6C21.2,13.9,18.9,13.9,16.9,14.2z"/>
					</svg>

					<?php if ( 'yes' === $tooltip ) { ?>
						<span class="ct-tooltip-top">
							<?php echo esc_html( __( 'Dribbble', 'blocksy' ) ); ?>
						</span>
					<?php } ?>
				</a>
			</li>
		<?php } ?>

		<?php if ( $instagram ) { ?>
			<li>
				<a href="<?php echo esc_url( $instagram ); ?>" target="_blank">
					<svg width="20px" height="20px" viewBox="0 0 24 24">
						<path d="M6.7,0C3,0,0,3,0,6.7v10.7C0,21,3,24,6.7,24h10.7c3.7,0,6.7-3,6.7-6.7V6.7C24,3,21,0,17.3,0H6.7z M20,2.7c0.7,0,1.3,0.6,1.3,1.3S20.7,5.3,20,5.3S18.7,4.7,18.7,4S19.3,2.7,20,2.7z M12,5.3c3.7,0,6.7,3,6.7,6.7s-3,6.7-6.7,6.7s-6.7-3-6.7-6.7S8.3,5.3,12,5.3z M12,8c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S14.2,8,12,8z"/>
					</svg>

					<?php if ( 'yes' === $tooltip ) { ?>
						<span class="ct-tooltip-top">
							<?php echo esc_html( __( 'Instagram', 'blocksy' ) ); ?>
						</span>
					<?php } ?>
				</a>
			</li>
		<?php } ?>
	</ul>

	<?php
}


/**
 * Output author box.
 */
function blocksy_author_box( $check_for_preview = false ) {
	$type = get_theme_mod( 'single_author_box_type', 'type-1' );

	$has_author_box_social = get_theme_mod(
		'single_author_box_social',
		'no'
	) === 'yes' || $check_for_preview;

	$class = 'author-box';

	$class .= ' ' . blocksy_visibility_classes(get_theme_mod('author_box_visibility', [
		'desktop' => true,
		'tablet' => true,
		'mobile' => false,
	]));

	?>

	<div class="<?php echo esc_attr($class); ?>" data-type="<?php echo esc_attr($type); ?>">

		<figure>
			<?php

				echo blocksy_simple_image(
					get_avatar_url(get_the_author_meta('ID'), ['size' => 120]),
					[
						'tag_name' => 'a',
						'inner_content' => '
							<span>
								<svg width="18px" height="13px" viewBox="0 0 20 15">
									<polygon points="14.5,2 13.6,2.9 17.6,6.9 0,6.9 0,8.1 17.6,8.1 13.6,12.1 14.5,13 20,7.5 "/>
								</svg>
							</span>
						',
						'html_atts' => [
							'href' => get_author_posts_url(
								get_the_author_meta('ID'),
								get_the_author_meta('user_nicename')
							)
						],

						'img_atts' => ['width' => 60, 'height' => 60],
					]
				);

			?>
		</figure>

		<div>
			<h5 class="author-box-name">
				<?php the_author(); ?>
			</h5>

			<div class="author-box-bio">
				<?php the_author_meta( 'user_description' ); ?>

				<?php
				if ( $has_author_box_social ) {
					blocksy_author_social_channels();
				}
				?>
			</div>
		</div>
	</div>

	<?php
}

function blocksy_get_featured_image_output($check_for_preview = false) {
	if (get_theme_mod('has_featured_image', 'no') === 'no') {
		if (! $check_for_preview) {
			return '';
		}
	}

	if (blocksy_default_akg(
		'disable_featured_image',
		blocksy_get_post_options(),
		'no'
	) === 'yes') {
		return '';
	}

	if (! has_post_thumbnail()) {
		return '';
	}


	$class = 'ct-featured-image';

	$class .= ' ' . blocksy_visibility_classes(
		get_theme_mod('single_featured_image_visibility', [
			'desktop' => true,
			'tablet' => true,
			'mobile' => false,
		])
	);


	if (
		blocksy_sidebar_position() === 'none'
		&&
		get_theme_mod('single_content_style', 'wide') === 'wide'
	) {
		$image_width = get_theme_mod('single_featured_image_width', 'default');

		if ($image_width === 'wide') {
			$class .= ' alignwide';
		}
	}

	if (get_theme_mod('single_content_style', 'wide') === 'boxed') {
		if (get_theme_mod('single_featured_image_boundless', 'no') === 'yes') {
			$class .= ' ct-boundless';
		}
	}

	return blocksy_html_tag('figure', ['class' => $class], blocksy_image([
		'attachment_id' => get_post_thumbnail_id(),
		'ratio' => get_theme_mod('single_featured_image_ratio', '4/3'),
		'size' => 'full'
	]));
}

