import { getCache } from './helpers'
import { markImagesAsLoaded } from '../../frontend/lazy-load-helpers'

export const stackingClassesFor = (
	id,
	el,
	attr = 'stack',
	condition = true
) => {
	el.removeAttribute(
		`data-${attr.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)}`
	)

	if (!condition) return

	const data = wp.customize(id)() || {
		desktop: true,
		mobile: true,
		tablet: true
	}

	if (data.mobile || data.tablet || data.desktop) {
		el.dataset[attr] = [
			...(data.desktop ? ['desktop'] : []),
			...(data.tablet ? ['tablet'] : []),
			...(data.mobile ? ['mobile'] : [])
		].join(':')
	}
}

export const responsiveClassesFor = (data, el) => {
	el.classList.remove('ct-hidden-sm', 'ct-hidden-md', 'ct-hidden-lg')

	if (typeof data !== 'object') {
		if (!wp.customize(data)) return

		data = wp.customize(data)() || {
			mobile: false,
			tablet: true,
			desktop: true
		}
	}

	if (!data.mobile) {
		el.classList.add('ct-hidden-sm')
	}

	if (!data.tablet) {
		el.classList.add('ct-hidden-md')
	}

	if (!data.desktop) {
		el.classList.add('ct-hidden-lg')
	}
}

wp.customize('footer_reveal', val =>
	val.bind(to => {
		const footer = document.querySelector('.site-footer')
		footer.removeAttribute('style')
		footer.removeAttribute('data-footer-reveal')

		if (to !== 'yes') return

		document.body.classList.add('footer-reveal')
		footer.dataset.footerReveal = 'no'

		ctEvents.trigger('ct:footer-reveal:update')
	})
)
