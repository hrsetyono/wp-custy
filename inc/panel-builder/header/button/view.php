<?php

$class = 'ct-header-cta';

$type = blocksy_default_akg('header_button_type', $atts, 'type-1');
$size = blocksy_default_akg('header_button_size', $atts, 'medium');
$link = blocksy_default_akg('header_button_link', $atts, '');

$visibility = blocksy_default_akg('visibility', $atts, [
	'tablet' => true,
	'mobile' => true,
]);

$target_output = '';

if (blocksy_default_akg('header_button_target', $atts, 'no') === 'yes') {
	$target_output = 'target="_blank"';
}

$effect_output = '';

if (blocksy_default_akg('header_button_effect', $atts, 'no') === 'yes') {
	$effect_output = 'data-hover';
}


$class .= ' ' . blocksy_visibility_classes($visibility);

?>

<div
	class="<?php echo esc_attr($class) ?>"
	<?php echo blocksy_attr_to_html($attr) ?>>

	<a
		href="<?php echo esc_url($link) ?>"
		class="ct-button"
		data-type="<?php echo esc_attr($type) ?>"
		data-size="<?php echo esc_attr($size) ?>"
		<?php echo wp_kses_post($target_output) ?>
		<?php echo wp_kses_post($effect_output) ?>>
		<?php echo blocksy_default_akg('header_button_text', $atts, __('Download', 'blocksy')) ?>
	</a>
</div>
