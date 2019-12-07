<?php

/**
 * Treat non-posts home page as a simple page.
 */
function blocksy_is_page() {
	return (
		(
			is_home()
			&&
			!is_front_page()
		) || is_page() || (
			function_exists('is_shop') && is_shop()
		)
	);
}

function blocksy_is_page_title_default() {
	if (function_exists('is_product_category')) {
		if (is_product_category() || is_product_tag()) {
			$taxonomy_options = blocksy_get_taxonomy_options();

			$mode = blocksy_akg('has_hero_section', $taxonomy_options, 'default');

			if ($mode !== 'default') {
				return false;
			}
		}
	}

	if (blocksy_is_page() || is_single()) {
		$post_options = blocksy_get_post_options();

		$mode = blocksy_akg('has_hero_section', $post_options, 'default');

		if ($mode !== 'default') {
			return false;
		}
	}

	if (is_category() || is_tag()) {
		$taxonomy_options = blocksy_get_taxonomy_options();

		$mode = blocksy_akg('has_hero_section', $taxonomy_options, 'default');

		if ($mode !== 'default') {
			return false;
		}
	}

	return true;
}

function blocksy_get_page_title_source($allow_even_if_disabled = false) {
	static $result = null;

	if (! is_null($result)) {
		if (! is_customize_preview()) {
			return $result;
		}
	}

	if (function_exists('is_product_category')) {
		if (is_product_category() || is_product_tag()) {
			$taxonomy_options = blocksy_get_taxonomy_options();

			$mode = blocksy_akg('has_hero_section', $taxonomy_options, 'default');

			if ($mode === 'default') {
				if (
					get_theme_mod(
						'woo_categories_has_page_title', 'yes'
					) === 'no'
					&&
					!$allow_even_if_disabled
				) {
					$result = false;
					return $result;
				}

				$result = [
					'strategy' => 'customizer',
					'prefix' => 'woo_categories'
				];
				return $result;
			}

			if ($mode === 'disabled') {
				$result = false;
				return $result;
			}

			$result = [
				'strategy' => $taxonomy_options
			];
			return $result;
		}
	}

	$post_options = false;

	if (blocksy_is_page() || is_single()) {
		$post_options = blocksy_get_post_options();

		$mode = blocksy_akg('has_hero_section', $post_options, 'default');


		if ($mode === 'default') {
			$prefix = blocksy_is_page() ? 'single_page' : 'single_blog_post';

			if (blocksy_is_page()) {
				if (
					get_theme_mod(
						'single_page_title_enabled', 'yes'
					) === 'no'
					&&
					!$allow_even_if_disabled
				) {
					$result = false;
					return $result;
				}
			}

			if (is_single()) {
				if (
					get_theme_mod(
						'single_blog_post_title_enabled', 'yes'
					) === 'no'
					&&
					!$allow_even_if_disabled
				) {
					$result = false;
					return $result;
				}
			}

			$result = [
				'strategy' => 'customizer',
				'prefix' => $prefix
			];

			return $result;
		}

		if ($mode === 'disabled') {
			$result = false;
			return $result;
		}

		$result = [
			'strategy' => $post_options
		];
		return $result;
	}

	if (is_category() || is_tag()) {
		$taxonomy_options = blocksy_get_taxonomy_options();

		$mode = blocksy_akg('has_hero_section', $taxonomy_options, 'default');

		if ($mode === 'default') {
			if (
				get_theme_mod(
					'categories_has_page_title', 'yes'
				) === 'no'
				&&
				!$allow_even_if_disabled
			) {
				$result = false;
				return $result;
			}

			return [
				'strategy' => 'customizer',
				'prefix' => 'categories'
			];
		}

		if ($mode === 'disabled') {
			$result = false;
			return $result;
		}

		$result = [
			'strategy' => $taxonomy_options
		];
		return $result;
	}

	if (is_search()) {
		if (
			get_theme_mod('search_page_title_enabled', 'yes') === 'no'
			&&
			!$allow_even_if_disabled
		) {
			$result = false;
			return $result;
		}

		return [
			'strategy' => 'customizer',
			'prefix' => 'search'
		];
	}


	if (is_home() && is_front_page()) {
		if (
			get_theme_mod('blog_page_title_enabled', 'no') === 'no'
			&&
			!$allow_even_if_disabled
		) {
			$result = false;
			return $result;
		}

		$result = [
			'strategy' => 'customizer',
			'prefix' => 'blog'
		];

		return $result;
	}

	$result = false;
	return $result;
}

