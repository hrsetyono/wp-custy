<?php

// Color palette
// blocksy_output_colors([
// 	'value' => get_theme_mod('colorPalette'),
// 	'default' => [
// 		'color1' => [ 'color' => '#3eaf7c' ],
// 		'color2' => [ 'color' => '#33a370' ],
// 		'color3' => [ 'color' => 'rgba(44, 62, 80, 0.9)' ],
// 		'color4' => [ 'color' => 'rgba(44, 62, 80, 1)' ],
// 		'color5' => [ 'color' => '#ffffff' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'color1' => ['variable' => 'paletteColor1'],
// 		'color2' => ['variable' => 'paletteColor2'],
// 		'color3' => ['variable' => 'paletteColor3'],
// 		'color4' => ['variable' => 'paletteColor4'],
// 		'color5' => ['variable' => 'paletteColor5'],
// 	],
// ]);


// Colors
// blocksy_output_colors([
// 	'value' => get_theme_mod('fontColor'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor3)' ],
// 		'hover' => [ 'color' => 'var(--paletteColor1)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => ['variable' => 'color'],
// 		'hover' => ['variable' => 'colorHover'],
// 	],
// ]);


// Headings
// blocksy_output_colors([
// 	'value' => get_theme_mod('h1Color'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor4)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.entry-content h1',
// 			'variable' => 'color'
// 		],
// 	],
// ]);

// blocksy_output_colors([
// 	'value' => get_theme_mod('h2Color'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor4)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.entry-content h2',
// 			'variable' => 'color'
// 		],
// 	],
// ]);

// blocksy_output_colors([
// 	'value' => get_theme_mod('h3Color'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor4)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.entry-content h3',
// 			'variable' => 'color'
// 		],
// 	],
// ]);

// blocksy_output_colors([
// 	'value' => get_theme_mod('h4Color'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor4)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.entry-content h4',
// 			'variable' => 'color'
// 		],
// 	],
// ]);

// blocksy_output_colors([
// 	'value' => get_theme_mod('h5Color'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor4)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.entry-content h5',
// 			'variable' => 'color'
// 		],
// 	],
// ]);

// blocksy_output_colors([
// 	'value' => get_theme_mod('h6Color'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor4)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.entry-content h6',
// 			'variable' => 'color'
// 		],
// 	],
// ]);

// Buttons colors
// blocksy_output_colors([
// 	'value' => get_theme_mod('buttonTextColor'),
// 	'default' => [
// 		'default' => [ 'color' => '#ffffff' ],
// 		'hover' => [ 'color' => '#ffffff' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => ['variable' => 'buttonTextInitialColor'],
// 		'hover' => ['variable' => 'buttonTextHoverColor'],
// 	],
// ]);

// blocksy_output_colors([
// 	'value' => get_theme_mod('buttonColor'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor1)' ],
// 		'hover' => [ 'color' => 'var(--paletteColor2)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => ['variable' => 'buttonInitialColor'],
// 		'hover' => ['variable' => 'buttonHoverColor'],
// 	],
// ]);

// Link Colors
// blocksy_output_colors([
// 	'value' => get_theme_mod('contentLinksColor'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor1)' ],
// 		'hover' => [ 'color' => 'var(--colorHover)' ],
// 		'text' => [ 'color' => '#ffffff' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.entry-content',
// 			'variable' => 'entryLinkColor'
// 		],

// 		'hover' => [
// 			'selector' => '.entry-content',
// 			'variable' => 'entryLinkColorHover'
// 		],

// 		'text' => [
// 			'selector' => '.entry-content',
// 			'variable' => 'entryLinkTextColor'
// 		],
// 	],
// ]);

// Layout
// $max_site_width = get_theme_mod( 'maxSiteWidth', 1290 );
// $css->put(
// 	'body',
// 	'--maxSiteWidth: ' . $max_site_width . 'px'
// );

// blocksy_output_responsive([
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => '.content-area',
// 	'variableName' => 'contentAreaSpacing',
// 	'unit' => '',
// 	'value' => get_theme_mod('contentAreaSpacing', [
// 		'mobile' => '50px',
// 		'tablet' => '60px',
// 		'desktop' => '80px',
// 	])
// ]);

// $narrowContainerWidth = get_theme_mod( 'narrowContainerWidth', 60 );
// $css->put(
// 	'[data-page-structure="narrow"]',
// 	'--narrowContainerWidth: ' . $narrowContainerWidth . '%'
// );

// $css->put(
// 	'[data-page-structure="narrow"]',
// 	'--narrowContainerWidthNoUnit: ' . intval($narrowContainerWidth)
// );

// $wideOffset = get_theme_mod( 'wideOffset', 130 );
// $css->put(
// 	'[data-page-structure="narrow"]',
// 	'--wideOffset: ' . $wideOffset . 'px'
// );


