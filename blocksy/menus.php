<?php

add_filter(
	'nav_menu_item_title',
	function ( $item_output, $item, $depth, $args ) {
		$classes = empty( $item->classes ) ? array() : (array) $item->classes;
		$classes[] = 'menu-item-' . $item->ID;

		$class_names = join(' ', array_filter($classes));

		if ( strpos( $class_names, 'has-children' ) !== false ) {
			return $item_output . '<span class="child-indicator"><svg width="8" height="8" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg></span>';
		}

		return $item_output;
	},
	10,
	4
);

function blocksy_get_menus_items() {
	$menus = [];

	$all_menus = get_terms('nav_menu', ['hide_empty' => true]);

	if (is_array($all_menus) && count($all_menus)) {
		foreach($all_menus as $row) {
			$menus[$row->term_id] = $row->name;
		}
	}

	$result = [];

	foreach ($menus as $id => $menu){
		$result[$id] = $menu;
	}

	return $result;
}

function blocksy_get_default_menu() {
	if (count(array_keys(blocksy_get_menus_items())) === 0) {
		return null;
	}

    return array_keys(blocksy_get_menus_items())[0];
}
