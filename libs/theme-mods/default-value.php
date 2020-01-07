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

  // OTHER > Back to Top
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
    'default' => [ 'color' => 'var(--text)' ],
    'hover' => [ 'color' => 'var(--textInvert)' ],
  ],
  'topButtonShadow' => 'var(--shadow1)',

  // OTHER > Performance
  'emoji_scripts' => 'no',
  'has_lazy_load' => 'yes',
  'lazy_load_type' => 'fade',


  // COLOR
  'colorPalette' => [
    'color1' => [ 'color' => '#1976d2' ],
    'color2' => [ 'color' => '#0d47a1' ],
    'color3' => [ 'color' => '#bbdefb' ],
    'color4' => [ 'color' => '#546e7a' ],
    'color5' => [ 'color' => '#cfd8dc' ],

    'current_palette' => 'palette-1',
    'palettes' => [ [
      'id' => 'palette-1',
      'color1' => [ 'color' => '#1976d2' ],
      'color2' => [	'color' => '#0d47a1' ],
      'color3' => [	'color' => '#bbdefb' ],
      'color4' => [	'color' => '#546e7a' ],
      'color5' => [	'color' => '#cfd8dc' ]
    ] ],
  ],
  'textColor' => [
    'default' => [ 'color' => '#2c3e50' ],
    'invert' => [ 'color' => '#ffffff' ],
  ],
  'headingColor' => [
    'default' => [ 'color' => 'var(--text)' ],
  ],
  'content_link_type' => 'type-2', // @deprecated
  'linkColor' => [
    'default' => [ 'color' => 'var(--text)', ],
    'hover' => [ 'color' => 'var(--main)', ],
  ],
  'buttonTextColor' => [
    'default' => [ 'color' => 'var(--textInvert)', ],
    'hover' => [ 'color' => 'var(--textInvert)', ],
  ],
  'buttonColor' => [
    'default' => [ 'color' => 'var(--main)', ],
    'hover' => [ 'color' => 'var(--mainDark)', ],
  ],
  

  // FORMS
  'forms_type' => 'classic-forms', // @deprecated
  'formTextColor' => [
    'default' => [ 'color' => 'var(--text)' ],
    'focus' => [ 'color' => 'var(--text)' ],
  ],
  'formFontSize' => '1rem',
  'formBorder' => [
    'width' => 2,
    'style' => 'solid',
    'color' => [ 'color' => 'rgba(232, 235, 240, 1)' ],
  ],
  'formBorderFocusColor' => [
    'focus' => [ 'color' => 'var(--main)' ],
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
    'v_offset' => 6,
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
  'smallFontSize' => '14px',
  'mediumFontSize' => '18px',
  'largeFontSize' => '22px',

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

  // SIDEBAR
  'sidebar_type' => 'type-1',
  'sidebarWidth' => '25%',
  'sidebarGap' => '3rem',
  'sidebarInnerSpacing' => [
    'mobile' => '0.5rem',
    'tablet' => '0.75rem',
    'desktop' => '1rem',
  ],
  'separated_widgets' => 'no',
  'has_sticky_sidebar' => 'no',
  'sidebarOffset' => '1rem',
  'sidebarBackgroundColor' => [
    'default' => [ 'color' => 'var(--textInvert)' ],
  ],
  'sidebarBorder' => [
    'width' => 1,
    'style' => 'solid',
    'color' => [ 'color' => 'rgba(224, 229, 235, 0.8)' ],
  ],
  'sidebarShadow' => 'none',
  'sidebar_visibility' => [
    'desktop' => true,
    'tablet' => true,
    'mobile' => false,
  ],
  // SIDEBAR > Content
  'sidebarTitleSize' => 'var(--h4Size)',
  'sidebarTitleColor' => [
    'default' => [ 'color' => 'var(--text)' ],
  ],
  'sidebarWidgetsSpacing' => [
    'mobile' => '1rem',
    'tablet' => '1.5rem',
    'desktop' => '2rem',
  ],
  'sidebarFontSize' => 'var(--smallFontSize)',
  'sidebarFontColor' => [
    'default' => [ 'color' => 'CT_CSS_SKIP_RULE' ],
    'hover' => [ 'color' => 'CT_CSS_SKIP_RULE' ],
  ],


  // BLOG POSTS
  'blogTitleSize' => 'var(--h1Size)',
  'blogTitleColor' => [
    'default' => [ 'color' => 'var(--text)' ]
  ],


] );

