<?php

/**
 * Get the dynamic styles in array format
 */
function my_get_array_stylesheet() {
  $mods = wp_parse_args( get_theme_mods(), my_get_default_mods() );
  
  $styles = [
    ':root' => [
      // GENERAL
      '--maxSiteWidth' => $mods['maxSiteWidth'],
      '--contentAreaSpacing' => $mods['contentAreaSpacing'],
      '--narrowContainerWidth' => $mods['narrowContainerWidth'],
      '--narrowContainerWidthNoUnit' => intval( $mods['narrowContainerWidth'] ),
      '--wideOffset' => $mods['wideOffset'],

      // COLOR
      '--c1' => $mods['colorPalette']['color1']['color'],
      '--c2' => $mods['colorPalette']['color2']['color'],
      '--c3' => $mods['colorPalette']['color3']['color'],
      '--c4' => $mods['colorPalette']['color4']['color'],
      '--c5' => $mods['colorPalette']['color5']['color'],
      '--paletteColor1' => 'var(--c1)',
      '--paletteColor2' => 'var(--c2)',
      '--paletteColor3' => 'var(--c3)',
      '--paletteColor4' => 'var(--c4)',
      '--paletteColor5' => 'var(--c5)',

      '--color' => $mods['fontColor']['default']['color'],
      '--colorHover' => $mods['fontColor']['hover']['color'],
      '--headingColor' => $mods['headingColor']['default']['color'],

      '--buttonTextInitialColor' => $mods['buttonTextColor']['default']['color'],
      '--buttonTextHoverColor' => $mods['buttonTextColor']['hover']['color'],
      '--buttonInitialColor' => $mods['buttonColor']['default']['color'],
      '--buttonHoverColor' => $mods['buttonColor']['hover']['color'],

      // SHADOWS
      '--shadow0' => blocksy_compute_box_shadow_var_for( $mods['shadow0'] ),
      '--shadow1' => blocksy_compute_box_shadow_var_for( $mods['shadow1'] ),
      '--shadow2' => blocksy_compute_box_shadow_var_for( $mods['shadow2'] ),
      '--shadow3' => blocksy_compute_box_shadow_var_for( $mods['shadow3'] ),
      '--shadow4' => blocksy_compute_box_shadow_var_for( $mods['shadow4'] ),

      // TYPOGRAPHY
      '--$' => $mods['rootTypography'],
      '--smallFontSize' => $mods['smallFontSize'],
      '--mediumFontSize' => $mods['mediumFontSize'],
      '--largeFontSize' => $mods['largeFontSize'],
      
      '--h$' => $mods['headingTypography'],
      '--h1Size' => $mods['h1Size'],
      '--h2Size' => $mods['h2Size'],
      '--h3Size' => $mods['h3Size'],
      '--h4Size' => $mods['h4Size'],
      '--h5Size' => $mods['h5Size'],
      '--h6Size' => $mods['h6Size'],

      '--button$' => $mods['buttons'],
    ],

    // FORM
    'form' => [
      '--formTextInitialColor' => $mods['formTextColor']['default']['color'],
      '--formTextFocusColor' => $mods['formTextColor']['focus']['color'],
      '--formFontSize' => $mods['formFontSize'],
      '--formBackgroundInitialColor' => $mods['formBackgroundColor']['default']['color'],
      '--formBackgroundFocusColor' => $mods['formBackgroundColor']['focus']['color'],
      
      '--formInputHeight' => $mods['formInputHeight'],
      '--formTextAreaHeight' => $mods['formTextAreaHeight'],

      '--formBorder' => $mods['formBorder'],
      '--formBorderFocusColor' => $mods['formBorderFocusColor']['focus']['color'],

      '--selectDefaultColor' => $mods['selectDropdownTextColor']['default']['color'],
      '--selectHoverColor' => $mods['selectDropdownTextColor']['hover']['color'],
      '--selectActiveColor' => $mods['selectDropdownTextColor']['active']['color'],
      '--selectItemHoverColor' => $mods['selectDropdownItemColor']['hover']['color'],
      '--selectItemActiveColor' => $mods['selectDropdownItemColor']['active']['color'],
      '--selectBackground' => $mods['selectDropdownBackground']['default']['color'],

      '--radioInitialColor' => $mods['radioCheckboxColor']['default']['color'],
      '--radioAccentColor' => $mods['radioCheckboxColor']['accent']['color'],
    ],

    // COLOR > Link
    '.entry-content' => [
      '--entryLinkColor' => $mods['contentLinksColor']['default']['color'],
      '--entryLinkColorHover' => $mods['contentLinksColor']['hover']['color'],
      '--entryLinkTextColor' => $mods['contentLinksColor']['text']['color'],
    ],

    // TYPOGRAPHY > Blockquote
    '.entry-content blockquote, .ct-quote-widget blockquote p' => [
      '--$' => $mods['blockquote'],
    ],

    // TYPOGRAPHY > Preformatted
    'code, kbd, samp, pre' => [
      '--$' => $mods['pre'],
    ],

    // GENERAL > Back to Top
    '.ct-back-to-top' => [
      '--bottom' => $mods['topButtonOffset'],
      '--color' => $mods['topButtonIconColor']['default']['color'],
      '--colorHover' => $mods['topButtonIconColor']['hover']['color'],
      '--backgroundColor' => $mods['topButtonShapeBackground']['default']['color'],
      '--backgroundColorHover' => $mods['topButtonShapeBackground']['hover']['color'],
      '--boxShadow' => $mods['topButtonShadow'],
    ],
    // GENERAL > Viewport Frame
    '.ct-passepartout' => [
      '--passepartoutSize' => $mods['passepartoutSize'],
      '--passepartoutColor' => $mods['passepartoutColor']['default']['color'],
    ],

    // SIDEBAR
    '[data-sidebar]' => [
      '--sidebarWidth' => $mods['sidebarWidth'],
      '--sidebarWidthNoUnit' => intval( $mods['sidebarWidth'] ),
      '--sidebarGap' => $mods['sidebarGap'],
      
      '--sidebarOffset' => $mods['sidebarOffset'],
      '--sidebarInnerSpacing' => $mods['sidebarInnerSpacing'],
      '--sidebarBackgroundColor' => $mods['sidebarBackgroundColor']['default']['color'],
      '--sidebarBorder' => $mods['sidebarBorder'],
      '--sidebarShadow' => $mods['sidebarShadow'],
    ],

    '.ct-sidebar' => [
      '--sidebarWidgetsSpacing' => $mods['sidebarWidgetsSpacing'],

      '--sidebarTitleSize' => $mods['sidebarTitleSize'],
      '--sidebarTitleColor' => $mods['sidebarTitleColor']['default']['color'],

      '--fontSize' => $mods['sidebarFontSize'],
      '--color' => $mods['sidebarFontColor']['default']['color'],
      '--colorHover' => $mods['sidebarFontColor']['hover']['color'],
    ],
  ];

  return $styles;
}