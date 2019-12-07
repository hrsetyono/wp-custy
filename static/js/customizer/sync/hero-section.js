import { markImagesAsLoaded } from '../../frontend/lazy-load-helpers'
import { getCache } from './helpers'
import { typographyOption } from './variables/typography'
import { responsiveClassesFor } from './footer'
import date from '@wordpress/date'

const enabledKeysForPrefix = {
	blog: 'blog_page_title_enabled',
	single_blog_post: 'single_blog_post_title_enabled',
	single_page: 'single_page_title_enabled',
	search: 'search_page_title_enabled',
	categories: 'categories_has_page_title',
	woo_categories: 'woo_categories_has_page_title'
}

export const getPrefixFor = () => {
	if (
		document.body.classList.contains('blog') &&
		document.body.classList.contains('home')
	) {
		return 'blog'
	}

	if (document.body.classList.contains('single')) {
		return 'single_blog_post'
	}

	if (
		document.body.classList.contains('woocommerce-archive')
		// document.body.classList.contains('woocommerce-cart') ||
		// document.body.classList.contains('woocommerce-checkout') ||
		// document.body.classList.contains('woocommerce-account') ||
		// document.body.classList.contains('post-type-archive-product')
	) {
		return 'woo_categories'
	}

	if (
		document.body.classList.contains('page') ||
		document.body.classList.contains('blog') ||
		document.body.classList.contains('post-type-archive-product')
	) {
		return 'single_page'
	}

	if (document.body.classList.contains('search')) {
		return 'search'
	}

	if (
		document.body.classList.contains('archive') &&
		!document.body.classList.contains('author')
	) {
		return 'categories'
	}

	return false
}

const getEnabledKey = () => {
	if (
		document.body.classList.contains('blog') &&
		document.body.classList.contains('home')
	) {
		return 'blog_page_title_enabled'
	}

	if (document.body.classList.contains('single')) {
		return 'single_blog_post_title_enabled'
	}

	if (
		document.body.classList.contains('woocommerce-archive')
		// document.body.classList.contains('woocommerce-cart') ||
		// document.body.classList.contains('woocommerce-checkout') ||
		// document.body.classList.contains('woocommerce-account') ||
		// document.body.classList.contains('post-type-archive-product')
	) {
		return 'woo_categories_has_page_title'
	}

	if (
		document.body.classList.contains('page') ||
		document.body.classList.contains('blog') ||
		document.body.classList.contains('post-type-archive-product')
	) {
		return 'single_page_title_enabled'
	}

	if (document.body.classList.contains('search')) {
		return 'search_page_title_enabled'
	}

	if (
		document.body.classList.contains('archive') &&
		!document.body.classList.contains('author')
	) {
		return 'categories_has_page_title'
	}

	return false
}

export const getOptionFor = (key, prefix = '') => {
	const id = `${prefix}${prefix.length > 0 ? '_' : ''}${key}`

	if (wp.customize(id)) {
		return wp.customize(id)()
	}

	return false
}

