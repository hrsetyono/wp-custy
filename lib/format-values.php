<?php
/**
 * Format the value of theme mods before outputted as CSS
 */
class Custy_Values {
  // for css
  public $desktop_css = [];
  public $tablet_css = [];
  public $mobile_css = [];

  function __construct() {
  }

  /**
   * Format the raw theme mods value for use as CSS
   */
  function format_for_css( $styles ) {
    foreach( $styles as $selector => &$vars ):
    foreach( $vars as $prop => &$value ):

      $value = $this->format( $value );

      // TYPOGRAPHY
      if( isset( $value['fontFamily'] ) ) {
        
        $value = $this->_prefix_styles( $value, $prop );

        foreach( $value as $p => &$v ) {
          if( isset( $v['desktop'] ) ) {
            $v = $this->_set_responsive_style( $selector, $p, $v );
          }
        }

        $this->array_splice_assoc( $vars, $prop, 1, $value );
      }
      // BACKGROUND
      elseif( isset( $value['background'] ) ) {
        $value = $this->_prefix_styles( $value, $prop );
        $this->array_splice_assoc( $vars, $prop, 1, $value );
      }
      // IF PALETTE
      elseif( in_array( $prop, [
        '--main', '--mainDark', '--mainLight', '--sub', '--subLight',
        '--text', '--textDim', '--textInvert',
        '--extra1', '--extra2', '--extra3', '--extra4'
      ] ) ) {

        $value_rgb = '';

        // if value is Hex color, convert to RGB
        if( $value[0] == '#' ) {
          list($r, $g, $b) = array_map( function( $c ) {
            return hexdec( str_pad( $c, 2, $c ) );
          }, str_split( ltrim( $value, '#' ), strlen( $value ) > 4 ? 2 : 1) );

          $value_rgb = "$r, $g, $b";
        }

        // if value is RGB color, get only the number
        if( substr( $value, 0, 3) == 'rgb' ) {
          preg_match( '/\d+,\s?\d+,\s?\d+/', $value, $matches );
          $value_rgb = $matches[0];
        }

        $vars[ $prop . 'RGB' ] = $value_rgb;
      }

      // SLIDER or SPACING
      if( isset( $value['desktop'] ) ) {
        $value = $this->_set_responsive_style( $selector, $prop, $value );
      }

    endforeach;
    endforeach;
    
    return [
      'desktop_css' => $styles,
      'tablet_css' => $this->tablet_css,
      'mobile_css' => $this->mobile_css,
    ];
  }

  
  /**
   * 
   */
  function format_for_builder() {

  }


  /**
   * Format a raw theme_mod value
   */
  function format( $value ) {
    // TYPOGRAPHY
    if( isset( $value['family'] ) ) {
      $value = $this->_format_typography( $value );
    }

    // SPACING
    elseif( isset($value['top']) || isset($value['desktop']['top']) ) {
      $value = $this->_format_spacing( $value );
    }

    // BORDER
    elseif( isset( $value['style'] ) && isset( $value['width'] ) ) {
      $value = $this->_format_border( $value );
    }

    // BACKGROUND
    elseif( isset( $value['background_type'] ) ) {
      $value = $this->_format_background( $value );
    }

    // BOX SHADOW
    elseif( isset( $value['inset'] ) ) {
      $value = $this->_format_box_shadow( $value );
    }

    return $value;
  }


  //

  /**
   * Format CT Typography type
   * 
   * @param $value (array) - The theme_mod value
   * @param $prefix (string) - The CSS Var prefix. $ sign will be replaced
   */
  private function _format_typography( $value ) {
    $m = $value;

    // Font Size
    if( $m['size'] === 'CT_CSS_SKIP_RULE' ) {  // if default value
      $m['size'] = 'var(--fontSize)';
    }
    elseif( isset( $m['size']['desktop'] ) ) {  // if responsive
      if( $m['size']['desktop'] === 'CT_CSS_SKIP_RULE' ) {
        $m['size'] = 'var(--fontSize)';
      }

      if( $m['size']['tablet'] === 'CT_CSS_SKIP_RULE' ) {
        unset( $m['size']['tablet'] );
      }

      if( $m['size']['mobile'] === 'CT_CSS_SKIP_RULE' ) {
        unset( $m['size']['mobile'] );
      }
    }

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

    // Line Height
    $m['line-height'] = $m['line-height'] === 'CT_CSS_SKIP_RULE' ? 'var(--lineHeight)' : $m['line-height'];
    // Letter Spacing
    $m['letter-spacing'] = $m['letter-spacing'] === 'CT_CSS_SKIP_RULE' ? 'var(--letterSpacing)' : $m['letter-spacing'];
    // Text transform
    $m['text-transform'] = $m['text-transform'] === 'CT_CSS_SKIP_RULE' ? 'var(--textTransform)' : $m['text-transform'];
    //  Text Decoration
    $m['text-decoration'] = $m['text-decoration'] === 'CT_CSS_SKIP_RULE' ? 'var(--textDecoration)' : $m['text-decoration'];    


    return [
      'fontSize' => $m['size'],
      'fontFamily' => $m['family'],
      'fontStyle' => $m['variation']['style'],
      'fontWeight' => $m['variation']['weight'],
      'lineHeight' => $m['line-height'],
      'letterSpacing' => $m['letter-spacing'],
      'textDecoration' => $m['text-decoration'],
      'textTransform' => $m['text-transform'],
    ];
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
   * 
   */
  private function _format_spacing( $value ) {
    // if responsive
    if( isset( $value['desktop'] ) ) {
      return [
        'desktop' => $this->_format_spacing( $value['desktop'] ),
        'tablet' => $this->_format_spacing( $value['tablet'] ),
        'mobile' => $this->_format_spacing( $value['mobile'] ),
      ];
    }

    // replace 'auto' with 0
    foreach( $value as &$v ) {
      if( $v === 'auto' ) {
        $v = 0;
      }
    }

    return $value['top'] . ' ' . $value['right'] . ' ' . $value['bottom'] . ' ' . $value['left'];
  }


  /**
   * Format CT Background type
   */
  private function _format_background( $value ) {
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

    return $styles;
  }


  /**
   * Format ct-box-shadow type
   */
  private function _format_box_shadow( $value ) {
    if( !$value['enable'] ) { return 'none'; }

    $shadow = [
      $value['h_offset'] . 'px',
      $value['v_offset'] . 'px',
      $value['blur'] . 'px',
      $value['spread'] . 'px',
      $value['color']['color'],
    ];

    if( $value['inset'] ) {
      array_unshift( $shadow, 'inset' );
    }
    
    return implode( ' ', $shadow );
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
   * Move the tablet & mobile css to the class value, returning only the desktop size
   * 
   * @return mixed - The desktop value
   */
  private function _set_responsive_style( $selector, $prop, $value ) {
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

    return $value['desktop'];
  }

  //// HELPER

  /**
   * Replace the single key into multiple keys of its children. Used for the CSS Var that has prefix
   * 
   * Example:
   * 
   *     '--button$' => [
   *       'buttonFontSize' => '16px',
   *       'buttonTextTransform' => 'uppercase',
   *       'buttonFontWeight' => '700'
   *     ]
   * 
   * Into:
   * 
   *     'buttonFontSize' => '16px',
   *     'buttonTextTransform' => 'uppercase',
   *     'buttonFontWeight' => '700'
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




