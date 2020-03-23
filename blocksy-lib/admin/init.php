<?php
/**
 * Admin
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 */


if (is_admin() && defined('DOING_AJAX') && DOING_AJAX) {
	require_once BLOCKSY_DIR . '/admin/api.php';
}

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