function blocksy_output_hero_section( $type = 'type-1', $is_cache_phase = false ) {
	$source = blocksy_get_page_title_source();

	if (is_customize_preview()) {
		if (blocksy_is_page_title_default()) {
			if (! $is_cache_phase) {
				blocksy_add_customizer_preview_cache(
					'<div class="ct-hero-section-cache" data-type="' . $type . '">' .
					blocksy_output_hero_section($type, true) . '</div>'
				);
			}
		} else {
			blocksy_add_customizer_preview_cache('<div data-hero-section-custom></div>');
		}
	}

	if (! $source) {
		if (! $is_cache_phase) {
			return '';
		}
	}

	$actual_type = blocksy_akg_or_customizer(
		'hero_section',
		blocksy_get_page_title_source(),
		'type-1'
	);

	if (
		function_exists('is_woocommerce')
		&&
		(
			is_product_category()
			||
			is_product_tag()
		)
	) {
		$actual_type = 'type-2';
	}

	if ( !$is_cache_phase && $type !== $actual_type ) {
		return '';
	}

	$title = '';
	$description = '';

	$post_id = null;

	$description_class = 'page-description';

	$description_class .= ' ' . blocksy_visibility_classes(
		blocksy_akg_or_customizer(
			'page_excerpt_visibility',
			blocksy_get_page_title_source(),
			[
				'desktop' => true,
				'tablet' => true,
				'mobile' => false,
			]
		)
	);

	if (is_home() && !is_front_page()) {
		$post_id = get_option('page_for_posts');
	}

	if (function_exists('is_shop') && is_shop()) {
		$post_id = get_option( 'woocommerce_shop_page_id' );
	}

	if (is_singular() || blocksy_is_page()) {
		if (! $post_id) {
			$post_id = get_the_ID();
		}

		if (! empty(get_the_title($post_id))) {
			$title = get_the_title($post_id);
		}

		if (has_excerpt($post_id)) {
			$description = blocksy_entry_excerpt(
				40,
				$description_class,
				$post_id
			);
		}
	} else {
		if (! is_search()) {
			if (! empty(get_the_archive_title())) {
				$title = get_the_archive_title();

				if (function_exists('is_shop') && is_shop()) {
					if (strpos($title, ':') !== false) {
						$title_pieces = explode(':', $title, 2);
						$title = $title_pieces[1];
					}
				}

				if (strpos($title, ':') !== false) {
					$title_pieces = explode(':', $title, 2);
					$title = '<span>' . $title_pieces[0] . '</span>' . $title_pieces[1];
				}
			}

			if (! empty(get_the_archive_description())) {
				$description = '<div class="' . $description_class . '">' . get_the_archive_description() . '</div>';
			}
		} else {
			$title = sprintf(
				// translators: %s is the number of results
				__( '<span>Search Results for</span> %s', 'blocksy' ),
				get_search_query()
			);

			if (! have_posts()) {
				// translators: %s are the opening and closing of the html tags
				$description = sprintf(
					__('%sSorry, but nothing matched your search terms. Please try again with some different keywords.%s', 'blocksy'),
					'<div class="' . $description_class . '">',
					'</div>'
				);
			}
		}

		if (!have_posts()) {
			$title = __('Nothing Found', 'blocksy');
		}
	}

	if (is_home() && is_front_page()) {
		$title = blocksy_akg_or_customizer(
			'custom_title',
			blocksy_get_page_title_source(),
			(
				function_exists('is_shop') && is_shop()
			) ? __('Products', 'blocksy') : __('Home', 'blocksy')
		);
	}

	if (is_home() && is_front_page()) {
		if (! empty(blocksy_akg_or_customizer(
			'custom_description',
			blocksy_get_page_title_source(),
			''
		))) {
			$description = '<div class="' . $description_class . '">' . blocksy_akg_or_customizer(
				'custom_description',
				blocksy_get_page_title_source(),
				(
					function_exists('is_shop') && is_shop()
				) ? __('This is where you can add new products to your store.', 'blocksy') : ''
			) . '</div>';
		}
	}

	if (! empty($title)) {
		$title = '<h1 class="page-title" ' . blocksy_schema_org_definitions('headline') . '>' . $title . '</h1>';
	}

	$is_page = blocksy_is_page();

	$single_meta_elements = null;

	if (is_singular()) {
		$single_meta_elements = [
			'author' => true,
			'date' => true,
			'updated' => true,
			'categories' => true,
			'comments' => true,
			'tags' => true
		];

		if (! $is_cache_phase) {
			$single_meta_elements = blocksy_akg_or_customizer(
				'single_meta_elements',
				blocksy_get_page_title_source(),
				[
					'author' => !$is_page,
					'date' => !$is_page,
					'categories' => !$is_page,
					'comments' => !$is_page,
					'updated' => false,
					'tags' => false,
				]
			);
		}

		if (! isset($single_meta_elements['updated'])) {
			$single_meta_elements['updated'] = false;
		}

		if (! isset($single_meta_elements['tags'])) {
			$single_meta_elements['tags'] = false;
		}
	}

	$date_format_source = blocksy_akg_or_customizer(
		'date_format_source',
		blocksy_get_page_title_source(),
		'custom'
	);

	$date_format = blocksy_akg_or_customizer(
		'single_meta_date_format',
		blocksy_get_page_title_source(),
		'M j, Y'
	);

	$has_meta_label = $is_cache_phase || blocksy_akg_or_customizer(
		'has_meta_label',
		blocksy_get_page_title_source(),
		'yes'
	) === 'yes';

	$has_meta_avatar = $is_cache_phase || blocksy_akg_or_customizer(
		'has_meta_avatar',
		blocksy_get_page_title_source(),
		'yes'
	) === 'yes';

	$alignment_output = 'data-alignment="' . esc_attr(blocksy_akg_or_customizer(
		$type === 'type-1' ?  'hero_alignment1' : 'hero_alignment2',
		blocksy_get_page_title_source(),
		$type === 'type-1' ? 'left' : 'center'
	)) . '"';

	if ( $type === 'type-1' ) {
		ob_start();

		?>

		<section class="hero-section" data-type="type-1" <?php echo wp_kses_post($alignment_output) ?>>
			<header class="entry-header">
				<?php
					echo $title;

					if ($single_meta_elements) {
						/**
						 * Note to code reviewers: This line doesn't need to be escaped.
						 * Function blocksy_post_meta() used here escapes the value properly.
						 * Mainly because the function outputs SVG.
						 */
						echo blocksy_post_meta(
							[
								'author' => $single_meta_elements['author'],
								'author_avatar' => $has_meta_avatar,
								'post_date' => $single_meta_elements['date'],
								'updated_date' => $single_meta_elements['updated'],
								'comments' => $single_meta_elements['comments'],
								'categories' => $single_meta_elements['categories'],
								'tags' => $single_meta_elements['tags'],
							],
							[
								'avatar_size' => '50',
								'date_format' => $date_format,
								'date_format_source' => $date_format_source,
								'labels' => $has_meta_label
							]
						);
					}

					/**
					 * Note to code reviewers: This line doesn't need to be escaped.
					 * Mainly because the $description variable comes from core
					 * fns that return escaped strings.
					 */
					echo $description;
				?>
			</header>
		</section>

		<?php

		return ob_get_clean();
	}

	if ( $type === 'type-2' ) {
		$attachment_id = false;

		$page_title_bg_type = blocksy_akg_or_customizer(
			'page_title_bg_type',
			blocksy_get_page_title_source(),
			'color'
		);

		if (
			blocksy_akg_or_customizer(
				'page_title_bg_type',
				blocksy_get_page_title_source(),
				'color'
			) !== 'color' || $is_cache_phase
		) {
			if (has_post_thumbnail()) {
				$attachment_id = get_post_thumbnail_id();
			}
		}

		if ($page_title_bg_type === 'custom_image' && !$is_cache_phase) {
			$custom_background_image = blocksy_akg_or_customizer(
				'custom_hero_background',
				blocksy_get_page_title_source(),
				[
					'attachment_id' => null
				]
			);

			if ($custom_background_image['attachment_id']) {
				$attachment_id = $custom_background_image['attachment_id'];
			}
		}

		$parallax_output = '';

		if (
			$page_title_bg_type === 'custom_image'
			||
			$page_title_bg_type === 'featured_image'
		) {
			$parallax_result = [];

			$parallax_value = blocksy_akg_or_customizer(
				'parallax',
				blocksy_get_page_title_source(),
				[
					'desktop' => false,
					'tablet' => false,
					'mobile' => false,
				]
			);

			if ($parallax_value['desktop']) {
				$parallax_result[] = 'desktop';
			}

			if ($parallax_value['tablet']) {
				$parallax_result[] = 'tablet';
			}

			if ($parallax_value['mobile']) {
				$parallax_result[] = 'mobile';
			}

			if (count($parallax_result) > 0) {
				$parallax_output = 'data-parallax="' . (
					implode(':', $parallax_result)
				) . '"';
			}
		}

		ob_start();

		?>

		<section class="hero-section" data-type="type-2" <?php echo wp_kses_post($parallax_output) ?> <?php echo wp_kses_post($alignment_output) ?>>
			<?php if ( $attachment_id ) { ?>
				<figure>
					<?php
						echo blocksy_image([
							'attachment_id' => $attachment_id,
							'ratio' => '16/9',
							'size' => 'full',
						]);
					?>
				</figure>
			<?php } ?>

			<div class="ct-container">
				<header class="entry-header">
					<?php
						if ($single_meta_elements) {
							/**
							 * Note to code reviewers: This line doesn't need to be escaped.
							 * Function blocksy_post_meta() used here escapes the value properly.
							 * Mainly because the function outputs SVG.
							 */
							echo blocksy_post_meta(
								[ 'categories' => $single_meta_elements['categories'] ],
								[
									'labels' => false,
								]
							);
						}

						echo $title;
						echo wp_kses_post($description);

						if ($single_meta_elements) {
							/**
							 * Note to code reviewers: This line doesn't need to be escaped.
							 * Function blocksy_post_meta() used here escapes the value properly.
							 * Mainly because the function outputs SVG.
							 */
							echo blocksy_post_meta(
								[
									'author' => $single_meta_elements['author'],
									'author_avatar' => true,
									'post_date' => $single_meta_elements['date'],
									'updated_date' => $single_meta_elements['updated'],
									'comments' => $single_meta_elements['comments'],
									'tags' => $single_meta_elements['tags'],
								],
								[
									'avatar_size' => '50',
									'date_format' => $date_format,
									'labels' => $has_meta_label
								]
							);
						}
					?>
				</header>
			</div>
		</section>

		<?php

		return ob_get_clean();
	}

	return '';
}

