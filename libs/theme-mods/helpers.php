<?php

/**
 * Output a toggle button to show list of CSS Variables.
 */
function my_css_desc( $vars, $extra_text = '' ) {
  $content = '<code>' . implode( '</code><code>', $vars ) . '</code>';
  $summary = 'CSS';
  
  return "<details>
    <summary>$summary</summary>
    $content
    $extra_text
  </details>";
}