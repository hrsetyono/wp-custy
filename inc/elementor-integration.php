<?php

add_action('init', function () {
	if ( ! get_option( 'elementor_disable_color_schemes' ) ) {
		update_option( 'elementor_disable_color_schemes', 'yes' );
	}

	if ( ! get_option( 'elementor_disable_typography_schemes' ) ) {
		update_option( 'elementor_disable_typography_schemes', 'yes' );
	}

	if ( ! get_option( 'elementor_viewport_lg' ) ) {
		update_option( 'elementor_viewport_lg', 1000 );
	}

	if ( ! get_option( 'elementor_viewport_md' ) ) {
		update_option( 'elementor_viewport_md', 690 );
	}

	if ( ! get_option( 'elementor_container_width' ) ) {
		update_option( 'elementor_container_width', 1290 );
	}
});

add_filter( 'fl_builder_settings_form_defaults', function ( $defaults, $form_type ) {
	if ( 'global' === $form_type ) {
		$defaults->row_padding = '0';
		$defaults->row_width = '1290';
		$defaults->medium_breakpoint = '1000';
		$defaults->responsive_breakpoint = '690';
	}

	return $defaults;
}, 10, 2 );
