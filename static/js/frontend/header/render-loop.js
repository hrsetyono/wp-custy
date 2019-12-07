import ctEvents from 'ct-events'
import { getCurrentScreen } from '../helpers/current-screen'

window.__TEMPLATES_MAP__ = {
	offcanvas: {},
	headers: {}
}

const renderHeader = () => {
	let el = document.querySelector('#main-container > header')

	if (
		el &&
		(!getCurrentScreen() || el.dataset.device !== getCurrentScreen())
	) {
		if (__TEMPLATES_MAP__.headers[getCurrentScreen()]) {
			let toReplace = document.createElement('div')
			toReplace.innerHTML = __TEMPLATES_MAP__.headers[getCurrentScreen()]

			el.parentNode.replaceChild(toReplace.childNodes[0], el)
		}

		if (__TEMPLATES_MAP__.offcanvas[getCurrentScreen()]) {
			let offcanvas = document.querySelector('.ct-offcanvas-container')

			if (offcanvas) {
				offcanvas.innerHTML =
					__TEMPLATES_MAP__.offcanvas[getCurrentScreen()]
				offcanvas.dataset.mode = getCurrentScreen()
			}
		}

		ctEvents.trigger('ct:header:update')
	}

	ctEvents.trigger('ct:header:render-frame')

	requestAnimationFrame(renderHeader)
}

const fillTemplatesStorage = () => {
	if (!document.querySelector('script[id*="ct-header-template"]')) {
		return false
	}

	;[...document.querySelectorAll('script[id*="ct-header-template"]')].map(
		tmpl => {
			__TEMPLATES_MAP__.headers[
				tmpl.id.replace('ct-header-template-', '')
			] = tmpl.innerHTML
			tmpl.parentNode.removeChild(tmpl)
		}
	)
	;[
		...document.querySelectorAll(
			'script[id*="ct-header-offcanvas-template"]'
		)
	].map(tmpl => {
		__TEMPLATES_MAP__.offcanvas[
			tmpl.id.replace('ct-header-offcanvas-template-', '')
		] = tmpl.innerHTML

		tmpl.parentNode.removeChild(tmpl)
	})

	return true
}

export const mountRenderHeaderLoop = () => {
	if (!fillTemplatesStorage()) {
		return
	}

	if (window.wp && wp && wp.customize && wp.customize.selectiveRefresh) {
		wp.customize.selectiveRefresh.bind('render-partials-response', e => {
			let idToLookInto = {}

			if (
				e.contents &&
				Object.keys(e.contents).find(
					id =>
						id.indexOf(':') > -1 &&
						id.indexOf('header_placements_item') > -1
				)
			) {
				const futureId = Object.keys(e.contents).find(
					id =>
						id.indexOf(':') > -1 &&
						id.indexOf('header_placements_item') > -1
				)

				idToLookInto[futureId] = e.contents[futureId]
			}

			if (
				e.partial &&
				e.partial.params.settings.indexOf('header_placements') > -1 &&
				e.partial.id.indexOf(':') > -1
			) {
				idToLookInto[e.partial.id] = e.addedContent
			}

			Object.keys(idToLookInto).map(id => {
				const [_, itemId, maybeDevice] = id.split(':')

				;(maybeDevice ? [maybeDevice] : ['desktop', 'mobile']).map(
					device => {
						const div = document.createElement('div')
						div.innerHTML = __TEMPLATES_MAP__.headers[device]

						const item = div.querySelector(`[data-id="${itemId}"]`)
						if (!item) return
						const futureItem = document.createElement('div')

						futureItem.innerHTML = idToLookInto[id]

						item.parentNode.replaceChild(
							futureItem.firstElementChild,
							item
						)

						__TEMPLATES_MAP__.headers[device] = div.innerHTML
					}
				)
			})

			if (e.contents) {
				if (e.contents.header_placements_1) {
					__TEMPLATES_MAP__.headers.desktop =
						e.contents.header_placements_1
				}

				if (e.contents.header_placements_2) {
					__TEMPLATES_MAP__.headers.mobile =
						e.contents.header_placements_2
				}
			}
		})

		wp.customize.selectiveRefresh.bind('partial-content-rendered', e => {
			ctEvents.trigger('ct:header:update')
			ctEvents.trigger('ct:header:render-frame')
		})
	}

	requestAnimationFrame(renderHeader)
}

export const updateAndSaveEl = (selector, cb) => {
	;[
		...document.querySelectorAll(`header[data-device] ${selector}`),
		...document.querySelectorAll(`#offcanvas ${selector}`)
	].map(el => cb(el))
	;['desktop', 'mobile'].map(device => {
		const div = document.createElement('div')
		div.innerHTML = __TEMPLATES_MAP__.headers[device]

		const item = div.querySelector(selector)

		if (!item) return
		const futureItem = document.createElement('div')
		futureItem.appendChild(item.cloneNode(true))

		cb(futureItem.firstElementChild)

		item.parentNode.replaceChild(futureItem.firstElementChild, item)

		__TEMPLATES_MAP__.headers[device] = div.innerHTML
	})
}
