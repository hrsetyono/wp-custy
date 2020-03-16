import { typographyOption } from '../../../../static/js/customizer/sync/variables/typography'
import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/footer'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['text'] = {
			headerTextMaxWidth: {
				selector: '.ct-header-text',
				variable: 'maxWidth',
				responsive: true,
				unit: '%'
			},

			...typographyOption({
				id: 'headerTextFont',
				selector: '.ct-header-text'
			}),

			headerTextColor: [
				{
					selector: '.ct-header-text',
					variable: 'color',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.ct-header-text',
					variable: 'colorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			headerTextMargin: {
				selector: '.ct-header-text',
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true
			}
		}
	}
)

ctEvents.on('ct:header:sync:item:text', ({ optionId, optionValue }) => {
	const selector = '[data-id="text"]'

	if (optionId === 'visibility') {
		updateAndSaveEl(selector, el =>
			responsiveClassesFor({ ...optionValue, desktop: true }, el)
		)
	}

	if (optionId === 'header_text') {
		updateAndSaveEl(selector, el => {
			el.querySelector('.entry-content').innerHTML = optionValue
		})
	}
})
