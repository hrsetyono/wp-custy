import { markImagesAsLoaded } from '../../../frontend/lazy-load-helpers'
import {
	getCache,
	getFreshHtmlFor,
	setRatioFor,
	checkAndReplace
} from '../helpers'
import ctEvents from 'ct-events'

checkAndReplace({
	id: 'has_shop_breadcrumbs',
	strategy: 'firstChild',

	parent_selector: '.woo-listing-top',
	selector: '.woocommerce-breadcrumb',
	fragment_id: 'shop-breadcrumbs'
})

checkAndReplace({
	id: 'has_product_breadcrumbs',
	strategy: 'firstChild',

	parent_selector: '#primary > [class*="ct-container"] > section',
	selector: '.woocommerce-breadcrumb',
	fragment_id: 'shop-breadcrumbs'
})

checkAndReplace({
	id: 'has_shop_sort',

	parent_selector: '.woo-listing-top',
	selector: '.woocommerce-ordering',
	fragment_id: 'shop-sort',
	whenInserted: () => ctEvents.trigger('ct:custom-select:init')
})

checkAndReplace({
	id: 'has_shop_results_count',

	parent_selector: '.woo-listing-top',
	selector: '.woocommerce-result-count',
	fragment_id: 'shop-results-count',

	strategy: 'maybeBefore:.woocommerce-ordering'
})

export const replaceCards = () => {
	if (!document.querySelector('.shop-entries')) {
		return
	}

	const cache = getCache()
	;[...document.querySelectorAll('.shop-entries')].map(
		el => (el.innerHTML = '')
	)
	;[...cache.querySelectorAll('[data-product-id]')].map(el => {
		const product = getFreshHtmlFor(
			el.dataset.productId,
			cache,
			'product-id'
		)

		while (product.firstElementChild) {
			document
				.querySelector('.shop-entries')
				.appendChild(product.firstElementChild)

			const article = document.querySelector('.shop-entries')
				.lastElementChild

			if (wp.customize('shop_structure')() === 'grid') {
				/*
				article.insertBefore(
					article.querySelector('.ct-image-container'),
					article.firstElementChild
				)
*/

				if (article.querySelector('.onsale')) {
					article.insertBefore(
						article.querySelector('.onsale'),
						article.querySelector('figure')
					)
				}

				if (article.querySelector('.star-rating')) {
					article.insertBefore(
						article.querySelector('.star-rating'),
						article.querySelector('figure')
					)
				}

				if (article.querySelector('.price')) {
					article
						.querySelector('.woo-card-actions')
						.insertBefore(
							article.querySelector('.price'),
							article.querySelector('.woo-card-actions')
								.firstElementChild
						)
				}

				if (article.querySelector('.woocommerce-loop-product__title')) {
					article.appendChild(
						article.querySelector(
							'.woocommerce-loop-product__title'
						)
					)
				}

				if (article.querySelector('.product-categories')) {
					article.appendChild(
						article.querySelector('.product-categories')
					)
				}

				if (article.querySelector('.woo-card-actions')) {
					article.appendChild(
						article.querySelector('.woo-card-actions')
					)
				}

				if (article.querySelector('.card-content')) {
					article.removeChild(article.querySelector('.card-content'))
				}

				if (article.querySelector('figure')) {
					// article.removeChild(article.querySelector('figure'))
				}
			}

			if (article.querySelector('.star-rating')) {
				if (wp.customize('has_star_rating')() === 'no') {
					article
						.querySelector('.star-rating')
						.parentNode.removeChild(
							article.querySelector('.star-rating')
						)
				}
			}

			if (article.querySelector('.onsale')) {
				if (wp.customize('has_sale_badge')() === 'no') {
					article
						.querySelector('.onsale')
						.parentNode.removeChild(
							article.querySelector('.onsale')
						)
				}
			}

			if (article.querySelector('.product-categories')) {
				if (wp.customize('has_product_categories')() === 'no') {
					article
						.querySelector('.product-categories')
						.parentNode.removeChild(
							article.querySelector('.product-categories')
						)
				}
			}

			if (wp.customize('shop_structure')() !== 'shop-simple') {
				setRatioFor(
					wp.customize('woocommerce_thumbnail_cropping')() ===
						'custom'
						? `${wp.customize(
								'woocommerce_thumbnail_cropping_custom_width'
						  )()}/${wp.customize(
								'woocommerce_thumbnail_cropping_custom_height'
						  )()}`
						: '1/1',
					article.querySelector('.ct-image-container .ct-ratio')
				)
			}

			ctEvents.trigger('ct:archive-product-replace-cards:update', {
				article
			})
		}
	})

	markImagesAsLoaded(document.querySelector('.shop-entries'))
}

wp.customize('has_product_categories', val => val.bind(to => replaceCards()))
wp.customize('has_star_rating', val => val.bind(to => replaceCards()))
wp.customize('has_sale_badge', val => val.bind(to => replaceCards()))

document.addEventListener('DOMContentLoaded', () => {
	ctEvents &&
		ctEvents.on('ct:archive-product-replace-cards:perform', () =>
			replaceCards()
		)
})
