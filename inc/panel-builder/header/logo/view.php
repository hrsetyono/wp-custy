<?php

$custom_logo_id = false;

if (blocksy_default_akg('logo_type', $atts, 'image') !== 'text') {
	$custom_logo_id = blocksy_default_akg('custom_logo', $atts, '');

	if (
		$device === 'mobile'
		&&
		blocksy_default_akg('has_mobile_logo', $atts, 'yes') === 'yes'
	) {
		$mobile_logo_id = blocksy_akg('mobile_header_logo', $atts, []);

		if (! isset($mobile_logo_id['attachment_id'])) {
			$mobile_logo_id['attachment_id'] = null;
		}

		if ($mobile_logo_id['attachment_id']) {
			$custom_logo_id = $mobile_logo_id['attachment_id'];
		}
	}
}

if ($custom_logo_id) {
	$custom_logo_attr = [
		'class' => 'custom-logo',
		'itemprop' => 'logo',
	];

	/**
	 * If the logo alt attribute is empty, get the site title and explicitly
	 * pass it to the attributes used by wp_get_attachment_image().
	 */
	$image_alt = get_post_meta(
		$custom_logo_id,
		'_wp_attachment_image_alt',
		true
	);

	if (empty($image_alt)) {
		$custom_logo_attr['alt'] = get_bloginfo('name', 'display');
	}

	/**
	 * If the alt attribute is not empty, there's no need to explicitly pass
	 * it because wp_get_attachment_image() already adds the alt attribute.
	 */
	$logo_html = sprintf(
		'<a href="%1$s" class="custom-logo-link" rel="home" itemprop="url">%2$s</a>',
		esc_url( home_url( '/' ) ),
		wp_get_attachment_image(
			$custom_logo_id,
			'full',
			false,
			$custom_logo_attr
		)
	);
}

$tagline_class = 'site-description ' . blocksy_visibility_classes(
	blocksy_default_akg('tagline_visibility', $atts, [
		'tablet' => true,
		'mobile' => true,
	])
);

$tag = blocksy_default_akg('site_title_wrapper', $atts, 'h1');
$tagline_tag = blocksy_default_akg('site_description_wrapper', $atts, 'h2');

?>

<div
	class="site-branding"
	<?php echo blocksy_attr_to_html($attr) ?>
	<?php blocksy_schema_org_definitions_e('logo') ?>>

	<<?php echo $tag ?> class="site-title" <?php blocksy_schema_org_definitions_e('name') ?>>
		<?php if (! $custom_logo_id) { ?>
			<a href="<?php echo esc_url(home_url('/')); ?>" rel="home" <?php blocksy_schema_org_definitions_e('url')?>>
				<?php
					echo blocksy_default_akg(
						'blogname',
						$atts,
						get_bloginfo('name')
					);
				?>
			</a>
		<?php } else { ?>
			<?php echo wp_kses_post($logo_html); ?>
		<?php } ?>
	</<?php echo $tag ?>>

	<?php if (blocksy_default_akg('has_tagline', $atts, 'no') === 'yes') { ?>
		<<?php echo $tagline_tag ?> class="<?php echo $tagline_class ?>">
			<?php
				echo blocksy_default_akg(
					'blogdescription',
					$atts,
					get_bloginfo('description')
				);
			?>
		</<?php echo $tagline_tag ?>>
	<?php } ?>
</div>

