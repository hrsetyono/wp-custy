<?php
$defaults = my_get_default_mods();

/**
 * Wrapper options
 */

$tmf = new ThemeMods_Formatter_Admin();

$options = $tmf->format( 'wrapper_section_options',	[
	'site_background' => [
		'label' => __( 'Site Background', 'blocksy' ),
		'desc' => my_css_desc([
			'--siteBackgroundColor',
			'--siteBackground'
		]),
		'type' => 'ct-background',
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	'maxSiteWidth' => [
		'label' => __( 'Maximum Site Width' ),
		'desc' => my_css_desc( [
			'--maxSiteWidth'
		] ),
		'type' => 'ct-slider',
		'units' => [
			'px' => [ 'min' => 960, 'max' => 1600 ],
		],
	],

	'contentAreaSpacing' => [
		'label' => __( 'Content Area Spacing', 'blocksy' ),
		'desc' => '<p>Main content area top and bottom spacing.</p>' . 
			my_css_desc( [
				'--contentAreaSpacing'
			] ),
		'type' => 'ct-slider',
		'units' => [
			'px' => [ 'min' => 0, 'max' => 100 ],
			'rem' => [ 'min' => 0, 'max' => 6 ],
		],
		'responsive' => true,
		'divider' => 'top',
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	// TODO deprecated?
	'narrowContainerWidth' => [
		'label' => __( 'Narrow Container Width', 'blocksy' ),
		'desc' => '<p>This option will apply only on single posts & pages that have a Narrow Width page structure.</p>' . 
			my_css_desc( [
				'--narrowContainerWidth',
				'--narrowContainerWidthNoUnit'
			] ),
		'type' => 'ct-slider',
		'units' => [
			'%' => [ 'min' => 40, 'max' => 95 ],
		],
	],

	'wideOffset' => [
		'label' => __( 'Wide Alignment Offset', 'blocksy' ),
		'desc' => '<p>This option will apply only to those elements that have a wide alignment option.</p>' .
			my_css_desc( [
				'--wideOffset'
			] ),
		'type' => 'ct-slider',
		'units' => [
			'px' => [ 'min' => 50, 'max' => 200 ],
		],
		'divider' => 'top',
	],
]);