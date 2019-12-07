import { getCache } from './helpers'
import { markImagesAsLoaded } from '../../frontend/lazy-load-helpers'

export const renderSidebarPosition = position => {
	document.querySelector(
		'main #primary > .ct-container'
	).dataset.sidebar = position
}

export const renderSidebar = (enabled, position) => {
	const sidebarEl = document.querySelector('main #primary > .ct-container')

	if (enabled === 'no') {
		if (sidebarEl.querySelector('aside')) {
			sidebarEl.removeChild(sidebarEl.querySelector('aside'))
		}

		document
			.querySelector('main #primary > .ct-container')
			.removeAttribute('data-sidebar')

		if (!document.body.classList.contains('single-product')) {
			document.body.classList.remove('sidebar')
		}

		return
	}

	if (sidebarEl.querySelector('aside')) {
		sidebarEl.removeChild(sidebarEl.querySelector('aside'))
	}

	const newHtml = getCache().querySelector(
		`.ct-customizer-preview-cache [data-id="sidebar"]`
	).innerHTML

	const e = document.createElement('div')
	e.innerHTML = newHtml

	while (e.firstElementChild) {
		sidebarEl.appendChild(e.firstElementChild)
	}

	document.querySelector(
		'main #primary > .ct-container'
	).dataset.sidebar = position

	document.body.classList.add('sidebar')

	ctEvents.trigger('ct:sidebar:update')
	markImagesAsLoaded(
		document.querySelector('main #primary > .ct-container aside')
	)
}
