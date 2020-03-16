<?php

/**
 * Values for default options
 * 
 * @filter custy_default_values
 */
function _custy_core_default_values( $defaults ) {
  $defaults = wp_parse_args( [

    // GENERAL > COLOR
    'colorPalette' => [
      'color1' => [ 'color' => '#1976d2' ],
      'color2' => [ 'color' => '#0d47a1' ],
      'color3' => [ 'color' => '#bbdefb' ],
      'color4' => [ 'color' => '#4caf50' ],
      'color5' => [ 'color' => '#c8e6c9' ],
    ],
    'textColor' => [
      'default' => [ 'color' => '#2c3e50' ],
      'dim'     => [ 'color' => '#90a4ae' ],
      'invert'  => [ 'color' => '#ffffff' ],
    ],
    'extraColor' => [
      'extra1' => [ 'color' => 'CT_CSS_SKIP_RULE' ],
      'extra2' => [ 'color' => 'CT_CSS_SKIP_RULE' ],
      'extra3' => [ 'color' => 'CT_CSS_SKIP_RULE' ],
      'extra4' => [ 'color' => 'CT_CSS_SKIP_RULE' ],
    ],
    
    'siteBackground' => blocksy_background_default_value( [
      'background_type' => 'color',
      'backgroundColor' => [
        'default' => [ 'color' => '#f8f9fb' ],
      ],
    ] ),

    // GENERAL > SHADOW

    'shadow0' => [
      'enable' => true,
      'h_offset' => 0,
      'v_offset' => 1,
      'blur' => 2,
      'spread' => 0,
      'inset' => false,
      'color' => [ 'color' => 'rgba(0, 0, 0, 0.24)' ],
    ], // 0 1px 2px rgba(0,0,0,0.24);
  
    'shadow1' => [
      'enable' => true,
      'h_offset' => 0,
      'v_offset' => 3,
      'blur' => 6,
      'spread' => 0,
      'inset' => false,
      'color' => [ 'color' => 'rgba(0, 0, 0, 0.23)' ],
    ], // 0 3px 6px rgba(0, 0, 0, 0.23)
  
    'shadow2' => [
      'enable' => true,
      'h_offset' => 0,
      'v_offset' => 6,
      'blur' => 6,
      'spread' => 0,
      'inset' => false,
      'color' => [ 'color' => 'rgba(0, 0, 0, 0.23)' ],
    ], // 0 6px 6px rgba(0,0,0,0.23)
  
    'shadow3' => [
      'enable' => true,
      'h_offset' => 0,
      'v_offset' => 10,
      'blur' => 10,
      'spread' => 0,
      'inset' => false,
      'color' => [ 'color' => 'rgba(0, 0, 0, 0.22)' ],
    ], // 0 10px 10px rgba(0,0,0,0.22)
  
    'shadow4' => [
      'enable' => true,
      'h_offset' => 0,
      'v_offset' => 15,
      'blur' => 12,
      'spread' => 0,
      'inset' => false,
      'color' => [ 'color' => 'rgba(0, 0, 0, 0.22)' ],
    ],// 0 15px 12px rgba(0,0,0,0.22)


    // GENERAL > OTHER

    'globalBorderRadius' => '4px',
    'globalTransition' => 'all .25s ease-in-out',

    'siteWidth' => '1120px',
    'blogWidth' => '650px',
    'mobile_breakpoint' => '480px',
    'tablet_breakpoint' => '767px',


    ///// TEXT

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
    'hugeFontSize' => '32px',

    'headingTypography' => blocksy_typography_default_values([
      'family' => 'System Default',
      'variation' => 'n7',
      'size' => '0',
      'line-height' => '1.25',
      'letter-spacing' => '0.05em',
    ] ),

    'h1Size' => [
      'desktop' => '46px',
      'tablet' => '40px',
      'mobile' => '32px',
    ],
    'h2Size' => [
      'desktop' => '36px',
      'tablet' => '30px',
      'mobile' => '26px',
    ],
    'h3Size' => [
      'desktop' => '30px',
      'tablet' => '26px',
      'mobile' => '22px',
    ],
    'h4Size' => [
      'desktop' => '26px',
      'tablet' => '22px',
      'mobile' => '20px',
    ],
    'h5Size' => [
      'desktop' => '20px',
      'tablet' => '20px',
      'mobile' => '18px',
    ],
    'h6Size' => [
      'desktop' => '18px',
      'tablet' => '18px',
      'mobile' => '16px',
    ],
    
  ], $defaults );

  return $defaults;
}