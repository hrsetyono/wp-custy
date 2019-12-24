<?php

/**
 * Get the dynamic styles in array format
 */
function my_get_array_stylesheet() {
  $mods = wp_parse_args( get_theme_mods(), my_get_default_mods() );

  $styles = [
    ':root' => [
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

      // TYPOGRAPHY
      '--$' => $mods['rootTypography'],
      '--h$' => $mods['headingTypography'],
      '--button$' => $mods['buttons'],

      '--h1Size' => $mods['h1Size'],
      '--h2Size' => $mods['h2Size'],
      '--h3Size' => $mods['h3Size'],
      '--h4Size' => $mods['h4Size'],
      '--h5Size' => $mods['h5Size'],
      '--h6Size' => $mods['h6Size'],
    ],

    // COLOR
    '.entry-content' => [
      '--entryLinkColor' => $mods['contentLinksColor']['default']['color'],
      '--entryLinkColorHover' => $mods['contentLinksColor']['hover']['color'],
      '--entryLinkTextColor' => $mods['contentLinksColor']['text']['color'],
    ],

    '.entry-content blockquote' => [
      '--$' => $mods['blockquote'],
    ],
    
  ];

  return $styles;
}