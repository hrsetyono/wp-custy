import { getCache, getFreshHtmlFor, checkAndReplace } from '../helpers'

wp.customize('gallery_style', val =>
	val.bind(to => {
		const product = document.querySelector('.product')
		if (!product) return

		product.classList.remove('thumbs-left')

		if (
			to !== 'horizontal' &&
			document.querySelector('.woocommerce-product-gallery__wrapper') &&
			document.querySelector('.woocommerce-product-gallery__wrapper')
				.children.length > 1
		) {
			product.classList.add('thumbs-left')
		}
	})
)

checkAndReplace({
	id: 'has_product_single_onsale',
	strategy: 'firstChild',

	selector: '.onsale',
	parent_selector: '.single-product .product',
	fragment_id: 'single-sale-flash'
})

checkAndReplace({
	id: 'has_product_single_rating',
	strategy: 'maybeBefore:.price',

	selector: '.woocommerce-product-rating',
	parent_selector: '.single-product .product .summary',
	fragment_id: 'single-rating'
})

checkAndReplace({
	id: 'has_product_single_meta',
	strategy: 'append',

	selector: '.product_meta',
	parent_selector: '.single-product .product .summary',
	fragment_id: 'single-meta'
})
