<?php

echo blocksy_render_view(
	BLOCKSY_DIR . '/panel-builder/header/menu/view.php',
	[
		'atts' => $atts,
		'attr' => $attr,
		'device' => $device,
		'class' => 'header-menu-2',
		'location' => 'menu_2'
	]
);

