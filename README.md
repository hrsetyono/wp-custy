# Custy - Advanced WordPress Customizer

> This is a fork of [Blocksy Customizer](https://creativethemes.com/blocksy/), with many added features like automatic CSS output and simpler parameters.

This plugin adds variety options such as Typography and Color Picker to WP Customizer.

![](https://raw.github.com/hrsetyono/cdn/master/blocksy/doc-section-preview.jpg)

It also comes with drag-n-drop builder for Header and Footer:

![](https://raw.github.com/hrsetyono/cdn/master/blocksy/doc-builder.jpg)

## 1. GETTING STARTED

Download this repo, put it in your `/plugins` folder, install it, and activate this plugin.

If you use [Composer to install plugin](https://wptips.dev/composer-to-manage-plugins/), this plugin is available with the name `pixelstudio/wp-custy`.

Then go to Appearance > Customizer and you will see these default sections:

1. **General** - Contains options for color palette, shadow, and site width.
1. **Text** - Contains options for Body and Heading typography.
1. **Header** - Contains drag-n-drop builder for Header.
1. **Footer** - Contains drag-n-drop builder for Footer.

## 2. TERMINOLOGY

- **Option** - Each individual setting. For example (see 1st picture above): Root Typography, Small Font Size
- **Section** - The whole column of options. For example: General, Text
- **Builder** - Either Header or Footer drag-n-drop setting.
- **Item** - Set of options that can be placed in Header or Footer. For example (see 2nd picture above): Button, Logo

## 3. USING CSS OPTIONS

Across the options, you might notice this CSS toggle:

![](https://raw.github.com/hrsetyono/cdn/master/blocksy/doc-css-var.jpg)

That means the value of that options is automatically outputted into `:root` (by default) using that variable name.

Then implement that variable in your theme wherever it fits.

## 4. ADD NEW SECTION

Let's say we want to add a new section where we can toggle on and off various features. Use this filter below:

```php
add_filter( 'custy_sections', function( $sections ) {

  $sections[ 'features' ] = [
    'title' => __( 'Features' ),
    'container' => [ 'priority' => 10 ],
    'options' => [
      
      'has_back_to_top' => [
        'label' => __( 'Has Back to Top?' ),
        'type' => 'ct-switch',
      ],

      'has_fixed_header' => [
        'label' => __( 'Has Fixed Header?' ),
        'type' => 'ct-switch',
      ],

      'has_blog_sidebar' => [
        'label' => __( 'Has Blog Sidebar?' ),
        'type' => 'ct-switch',
      ],
    
    ]
  ];

  return $sections;
} );
```

Then, define the **default values** of those new options:

```php
add_filter( 'custy_default_values', function( $defaults ) {

  $defaults = wp_parse_args( [
    
    'has_back_to_top' => 'yes',
    'has_fixed_header' => 'no',
    'has_blog_sidebar' => 'yes',

  ], $defaults );

  return $defaults;
} );
```

Done!, Check out the Customizer and you will see a new section called "Features"

![](https://raw.github.com/hrsetyono/cdn/master/blocksy/custom-section.jpg)

> Check out the [Wiki](https://github.com/hrsetyono/wp-custy/wiki/) for complete information on Options type and other things.

## 5. USING NON-CSS OPTIONS

Use the function `Custy::get_mod( $option_id )` like shown below:

```php
if( Custy::get_mod('has_back_to_top') == 'yes' ) {
  // output the back to top markup
}
```

> To make it easy to remember what the option ID is, the label should be the same. For example: the label for `has_back_to_top` is "Has Back to Top?"

## 6. MORE INFO AT WIKI

I have prepared tons of information at [Wiki](https://github.com/hrsetyono/wp-custy/wiki) including:

- All available options type like [Color Picker](https://github.com/hrsetyono/wp-custy/wiki/Type-%E2%80%93-Color-Picker), [Slider](https://github.com/hrsetyono/wp-custy/wiki/Type-%E2%80%93-Slider), and [Radio](https://github.com/hrsetyono/wp-custy/wiki/Type-%E2%80%93-Radio)

- [Adding new item to the Builder](https://github.com/hrsetyono/wp-custy/wiki/Builder-%E2%80%93-Add-New-Item)

- [Rendering Header or Footer](https://github.com/hrsetyono/wp-custy/wiki/Builder-%E2%80%93-Rendering)

- List of default values for [built-in Section](https://github.com/hrsetyono/wp-custy/wiki/Default-Value), [Header](https://github.com/hrsetyono/wp-custy/wiki/Default-Value-%E2%80%93-Header), and [Footer](https://github.com/hrsetyono/wp-custy/wiki/Default-Value-%E2%80%93-Footer)

## 7. THEME BUILT WITH CUSTY

- [Edje WP Theme](https://github.com/hrsetyono/edje-wp-theme) - My own WP starter theme using Timber Library.
- [Blocksy](https://creativethemes.com/blocksy/) - The theme where this customizer originated. It is an amazing theme and I used it on my [WPTips.dev Blog](http://wptips.dev/), but the customizer is hard to edit because it lacks filter.