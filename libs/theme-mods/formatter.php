<?php
/**
 * Format the value of theme mods before outputted
 */
class ThemeMods_Formatter {
  public $css;
  public $tablet_css;
  public $mobile_css;

  function __construct( $css) {
    $this->css = $css;
    $this->format();
  }

  /**
   * Format the raw theme mods value
   */
  function format() {
    foreach( $this->css as $selector => &$styles ) {
    foreach( $styles as $prop => &$value ) {

      // TYPOGRAPHY
      if( isset( $value['family'] ) ) {
        $typo_styles = $this->_format_typography( $value, $prop );

        // set responsive size
        foreach( $typo_styles as $p => &$v ) {
          if( isset( $v['desktop'] ) ) {
            $this->_set_responsive_size( $selector, $p, $v );
            $v = $v['desktop'];
          }
        }
        // replace the old styles
        $this->array_splice_assoc( $styles, $prop, 1, $typo_styles );
      }

      // BORDER
      elseif( isset( $value['style'] ) && isset( $value['width'] ) ) {
        $value = $this->_format_border( $value );
      }

      // SLIDER
      elseif( isset( $value['desktop'] ) ) {
        $this->_set_responsive_size( $selector, $prop, $value );
        $value = $value['desktop'];
      }

      // BACKGROUND
      elseif( isset( $value['background_type'] ) ) {
        $bg_styles = $this->_format_background( $value, $prop );
        $this->array_splice_assoc( $styles, $prop, 1, $bg_styles );
      }

    }
    }
  }

  /**
   * Echo the theme mods
   */
  function render() {
    $context = [
      'desktop_css' => $this->css,
      'tablet_css' => $this->tablet_css,
      'mobile_css' => $this->mobile_css
    ];
	  Timber::render( 'partials/theme-mods.twig', $context );
  }


  //

