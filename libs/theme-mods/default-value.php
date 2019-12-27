<?php
/**
 * Get default theme mods
 */
function my_get_default_mods() {
  global $default_mods;
  return $default_mods;
}

global $default_mods;
$default_mods = apply_filters( 'my_default_theme_mods', [
  // GENERAL
  'site_background' => blocksy_background_default_value([
    'backgroundColor' => [
      'default' => [ 'color' => '#f8f9fb' ],
    ],
  ]),
  'maxSiteWidth' => '1120px',
  'contentAreaSpacing' => [
    'desktop' => '4rem',
    'tablet' => '3rem',
    'mobile' => '2rem',
  ],
  'narrowContainerWidth' => '60%',
  'wideOffset' => '100px',

  // GENERAL > Back to Top
  'has_back_top' => 'yes',
  'top_button_type' => 'type-1',
  'top_button_shape' => 'square',
  'topButtonOffset' => '25px',
  'top_button_alignment' => 'right',
  'back_top_visibility' => [ 'desktop' => true, 'tablet' => true, 'mobile' => false ],

  'topButtonIconColor' => [
    'default' => [ 'color' => '#ffffff' ],
    'hover' => [ 'color' => '#ffffff' ],
  ],
  'topButtonShapeBackground' => [
    'default' => [ 'color' => 'var(--c4)' ],
    'hover' => [ 'color' => 'var(--c1)' ],
  ],
  'topButtonShadow' => 'var(--shadow1)',

  // GENERAL > Border Frame
  'has_passepartout' => 'no',
  'passepartoutSize' => [
    'mobile' => 0,
    'tablet' => '10px',
    'desktop' => '10px',
  ],
  'passepartoutColor' => [
    'default' => [ 'color' => 'var(--c1)' ],
  ],
  

  // COLOR
  'colorPalette' => [
    'color1' => [ 'color' => '#1976d2' ],
    'color2' => [ 'color' => '#0d47a1' ],
    'color3' => [ 'color' => '#bbdefb' ],
    'color4' => [ 'color' => '#2c3e50' ],
    'color5' => [ 'color' => '#ffffff' ],
  ],
  'fontColor' => [
    'default' => [ 'color' => 'var(--c4)' ],
    'hover' => [ 'color' => 'var(--c1)' ],
  ],
  'headingColor' => [
    'default' => [ 'color' => 'var(--c4)' ],
  ],
  'buttonTextColor' => [
    'default' => [ 'color' => '#ffffff', ],
    'hover' => [ 'color' => '#ffffff', ],
  ],
  'buttonColor' => [
    'default' => [ 'color' => 'var(--c1)', ],
    'hover' => [ 'color' => 'var(--c2)', ],
  ],

  'content_link_type' => 'type-2',
  'contentLinksColor' => [
    'default' => [ 'color' => 'var(--c4)', ],
    'hover' => [ 'color' => 'var(--c1)', ],
    'text' => [ 'color' => '#ffffff', ],
  ],

  // FORMS
  'forms_type' => 'classic-forms',
  'formTextColor' => [
    'default' => [ 'color' => 'CT_CSS_SKIP_RULE' ],
    'focus' => [ 'color' => 'CT_CSS_SKIP_RULE' ],
  ],
  'formFontSize' => '1rem',
  'formBorder' => [
    'width' => 2,
    'style' => 'solid',
    'color' => [ 'color' => 'rgba(232, 235, 240, 1)' ],
  ],
  'formBorderFocusColor' => [
    'focus' => [ 'color' => 'var(--c1)' ],
  ],
  'formBackgroundColor' => [
    'default' => [ 'color' => '#ffffff' ],
    'focus' => [ 'color' => '#ffffff' ],
  ],
  'formInputHeight' => '2.75rem',
  'formTextAreaHeight' => '8rem',

  'selectDropdownTextColor' => [
    'default' => [ 'color' => 'CT_CSS_SKIP_RULE' ],
    'hover' => [ 'color' => 'var(--c1)' ],
    'active' => [ 'color' => 'var(--c3)' ],
  ],
  'selectDropdownItemColor' => [
    'hover' => [ 'color' => 'rgba(0,0,0, 0.05)' ],
    'active' => [ 'color' => 'var(--c1)' ],
  ],
  'selectDropdownBackground' => [
    'default' => [ 'color' => '#ffffff' ],
  ],

  'radioCheckboxColor' => [
    'default' => [ 'color' => '#e8ebf0' ],
    'accent' => [ 'color' => 'var(--c1)' ],
  ],

  // SHADOW
  'shadow0' => blocksy_box_shadow_value([
    'enable' => true,
    'h_offset' => 0,
    'v_offset' => 1,
    'blur' => 2,
    'spread' => 0,
    'inset' => false,
    'color' => [ 'color' => 'rgba(0, 0, 0, 0.24)' ],
  ]), // 0 1px 2px rgba(0,0,0,0.24);

  'shadow1' => blocksy_box_shadow_value([
    'enable' => true,
    'h_offset' => 0,
    'v_offset' => 3,
    'blur' => 6,
    'spread' => 0,
    'inset' => false,
    'color' => [ 'color' => 'rgba(0, 0, 0, 0.23)' ],
  ]), // 0 3px 6px rgba(0, 0, 0, 0.23)

  'shadow2' => blocksy_box_shadow_value([
    'enable' => true,
    'h_offset' => 0,
    'v_offset' => 3,
    'blur' => 6,
    'spread' => 0,
    'inset' => false,
    'color' => [ 'color' => 'rgba(0, 0, 0, 0.23)' ],
  ]), // 0 6px 6px rgba(0,0,0,0.23)

  'shadow3' => blocksy_box_shadow_value([
    'enable' => true,
    'h_offset' => 0,
    'v_offset' => 10,
    'blur' => 10,
    'spread' => 0,
    'inset' => false,
    'color' => [ 'color' => 'rgba(0, 0, 0, 0.22)' ],
  ]), // 0 10px 10px rgba(0,0,0,0.22)

  'shadow4' => blocksy_box_shadow_value([
    'enable' => true,
    'h_offset' => 0,
    'v_offset' => 15,
    'blur' => 12,
    'spread' => 0,
    'inset' => false,
    'color' => [ 'color' => 'rgba(0, 0, 0, 0.22)' ],
  ]),// 0 15px 12px rgba(0,0,0,0.22)

  // TYPOGRAPHY
  'rootTypography' => blocksy_typography_default_values([
    'family' => 'System Default',
    'variation' => 'n4',

    'size' => '16px',
    'line-height' => '1.65',
    'letter-spacing' => '0em',
    'text-transform' => 'none',
    'text-decoration' => 'none',
  ]),

  'headingTypography' => blocksy_typography_default_values([
    'family' => 'System Default',
    'variation' => 'n7',
    'size' => '0',
    'line-height' => '1.25',
    'letter-spacing' => '0.05em',
  ] ),

  'h1Size' => [
    'mobile' => '32px',
    'tablet' => '40px',
    'desktop' => '46px',
  ],
  'h2Size' => [
    'mobile' => '26px',
    'tablet' => '30px',
    'desktop' => '36px',
  ],
  'h3Size' => [
    'mobile' => '22px',
    'tablet' => '26px',
    'desktop' => '30px',
  ],
  'h4Size' => [
    'mobile' => '20px',
    'tablet' => '22px',
    'desktop' => '26px',
  ],
  'h5Size' => [
    'mobile' => '18px',
    'tablet' => '20px',
    'desktop' => '20px',
  ],
  'h6Size' => [
    'mobile' => '16px',
    'tablet' => '18px',
    'desktop' => '18px',
  ],

  'buttons' => blocksy_typography_default_values([
    'size' => '18px',
    'line-height' => '1',
    'text-transform' => 'uppercase'
  ]),

  'blockquote' => blocksy_typography_default_values([
    'size' => '18px',
  ]),

  'pre' => blocksy_typography_default_values([
    'family' => 'monospace',
    'size' => '14px',
    'variation' => 'n4'
  ]),


] );

