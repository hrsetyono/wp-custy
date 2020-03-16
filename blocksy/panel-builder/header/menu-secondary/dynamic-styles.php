<?php

blocksy_get_variables_from_file(
	BLOCKSY_DIR . '/panel-builder/header/menu/dynamic-styles.php',
	[],
	[
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'atts' => $atts,
		'selector' => '.header-menu-2'
	]
);