  /**
   * Format CT Typography type
   * 
   * @param $value (array) - The theme_mod value
   * @param $prefix (string) - The CSS Var prefix. $ sign will be replaced
   */
  private function _format_typography( $value, $prefix = '--$' ) {
    $m = $value;

    $m['size'] = $this->_format_sizes( $m['size'] );
    $m['line-height'] = $this->_format_sizes( $m['line-height'], 'var(--lineHeight)' );
    $m['letter-spacing'] = $this->_format_sizes( $m['letter-spacing'], 'var(--letterSpacing)' );

    // Font family
    switch( $m['family'] ) {
      case 'Default':
        $m['family'] = 'var(--fontFamily)';
        break;
      case 'System Default':
        $m['family'] = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
        break;
      case 'Serif':
        $m['family'] = '"Apple Garamond", "Baskerville", "Times New Roman", "Droid Serif", "Times","Source Serif Pro", serif;';
        break;
      case 'Monospace':
        $m['family'] = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;';
        break;
      default:
        $m['family'] = $m['family'] . ', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    }
    
    // Font style & weight
    if( $m['variation'] === 'Default' ) {
      $m['variation'] = [
        'style' => 'var(--fontStyle)',
        'weight' => 'var(--fontWeight)',
      ];
    }
    else {
      preg_match( "#(n|i)(\d+?)$#", $m['variation'], $variation );
      $m['variation'] = [
        'style' => $variation[1] === 'i' ? 'italic' : 'normal',
        'weight' => (int) $variation[2] . '00',
      ];
    }

    // Text decoration
    if( $m['text-decoration'] === 'CT_CSS_SKIP_RULE' ) {
      $m['text-decoration'] = 'var(--textDecoration)';
    }

    // Text transform
    if( $m['text-transform'] === 'CT_CSS_SKIP_RULE' ) {
      $m['text-transform'] = 'var(--textTransform)';
    }

    // Format CSS
    $styles = [
      'fontSize' => $m['size'],
      'fontFamily' => $m['family'],
      'fontStyle' => $m['variation']['style'],
      'fontWeight' => $m['variation']['weight'],
      'lineHeight' => $m['line-height'],
      'letterSpacing' => $m['letter-spacing'],
      'textDecoration' => $m['text-decoration'],
      'textTransform' => $m['text-transform'],
    ];

    // Add prefix
    $styles = $this->_prefix_styles( $styles, $prefix );
    return $styles;
  }


  /**
   * Format CT Border type
   */
  private function _format_border( $value ) {
    if( $value['style'] === 'none' ) {
      return 'none';
    }
    else {
      $width = $value['width'] . 'px';
      $style = $value['style'];
      $color = $value['color']['color'];
      
      return "$width $style $color";
    }
  }
  
  /**
   * Format mod that has desktop / tablet / mobile
   */
  private function _format_sizes( $value, $default = 'var(--fontSize)' ) {
    // set default value if empty
    if( $value === 'CT_CSS_SKIP_RULE' ) {
      $value = $default;
    }
    // if responsive, return desktop
    elseif( isset( $value['desktop'] ) ) {
      if( $value['desktop'] === 'CT_CSS_SKIP_RULE' ) {
        $value = $default;
      }

      if( $value['tablet'] === 'CT_CSS_SKIP_RULE' ) {
        unset( $value['tablet'] );
      }

      if( $value['mobile'] === 'CT_CSS_SKIP_RULE' ) {
        unset( $value['mobile'] );
      }
    }

    return $value;
  }

  /**
   * Format CT Background type
   */
  private function _format_background( $value, $prefix = '--$' ) {
    $styles = [];
    $background_color = $value['backgroundColor']['default']['color'];
    $styles['backgroundColor'] = $background_color;

    switch( $value['background_type'] ) {
      case 'color':
        $styles['background'] = $background_color;
        break;

      
      case 'pattern':
        $image_src = blocksy_get_svg_pattern(
          $value['background_pattern'],
          $value['patternColor']['default']['color']
        );
        $image_url = 'url("' . $image_src . '")';

        $styles['background'] = "$background_color $image_url";
        break;


      case 'image':
        $image_src = wp_get_attachment_url( $value['background_image']['attachment_id'] );
        $image_url = 'url("' . $image_src . '")';

        $x = ( $value['background_image']['x'] * 100 ) . '%';
        $y = ( $value['background_image']['y'] * 100 ) . '%';
        $position = "$x/$y";
        $repeat = $value['background_repeat'];
        $attachment = $value['background_attachment'];
        $size = $value['background_size'];

        $styles['backgroundSize'] = $size;
        $styles['background'] = "$background_color $image_url $position $repeat $attachment";
        break;
    }

    $styles = $this->_prefix_styles( $styles, $prefix );
    return $styles;
  }

  /////

  /**
   * Prefix the styles, capitalize first letter if necessary
   */
  private function _prefix_styles( $styles, $prefix = '--$' ) {
  
    $prefix = str_replace( '$', '', $prefix );
    $prefixed_styles = [];
    
    foreach( $styles as $prop => $value ) {
      // if basic prefix
      if( $prefix === '--' ) {
        // if empty style, don't include it
        if( is_string( $value) && strpos( $value, 'var(--' ) !== false ) {
          continue;
        }
      } else {
        $prop = ucfirst( $prop );
      }

      $prefixed_styles[ "{$prefix}{$prop}" ] = $value;
    }

    return $prefixed_styles;
  }

  /**
   * Populate the CSS for tablet and mobile
   */
  private function _set_responsive_size( $selector, $prop, $value ) {
    // set tablet css
    if( isset( $value['tablet'] ) ) {
      if( !isset( $this->tablet_css[ $selector ] ) ) {
        $this->tablet_css[ $selector ] = [];
      }

      $this->tablet_css[ $selector ][ $prop ] = $value['tablet'];
    }

    // set mobile css
    if( isset( $value['mobile'] ) ) {
      if( !isset( $this->mobile_css[ $selector ] ) ) {
        $this->mobile_css[ $selector ] = [];
      }

      $this->mobile_css[ $selector ][ $prop ] = $value['mobile'];
    }
  }

  //// HELPER

  /**
   * Array splice for associative array
   */
  private function array_splice_assoc(&$input, $offset, $length, $replacement) {
    $replacement = (array) $replacement;
    $key_indices = array_flip(array_keys($input));
    if (isset($input[$offset]) && is_string($offset)) {
      $offset = $key_indices[$offset];
    }
    if (isset($input[$length]) && is_string($length)) {
      $length = $key_indices[$length] - $offset;
    }

    $input = array_slice($input, 0, $offset, TRUE)
            + $replacement
            + array_slice($input, $offset + $length, NULL, TRUE);
  }
}




