<?php
/**
 * Admin
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 */

// require_once get_template_directory() . '/admin/dashboard/plugins/ct-plugin-manager.php';

if (is_admin() && defined('DOING_AJAX') && DOING_AJAX) {
	require_once get_template_directory() . '/admin/dashboard/api.php';
	// require_once get_template_directory() . '/admin/dashboard/plugins/ct-plugin-manager.php';
	require_once get_template_directory() . '/admin/dashboard/plugins/plugins-api.php';
}

require get_template_directory() . '/admin/dashboard/core.php';

function blocksy_get_jed_locale_data( $domain ) {
	$translations = get_translations_for_domain( $domain );

	$locale = [
		'' => [
			'domain' => $domain,
			'lang' => is_admin() ? get_user_locale() : get_locale(),
		],
	];

	if (! empty($translations->headers['Plural-Forms'])) {
		$locale['']['plural_forms'] = $translations->headers['Plural-Forms'];
	}

	foreach ( $translations->entries as $msgid => $entry ) {
		$locale[ $msgid ] = $entry->translations;
	}

	return $locale;
}