<?php

add_action('wp_footer', function () {
	$b = new Blocksy_Customizer_Builder_Header();
	echo $b->output_footer_templates();
});

add_filter('get_site_icon_url', function ($url) {
	if (empty($url)) {
		return blocksy_image_picker_url('favicon.png');
	}

	return $url;
});

