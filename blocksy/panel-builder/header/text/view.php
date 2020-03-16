<?php

$class = 'ct-header-text';

$search_visibility = blocksy_default_akg('visibility', $atts, [
    'tablet' => true,
    'mobile' => true,
]);

$class .= ' ' . blocksy_visibility_classes($search_visibility);

?>

<div
	class="<?php echo esc_attr($class) ?>"
	<?php echo blocksy_attr_to_html($attr) ?>>
	<div class="entry-content">
		<?php echo do_shortcode(blocksy_default_akg('header_text', $atts, __('Sample text', 'blocksy'))) ?>
	</div>
</div>