// Sidebar
// $sidebar_width = get_theme_mod( 'sidebarWidth', '27' );
// $css->put( '[data-sidebar]', '--sidebarWidth: ' . $sidebar_width . '%' );
// $css->put( '[data-sidebar]', '--sidebarWidthNoUnit: ' . intval($sidebar_width) );


// $sidebarGap = blocksy_get_with_percentage( 'sidebarGap', '4%' );
// $css->put( '[data-sidebar]', '--sidebarGap: ' . $sidebarGap );

// $sidebarOffset = get_theme_mod( 'sidebarOffset', '50' );
// $css->put( '[data-sidebar]', '--sidebarOffset: ' . $sidebarOffset . 'px' );


// blocksy_output_colors([
// 	'value' => get_theme_mod('sidebarWidgetsTitleColor'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor4)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.ct-sidebar .widget-title',
// 			'variable' => 'color'
// 		],
// 	],
// ]);

// blocksy_output_colors([
// 	'value' => get_theme_mod('sidebarWidgetsFontColor'),
// 	'default' => [
// 		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
// 		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.ct-sidebar',
// 			'variable' => 'color'
// 		],
// 		'hover' => [
// 			'selector' => '.ct-sidebar',
// 			'variable' => 'colorHover'
// 		],
// 	],
// ]);

// blocksy_output_colors([
// 	'value' => get_theme_mod('sidebarBackgroundColor'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor5)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '[data-sidebar] > aside',
// 			'variable' => 'sidebarBackgroundColor'
// 		],
// 	],
// ]);

// Sidebar border
// blocksy_output_border([
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => 'aside[data-type="type-2"]',
// 	'variableName' => 'border',
// 	'value' => get_theme_mod('sidebarBorder', [
// 		'width' => 1,
// 		'style' => 'none',
// 		'color' => [
// 			'color' => 'rgba(224, 229, 235, 0.8)',
// 		],
// 	]),
// 	'responsive' => true
// ]);


// blocksy_output_border([
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => 'aside[data-type="type-3"]',
// 	'variableName' => 'border',
// 	'value' => get_theme_mod('sidebarDivider', [
// 		'width' => 1,
// 		'style' => 'solid',
// 		'color' => [
// 			'color' => 'rgba(224, 229, 235, 0.8)',
// 		],
// 	]),
// 	'responsive' => true
// ]);

// blocksy_output_responsive([
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => '.ct-sidebar',
// 	'variableName' => 'sidebarWidgetsSpacing',
// 	'value' => get_theme_mod('sidebarWidgetsSpacing', [
// 		'mobile' => 30,
// 		'tablet' => 40,
// 		'desktop' => 60,
// 	])
// ]);

// blocksy_output_responsive([
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => "[data-sidebar] > aside",
// 	'variableName' => 'sidebarInnerSpacing',
// 	'value' => get_theme_mod('sidebarInnerSpacing', [
// 		'mobile' => 35,
// 		'tablet' => 35,
// 		'desktop' => 35,
// 	])
// ]);


// Sidebar shadow
// blocksy_output_box_shadow([
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => 'aside[data-type="type-2"]',
// 	'value' => get_theme_mod('sidebarShadow', blocksy_box_shadow_value([
// 		'enable' => true,
// 		'h_offset' => 0,
// 		'v_offset' => 12,
// 		'blur' => 18,
// 		'spread' => -6,
// 		'inset' => false,
// 		'color' => [
// 			'color' => 'rgba(34, 56, 101, 0.04)',
// 		],
// 	])),
// 	'responsive' => true
// ]);

// Related Posts
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => ".ct-related-posts",
	'variableName' => 'padding',
	'value' => get_theme_mod('relatedPostsContainerSpacing', [
		'mobile' => '30px',
		'tablet' => '50px',
		'desktop' => '70px',
	]),
	'unit' => ''
]);

blocksy_output_colors([
	'value' => get_theme_mod('relatedPostsLabelColor'),
	'default' => [
		'default' => ['color' => 'var(--paletteColor4)'],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-related-posts-label',
			'variable' => 'color'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('relatedPostsLinkColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.related-entry-title',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.related-entry-title',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('relatedPostsMetaColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.ct-related-posts .entry-meta',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.ct-related-posts .entry-meta',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_spacing([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-related-posts .ct-image-container',
	'property' => 'borderRadius',
	'value' => get_theme_mod( 'relatedThumbRadius',
		blocksy_spacing_value([
			'linked' => true,
			'top' => '5px',
			'left' => '5px',
			'right' => '5px',
			'bottom' => '5px',
		])
	)
]);


// Comments
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.single .ct-comments',
	'variableName' => 'width',
	'value' => get_theme_mod('postCommentsContainerWidth', [
		'mobile' => 100,
		'tablet' => 100,
		'desktop' => 60,
	]),
	'unit' => '%'
]);

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.page .ct-comments',
	'variableName' => 'width',
	'value' => get_theme_mod('pageCommentsContainerWidth', [
		'mobile' => 100,
		'tablet' => 100,
		'desktop' => 60,
	]),
	'unit' => '%'
]);

