import './public-path'
import {
	createElement,
	render,
	unmountComponentAtNode
} from '@wordpress/element'
import { defineCustomizerControl } from './controls/utils.js'
import { listenToChanges } from './customizer-color-scheme.js'
import './preview-events'
import { listenToVariables } from './customizer-variables'
import './reset'
import { initAllPanels } from '../options/initPanels'

import { initBuilder } from './panels-builder'

import Options from './controls/options.js'
import { initWidget } from '../backend/widgets'

import $ from 'jquery'

listenToChanges()
listenToVariables()

defineCustomizerControl('ct-options', Options)

if ($ && $.fn) {
	$(document).on('widget-added', (event, widget) => {
		initWidget(widget[0])
	})
}

document.addEventListener('DOMContentLoaded', () => {
	initAllPanels()
	initBuilder()

	Object.values(wp.customize.control._value)
		.filter(({ params: { type } }) => type === 'ct-options')
		.map(control => {
			if (wp.customize.section(control.section)) {
				wp.customize
					.section(control.section)
					.container.on('keydown', function(event) {
						console.log('here')
						return

						// Pressing the escape key fires a theme:collapse event
						if (27 === event.keyCode) {
							if (section.$body.hasClass('modal-open')) {
								// Escape from the details modal.
								section.closeDetails()
							} else {
								// Escape from the inifinite scroll list.
								section.headerContainer
									.find('.customize-themes-section-title')
									.focus()
							}
							event.stopPropagation() // Prevent section from being collapsed.
						}
					})
			}

			;(wp.customize.panel(control.section())
				? wp.customize.panel
				: wp.customize.section)(control.section(), section => {
				section.expanded.bind(value => {
					if (value) {
						const ChildComponent = Options

						let MyChildComponent = Options

						// block | inline
						let design = 'none'

						render(
							<MyChildComponent
								id={control.id}
								onChange={v => control.setting.set(v)}
								value={control.setting.get()}
								option={control.params.option}>
								{props => <ChildComponent {...props} />}
							</MyChildComponent>,

							control.container[0]
						)

						return
					}

					setTimeout(() => {
						unmountComponentAtNode(control.container[0])
					}, 500)
				})
			})
		})

	if ($ && $.fn) {
		$(document).on('click', '[data-trigger-section]', e => {
			e.preventDefault()

			wp.customize[
				wp.customize.section(e.target.dataset.triggerSection)
					? 'section'
					: 'panel'
			](e.target.dataset.triggerSection).expand()
		})
	}
})
