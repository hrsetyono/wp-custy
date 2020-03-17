import ctEvents from 'ct-events'
import { typographyOption } from '../../../../static/js/customizer/sync/variables/typography'

ctEvents.on(
	'ct:footer:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['copyright'] = {
			...typographyOption({
				id: 'copyrightFont',
				selector: '.ct-footer-copyright'
			}),

			copyrightColor: [
				{
					selector: '.ct-footer-copyright',
					variable: 'color',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.ct-footer-copyright',
					variable: 'colorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			footerCopyrightAlignment: {
				selector: '[data-column="copyright"]',
				variable: 'alignment',
				responsive: true,
				unit: ''
			},

			copyrightMargin: {
				selector: '.ct-footer-copyright',
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true
			}
		}
	}
)

ctEvents.on('ct:footer:sync:item:copyright', ({ optionId, optionValue }) => {
	const selector = '[data-column="copyright"]'

	if (optionId === 'copyright_text') {
		document.querySelector('.ct-footer-copyright').innerHTML = optionValue
			.replace('{current_year}', new Date().getFullYear())
			.replace(
				'{theme_author}',
				ct_localizations.customizer_sync.theme_author
			)
			.replace(
				'{site_title}',
				ct_localizations.customizer_sync.site_title
			)
	}
})