blocksy_output_colors([
	'value' => get_theme_mod('postCommentsFontColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.single .ct-comments',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.single .ct-comments',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('pageCommentsFontColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.page .ct-comments',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.page .ct-comments',
			'variable' => 'colorHover'
		],
	],
]);


// Posts Navigation
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.post-navigation',
	'variableName' => 'margin',
	'value' => get_theme_mod('postNavSpacing', [
		'mobile' => '40px',
		'tablet' => '60px',
		'desktop' => '80px',
	]),
	'unit' => ''
]);

blocksy_output_colors([
	'value' => get_theme_mod('postsNavFontColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.post-navigation',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.post-navigation',
			'variable' => 'colorHover'
		],
	],
]);

// Share Box
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.share-box[data-location="top"]',
	'variableName' => 'margin',
	'value' => get_theme_mod('topShareBoxSpacing', [
		'mobile' => '30px',
		'tablet' => '50px',
		'desktop' => '70px',
	]),
	'unit' => ''
]);

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.share-box[data-location="bottom"]',
	'variableName' => 'margin',
	'value' => get_theme_mod('bottomShareBoxSpacing', [
		'mobile' => '30px',
		'tablet' => '50px',
		'desktop' => '70px',
	]),
	'unit' => ''
]);

blocksy_output_colors([
	'value' => get_theme_mod('shareItemsIconColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.share-box[data-type="type-1"]',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.share-box[data-type="type-1"]',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('shareItemsBorder'),
	'default' => [
		'default' => [ 'color' => '#e0e5eb' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.share-box[data-type="type-1"]',
			'variable' => 'borderColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('shareItemsIcon'),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.share-box[data-type="type-2"]',
			'variable' => 'color'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('shareItemsBackground'),
	'default' => [
		'default' => [ 'color' => 'var(--paletteColor1)' ],
		'hover' => [ 'color' => 'var(--paletteColor2)' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.share-box[data-type="type-2"]',
			'variable' => 'backgroundColor'
		],

		'hover' => [
			'selector' => '.share-box[data-type="type-2"]',
			'variable' => 'backgroundColorHover'
		]
	],
]);

// Post
blocksy_output_box_shadow([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.post[data-content="boxed"]',
	'value' => get_theme_mod('postContentBoxedShadow', blocksy_box_shadow_value([
		'enable' => false,
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

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.post[data-content="boxed"]',
	'variableName' => 'contentBoxedSpacing',
	'value' => get_theme_mod('singleContentBoxedSpacing', [
		'mobile' => '40px',
		'tablet' => '40px',
		'desktop' => '40px',
	]),
	'unit' => ''
]);

// Page
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.page[data-content="boxed"]',
	'variableName' => 'contentBoxedSpacing',
	'value' => get_theme_mod('pageContentBoxedSpacing', [
		'mobile' => '40px',
		'tablet' => '40px',
		'desktop' => '40px',
	]),
	'unit' => ''
]);

blocksy_output_box_shadow([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.page[data-content="boxed"]',
	'value' => get_theme_mod('pageContentBoxedShadow', blocksy_box_shadow_value([
		'enable' => false,
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

// Author Box
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.author-box',
	'variableName' => 'spacing',
	'value' => get_theme_mod('singleAuthorBoxSpacing', [
		'mobile' => '40px',
		'tablet' => '40px',
		'desktop' => '40px',
	]),
	'unit' => ''
]);

blocksy_output_colors([
	'value' => get_theme_mod('singleAuthorBoxBackground'),
	'default' => [
		'default' => [ 'color' => '#ffffff' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.author-box[data-type="type-1"]',
			'variable' => 'backgroundColor'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('singleAuthorBoxBorder'),
	'default' => [
		'default' => [ 'color' => '#e8ebf0' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.author-box[data-type="type-2"]',
			'variable' => 'borderColor'
		],
	],
]);

blocksy_output_box_shadow([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.author-box[data-type="type-1"]',
	'value' => get_theme_mod('singleAuthorBoxShadow', blocksy_box_shadow_value([
		'enable' => true,
		'h_offset' => 0,
		'v_offset' => 50,
		'blur' => 90,
		'spread' => 0,
		'inset' => false,
		'color' => [
			'color' => 'rgba(210, 213, 218, 0.4)',
		],
	])),
	'responsive' => true
]);


// Footer
blocksy_output_colors([
	'value' => get_theme_mod('footerWidgetsTitleColor'),
	'default' => [
		'default' => [ 'color' => 'var(--paletteColor4)' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.footer-widgets .widget-title',
			'variable' => 'color'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('footerWidgetsFontColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.footer-widgets',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.footer-widgets',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_border([
	'css' => $css,
	'selector' => '.footer-widgets[data-divider]',
	'variableName' => 'widgetsAreaDivider',
	'value' => get_theme_mod('widgetsAreaDivider', [
		'width' => 1,
		'style' => 'dashed',
		'color' => [
			'color' => '#dddddd',
		],
	])
]);


blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.footer-widgets',
	'variableName' => 'widgetAreaSpacing',
	'value' => get_theme_mod('widgetAreaSpacing', [
		'mobile' => '40px',
		'tablet' => '50px',
		'desktop' => '70px',
	]),
	'unit' => ''
]);


// Footer Primary Bar
blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.footer-menu',
	'variableName' => 'menuItemsSpacing',
	'value' => get_theme_mod('footerMenuItemsSpacing', [
		'mobile' => 20,
		'tablet' => 20,
		'desktop' => 20,
	])
]);


blocksy_output_colors([
	'value' => get_theme_mod('footerPrimaryColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.footer-primary-area',
			'variable' => 'color'
		],

		'hover' => [
			'selector' => '.footer-primary-area',
			'variable' => 'colorHover'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('footerPrimaryBackground'),
	'default' => [
		'default' => [ 'color' => '#eef0f4' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.footer-primary-area',
			'variable' => 'backgroundColor'
		],
	],
]);

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.footer-primary-area',
	'variableName' => 'spacing',
	'value' => get_theme_mod('footerPrimarySpacing', [
		'mobile' => '30px',
		'tablet' => '30px',
		'desktop' => '30px',
	]),
	'unit' => ''
]);


// Copyright
blocksy_output_colors([
	'value' => get_theme_mod('copyrightText'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.footer-copyright',
			'variable' => 'color'
		],
	],
]);

blocksy_output_colors([
	'value' => get_theme_mod('copyrightBackground'),
	'default' => [
		'default' => [ 'color' => '#eef0f4' ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => '.footer-copyright',
			'variable' => 'backgroundColor'
		],
	],
]);

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.footer-copyright',
	'variableName' => 'spacing',
	'value' => get_theme_mod('copyrightSpacing', [
		'mobile' => '15px',
		'tablet' => '25px',
		'desktop' => '25px',
	]),
	'unit' => ''
]);


// To top button
// $topButtonOffset = get_theme_mod( 'topButtonOffset', 25 );
// $css->put( '.ct-back-to-top', '--bottom: ' . $topButtonOffset . 'px' );

// blocksy_output_colors([
// 	'value' => get_theme_mod('topButtonIconColor'),
// 	'default' => [
// 		'default' => [ 'color' => '#ffffff' ],
// 		'hover' => [ 'color' => '#ffffff' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.ct-back-to-top',
// 			'variable' => 'color'
// 		],

// 		'hover' => [
// 			'selector' => '.ct-back-to-top',
// 			'variable' => 'colorHover'
// 		]
// 	],
// ]);

// blocksy_output_colors([
// 	'value' => get_theme_mod('topButtonShapeBackground'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor3)' ],
// 		'hover' => [ 'color' => 'var(--paletteColor4)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.ct-back-to-top',
// 			'variable' => 'backgroundColor'
// 		],

// 		'hover' => [
// 			'selector' => '.ct-back-to-top',
// 			'variable' => 'backgroundColorHover'
// 		]
// 	],
// ]);

// blocksy_output_box_shadow([
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => '.ct-back-to-top',
// 	'value' => get_theme_mod('topButtonShadow', blocksy_box_shadow_value([
// 		'enable' => false,
// 		'h_offset' => 0,
// 		'v_offset' => 5,
// 		'blur' => 20,
// 		'spread' => 0,
// 		'inset' => false,
// 		'color' => [
// 			'color' => 'rgba(210, 213, 218, 0.2)',
// 		],
// 	])),
// 	'responsive' => true
// ]);

// Passepartout
// blocksy_output_responsive([
// 	'css' => $css,
// 	'tablet_css' => $tablet_css,
// 	'mobile_css' => $mobile_css,
// 	'selector' => '.ct-passepartout',
// 	'variableName' => 'passepartoutSize',
// 	'value' => get_theme_mod('passepartoutSize', [
// 		'mobile' => 0,
// 		'tablet' => 10,
// 		'desktop' => 10,
// 	])
// ]);

// blocksy_output_colors([
// 	'value' => get_theme_mod('passepartoutColor'),
// 	'default' => [
// 		'default' => [ 'color' => 'var(--paletteColor1)' ],
// 	],
// 	'css' => $css,
// 	'variables' => [
// 		'default' => [
// 			'selector' => '.ct-passepartout',
// 			'variable' => 'passepartoutColor'
// 		],
// 	],
// ]);

