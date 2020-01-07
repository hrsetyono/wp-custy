<?php
/**
 * Typography options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$textUnits = [
	'px' => [ 'min' => 12, 'max' => 32, ],
	'rem' => [ 'min' => 0, 'max' => 2 ],
	'em' => [ 'min' => 0, 'max' => 2 ],
];

$headingUnits = [
	'px' => [ 'min' => 14, 'max' => 64, ],
	'rem' => [ 'min' => 0, 'max' => 4 ],
	'em' => [ 'min' => 0, 'max' => 4 ],
];

$tmf = new ThemeMods_Formatter_Admin();

$options = $tmf->format( 'typography_section_options', [
	
	blocksy_rand_md5() => [
		'title' => __( 'Body' ),
		'type' => 'tab',
		'options' => [

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
			],
	
			'smallFontSize' => [
				'label' => __( 'Small Font Size' ),
				'desc' => my_css_desc( [
					'--smallFontSize',
				] ),
				'type' => 'ct-slider',
				'units' => $textUnits,
			],
	
			'mediumFontSize' => [
				'label' => __( 'Medium Font Size' ),
				'desc' => my_css_desc( [
					'--mediumFontSize',
				] ),
				'type' => 'ct-slider',
				'responsive' => true,
				'units' => $textUnits,
			],
	
			'largeFontSize' => [
				'label' => __( 'Large Font Size' ),
				'desc' => my_css_desc( [
					'--largeFontSize',
				] ),
				'type' => 'ct-slider',
				'responsive' => true,
				'units' => $textUnits,
			],
	
			blocksy_rand_md5() => [
				'type' => 'ct-divider',
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
			],
	
			'blockquote' => [
				'type' => 'ct-typography',
				'desc' => my_css_desc( [],
					'Same vars as Root Typography, but applied to <code>.entry-content blockquote</code>'
				),
				'label' => __( 'Blockquote', 'blocksy' ),
			],
	
			'pre' => [
				'type' => 'ct-typography',
				'desc' => my_css_desc( [],
					'Same vars as Root Typography, but applied to <code>code, pre, samp</code>'
				),
				'label' => __( 'Preformatted', 'blocksy' ),
			],
		],
	],

	blocksy_rand_md5() => [
		'title' => __( 'Heading' ),
		'type' => 'tab',
		'options' => [

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
			],
	
			'h1Size' => [
				'label' => __( 'H1 Size' ),
				'desc' => my_css_desc( [
					'--h1Size',
				] ),
				'type' => 'ct-slider',
				'responsive' => true,
				'units' => $headingUnits,
			],
	
			'h2Size' => [
				'label' => __( 'H2 Size' ),
				'desc' => my_css_desc( [
					'--h2Size',
				] ),
				'type' => 'ct-slider',
				'responsive' => true,
				'units' => $headingUnits,
			],
	
			'h3Size' => [
				'label' => __( 'H3 Size' ),
				'desc' => my_css_desc( [
					'--h3Size',
				] ),
				'type' => 'ct-slider',
				'responsive' => true,
				'units' => $headingUnits,
			],
	
			'h4Size' => [
				'label' => __( 'H4 Size' ),
				'desc' => my_css_desc( [
					'--h4Size',
				] ),
				'type' => 'ct-slider',
				'responsive' => true,
				'units' => $headingUnits,
			],
	
			'h5Size' => [
				'label' => __( 'H5 Size' ),
				'desc' => my_css_desc( [
					'--h5Size',
				] ),
				'type' => 'ct-slider',
				'responsive' => true,
				'units' => $headingUnits,
			],
	
			'h6Size' => [
				'label' => __( 'H6 Size' ),
				'desc' => my_css_desc( [
					'--h6Size',
				] ),
				'type' => 'ct-slider',
				'responsive' => true,
				'units' => $headingUnits,
			],
		],
	],		

]);
