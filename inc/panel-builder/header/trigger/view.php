<?php

$trigger_type = blocksy_default_akg('mobile_menu_trigger_type', $atts, 'type-1');

?>

<div
	class="ct-header-trigger"
	<?php echo blocksy_attr_to_html($attr) ?>>
	<a href="#offcanvas" class="mobile-menu-toggle">
		<span
			class="lines-button"
			data-type="<?php echo esc_attr($trigger_type) ?>">
		</span>
	</a>
</div>

