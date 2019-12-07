import { handleBackgroundOptionFor } from '../../../../static/js/customizer/sync/variables/background'
import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/footer'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['search'] = {
			searchHeaderIconSize: {
				selector: '.ct-header-search',
				variable: 'iconSize',
				responsive: true,
				unit: 'px'
			},

			searchHeaderIconColor: [
				{
					selector: '.ct-header-search',
					variable: 'color',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.ct-header-search',
					variable: 'colorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			searchHeaderLinkColor: [
				{
					selector: '#search-modal',
					variable: 'color',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '#search-modal',
					variable: 'colorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			...handleBackgroundOptionFor({
				id: 'searchHeaderBackground',
				selector: '#search-modal'
			}),

			headerSearchMargin: {
				selector: '.ct-header-search',
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true
			}
		}
	}
)

ctEvents.on('ct:header:sync:item:search', ({ optionId, optionValue }) => {
	const selector = '[data-id="search"]'

	if (optionId === 'header_search_visibility') {
		updateAndSaveEl(selector, el =>
			responsiveClassesFor({ ...optionValue, desktop: true }, el)
		)
	}
})
