<?php

$class = 'ct-footer-copyright';

$theme  = wp_get_theme();

$text = str_replace(
	'{current_year}',
	date("Y"),
	blocksy_default_akg(
		'copyright_text',
		$atts,
		__(
			'Copyright &copy; {current_year} {site_title} - Powered by {theme_author}',
			'blocksy'
		)
	)
);

$text = str_replace(
	'{site_title}',
	get_bloginfo('name'),
	$text
);

$text = str_replace(
	'{theme_author}',
	$theme->get('Author'),
	$text
);

?>

<div
	class="ct-footer-copyright"
	<?php echo blocksy_attr_to_html($attr) ?>>

	<?php echo $text ?>
</div>
