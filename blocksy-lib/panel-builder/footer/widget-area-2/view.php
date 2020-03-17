<?php

echo blocksy_render_view(
	BLOCKSY_DIR . '/panel-builder/footer/widget-area-1/view.php',
	[
		'atts' => $atts,
		'attr' => $attr,
		'class' => 'widget-area-2',
		'sidebar' => 'ct-footer-sidebar-2'
	]
);

