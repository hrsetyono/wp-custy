<?php

$listing_source = blocksy_get_posts_listing_source();

blocksy_output_font_css([
	'font_value' => blocksy_akg_or_customizer(
		'cardTitleFont',
		$listing_source,
		blocksy_typography_default_values([
			'size' => [
				'desktop' => '20px',
				'tablet'  => '20px',
				'mobile'  => '18px'
			],
			'line-height' => '1.3'
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.entry-card .entry-title'
]);

blocksy_output_colors([
	'value' => blocksy_akg_or_customizer('cardTitleColor', $listing_source),
	'default' => [
		'default' => [ 'color' => 'var(--paletteColor4)' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.entry-card .entry-title',
			'variable' => 'color'
		],
		'hover' => [
			'selector' => '.entry-card .entry-title',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.entry-excerpt',
	'variableName' => 'cardExcerptSize',
	'value' => blocksy_akg_or_customizer('cardExcerptSize', $listing_source, [
		'mobile' => 16,
		'tablet' => 16,
		'desktop' => 16,
	])
]);

blocksy_output_colors([
	'value' => blocksy_akg_or_customizer('cardExcerptColor', $listing_source),
	'default' => [
		'default' => ['color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT')]
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.entry-excerpt',
			'variable' => 'color'
		]
	],
]);

blocksy_output_font_css([
	'font_value' => blocksy_akg_or_customizer(
		'cardMetaFont',
		$listing_source,
		blocksy_typography_default_values([
			'size' => [
				'desktop' => '12px',
				'tablet'  => '12px',
				'mobile'  => '12px'
			],
			'variation' => 'n6',
			'line-height' => '1.3',
			'text-transform' => 'uppercase',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.entry-card .entry-meta'
]);

blocksy_output_colors([
	'value' => blocksy_akg_or_customizer('cardMetaColor', $listing_source),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.entry-meta',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.entry-meta',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_colors([
	'value' => blocksy_akg_or_customizer('cardButtonSimpleTextColor', $listing_source),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.entry-button[data-type="simple"]',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.entry-button[data-type="simple"]',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_colors([
	'value' => blocksy_akg_or_customizer('cardButtonBackgroundTextColor', $listing_source),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.entry-button[data-type="background"]',
			'variable' => 'buttonTextInitialColor'
		],

		'hover' => [
			'selector' => '.entry-button[data-type="background"]',
			'variable' => 'buttonTextHoverColor'
		],
	],
]);

blocksy_output_colors([
	'value' => blocksy_akg_or_customizer('cardButtonOutlineTextColor', $listing_source),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.entry-button[data-type="outline"]',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.entry-button[data-type="outline"]',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_colors([
	'value' => blocksy_akg_or_customizer('cardButtonColor', $listing_source),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.entry-button',
			'variable' => 'buttonInitialColor'
		],

		'hover' => [
			'selector' => '.entry-button',
			'variable' => 'buttonHoverColor'
		],
	],
]);

blocksy_output_colors([
	'value' => blocksy_akg_or_customizer('cardBackground', $listing_source),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '[data-cards="boxed"] .entry-card',
			'variable' => 'cardBackground'
		],
	],
]);

blocksy_output_border([
	'css' => $css,
	'selector' => '[data-cards="boxed"] .entry-card',
	'variableName' => 'border',
	'value' => blocksy_akg_or_customizer('cardBorder', $listing_source, [
		'width' => 1,
		'style' => 'none',
		'color' => [
			'color' => 'rgba(44,62,80,0.2)',
		],
	])
]);

blocksy_output_border([
	'css' => $css,
	'selector' => '[data-cards="simple"] .entry-card',
	'variableName' => 'border',
	'value' => blocksy_akg_or_customizer('cardDivider', $listing_source, [
		'width' => 1,
		'style' => 'dashed',
		'color' => [
			'color' => 'rgba(224, 229, 235, 0.8)',
		],
	])
]);

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.entries',
	'variableName' => 'cardsGap',
	'value' => blocksy_akg_or_customizer('cardsGap', $listing_source, [
		'mobile' => 30,
		'tablet' => 30,
		'desktop' => 30,
	])
]);

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '[data-cards="boxed"] .entry-card',
	'variableName' => 'cardSpacing',
	'value' => blocksy_akg_or_customizer('card_spacing', $listing_source, [
		'mobile' => 25,
		'tablet' => 35,
		'desktop' => 35,
	])
]);

// Box shadow
blocksy_output_box_shadow([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '[data-cards="boxed"] .entry-card',
	'value' => blocksy_akg_or_customizer('cardShadow', $listing_source, blocksy_box_shadow_value([
		'enable' => true,
		'h_offset' => 0,
		'v_offset' => 12,
		'blur' => 18,
		'spread' => -6,
		'inset' => false,
		'color' => [
			'color' => 'rgba(34, 56, 101, 0.04)',
		],
	])),
	'responsive' => true
]);

// Featured Image Radius
blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.entry-card .ct-image-container',
	'property' => 'borderRadius',
	'value' => blocksy_akg_or_customizer( 'cardThumbRadius', $listing_source,
		blocksy_spacing_value([
			'linked' => true,
		])
	)
]);


// TODO: extract here based on current screen when we multiply archive_order
// options
$archive_order = blocksy_akg_or_customizer(
	'archive_order',
	$listing_source,
	[
		[
			'id' => 'post_meta',
			'enabled' => true,
			'meta' => [
				'categories' => true,
				'author' => false,
				'date' => false,
				'comments' => false,
			],
		],

		[
			'id' => 'title',
			'enabled' => true,
		],

		[
			'id' => 'featured_image',
			'enabled' => true,
		],

		[
			'id' => 'excerpt',
			'enabled' => true,
		],

		[
			'id' => 'post_meta',
			'enabled' => true,
			'meta' => [
				'categories' => false,
				'author' => true,
				'date' => true,
				'comments' => true,
			],
		],
	]
);

if ($archive_order) {
	foreach ( $archive_order as $single_component ) {
		if ( $single_component['id'] === 'post_meta' ) {
			if (
				blocksy_akg('meta/author', $single_component, 'no')
				&&
				(blocksy_akg('has_author_avatar', $single_component, 'no') === 'yes')
			) {
				$css->put(
					':root',
					'--avatarSize: ' . blocksy_akg('avatar_size', $single_component, 30) . 'px'
				);
			}
		}
	}
}

