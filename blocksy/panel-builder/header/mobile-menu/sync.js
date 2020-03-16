import { typographyOption } from '../../../../static/js/customizer/sync/variables/typography'
import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['mobile-menu'] = {
			...typographyOption({
				id: 'mobileMenuFont',
				selector: '.mobile-menu'
			}),

			mobileMenuColor: [
				{
					selector: '.mobile-menu',
					variable: 'color',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.mobile-menu',
					variable: 'colorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			mobileMenuMargin: {
				selector: '[data-id="mobile-menu"]',
				type: 'spacing',
				variable: 'margin',
				responsive: true
			}
		}
	}
)

ctEvents.on('ct:header:sync:item:mobile-menu', ({ optionId, optionValue }) => {
	const selector = '[data-id="mobile-menu"]'

	if (optionId === 'mobile_menu_type') {
		updateAndSaveEl(selector, el => (el.dataset.type = optionValue))
	}
})
