import ctEvents from 'ct-events'
import $ from 'jquery'
import { onDocumentLoaded } from '../helpers'

onDocumentLoaded(() => {
	let lz = null

	$ &&
		$(window).on('elementor/frontend/init', () => {
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/global',
				() => ctEvents.trigger('ct:images:lazyload:update')
			)
		})

	if (document.querySelector('img[data-lazy]')) {
		import('vanilla-lazyload').then(({ default: lazyload }) => {
			lz = new lazyload({
				data_src: 'lazy',
				data_srcset: 'lazy-set',

				elements_selector: 'img[data-lazy]',

				callback_set(img) {
					objectFitPolyfill()
				},

				callback_load(img) {
					let container = img.closest('.ct-image-container')

					let action = () => {
						if (!container) return

						container.classList.remove('ct-lazy')
						container.classList.add('ct-lazy-loading-start')

						requestAnimationFrame(() => {
							container.classList.remove('ct-lazy-loading-start')
							container.classList.add('ct-lazy-loading')

							whenTransitionEnds(
								container.firstElementChild,
								() => {
									container.classList.remove(
										'ct-lazy-loading'
									)
									container.classList.add('ct-lazy-loaded')
								}
							)
						})
					}

					if (
						navigator.userAgent.toLowerCase().indexOf('firefox') >
						-1
					) {
						setTimeout(action, 500)
					} else {
						action()
					}
				}
			})
		})
	}

	ctEvents.on('ct:images:lazyload:update', () => {
		$ && $('body').trigger('jetpack-lazy-images-load')
		lz && lz.update()
	})
})

function whenTransitionEnds(el, cb) {
	const end = () => {
		el.removeEventListener('transitionend', onEnd)
		cb()
	}

	const onEnd = e => {
		if (e.target === el) {
			end()
		}
	}

	el.addEventListener('transitionend', onEnd)
}