export const renderHeroSection = prefix => {
	if (prefix !== getPrefixFor()) {
		return
	}

	const cache = getCache()

	const isCustom = cache.querySelector(
		'.ct-customizer-preview-cache [data-hero-section-custom]'
	)

	if (isCustom) {
		return
	}

	;[...document.querySelectorAll('.hero-section')].map(el =>
		el.parentNode.removeChild(el)
	)

	if (getOptionFor(getEnabledKey()) === 'no') {
		return
	}

	const type = getOptionFor('hero_section', prefix)

	const newHtml = cache.querySelector(
		`.ct-customizer-preview-cache .ct-hero-section-cache[data-type="${type}"]`
	).innerHTML

	const e = document.createElement('div')
	e.innerHTML = newHtml

	while (e.firstElementChild) {
		let type1Selector =
			prefix === 'single_blog_post' ||
			(prefix === 'single_page' &&
				!document.body.classList.contains('blog'))
				? document.body.classList.contains('single-product')
					? '.woocommerce .summary .price'
					: 'article .entry-content'
				: document.body.classList.contains('woocommerce-archive')
				? 'article .entry-content'
				: '.entries'

		if (document.body.classList.contains('post-type-archive-product')) {
			type1Selector = '.woo-listing-top'
		}

		if (prefix === 'single_blog_post') {
			if (
				document
					.querySelector('article .entry-content')
					.parentNode.firstElementChild.classList.contains(
						'share-box'
					)
			) {
				type1Selector = 'article .share-box:first-child'
			}
		}

		let entries = document.querySelector(
			type === 'type-1' ? type1Selector : '#primary.content-area'
		)

		entries.parentNode.insertBefore(e.firstElementChild, entries)
	}

	if (
		getOptionFor('page_title_bg_type', prefix) === 'color' &&
		document.querySelector('.hero-section figure')
	) {
		document
			.querySelector('.hero-section figure')
			.parentNode.removeChild(
				document.querySelector('.hero-section figure')
			)
	}

	if (
		type === 'type-2' &&
		getOptionFor('page_title_bg_type', prefix) === 'custom_image'
	) {
		if (!getOptionFor('custom_hero_background', prefix).attachment_id) {
			if (document.querySelector('.hero-section figure')) {
				document
					.querySelector('.hero-section figure')
					.parentNode.removeChild(
						document.querySelector('.hero-section figure')
					)
			}
		} else {
			wp.media
				.attachment(
					getOptionFor('custom_hero_background', prefix).attachment_id
				)
				.fetch()
				.then(() => {
					if (document.querySelector('.hero-section figure img')) {
						document
							.querySelector('.hero-section figure img')
							.removeAttribute('srcset')

						document
							.querySelector('.hero-section figure img')
							.removeAttribute('src')

						document
							.querySelector('.hero-section figure img')
							.removeAttribute('sizes')

						document.querySelector(
							'.hero-section figure img'
						).src = wp.media
							.attachment(
								getOptionFor('custom_hero_background', prefix)
									.attachment_id
							)
							.get('url')
					}
				})
		}
	}

	document.querySelector('.hero-section').removeAttribute('data-parallax')
	document.querySelector('.hero-section').dataset.alignment = getOptionFor(
		type === 'type-1' ? 'hero_alignment1' : 'hero_alignment2',
		prefix
	)

	if (
		type === 'type-2' &&
		(getOptionFor('page_title_bg_type', prefix) === 'custom_image' ||
			getOptionFor('page_title_bg_type', prefix) === 'featured_image')
	) {
		const parallaxResult = getOptionFor('parallax', prefix)
		const parallaxOutput = [
			...(parallaxResult.desktop ? ['desktop'] : []),
			...(parallaxResult.tablet ? ['tablet'] : []),
			...(parallaxResult.mobile ? ['mobile'] : [])
		]

		if (
			document.querySelector('.hero-section figure') &&
			parallaxOutput.length > 0
		) {
			document.querySelector(
				'.hero-section'
			).dataset.parallax = parallaxOutput.join(':')

			window.ctEvents.trigger('blocksy:parallax:init')
		}
	}

	if (prefix === 'single_blog_post' || prefix === 'single_page') {
		const metaElements = getOptionFor('single_meta_elements', prefix)

		if (!metaElements.author) {
			;[
				...document.querySelectorAll(
					'.hero-section .entry-meta .avatar-container'
				)
			].map(el => {
				el.parentNode.classList.remove('has-avatar')
				el.remove()
			})
			;[
				...document.querySelectorAll(
					'.hero-section .entry-meta .ct-meta-author'
				)
			].map(el => el.remove())
		}

		if (!metaElements.comments) {
			;[
				...document.querySelectorAll(
					'.hero-section .entry-meta .ct-meta-comments'
				)
			].map(el => el.remove())
		}

		if (!metaElements.date) {
			;[
				...document.querySelectorAll(
					'.hero-section .entry-meta .ct-meta-date'
				)
			].map(el => el.remove())
		}

		if (!metaElements.updated) {
			;[
				...document.querySelectorAll(
					'.hero-section .entry-meta .ct-meta-updated-date'
				)
			].map(el => el.remove())
		}

		if (!metaElements.categories) {
			;[
				...document.querySelectorAll(
					'.hero-section .entry-meta .ct-meta-categories'
				)
			].map(el => el.remove())
		}

		if (!metaElements.tags) {
			;[
				...document.querySelectorAll(
					'.hero-section .entry-meta .ct-meta-tags'
				)
			].map(el => el.remove())
		}

		;[...document.querySelectorAll('.hero-section .entry-meta')].map(
			el => el.children.length === 0 && el.remove()
		)

		if (getOptionFor('has_meta_label', prefix) === 'no') {
			;[
				...document.querySelectorAll(
					'.hero-section .entry-meta .ct-meta-label'
				)
			].map(label => label.remove())
		}

		if (getOptionFor('has_meta_avatar', prefix) === 'no') {
			;[
				...document.querySelectorAll(
					'.hero-section .entry-meta .avatar-container'
				)
			].map(el => {
				el.parentNode.classList.remove('has-avatar')
				el.remove()
			})
		}

		;[
			...document.querySelectorAll(
				'.hero-section .entry-meta .ct-meta-date .ct-meta-element'
			),
			...document.querySelectorAll(
				'.hero-section .entry-meta .ct-meta-updated-date .ct-meta-element'
			)
		].map(dateEl => {
			dateEl.innerHTML = window.wp.date.format(
				getOptionFor('date_format_source', prefix) === 'default'
					? dateEl.dataset.defaultFormat
					: getOptionFor('single_meta_date_format', prefix) ||
							'M j, Y',
				moment(dateEl.dataset.date)
			)
		})
	}

	renderHeroSectionTexts(prefix)
	markImagesAsLoaded(document.querySelector('.site-main'))
}

