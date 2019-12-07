import ctEvents from 'ct-events'
import { getCache } from '../../../../static/js/customizer/sync/helpers'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/footer'

ctEvents.on(
	'ct:footer:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['socials'] = {
			socialsIconSize: {
				selector: '.ct-footer-socials',
				variable: 'iconSize',
				responsive: true,
				unit: 'px'
			},

			socialsIconSpacing: {
				selector: '.ct-footer-socials',
				variable: 'spacing',
				responsive: true,
				unit: 'px'
			},

			footerSocialsAlignment: {
				selector: '[data-column="socials"]',
				variable: 'alignment',
				responsive: true,
				unit: ''
			},

			footerSocialsIconColor: [
				{
					selector: '.ct-footer-socials',
					variable: 'color',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.ct-footer-socials',
					variable: 'colorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			footerSocialsIconBackground: [
				{
					selector: '.ct-footer-socials',
					variable: 'backgroundColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.ct-footer-socials',
					variable: 'backgroundColorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			footerSocialsMargin: {
				selector: '.ct-footer-socials',
				type: 'spacing',
				variable: 'margin',
				responsive: true
				// important: true
			}
		}
	}
)

ctEvents.on(
	'ct:footer:sync:item:socials',
	({ optionId, optionValue, values }) => {
		const selector = '.site-footer [data-column="socials"]'

		const el = document.querySelector(selector).firstElementChild

		if (optionId === 'socialsType' || optionId === 'socialsFillType') {
			el.querySelector('.ct-social-box').dataset.icons =
				values.socialsType === 'simple'
					? 'simple'
					: `${values.socialsType}-${values.socialsFillType}`
		}

		if (optionId === 'footer_socials') {
			const newHtml = getCache().querySelector(
				`.ct-customizer-preview-cache [data-id="socials-general-cache"]`
			).innerHTML

			const cache = document.createElement('div')
			cache.innerHTML = newHtml

			el.querySelector('.ct-social-box').innerHTML = ''

			optionValue.map(({ id, enabled }) => {
				if (!enabled) return

				el.querySelector('.ct-social-box').appendChild(
					cache.querySelector(`[data-network=${id}]`)
				)
			})
		}

		if (optionId === 'footerSocialsColor') {
			el.querySelector('.ct-social-box').dataset.iconsColor = optionValue
		}
	}
)
