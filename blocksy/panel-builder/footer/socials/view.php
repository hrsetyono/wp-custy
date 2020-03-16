<?php

$class = 'ct-footer-socials';

$socials_visibility = blocksy_default_akg('visibility', $atts, [
	'tablet' => true,
	'mobile' => true,
]);

$class .= ' ' . blocksy_visibility_classes($socials_visibility);

$socialsColor = blocksy_default_akg('footerSocialsColor', $atts, 'custom');
$socialsType = blocksy_default_akg('socialsType', $atts, 'simple');

if ($socialsType !== 'simple') {
	$socialsType .= '-' . blocksy_default_akg(
		'socialsFillType',
		$atts,
		'solid'
	);
}

$socials = blocksy_default_akg(
	'footer_socials',
	$atts,
	[
		[
			'id' => 'facebook',
			'enabled' => true,
		],

		[
			'id' => 'twitter',
			'enabled' => true,
		],

		[
			'id' => 'instagram',
			'enabled' => true,
		],
	]
);

?>

<div
	class="<?php echo esc_attr($class) ?>"
	<?php echo blocksy_attr_to_html($attr) ?>>

	<?php echo blocksy_social_icons($socials, [
		'type' => $socialsType,
		'icons-color' => $socialsColor
	]) ?>
</div>

