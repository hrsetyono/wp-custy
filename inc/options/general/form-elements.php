<?php

/**
 * Forms options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$tmf = new ThemeMods_Formatter_Admin();

$options = $tmf->format( 'form_section_options', [
	
	blocksy_rand_md5() => [
		'type' => 'ct-title',
		'desc' => my_css_notice('CSS is applied to <code>form</code>'),
	],

	'formTextColor' => [
		'label' => __( 'Font Color' ),
		'desc' => my_css_desc( [
			'--formTextInitialColor',
			'--formTextFocusColor'
		]),
		'type'  => 'ct-color-picker',
		'pickers' => [
			'default' => __( 'Initial' ),
			'focus' => __( 'Focus' ),
		],
	],

	'formFontSize' => [
		'label' => __( 'Font Size' ),
		'desc' => my_css_desc( [
			'--formFontSize',
		]),
		'type' => 'ct-slider',
		'units' => [
			'px' => [ 'min' => '14', 'max' => '24' ],
			'rem' => [ 'min' => '0', 'max' => '2' ],
		],
	],

	blocksy_rand_md5() => [
		'type' => 'ct-title',
		'label' => __( 'Input' ),
	],

	'formBackgroundColor' => [
		'label' => __( 'Background Color' ),
		'desc' => my_css_desc( [
			'--formBackgroundInitialColor',
			'--formBackgroundFocusColor'
		]),
		'type'  => 'ct-color-picker',
		'pickers' => [
			'default' => __( 'Initial' ),
			'focus' => __( 'Focus' ),
		],
	],

	'formBorder' => [
		'label' => __( 'Border' ),
		'desc' => my_css_desc([
			'--formBorder',
		]),
		'type' => 'ct-border',
	],

	'formBorderFocusColor' => [
		'label' => __( 'Border Focus Color' ),
		'desc' => my_css_desc( [
			'--formBorderFocusColor'
		]),
		'type'  => 'ct-color-picker',
		'pickers' => [
			'focus' => __( 'Focus' ),
		],
	],

	blocksy_rand_md5() => [
		'type' => 'ct-title',
		'label' => __( 'Select Dropdown' ),
	],

	'selectDropdownTextColor' => [
		'label' => __( 'Dropdown Text Color' ),
		'desc' => my_css_desc( [
			'--selectDefaultColor',
			'--selectHoverColor',
			'--selectActiveColor'
		]),
		'type'  => 'ct-color-picker',
		'pickers' => [
			'default' => __( 'Initial' ),
			'hover' => __( 'Hover' ),
			'active' => __( 'Active' ),
		],
	],

	'selectDropdownItemColor' => [
		'label' => __( 'Dropdown Items Color' ),
		'desc' => my_css_desc( [
			'--selectItemHoverColor',
			'--selectItemActiveColor',
		]),
		'type'  => 'ct-color-picker',
		'pickers' => [
			'hover' => __( 'Hover' ),
			'active' => __( 'Active' ),
		],
	],

	'selectDropdownBackground' => [
		'label' => __( 'Dropdown background' ),
		'desc' => my_css_desc( [
			'--selectBackground',
		]),
		'type'  => 'ct-color-picker',
		'pickers' => [
			'default' => __( 'Initial' ),
		],
	],


	blocksy_rand_md5() => [
		'type' => 'ct-title',
		'label' => __( 'Radio & Checkbox' ),
	],

	'radioCheckboxColor' => [
		'label' => __( 'Color' ),
		'desc' => my_css_desc( [
			'--radioInitialColor',
			'--radioAccentColor'
		] ),
		'type'  => 'ct-color-picker',
		'pickers' => [
			'default' => __( 'Initial' ),
			'accent' => __( 'Accent' ),
		],
	],

] );
