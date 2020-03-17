<?php

defined( 'ABSPATH' ) || die( "Don't run this file directly!" );

add_filter(
	'excerpt_length',
	function ( $length ) {
		return 100;
	}
);

function blocksy_trim_excerpt( $excerpt, $length ) {
	echo wp_kses_post(wp_trim_words($excerpt, $length, '…'));
}

add_filter(
	'excerpt_more',
	function () {
		return '…';
	}
);

