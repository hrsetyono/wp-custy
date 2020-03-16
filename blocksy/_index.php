<?php

require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/classes/customizer-builder.php';
// require_once __DIR__ . '/i18n.php';
// require_once __DIR__ . '/global-scripts.php'; // TODO: refer to this for disabling emoji
// require_once __DIR__ . '/schema-org.php';
// require_once __DIR__ . '/classes/class-ct-css-injector.php'; // @suspect if error
// require_once __DIR__ . '/classes/class-ct-attributes-parser.php';
// require_once __DIR__ . '/excerpt.php';
// require_once __DIR__ . '/inline-svgs.php';

// require_once __DIR__ . '/css-helpers.php'; // @suspect if error
// require_once __DIR__ . '/box-shadow-option.php';
// require_once __DIR__ . '/pagination.php';
// require_once __DIR__ . '/sidebar.php';
// require_once __DIR__ . '/post-meta.php';
// require_once __DIR__ . '/images.php';
// require_once __DIR__ . '/single-helpers.php';
require_once __DIR__ . '/options-logic.php';
// require_once __DIR__ . '/comments.php';
// require_once __DIR__ . '/share-box.php';
require_once __DIR__ . '/menus.php';
// require_once __DIR__ . '/footer.php'; // TODO: refer to this for back-to-top
// require_once __DIR__ . '/visibility.php';
// require_once __DIR__ . '/social-icons.php'; // TODO: refer to this for social icon SVG
// require_once __DIR__ . '/header-helpers.php';
// require_once __DIR__ . '/elementor-integration.php';
// require_once __DIR__ . '/meta-boxes.php';
// require_once __DIR__ . '/hero-section.php';
// require_once __DIR__ . '/woocommerce-integration.php';
// require_once __DIR__ . '/posts-listing.php';
// require_once __DIR__ . '/gallery.php';
require_once __DIR__ . '/backgrounds.php';
require_once __DIR__ . '/typography.php';

// require_once blocksy_locate_theme_path('/template-parts/content-helpers.php');

/**
 * Customizer additions.
 */
require_once __DIR__ . '/customizer.php';

if ( is_admin() ) {
	require_once CUSTY_DIR . '/admin/init.php';
}

// if (!is_admin()) {
// 	add_filter('script_loader_tag', function ($tag, $handle) {
// 		$scripts = apply_filters('blocksy-async-scripts-handles', [
// 			'ct-scripts'
// 		]);

// 		if (in_array($handle, $scripts)) {
// 			return str_replace('<script ', '<script async ', $tag);
// 		}

// 		return $tag;

// 		// if the unique handle/name of the registered script has 'async' in it
// 		if (strpos($handle, 'async') !== false) {
// 			// return the tag with the async attribute
// 			return str_replace( '<script ', '<script async ', $tag );
// 		} else if (
// 			// if the unique handle/name of the registered script has 'defer' in it
// 			strpos($handle, 'defer') !== false
// 		) {
// 			// return the tag with the defer attribute
// 			return str_replace( '<script ', '<script defer ', $tag );
// 		} else {
// 			return $tag;
// 		}
// 	}, 10, 2);
// }

