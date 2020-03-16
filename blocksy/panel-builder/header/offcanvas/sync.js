import { handleBackgroundOptionFor } from '../../../../static/js/customizer/sync/variables/background'
import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['offcanvas'] = {
			...handleBackgroundOptionFor({
				id: 'offcanvasBackground',
				selector: '#offcanvas'
			}),

			headerPanelShadow: {
				selector: '[data-behaviour*="side"]',
				type: 'box-shadow',
				variable: 'boxShadow',
				responsive: true
			}
		}
	}
)

ctEvents.on(
	'ct:header:sync:item:offcanvas',
	({ optionId, optionValue, values }) => {
		const selector = '#offcanvas'

		if (optionId === 'offcanvasContentAlignment') {
			document.querySelector(
				'#offcanvas .content-container'
			).firstElementChild.dataset.align = optionValue
		}

		if (
			optionId === 'offcanvas_behavior' ||
			optionId === 'side_panel_position'
		) {
			const el = document.querySelector('#offcanvas')

			ctEvents.trigger('ct:offcanvas:force-close', {
				container: document.querySelector(
					document.querySelector('.mobile-menu-toggle').hash
				),
				onClose: () =>
					document
						.querySelector('.mobile-menu-toggle')
						.firstElementChild.classList.remove('close')
			})

			setTimeout(() => {
				el.removeAttribute('data-behaviour')
				el.classList.add('ct-no-transition')

				requestAnimationFrame(() => {
					el.dataset.behaviour =
						values.offcanvas_behavior === 'modal'
							? 'modal'
							: `${values.side_panel_position}-side`

					setTimeout(() => {
						el.classList.remove('ct-no-transition')
					})
				})
			}, 300)
		}
	}
)
