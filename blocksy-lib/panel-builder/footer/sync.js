import { handleBackgroundOptionFor } from '../../../static/js/customizer/sync/variables/background'
import ctEvents from 'ct-events'

ctEvents.on(
	'ct:footer:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['global'] = {
			footerShadow: {
				selector: '.site-footer:before',
				type: 'box-shadow',
				variable: 'boxShadow',
				responsive: true
			},

			...handleBackgroundOptionFor({
				id: 'footerBackground',
				selector: 'footer'
			})
		}
	}
)

ctEvents.on('ct:footer:sync:item:global', changeDescriptor => {
	if (changeDescriptor.optionId === 'has_reveal_effect') {
		const footer = document.querySelector('.site-footer')
		footer.removeAttribute('style')
		footer.removeAttribute('data-footer-reveal')

		if (changeDescriptor.optionValue !== 'yes') return

		document.body.classList.add('footer-reveal')
		footer.dataset.footerReveal = 'no'

		ctEvents.trigger('ct:footer-reveal:update')
	}
})
