import { typographyOption } from '../../../../static/js/customizer/sync/variables/typography'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import ctEvents from 'ct-events'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/footer'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['logo'] = {
			logoMaxHeight: {
				selector: '.custom-logo-link',
				variable: 'maxHeight',
				responsive: true,
				unit: 'px'
			},

			...typographyOption({
				id: 'siteTitle',
				selector: '.site-title'
			}),

			siteTitleColor: [
				{
					selector: '.site-title',
					variable: 'color',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.site-title',
					variable: 'colorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			...typographyOption({
				id: 'siteTagline',
				selector: '.site-description'
			}),

			siteTaglineColor: {
				selector: '.site-description',
				variable: 'color',
				type: 'color:default',
				responsive: true
			},

			headerLogoMargin: {
				selector: '.site-branding',
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true
			}
		}
	}
)

ctEvents.on('ct:header:sync:item:logo', ({ optionId, optionValue }) => {
	const selector = '[data-id="logo"]'

	if (optionId === 'blogdescription') {
		updateAndSaveEl(selector, el => {
			el.querySelector('.site-description') &&
				(el.querySelector('.site-description').innerHTML = optionValue)
		})
	}

	if (optionId === 'tagline_visibility') {
		updateAndSaveEl(selector, el => {
			responsiveClassesFor(
				{ ...optionValue, desktop: true },
				el.querySelector('.site-description')
			)
		})
	}
})
