<?php
$defaults = my_get_default_mods();


/**
 * Forms options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$options = [ 'form_section_options' => [
		'label' => __( 'Form Elements', 'blocksy' ),
		'desc' => 'Asd',
		'type' => 'ct-options',
		'setting' => [ 'transport' => 'postMessage' ],
		'inner-options' => [

			blocksy_rand_md5() => [
				'type' => 'ct-title',
				'desc' => '<strong>Note:</strong> All Vars are applied to <code>form</code>',
			],

			'forms_type' => [
				'label' => false,
				'type' => 'ct-image-picker',
				'value' => $defaults['forms_type'],
				'attr' => [ 'data-type' => 'background' ],
				'setting' => [ 'transport' => 'postMessage' ],
				'switchDeviceOnChange' => 'desktop',
				'choices' => [
					'classic-forms' => [
						'src'   => blocksy_image_picker_url( 'forms-type-1.svg' ),
						'title' => __( 'Classic', 'blocksy' ),
					],
					'modern-forms' => [
						'src'   => blocksy_image_picker_url( 'forms-type-2.svg' ),
						'title' => __( 'Modern', 'blocksy' ),
					],

				],
			],

			'formTextColor' => [
				'label' => __( 'Font Color', 'blocksy' ),
				'desc' => my_css_desc( [
					'--formTextInitialColor',
					'--formTextFocusColor'
				]),
				'type'  => 'ct-color-picker',
				'skipEditPalette' => true,
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $defaults['formTextColor'],
				'pickers' => [
					[
						'title' => __( 'Initial', 'blocksy' ),
						'id' => 'default',
						'inherit' => 'var(--color)'
					],

					[
						'title' => __( 'Focus', 'blocksy' ),
						'id' => 'focus',
						'inherit' => 'var(--color)'
					],
				],
			],

			'formFontSize' => [
				'label' => __( 'Font Size', 'blocksy' ),
				'desc' => my_css_desc( [
					'--formFontSize',
				]),
				'type' => 'ct-slider',
				'value' => $defaults['formFontSize'],
				'units' => [
					[ 'unit' => 'px', 'min' => '14', 'max' => '24' ],
					[ 'unit' => 'rem', 'min' => '0', 'max' => '2' ],
				],
				'setting' => [ 'transport' => 'postMessage' ],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-title',
				'label' => __( 'Input & Textarea', 'blocksy' ),
			],

			'formBackgroundColor' => [
				'label' => __( 'Background Color', 'blocksy' ),
				'desc' => my_css_desc( [
					'--formBackgroundInitialColor',
					'--formBackgroundFocusColor'
				]),
				'type'  => 'ct-color-picker',
				'skipEditPalette' => true,
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $defaults['formBackgroundColor'],
				'pickers' => [
					[
						'title' => __( 'Initial', 'blocksy' ),
						'id' => 'default',
					],
					[
						'title' => __( 'Focus', 'blocksy' ),
						'id' => 'focus',
					],
				],
			],

			'formBorder' => [
				'label' => __( 'Border' ),
				'desc' => my_css_desc([
					'--formBorder',
				]),
				'design' => 'inline',
				'type' => 'ct-border',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $defaults['formBorder'],
			],

			'formBorderFocusColor' => [
				'label' => __( 'Border Focus Color', 'blocksy' ),
				'desc' => my_css_desc( [
					'--formBorderFocusColor'
				]),
				'type'  => 'ct-color-picker',
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $defaults['formBorderFocusColor'],
				'pickers' => [
					[
						'title' => __( 'Focus', 'blocksy' ),
						'id' => 'focus',
					],
				],
			],

			'formInputHeight' => [
				'label' => __( 'Input Height', 'blocksy' ),
				'desc' => my_css_desc( [
					'--formInputHeight',
				]),
				'type' => 'ct-slider',
				'value' => $defaults['formInputHeight'],
				'units' => [
					[ 'unit' => 'px', 'min' => 20, 'max' => 60 ],
					[ 'unit' => 'rem', 'min' => 1, 'max' => 4 ],
				],
				'setting' => [ 'transport' => 'postMessage' ],
			],

			'formTextAreaHeight' => [
				'label' => __( 'Textarea Height', 'blocksy' ),
				'desc' => my_css_desc( [
					'--formTextAreaHeight',
				]),
				'type' => 'ct-slider',
				'value' => $defaults['formTextAreaHeight'],
				'units' => [
					[ 'unit' => 'px', 'min' => 75, 'max' => 250 ],
					[ 'unit' => 'rem', 'min' => 4, 'max' => 15 ],
				],
				'setting' => [ 'transport' => 'postMessage' ],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-title',
				'label' => __( 'Select Box', 'blocksy' ),
			],

			'selectDropdownTextColor' => [
				'label' => __( 'Dropdown Text Color', 'blocksy' ),
				'desc' => my_css_desc( [
					'--selectDefaultColor',
					'--selectHoverColor',
					'--selectActiveColor'
				]),
				'type'  => 'ct-color-picker',
				'design' => 'inline',
				'skipEditPalette' => true,
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $defaults['selectDropdownTextColor'],
				'pickers' => [
					[
						'title' => __( 'Initial', 'blocksy' ),
						'id' => 'default',
						'inherit' => 'var(--color)'
					],
					[
						'title' => __( 'Hover', 'blocksy' ),
						'id' => 'hover',
						'inherit' => 'var(--color)'
					],
					[
						'title' => __( 'Active', 'blocksy' ),
						'id' => 'active',
					],
				],
			],

			'selectDropdownItemColor' => [
				'label' => __( 'Dropdown Items Color', 'blocksy' ),
				'desc' => my_css_desc( [
					'--selectItemHoverColor',
					'--selectItemActiveColor',
				]),
				'type'  => 'ct-color-picker',
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $defaults['selectDropdownItemColor'],
				'pickers' => [
					[
						'title' => __( 'Hover', 'blocksy' ),
						'id' => 'hover',
					],
					[
						'title' => __( 'Active', 'blocksy' ),
						'id' => 'active',
					],
				],
			],

			'selectDropdownBackground' => [
				'label' => __( 'Dropdown background', 'blocksy' ),
				'desc' => my_css_desc( [
					'--selectBackground',
				]),
				'type'  => 'ct-color-picker',
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $defaults['selectDropdownBackground'],
				'pickers' => [
					[
						'title' => __( 'Initial', 'blocksy' ),
						'id' => 'default',
					],
				],
			],


			blocksy_rand_md5() => [
				'type' => 'ct-title',
				'label' => __( 'Radio & Checkbox', 'blocksy' ),
			],

			'radioCheckboxColor' => [
				'label' => __( 'Colors', 'blocksy' ),
				'desc' => my_css_desc( [
					'--radioInitialColor',
					'--radioAccentColor'
				] ),
				'type'  => 'ct-color-picker',
				'design' => 'inline',
				'setting' => [ 'transport' => 'postMessage' ],
				'value' => $defaults['radioCheckboxColor'],
				'pickers' => [
					[
						'title' => __( 'Initial', 'blocksy' ),
						'id' => 'default',
					],
					[
						'title' => __( 'Active', 'blocksy' ),
						'id' => 'accent',
					],
				],
			],
		]
	]


];
