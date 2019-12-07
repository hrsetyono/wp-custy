const componentToHex = c => {
	var hex = c.toString(16)
	return hex.length == 1 ? '0' + hex : hex
}

export const handleBackgroundOptionFor = ({ id, selector }) => ({
	[id]: [
		{
			variable: 'backgroundColor',
			selector,
			extractValue: value => value.backgroundColor.default.color
		},

		{
			variable: 'patternColor',
			selector,
			extractValue: value =>
				value.background_type === 'pattern'
					? value.patternColor.default.color
					: 'CT_CSS_SKIP_RULE'
		},

		{
			variable: 'backgroundImage',
			selector,
			extractValue: ({
				background_type,
				background_image,
				background_pattern,
				patternColor,
				backgroundColor
			}) => {
				if (background_type === 'color') {
					if (backgroundColor.default.color !== 'CT_CSS_SKIP_RULE') {
						return 'none'
					}

					return 'CT_CSS_SKIP_RULE'
				}

				const str_replace = ($old, $new, $text) =>
					($text + '').split($old).join($new)

				if (background_type === 'image') {
					if (!background_image.url) {
						return 'CT_CSS_SKIP_RULE'
					}

					return `url(${background_image.url})`
				}

				let opacity = 1
				let color = patternColor.default.color

				if (color.indexOf('paletteColor1') > -1) {
					color = getComputedStyle(document.body).getPropertyValue(
						'--paletteColor1'
					)
				}

				if (color.indexOf('paletteColor2') > -1) {
					color = getComputedStyle(document.body).getPropertyValue(
						'--paletteColor2'
					)
				}

				if (color.indexOf('paletteColor3') > -1) {
					color = getComputedStyle(document.body).getPropertyValue(
						'--paletteColor3'
					)
				}

				if (color.indexOf('paletteColor4') > -1) {
					color = getComputedStyle(document.body).getPropertyValue(
						'--paletteColor4'
					)
				}

				if (color.indexOf('paletteColor5') > -1) {
					color = getComputedStyle(document.body).getPropertyValue(
						'--paletteColor5'
					)
				}

				if (color.indexOf('rgb') > -1) {
					const rgb_array = str_replace(
						'rgb(',
						'',
						str_replace(
							')',
							'',
							str_replace(
								'rgba(',
								'',
								str_replace(' ', '', color)
							)
						)
					).split(',')

					color = `#${componentToHex(
						parseInt(rgb_array[0], 10)
					)}${componentToHex(
						parseInt(rgb_array[1], 10)
					)}${componentToHex(parseInt(rgb_array[2], 10))}`

					if (rgb_array.length > 3) {
						opacity = rgb_array[3]
					}
				}

				color = str_replace('#', '', color)

				return `url("${str_replace(
					'OPACITY',
					opacity,
					str_replace(
						'COLOR',
						color,
						ct_localizations.customizer_sync.svg_patterns[
							background_pattern
						] ||
							ct_localizations.customizer_sync.svg_patterns[
								'type-1'
							]
					)
				)}")`
			}
		},

		{
			variable: 'backgroundPosition',
			selector,
			extractValue: ({ background_type, background_image: { x, y } }) => {
				if (background_type !== 'image') {
					return 'CT_CSS_SKIP_RULE'
				}

				return `${Math.round(parseFloat(x) * 100)}% ${Math.round(
					parseFloat(y) * 100
				)}%`
			}
		},

		{
			variable: 'backgroundSize',
			selector,
			extractValue: ({ background_type, background_size }) => {
				if (background_type !== 'image') {
					return 'CT_CSS_SKIP_RULE'
				}

				return background_size
			}
		},

		{
			variable: 'backgroundAttachment',
			selector,
			extractValue: ({ background_type, background_attachment }) => {
				if (background_type !== 'image') {
					return 'CT_CSS_SKIP_RULE'
				}

				return background_attachment
			}
		},

		{
			selector,
			variable: 'backgroundRepeat',
			extractValue: ({ background_type, background_repeat }) => {
				if (background_type !== 'image') {
					return 'CT_CSS_SKIP_RULE'
				}

				return background_repeat
			}
		}
	]
})

export const getBackgroundVariablesFor = () => ({
	// Site background
	...handleBackgroundOptionFor({
		id: 'site_background',
		selector: '.site-main'
	}),

	// Header desktop
	...handleBackgroundOptionFor({
		id: 'headerBackground',
		selector: '.header-desktop'
	}),

	// Header mobile
	...handleBackgroundOptionFor({
		id: 'mobileHeaderBackground',
		selector: '.header-mobile'
	}),

	// Post
	...handleBackgroundOptionFor({
		id: 'post_background',
		selector: '.single .site-main'
	}),

	...handleBackgroundOptionFor({
		id: 'single_content_background',
		selector: '.post[data-content="boxed"]'
	}),

	...handleBackgroundOptionFor({
		id: 'related_posts_background',
		selector: '.ct-related-posts'
	}),

	...handleBackgroundOptionFor({
		id: 'post_comments_background',
		selector: '.single .ct-comments-container'
	}),

	// Page
	...handleBackgroundOptionFor({
		id: 'page_background',
		selector: '.page .site-main'
	}),

	...handleBackgroundOptionFor({
		id: 'page_content_background',
		selector: '.page[data-content="boxed"]'
	}),

	...handleBackgroundOptionFor({
		id: 'page_comments_background',
		selector: '.page .ct-comments-container'
	}),

	// Footer
	...handleBackgroundOptionFor({
		id: 'widgets_area_background',
		selector: '.footer-widgets-area'
	}),

	// Shop
	...handleBackgroundOptionFor({
		id: 'product_page_background',
		selector: '.single-product .site-main'
	})
})
