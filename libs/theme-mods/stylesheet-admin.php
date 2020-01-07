<?php

/**
 * Get the dynamic styles for admin in array format
 */
function my_get_admin_stylesheet() {
  $mods = wp_parse_args( get_theme_mods(), my_get_default_mods() );
  
  $styles = [
    ':root' => [
      '--main' => $mods['colorPalette']['color1']['color'],
      '--mainDark' => $mods['colorPalette']['color2']['color'],
      '--mainLight' => $mods['colorPalette']['color3']['color'],
      '--sub' => $mods['colorPalette']['color4']['color'],
      '--subLight' => $mods['colorPalette']['color5']['color'],
      '--text' => $mods['textColor']['default']['color'],
      '--textInvert' => $mods['textColor']['invert']['color'],

      '--buttonTextInitialColor' => $mods['buttonTextColor']['default']['color'],
      '--buttonTextHoverColor' => $mods['buttonTextColor']['hover']['color'],
      '--buttonInitialColor' => $mods['buttonColor']['default']['color'],
      '--buttonHoverColor' => $mods['buttonColor']['hover']['color'],
    ],
  ];

  return $styles;
}