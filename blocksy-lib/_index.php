<?php

require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/classes/customizer-builder.php';
require_once __DIR__ . '/options-logic.php';
require_once __DIR__ . '/menus.php';
require_once __DIR__ . '/backgrounds.php';
require_once __DIR__ . '/typography.php';

/**
 * Customizer additions.
 */
require_once __DIR__ . '/customizer.php';

if ( is_admin() ) {
	require_once BLOCKSY_DIR . '/admin/init.php';
}