export const renderHeroSectionTexts = prefix => {
	if (prefix !== getPrefixFor()) {
		return
	}

	const cache = getCache()

	const isCustom = cache.querySelector(
		'.ct-customizer-preview-cache [data-hero-section-custom]'
	)

	if (isCustom) {
		return
	}

	if (prefix === 'blog') {
		if (getOptionFor('custom_title', prefix).trim().length > 0) {
			if (document.querySelector('.entry-header .page-title')) {
				document.querySelector(
					'.entry-header .page-title'
				).innerHTML = getOptionFor('custom_title', prefix)
			} else {
				const header = document.createElement('h1')
				header.classList.add('page-title')
				header.innerHTML = getOptionFor('custom_title', prefix)
				document.querySelector('.entry-header').appendChild(header)
			}
		} else {
			if (document.querySelector('.entry-header .page-title')) {
				document
					.querySelector('.entry-header .page-title')
					.parentNode.removeChild(
						document.querySelector('.entry-header .page-title')
					)
			}
		}
	}

	if (prefix === 'blog') {
		if (getOptionFor('custom_description', prefix).trim().length > 0) {
			if (document.querySelector('.entry-header .page-description')) {
				document.querySelector(
					'.entry-header .page-description'
				).innerHTML = getOptionFor('custom_description', prefix)
			} else {
				const header = document.createElement('div')
				header.classList.add('page-description')
				header.innerHTML = getOptionFor('custom_description', prefix)
				document.querySelector('.entry-header').appendChild(header)
			}
		} else {
			if (document.querySelector('.entry-header .page-description')) {
				document
					.querySelector('.entry-header .page-description')
					.parentNode.removeChild(
						document.querySelector(
							'.entry-header .page-description'
						)
					)
			}
		}
	}

	if (document.querySelector('.entry-header .page-description')) {
		responsiveClassesFor(
			`${prefix}_page_excerpt_visibility`,
			document.querySelector('.entry-header .page-description')
		)
	}
}

const getVariablesForPrefix = prefix => ({
	[`${prefix}_hero_height`]: {
		selector: '.hero-section[data-type="type-2"]',
		variable: 'minHeight',
		responsive: true,
		unit: ''
	},

	...typographyOption({
		id: `${prefix}_pageTitleFont`,
		selector: '.entry-header .page-title'
	}),

	[`${prefix}_pageTitleFontColor`]: {
		selector: '.entry-header .page-title',
		variable: 'color',
		type: 'color'
	},

	...typographyOption({
		id: `${prefix}_pageMetaFont`,
		selector: '.entry-header .entry-meta'
	}),

	[`${prefix}_pageMetaFontColor`]: [
		{
			selector: '.entry-header .entry-meta',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.entry-header .entry-meta',
			variable: 'colorHover',
			type: 'color:hover'
		}
	],

	...typographyOption({
		id: `${prefix}_pageExcerptFont`,
		selector: '.entry-header .page-description'
	}),

	[`${prefix}_pageExcerptColor`]: {
		selector: '.entry-header .page-description',
		variable: 'color',
		type: 'color'
	},

	[`${prefix}_pageTitleOverlay`]: {
		selector: '.hero-section[data-type="type-2"]',
		variable: 'pageTitleOverlay',
		type: 'color'
	},

	[`${prefix}_pageTitleBackground`]: {
		selector: '.hero-section[data-type="type-2"]',
		variable: 'pageTitleBackground',
		type: 'color'
	}
})

export const getHeroVariables = () => getVariablesForPrefix(getPrefixFor())

const watchOptionsFor = prefix => {
	;[
		enabledKeysForPrefix[prefix],
		`${prefix}_hero_alignment1`,
		`${prefix}_hero_alignment2`,
		`${prefix}_hero_section`,
		`${prefix}_has_meta_label`,
		`${prefix}_has_meta_avatar`,
		`${prefix}_single_meta_date_format`,
		`${prefix}_date_format_source`,
		`${prefix}_single_meta_elements`,
		// `${prefix}_custom_title`,
		// `${prefix}_custom_description`,

		`${prefix}_page_title_bg_type`,
		`${prefix}_custom_hero_background`,
		`${prefix}_parallax`
	].map(id =>
		wp.customize(id, val => val.bind(to => renderHeroSection(prefix)))
	)
	;[
		`${prefix}_custom_title`,
		`${prefix}_page_excerpt_visibility`,
		`${prefix}_custom_description`
	].map(id =>
		wp.customize(id, val => val.bind(to => renderHeroSectionTexts(prefix)))
	)
}

Object.keys(enabledKeysForPrefix).map(prefix => watchOptionsFor(prefix))
