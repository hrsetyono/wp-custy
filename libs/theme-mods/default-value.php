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

  'contentLinkType' => 'type-2',
  
  'contentLinksColor' => [
    'default' => [ 'color' => 'var(--c4)', ],
    'hover' => [ 'color' => 'var(--c1)', ],
    'text' => [ 'color' => '#ffffff', ],
  ],
  
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

