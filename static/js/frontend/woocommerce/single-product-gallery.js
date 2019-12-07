import { Flexy } from 'flexy'
import $ from 'jquery'

export const mount = () => {
	const wc_single_product_params = {
		i18n_required_rating_text: 'Please select a rating',
		review_rating_required: 'yes',
		flexslider: {
			rtl: false,
			animation: 'slide',
			smoothHeight: true,
			directionNav: false,
			controlNav: 'thumbnails',
			slideshow: false,
			animationSpeed: 500,
			animationLoop: false,
			allowOneSlide: false
		},
		zoom_enabled: '',
		zoom_options: [],
		photoswipe_enabled: '1',
		photoswipe_options: {
			shareEl: false,
			closeOnScroll: false,
			history: false,
			hideAnimationDuration: 0,
			showAnimationDuration: 0
		},
		flexslider_enabled: '1'
	}

	const openPhotoswipeFor = el => {
		var pswpElement = $('.pswp')[0],
			eventTarget = $(el),
			clicked = eventTarget

		const items = [
			...el
				.closest('.ct-product-view')
				.querySelectorAll(
					'.flexy-items .ct-image-container img, .ct-product-view > .ct-image-container img'
				)
		].map(img => ({
			src: img.src,
			w: img.width,
			h: img.height,
			title: img.getAttribute('title')
		}))

		var options = $.extend(
			{
				index: $(clicked).index(),
				addCaptionHTMLFn: function(item, captionEl) {
					if (!item.title) {
						captionEl.children[0].textContent = ''
						return false
					}
					captionEl.children[0].textContent = item.title
					return true
				}
			},
			wc_single_product_params.photoswipe_options
		)

		// Initializes and opens PhotoSwipe.
		var photoswipe = new PhotoSwipe(
			pswpElement,
			PhotoSwipeUI_Default,
			items,
			options
		)

		photoswipe.init()
	}

	const renderPhotoswipe = () =>
		[
			...document.querySelectorAll(
				'.product.type-product .flexy-items .ct-image-container, .product.type-product .ct-product-view > .ct-image-container'
			)
		].map(el =>
			el.addEventListener('click', e => {
				e.preventDefault()
				window.PhotoSwipe && openPhotoswipeFor(el)
			})
		)

	renderPhotoswipe()

	const renderFlexy = () =>
		[
			...document.querySelectorAll('.flexy-container[data-flexy*="no"]')
		].map(sliderEl => {
			sliderEl = sliderEl.parentNode

			const inst = new Flexy(sliderEl.querySelector('.flexy-items'), {
				flexyAttributeEl: sliderEl.querySelector('.flexy-container'),
				elementsThatDoNotStartDrag: ['.twentytwenty-handle'],

				/*
				autoplay:
					Object.keys(
						el.querySelector('.flexy-container').dataset
					).indexOf('autoplay') > -1 &&
					parseInt(
						el.querySelector('.flexy-container').dataset.autoplay,
						10
					)
						? el.querySelector('.flexy-container').dataset.autoplay
						: false,
*/

				pillsContainerSelector: sliderEl.querySelector('.flexy-pills'),
				// leftArrow: sliderEl.querySelector('.flexy-arrow-prev'),
				// rightArrow: sliderEl.querySelector('.flexy-arrow-next'),
				scaleRotateEffect: false,

				// viewport | container
				wrapAroundMode:
					sliderEl.querySelector('.flexy-container').dataset.wrap ===
					'viewport'
						? 'viewport'
						: 'container'
			})

			sliderEl.flexy = inst
		})

	renderFlexy()

	ctEvents.on('ct:flexy:update', () => {
		renderFlexy()
	})

	if ($ && $.fn) {
		if ($.fn.wc_variations_image_update) {
			const old = $.fn.wc_variations_image_update

			$.fn.wc_variations_image_update = function(variation) {
				if (!variation) {
					this[0].closest('.product').querySelector('.flexy-pills') &&
						this[0]
							.closest('.product')
							.querySelector('.flexy-pills')
							.firstElementChild.click()
				} else {
					if (
						this[0]
							.closest('.product')
							.querySelector(`.flexy-pills`)
					) {
						const maybePillImage = this[0]
							.closest('.product')
							.querySelector(
								`.flexy-items [srcset*="${variation.image.src}"]`
							)

						if (maybePillImage) {
							const pill = this[0]
								.closest('.product')
								.querySelector(`.flexy-pills`).children[
								[
									...this[0]
										.closest('.product')
										.querySelector(`.flexy-items`).children
								].indexOf(maybePillImage.closest('div'))
							]

							pill && pill.click()
						}
					}
				}

				old && old.apply(this, arguments)
			}
		}
	}
}
