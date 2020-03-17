<?php

if (! isset($location)) {
	$location = 'footer';
}

if (empty($class)) {
	$class = 'footer-menu';
}

$stretch_output = '';

if (blocksy_default_akg('stretch_menu', $atts, 'no') === 'yes') {
	$stretch_output = 'data-stretch';
}

$menu_args = [
	'container' => false,
	'menu_class' => 'menu',
	'depth' => 1,
	'fallback_cb' => 'blocksy_main_menu_fallback',
];

if (
	blocksy_default_akg('menu_source', $atts, 'menu') === 'menu'
	||
	!blocksy_has_i18n_plugin()
) {
	$menu_args['menu'] = blocksy_default_akg(
		'menu',
		$atts,
		blocksy_get_default_menu()
	);
}

if (blocksy_default_akg('menu_source', $atts, 'menu') === 'location') {
	if (blocksy_has_i18n_plugin()) {
		$menu_args['theme_location'] = $location;
	}
}

?>

<nav
	id="<?php echo esc_attr($class) ?>"
	class="<?php echo esc_attr($class) ?>"
	<?php echo blocksy_attr_to_html($attr) ?>
	<?php echo $stretch_output ?>
	<?php blocksy_schema_org_definitions_e('navigation') ?>>

	<?php wp_nav_menu($menu_args); ?>

</nav>
