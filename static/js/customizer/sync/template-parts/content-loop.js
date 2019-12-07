import ctEvents from 'ct-events'
import { getCache, setRatioFor } from '../helpers'
import { markImagesAsLoaded } from '../../../frontend/lazy-load-helpers'
import { getOptionFor } from '../hero-section'
import date from '@wordpress/date'
import { typographyOption } from '../variables/typography'

const getListingPrefixFor = () => {
	if (document.body.classList.contains('search')) {
		return 'search'
	}

	if (document.body.classList.contains('author')) {
		return 'author'
	}

	if (document.body.classList.contains('archive')) {
		return 'categories'
	}

	return 'blog'
}

const renderEntries = prefix => {
	if (prefix !== getListingPrefixFor()) {
		return
	}

	;[...document.querySelectorAll('.entries')].map(el => {
		const structure = getOptionFor('structure', prefix)

		el.dataset.layout = structure

		el.removeAttribute('data-page-structure')

		if (structure === 'gutenberg') {
			el.dataset.pageStructure = 'narrow'
		}

		if (structure !== 'grid') {
			el.removeAttribute('data-columns')
		} else {
			el.dataset.columns = getOptionFor('columns', prefix)
		}

		el.removeAttribute('data-cards')

		if (structure !== 'gutenberg') {
			el.dataset.cards = getOptionFor('card_type', prefix)
		}
	})

	let to = getOptionFor('archive_order', prefix)

	const htmlCache = getCache()
	;[...document.querySelectorAll('.entries > article')].map(singleArticle => {
		;[...singleArticle.children].map(el => singleArticle.removeChild(el))

		const featuredImageComponent = to.find(
			({ id }) => id === 'featured_image'
		)

		if (getOptionFor('structure', prefix) === 'simple') {
			to = [
				featuredImageComponent,
				...to.filter(({ id }) => id !== 'featured_image')
			]
		}

		to.map(component => {
			if (!component.enabled) return

			const newHtml = htmlCache.querySelector(
				`.ct-customizer-preview-cache [data-id="${singleArticle.id}"] [data-component="${component.id}"]`
			).innerHTML

			const e = document.createElement('div')
			e.innerHTML = newHtml

			if (component.id === 'excerpt') {
				if (e.querySelector('.entry-excerpt')) {
					let newExcerpt = e
						.querySelector('.entry-excerpt')
						.innerHTML.trim()
						.replace(/\s/g, ' ')
						.replace(
							new RegExp(
								`(([^\\s]+\\s\\s*){${component.excerpt_length ||
									40}})(.*)`
							),
							'$1'
						)

					e.querySelector(
						'.entry-excerpt'
					).innerHTML = `${newExcerpt.trim()}${
						newExcerpt.trim().length ===
						e.querySelector('.entry-excerpt').innerHTML.trim()
							.length
							? ''
							: '…'
					}`
				}
			}

			if (component.id === 'post_meta') {
				e.querySelector('.entry-meta').dataset.type =
					component.meta_type || 'simple'

				if ((component.meta_type || 'simple') === 'simple') {
					;[...e.querySelectorAll('.entry-meta .ct-meta-icon')].map(
						el => el.parentNode.removeChild(el)
					)
				} else {
					;[...e.querySelectorAll('.entry-meta .ct-meta-label')].map(
						el => el.parentNode.removeChild(el)
					)
				}

				if (
					(component.meta &&
						component.meta.author &&
						component.has_author_avatar !== 'yes') ||
					(component.meta && !component.meta.author)
				) {
					e.querySelector('.entry-meta.has-avatar').classList.remove(
						'has-avatar'
					)

					e.querySelector('.entry-meta .avatar-container').remove()
				}

				if (component.meta && !component.meta.author) {
					e.querySelector('.entry-meta .ct-meta-author') &&
						e.querySelector('.entry-meta .ct-meta-author').remove()
				}

				if (
					component.meta &&
					component.meta.author &&
					component.has_author_avatar === 'yes'
				) {
					const img = e.querySelector(
						'.entry-meta .avatar-container img'
					)

					img.height = component.avatar_size || '25'
					img.width = component.avatar_size || '25'
				}

				if (component.meta && !component.meta.date) {
					e.querySelector('.entry-meta .ct-meta-date') &&
						e.querySelector('.entry-meta .ct-meta-date').remove()
				} else {
					e.querySelector(
						'.entry-meta .ct-meta-date .ct-meta-element'
					).innerHTML = window.wp.date.format(
						component.date_format_source === 'default'
							? e.querySelector(
									'.entry-meta .ct-meta-date .ct-meta-element'
							  ).dataset.defaultFormat
							: component.date_format || 'M j, Y',
						moment(
							e.querySelector(
								'.entry-meta .ct-meta-date .ct-meta-element'
							).dataset.date
						)
					)
				}

				if (component.meta && !component.meta.updated) {
					e.querySelector('.entry-meta .ct-meta-updated-date') &&
						e
							.querySelector('.entry-meta .ct-meta-updated-date')
							.remove()
				} else {
					e.querySelector(
						'.entry-meta .ct-meta-updated-date .ct-meta-element'
					).innerHTML = window.wp.date.format(
						component.date_format_source === 'default'
							? e.querySelector(
									'.entry-meta .ct-meta-date .ct-meta-element'
							  ).dataset.defaultFormat
							: component.date_format || 'M j, Y',
						moment(
							e.querySelector(
								'.entry-meta .ct-meta-updated-date .ct-meta-element'
							).dataset.date
						)
					)
				}

				if (component.meta && !component.meta.tags) {
					e.querySelector('.entry-meta .ct-meta-tags') &&
						e.querySelector('.entry-meta .ct-meta-tags').remove()
				}

				if (component.meta && !component.meta.categories) {
					e.querySelector('.entry-meta .ct-meta-categories') &&
						e
							.querySelector('.entry-meta .ct-meta-categories')
							.remove()
				} else {
					if (e.querySelector('.entry-meta .ct-meta-categories')) {
						e.querySelector(
							'.entry-meta .ct-meta-categories'
						).dataset.type =
							(component.meta_type || 'simple') === 'icons'
								? 'simple'
								: component.category_style || 'simple'
					}
				}

				if (component.meta && !component.meta.comments) {
					e.querySelector('.entry-meta .ct-meta-comments') &&
						e
							.querySelector('.entry-meta .ct-meta-comments')
							.remove()
				} else {
					if (e.querySelector('.entry-meta .ct-meta-comments')) {
						if ((component.meta_type || 'simple') === 'icons') {
							e.querySelector(
								'.entry-meta .ct-meta-comments .ct-meta-element'
							).innerHTML = e
								.querySelector(
									'.entry-meta .ct-meta-comments .ct-meta-element'
								)
								.innerHTML.replace(/\D/g, '')
						}
					}
				}

				e.querySelector('.entry-meta').removeAttribute('data-label')

				if (
					(component.meta_type || 'simple') !== 'icons' &&
					(component.has_meta_label || 'no') === 'yes'
				) {
					e.querySelector('.entry-meta').dataset.label = ''
				}
			}

			if (component.id === 'featured_image') {
				setRatioFor(
					component.thumb_ratio,
					e.querySelector('.ct-image-container .ct-ratio')
				)

				e.querySelector('.ct-image-container').classList.remove(
					'boundless-image'
				)

				if (
					(component.is_boundless || 'yes') === 'yes' &&
					getOptionFor('card_type', prefix) === 'boxed' &&
					getOptionFor('structure', prefix) !== 'gutenberg'
				) {
					e.querySelector('.ct-image-container').classList.add(
						'boundless-image'
					)
				}
			}

			if (component.id === 'title') {
				const newHeading = document.createElement(
					component.heading_tag || 'h2'
				)

				const existingTitle = e.querySelector('.entry-title')

				newHeading.innerHTML = existingTitle.innerHTML
				;[...existingTitle.attributes].map(({ name, value }) =>
					newHeading.setAttribute(name, value)
				)

				existingTitle.parentNode.replaceChild(newHeading, existingTitle)
			}

			if (component.id === 'read_more') {
				e.querySelector('.entry-button').dataset.type =
					component.button_type || 'simple'

				e.querySelector('.entry-button').classList.remove('ct-button')

				if ((component.button_type || 'simple') === 'background') {
					e.querySelector('.entry-button').classList.add('ct-button')
				}

				e.querySelector('.entry-button').dataset.alignment =
					component.read_more_alignment || 'left'

				e.querySelector('.entry-button').firstChild.textContent =
					component.read_more_text || 'Read More'

				if ((component.read_more_arrow || 'no') === 'no') {
					e.querySelector('.entry-button svg') &&
						e.querySelector('.entry-button svg').remove()
				}
			}

			while (e.firstElementChild) {
				singleArticle.appendChild(e.firstElementChild)
			}
		})

		if (getOptionFor('structure', prefix) === 'simple') {
			const newWrapper = document.createElement('div')
			newWrapper.classList.add('card-content')
			;[...singleArticle.children]
				.filter(el => !el.classList.contains('ct-image-container'))
				.map(el => newWrapper.appendChild(el))

			singleArticle.appendChild(newWrapper)
		}

		if (
			singleArticle.lastElementChild &&
			(singleArticle.lastElementChild.classList.contains(
				'ct-image-container'
			) ||
				singleArticle.lastElementChild.classList.contains('entry-meta'))
		) {
			const newNode = document.createElement('div')
			newNode.classList.add('ct-ghost')

			singleArticle.insertBefore(newNode, singleArticle.lastElementChild)
		}

		markImagesAsLoaded(singleArticle)
	})
}

