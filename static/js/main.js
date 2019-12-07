import './public-path.js'
import './frontend/polyfills'
import './frontend/lazy-load'
import './frontend/comments'
import { maybeMountPerfLogger } from './frontend/perf-log'
import { watchLayoutContainerForReveal } from './frontend/animated-element'
import { onDocumentLoaded, handleEntryPoints } from './helpers'
import { mountRenderHeaderLoop } from './frontend/header/render-loop'
import ctEvents from 'ct-events'

document.body.classList.remove('ct-no-js')

maybeMountPerfLogger()

onDocumentLoaded(() => {
	handleEntryPoints([
		{
			els: '[data-parallax]',
			load: () => import('./frontend/parallax/register-listener'),
			events: ['blocksy:parallax:init']
		},

		{
			els: '[data-share-network]',
			load: () => import('./frontend/social-buttons')
		},

		{
			els: 'body.single-product',
			load: () => import('./frontend/woocommerce/single-product-gallery'),
			forcedEvents: ['ct:flexy:update']
		},

		{
			els: [
				document.querySelector('select')
					? [document.querySelector('select')]
					: []
			],
			load: () => import('./frontend/choices'),
			events: ['ct:custom-select:init']
		},

		{
			els: '[data-footer-reveal]',
			load: () => import('./frontend/footer-reveal'),
			events: ['ct:footer-reveal:update']
		},

		{
			els: '.ct-quantity',
			load: () => import('./frontend/woocommerce/quantity-input'),
			events: ['ct:add-to-cart:update']
		},

		{
			els: 'body.ct-ajax-add-to-cart',
			load: () => import('./frontend/woocommerce/add-to-cart-single'),
			events: ['ct:add-to-cart:update']
		},

		{
			els: '.ct-back-to-top',
			load: () => import('./frontend/back-to-top-link'),
			events: ['ct:back-to-top:mount']
		},

		{
			els: '.share-box[data-type="type-2"]',
			load: () => import('./frontend/share-box'),
			events: ['ct:single:share-box:update']
		},

		{
			els: ['.entries[data-layout]', '.shop-entries[data-layout]'],
			condition: () =>
				!!document.querySelector(
					'.ct-pagination:not([data-type="simple"])'
				),
			load: () => import('./frontend/layouts/infinite-scroll'),
			beforeLoad: el => watchLayoutContainerForReveal(el)
		},

		{
			els: [
				[
					...document.querySelectorAll(
						'.search-form[data-live-results]'
					)
				].filter(
					el =>
						!el.matches(
							'[id="search-modal"] .search-form[data-live-results]'
						) &&
						!el.matches(
							'.ct-sidebar .ct-widget .woocommerce-product-search'
						)
				)
			],
			load: () => import('./frontend/search-implementation'),
			mount: ({ mount, el }) =>
				mount(el, {
					postType: el.querySelector('[name="post_type"]')
						? `ct_forced_${
								el.querySelector('[name="post_type"]').value
						  }`
						: 'ct_forced_post'
				})
		},

		{
			els:
				'.ct-sidebar .ct-widget .search-form:not(.woocommerce-product-search)',
			load: () => import('./frontend/search-implementation')
		},

		{
			els: '.ct-sidebar .ct-widget .woocommerce-product-search',
			load: () => import('./frontend/search-implementation'),
			mount: ({ mount, el }) =>
				mount(el, {
					postType: 'ct_forced_product'
				})
		},

		{
			els: '[id="search-modal"] .search-form[data-live-results]',
			condition: () =>
				!!document.querySelector(
					'header[data-device] [data-id="search"]'
				),
			load: () => import('./frontend/search-implementation'),
			mount: ({ mount, el }) =>
				mount(el, {
					mode: 'modal',
					perPage: 6
				})
		},

		{
			els: 'header[data-device="desktop"] [data-id*="menu"] > .menu',
			condition: () =>
				!!document.querySelector(
					'header[data-device="desktop"] [data-id*="menu"] .menu-item-has-children'
				),
			load: () => import('./frontend/header/menu'),
			mount: ({ handleFirstLevelForMenu, el }) =>
				handleFirstLevelForMenu(el),
			events: [
				'ct:header:update',
				...(window.wp && wp.customize ? ['ct:header:render-frame'] : [])
			]
		},

		{
			els: [
				'header[data-device="desktop"] [data-id*="menu"] > .menu .menu-item-has-children > .sub-menu',
				'header[data-device="desktop"] [data-id*="menu"] > .menu .page_item_has_children > .sub-menu'
			],
			load: () => import('./frontend/header/menu'),
			mount: ({ handleUpdate, el }) => handleUpdate(el),
			events: ['ct:header:update']
		},

		{
			els: 'header[data-device="desktop"] [data-id^="menu"]',
			load: () => import('./frontend/header/responsive-desktop-menu'),
			events: ['ct:header:render-frame']
		},

		// TODO: mount this listener on offcanvas open/close
		{
			els: '#offcanvas .child-indicator',
			load: () => import('./frontend/mobile-menu')
		},

		{
			els: [
				'.ct-modal-action',
				'#main-container > header .ct-header-search > a[href]'
			],

			load: () => import('./frontend/overlay'),
			events: ['ct:header:update']
		},

		{
			els: '.ct-header-cart',
			load: () => import('./frontend/woocommerce/mini-cart'),
			events: ['ct:header:update']
		}
	])

	setTimeout(() => document.body.classList.remove('ct-loading'), 1500)

	mountRenderHeaderLoop()
})

ctEvents.on('ct:overlay:handle-click', ({ e, el, options = {} }) => {
	import('./frontend/overlay').then(({ handleClick }) => {
		handleClick(e, {
			container: document.querySelector(el.hash),
			...options
		})
	})
})

const initOverlayTrigger = () => {
	if (document.querySelector('#offcanvas')) {
		if (!document.querySelector('#offcanvas').hasListener) {
			document.querySelector('#offcanvas').hasListener = true

			document
				.querySelector('#offcanvas')
				.addEventListener('click', event => {
					event.stopPropagation()
				})
		}
	}

	document.querySelector('.mobile-menu-toggle') &&
		document
			.querySelector('.mobile-menu-toggle')
			.addEventListener('click', event => {
				event.preventDefault()
				event.stopPropagation()

				document
					.querySelector('.mobile-menu-toggle')
					.firstElementChild.classList.toggle('close')

				import('./frontend/overlay').then(({ handleClick }) =>
					handleClick(event, {
						container: document.querySelector(
							document.querySelector('.mobile-menu-toggle').hash
						),
						onClose: () =>
							document.querySelector('.mobile-menu-toggle') &&
							document
								.querySelector('.mobile-menu-toggle')
								.firstElementChild.classList.remove('close')
					})
				)
			})
}

onDocumentLoaded(() => initOverlayTrigger())

ctEvents.on('ct:header:update', () => initOverlayTrigger())
