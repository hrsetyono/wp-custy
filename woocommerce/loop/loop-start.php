<?php
/**
 * Product Loop Start
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/loop-start.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// <ul class="products columns-<?php echo esc_attr( wc_get_loop_prop( 'columns' ) ); ">

$structure = get_theme_mod('shop_structure', 'grid');

$columns_output = '';

if ($structure === 'grid') {
	$columns_output = 'data-columns="' . esc_attr(get_theme_mod('shop_columns', '3')) . '"';
}

?>

<div class="shop-entries" data-layout="<?php echo esc_attr($structure) ?>" <?php echo $columns_output ?>>
