<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Blocksy
 */

ob_start();

$sticky_output = '';

$type = get_theme_mod( 'sidebar_type', 'type-1' );

if ( get_theme_mod( 'has_sticky_sidebar', 'no' ) === 'yes' ) {
	$sticky_output = 'data-sticky';
}

$widgets_separated_output = '';

if (
	$type === 'type-2'
	&&
	get_theme_mod('separated_widgets', 'no') === 'yes'
) {
	$widgets_separated_output = 'data-widgets="separated"';
}

$class_output = '';

$sidebar_classes = blocksy_visibility_classes(get_theme_mod('sidebar_visibility', [
	'desktop' => true,
	'tablet' => false,
	'mobile' => false,
]));

if ( ! empty( trim( $sidebar_classes ) ) ) {
	$class_output = 'class="' . $sidebar_classes . '"';
}

?>

<aside
	<?php echo wp_kses_post($class_output); ?>
    data-type="<?php echo esc_attr($type) ?>"
	id="sidebar"
	<?php blocksy_schema_org_definitions_e('sidebar') ?>>

    <div
		class="ct-sidebar" <?php echo wp_kses_post($sticky_output); ?>
		<?php echo wp_kses_post($widgets_separated_output) ?>>
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</div>
</aside>

<?php

$content = ob_get_clean();

blocksy_add_customizer_preview_cache(
	function () use ($content) {
		return blocksy_html_tag(
			'div',
			[ 'data-id' => 'sidebar' ],
			$content
		);
	}
);

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}

if ( blocksy_sidebar_position() === 'none' ) {
	return;
}

/**
 * Note to code reviewers: This line doesn't need to be escaped.
 * The value used here escapes the value properly.
 * It's the actual WordPress sidebar content.
 */
echo $content;


