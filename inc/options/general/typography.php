<?php
$defaults = my_get_default_mods();

$headingUnits = [
	[ 'unit' => 'px', 'min' => 14, 'max' => 50, ],
	[	'unit' => 'rem', 'min' => 0, 'max' => 4 ],
	[	'unit' => 'em', 'min' => 0, 'max' => 4 ],
];

/**
 * Typography options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */
$options = [ 'typography_section_options' => [
	'type' => 'ct-options',
	'setting' => [ 'transport' => 'postMessage' ],
	'inner-options' => [
		'rootTypography' => [
			'type' => 'ct-typography',
			'desc' => my_css_desc( [
				'--fontSize',
				'--fontFamily',
				'--fontWeight',
				'--fontStyle',
				'--lineHeight',
				'--letterSpacing',
				'--textTransform',
				'--textDecoration'
			] ),
			'label' => __( 'Root Typography', 'blocksy' ),
			'isDefault' => true,
			'value' => $defaults['rootTypography'],
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'headingTypography' => [
			'type' => 'ct-typography',
			'desc' => "<p>Applies to H1-H6. Leave size as 0.</p>" . my_css_desc( [
				'--hFontFamily',
				'--hFontWeight',
				'--hFontWeight',
				'--hLineHeight',
				'--hLetterSpacing',
				'--hTextTransform',
				'--hTextDecoration'
			] ),
			'label' => __( 'Heading Typography', 'blocksy' ),
			'isDefault' => true,
			'value' => $defaults['headingTypography'],
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h1Size' => [
			'label' => __( 'H1 Size' ),
			'desc' => my_css_desc( [
				'--h1Size',
			] ),
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h1Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h2Size' => [
			'label' => __( 'H2 Size' ),
			'desc' => my_css_desc( [
				'--h2Size',
			] ),
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h2Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h3Size' => [
			'label' => __( 'H3 Size' ),
			'desc' => my_css_desc( [
				'--h3Size',
			] ),
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h3Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h4Size' => [
			'label' => __( 'H4 Size' ),
			'desc' => my_css_desc( [
				'--h4Size',
			] ),
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h4Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h5Size' => [
			'label' => __( 'H5 Size' ),
			'desc' => my_css_desc( [
				'--h5Size',
			] ),
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h5Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h6Size' => [
			'label' => __( 'H6 Size' ),
			'desc' => my_css_desc( [
				'--h6Size',
			] ),
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h6Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		blocksy_rand_md5() => [
			'type' => 'ct-divider',
			'attr' => [ 'data-type' => 'small' ],
		],

		'buttons' => [
			'type' => 'ct-typography',
			'desc' => my_css_desc( [
				'--buttonFontSize',
				'--buttonFontFamily',
				'--buttonFontWeight',
				'--buttonFontStyle',
				'--buttonLineHeight',
				'--buttonLetterSpacing',
				'--buttonTextTransform',
				'--buttonTextDecoration'
			] ),
			'label' => __( 'Buttons', 'blocksy' ),
			'value' => $defaults['buttons'],
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'blockquote' => [
			'type' => 'ct-typography',
			'desc' => my_css_desc( [],
				'Same vars as Root Typography, but applied to <code>.entry-content blockquote</code>'
			),
			'label' => __( 'Blockquote', 'blocksy' ),
			'value' => $defaults['blockquote'],
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'pre' => [
		  'type' => 'ct-typography',
			'desc' => my_css_desc( [],
			  'Same vars as Root Typography, but applied to <code>code, pre, samp</code>'
		  ),
			'label' => __( 'Preformatted', 'blocksy' ),
			'value' => $defaults['pre'],
			'setting' => [ 'transport' => 'postMessage' ],
		],
	],
] ];
