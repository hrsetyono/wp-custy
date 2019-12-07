import { setRatioFor } from '../helpers'

wp.customize('gallery_style', val =>
	val.bind(to => {
		if (!document.body.classList.contains('single-product')) {
			return
		}

		const article = document.querySelector('.product.type-product')

		article.classList.remove('thumbs-left')

		if (to !== 'horizontal' && article.querySelector('.flexy-items')) {
			article.classList.add('thumbs-left')
		}
	})
)

wp.customize('product_gallery_ratio', val =>
	val.bind(to => {
		if (!document.body.classList.contains('single-product')) {
			return
		}

		const article = document.querySelector('.product.type-product')

		let thumb_ratio = (to || '4/3').split('/')
		;[
			...article.querySelectorAll(
				'.flexy-items .ct-image-container .ct-ratio, .ct-product-view > .ct-image-container .ct-ratio'
			)
		].map(el => setRatioFor(to, el))
	})
)
