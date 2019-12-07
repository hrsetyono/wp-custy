<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Blocksy
 */

blocksy_add_customizer_preview_cache(
	function () {
		return blocksy_html_tag(
			'div',
			['data-id' => 'socials-general-cache'],
			'<section>' . blocksy_social_icons(null, [
				'type' => 'simple-small'
			]) . '</section>'
		);
	}
);

?>

	</main>

	<?php
		$footer = new Blocksy_Customizer_Builder_Footer();
		echo $footer->render();
	?>

	<?php if (function_exists('blc_output_instagram_section')) { ?>
		<?php
			/**
			 * Note to code reviewers: This line doesn't need to be escaped.
			 * Function blc_output_instagram_section() used here escapes the value properly.
			 */
			echo blc_output_instagram_section();
		?>
	<?php } ?>

</div>

<?php
	if (function_exists('blocksy_woo_floating_cart')) {
		echo blocksy_woo_floating_cart();
	}

	if (get_theme_mod('has_back_top', 'no') === 'yes') {
		blocksy_output_back_to_top_link();
	}

	blocksy_add_customizer_preview_cache(function () {
		return blocksy_html_tag(
			'div',
			['data-id' => 'back-to-top-link'],
			blocksy_collect_and_return(function () {
				blocksy_output_back_to_top_link(true);
			})
		);
	});

	$header = new Blocksy_Customizer_Builder_Render_Placements();
	echo $header->render_search_modal();
?>

<a class="skip-link screen-reader-text" href="#primary">
<?php _e( 'Skip to content', 'blocksy' ); ?></a>

<?php if (function_exists('blocksy_ext_cookies_consent_output')) { ?>
	<?php
		/**
		 * Note to code reviewers: This line doesn't need to be escaped.
		 * Function blocksy_ext_cookies_consent_output() used here escapes the value properly.
		 */
		echo blocksy_ext_cookies_consent_output();
	?>
<?php } ?>

<?php

$b = new Blocksy_Customizer_Builder_Header();
echo $b->render_offcanvas();

?>


<?php wp_footer(); ?>

</body>
</html>
