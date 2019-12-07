export const markImagesAsLoaded = el =>
	[...el.querySelectorAll('.ct-image-container.ct-lazy')].map(el => {
		el
			.querySelector('img')
			.setAttribute('src', el.querySelector('img').dataset.lazy)

		if (el.querySelector('img').dataset.lazySet) {
			el
				.querySelector('img')
				.setAttribute('srcset', el.querySelector('img').dataset.lazySet)
		}

		el.classList.remove('ct-lazy')
		el.classList.add('ct-lazy-loaded')
	})
