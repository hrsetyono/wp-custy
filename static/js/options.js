import './public-path'
import $ from 'jquery'
import { initAllPanels } from './options/initPanels'
import { initWidget } from './backend/widgets'

if ($ && $.fn) {
	$(document).on('widget-added', (event, widget) => {
		initWidget(widget[0])
	})
}

document.addEventListener('DOMContentLoaded', () => {
	initAllPanels()
	;[
		...document.querySelectorAll('.notice-blocksy-plugin'),
		...document.querySelectorAll('[data-dismiss]')
	].map(el => import('./notification/main').then(({ mount }) => mount(el)))
})