const renderEntriesCardsType = prefix => {
	if (prefix !== getListingPrefixFor()) {
		return
	}

	;[...document.querySelectorAll('.entries')].map(
		el => (el.dataset.cards = getOptionFor('card_type', prefix))
	)
}

const watchOptionsFor = prefix =>
	[
		`${prefix}_columns`,
		`${prefix}_structure`,
		`${prefix}_archive_order`,
		`${prefix}_card_type`
	].map(id => wp.customize(id, val => val.bind(to => renderEntries(prefix))))
;['blog', 'search', 'author', 'categories'].map(prefix => {
	watchOptionsFor(prefix)
})

const getVariablesForPrefix = prefix => ({
	...typographyOption({
		id: `${prefix}_cardTitleFont`,
		selector: '.entry-card .entry-title'
	}),

	[`${prefix}_cardTitleSize`]: {
		variable: 'cardTitleSize',
		responsive: true,
		unit: 'px'
	},

	[`${prefix}_cardTitleColor`]: [
		{
			selector: '.entry-card .entry-title',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.entry-card .entry-title',
			variable: 'colorHover',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardExcerptSize`]: {
		selector: '.entry-excerpt',
		variable: 'cardExcerptSize',
		responsive: true,
		unit: 'px'
	},

	[`${prefix}_cardExcerptColor`]: {
		selector: '.entry-excerpt',
		variable: 'color',
		type: 'color'
	},

	...typographyOption({
		id: `${prefix}_cardMetaFont`,
		selector: '.entry-card .entry-meta'
	}),

	[`${prefix}_cardMetaColor`]: [
		{
			selector: '.entry-meta',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.entry-meta',
			variable: 'colorHover',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardButtonSimpleTextColor`]: [
		{
			selector: '.entry-button[data-type="simple"]',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.entry-button[data-type="simple"]',
			variable: 'colorHover',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardButtonBackgroundTextColor`]: [
		{
			selector: '.entry-button[data-type="background"]',
			variable: 'buttonTextInitialColor',
			type: 'color:default'
		},

		{
			selector: '.entry-button[data-type="background"]',
			variable: 'buttonTextHoverColor',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardButtonOutlineTextColor`]: [
		{
			selector: '.entry-button[data-type="outline"]',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: '.entry-button[data-type="outline"]',
			variable: 'colorHover',
			type: 'color:hover'
		}
	],


	[`${prefix}_cardButtonColor`]: [
		{
			selector: '.entry-button',
			variable: 'buttonInitialColor',
			type: 'color:default'
		},

		{
			selector: '.entry-button',
			variable: 'buttonHoverColor',
			type: 'color:hover'
		}
	],

	[`${prefix}_cardBackground`]: {
		selector: '[data-cards="boxed"] .entry-card',
		variable: 'cardBackground',
		type: 'color'
	},

	[`${prefix}_cardBorder`]: {
		selector: '[data-cards="boxed"] .entry-card',
		variable: 'border',
		type: 'border'
	},

	[`${prefix}_cardDivider`]: {
		selector: '[data-cards="simple"] .entry-card',
		variable: 'border',
		type: 'border'
	},

	[`${prefix}_cardsGap`]: {
		selector: '.entries',
		variable: 'cardsGap',
		responsive: true,
		unit: 'px'
	},

	[`${prefix}_card_spacing`]: {
		selector: '[data-cards="boxed"] .entry-card',
		variable: 'cardSpacing',
		responsive: true,
		unit: 'px'
	},

	[`${prefix}_cardShadow`]: {
		selector: '[data-cards="boxed"] .entry-card',
		type: 'box-shadow',
		variable: 'boxShadow',
		responsive: true
	},

	[`${prefix}_cardThumbRadius`]: {
		selector: '.entry-card .ct-image-container',
		type: 'spacing',
		variable: 'borderRadius',
		responsive: true
	},

	[`${prefix}_archive_order`]: {
		variable: 'avatarSize',
		unit: 'px',
		extractValue: value =>
			(
				value.find(
					component =>
						component.id === 'post_meta' &&
						component.has_author_avatar === 'yes' &&
						component.meta.author
				) || { avatar_size: 25 }
			).avatar_size
	}
})

export const getPostListingVariables = () =>
	getVariablesForPrefix(getListingPrefixFor())
