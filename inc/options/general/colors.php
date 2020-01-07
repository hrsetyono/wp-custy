<?php
/**
 * Colors options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$tmf = new ThemeMods_Formatter_Admin();

$options = $tmf->format( 'colors_section_options', [
	'colorPalette' => [
		'label' => __( 'COLOR PALETTE' ),
		'type'  => 'ct-color-palettes-picker',
	],

	'textColor' => [
		'label' => __( 'Text Color' ),
		'desc' => my_css_desc( [
			'--main',
			'--mainDark',
			'--mainLight',
			'--sub',
			'--subLight',
			'--text',
			'--textInvert'
		] ),
		'type'  => 'ct-color-picker',
		'design' => 'inline no-palette',
		'pickers' => [
			'default' => __( 'Text' ),
			'invert' => __( 'Text Invert' ),
		],
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	'headingColor' => [
		'label' => __( 'Heading Color' ),
		'desc' => my_css_desc( [
			'--headingColor',
		] ),
		'type'  => 'ct-color-picker',
		'pickers' => [
			'default' => __( 'Initial' )
		],
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	'linkColor' => [
		'label' => __( 'Link Color' ),
		'desc' => 'Affect only the links that are inside the posts & pages content area.' . my_css_desc( [
			'--linkColor',
			'--linkColorHover'
		] ),
		'type'  => 'ct-color-picker',
		'pickers' => [
			'default' => __( 'Initial' ),
			'hover' => __( 'Hover' ),
		],
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	'buttonColor' => [
		'label' => __( 'Button Color' ),
		'desc' => my_css_desc( [
			'--buttonInitialColor',
			'--buttonHoverColor'
		] ),
		'type'  => 'ct-color-picker',
		'pickers' => [
			'default' => __( 'Initial' ),
			'hover' => __( 'Hover' ),
		],
	],

	'buttonTextColor' => [
		'label' => __( 'Button Text Color' ),
		'desc' => my_css_desc( [
			'--buttonTextInitialColor',
			'--buttonTextHoverColor'
		] ),
		'type'  => 'ct-color-picker',
		'pickers' => [
		  'default' => __( 'Initial' ),
			'hover' => __( 'Hover' ),	
		],
	],		
] );
