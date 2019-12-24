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
			'desc' => "<details>
				<summary>CSS Vars</summary>
				<code>--fontSize</code>
				<code>--fontFamily</code>
				<code>--fontWeight</code>
				<code>--fontStyle</code>
				<code>--lineHeight</code>
				<code>--letterSpacing</code> <code>--textTransform</code>
				<code>--textDecoration</code>
			</details>",
			'label' => __( 'Root Typography', 'blocksy' ),
			'isDefault' => true,
			'value' => $defaults['rootTypography'],
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'headingTypography' => [
			'type' => 'ct-typography',
			'desc' => "<p>Applies to H1-H6. Leave size as 0.</p>
			<details>
				<summary>CSS Vars</summary>
				<code>--hFontFamily</code>
				<code>--hFontWeight</code>
				<code>--hFontStyle</code>
				<code>--hLineHeight</code>
				<code>--hLetterSpacing</code> <code>--hTextTransform</code>
				<code>--hTextDecoration</code>
			</details>
			",
			'label' => __( 'Heading Typography', 'blocksy' ),
			'isDefault' => true,
			'value' => $defaults['headingTypography'],
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h1Size' => [
			'label' => __( 'H1 Size' ),
			'desc' => '<code>--h1Size</code>',
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h1Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h2Size' => [
			'label' => __( 'H2 Size' ),
			'desc' => '<code>--h2Size</code>',
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h2Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h3Size' => [
			'label' => __( 'H3 Size' ),
			'desc' => '<code>--h3Size</code>',
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h3Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h4Size' => [
			'label' => __( 'H4 Size' ),
			'desc' => '<code>--h4Size</code>',
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h4Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h5Size' => [
			'label' => __( 'H5 Size' ),
			'desc' => '<code>--h5Size</code>',
			'type' => 'ct-slider',
			'responsive' => true,
			'value' => $defaults['h5Size'],
			'units' => $headingUnits,
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'h6Size' => [
			'label' => __( 'H6 Size' ),
			'desc' => '<code>--h6Size</code>',
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
			'desc' => "<details>
			  <summary>CSS Vars</summary>
				<code>--buttonFontFamily</code> <code>--buttonFontWeight</code> <code>--buttonFontStyle</code>
				<code>--buttonLineHeight</code> <code>--buttonLetterSpacing</code> <code>--buttonTextTransform</code>
				<code>--buttonTextDecoration</code>
			</details>",
			'label' => __( 'Buttons', 'blocksy' ),
			'value' => $defaults['buttons'],
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'blockquote' => [
			'type' => 'ct-typography',
			'label' => __( 'Blockquote', 'blocksy' ),
			'value' => $defaults['blockquote'],
			'setting' => [ 'transport' => 'postMessage' ],
		],

		'pre' => [
			'type' => 'ct-typography',
			'label' => __( 'Preformatted', 'blocksy' ),
			'value' => $defaults['pre'],
			'setting' => [ 'transport' => 'postMessage' ],
		],

		blocksy_rand_md5() => [
			'type' => 'ct-divider',
			'attr' => [ 'data-type' => 'small' ],
		],

		'font_subset' => [
			'label' => __( 'Google Fonts Subset', 'blocksy' ),
			'type' => 'ct-checkboxes',
			'attr' => [ 'data-columns' => 'no-gap' ],
			'allow_empty' => true,
			'choices' => blocksy_ordered_keys(
				[
					'latin-ext' => __( 'Latin Ext', 'blocksy' ),
					'vietnamese' => __( 'Vietnamese', 'blocksy' ),
					'cyrillic' => __( 'Cyrillic', 'blocksy' ),
					'cyrillic-ext' => __( 'Cyrillic Extended', 'blocksy' ),
					'greek' => __( 'Greek', 'blocksy' ),
					'greek-ext' => __( 'Greek Extended', 'blocksy' ),
				]
			),

			'value' => [
				'latin-ext' => false,
				'vietnamese' => false,
				'cyrillic' => false,
				'cyrillic-ext' => false,
				'greek' => false,
				'greek-ext' => false,
			],

			// 'setting' => [ 'transport' => 'postMessage' ],
		],


	],
] ];
