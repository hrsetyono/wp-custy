<?php
/**
 * TIMBER Global setting
 */
class MyTimber extends TimberSite {

  function __construct() {
    add_filter( 'timber_context', [$this, 'add_to_context'] );
    add_filter( 'get_twig', [$this, 'add_to_twig'] );
    parent::__construct();
  }

  /**
   * Global context. The values here are accessible in all rendered template
   * @filter timber_context
   */
  function add_to_context( array $context ) : array {
    $context['nav'] = new TimberMenu( 'main-nav' );

    $context['site'] = $this;
    $context['home_url'] = home_url();

    $root = get_template_directory_uri();
    $context['images'] = $root.'/files';
    $context['img'] = $context['images']; // alias

    // ACF Options Page    
    if( function_exists( 'acf_add_options_page' )) {
      $context['options'] = get_fields( 'options' );
    }

    // WooCommerce
    if( class_exists('WooCommerce') ) {
      global $woocommerce;
      $context['woo'] = $woocommerce;
    }

    return $context;
  }

  /**
   * Add custom filter for Twig
   * @filter get_twig
   */
  function add_to_twig( $twig ) {
    $twig->addExtension( new Twig_Extension_StringLoader() );
    $twig->addFilter( new Twig_SimpleFilter( 'ucfirst', [$this, 'filter_ucfirst'] ) );

    $twig->addFilter( new Twig_SimpleFilter( 'responsive_size', [$this, 'filter_responsive_size'] ) );


    return $twig;
  }

  /**
   * If prefix exists, capitalize the letter
   *  {{ prefix | ucfirst( $letter ) }}
   */
  function filter_ucfirst( string $prefix, string $letter ) : string {
    if( $prefix ) {
      return $prefix . ucfirst( $letter );
    } else {
      return $prefix . $letter;
    }
  }

  /**
   * Get desktop size and store the tablet/mobile in global var
   * 
   * {{ size | responsive_size }}
   */
  function filter_responsive_size( $size, $prop ) {
    if( isset( $size['desktop'] ) ) {
      global $tablet_mods;
      global $mobile_mods;

      if( isset( $size['tablet' ] ) ) {
        $tablet_mods[ $prop ] = $size['tablet'];
      }

      if( isset( $size['mobile'] ) ) {
        $mobile_mods[ $prop ] = $size['mobile'];
      }
      
      return $size['desktop'];
    }
    else {
      return $size;
    }
  }
}


new MyTimber();