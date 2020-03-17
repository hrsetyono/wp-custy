import ctEvents from 'ct-events'
import { getCache } from '../../../../static/js/customizer/sync/helpers'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/footer'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['socials'] = {
			socialsIconSize: {
				selector: '.ct-header-socials',
				variable: 'iconSize',
				responsive: true,
				unit: 'px'
			},

			socialsIconSpacing: {
				selector: '.ct-header-socials',
				variable: 'spacing',
				responsive: true,
				unit: 'px'
			},

			headerSocialsIconColor: [
				{
					selector: '.ct-header-socials',
					variable: 'color',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.ct-header-socials',
					variable: 'colorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			headerSocialsIconBackground: [
				{
					selector: '.ct-header-socials',
					variable: 'backgroundColor',
					type: 'color:default',
					responsive: true
				},

				{
					selector: '.ct-header-socials',
					variable: 'backgroundColorHover',
					type: 'color:hover',
					responsive: true
				}
			],

			headerSocialsMargin: {
				selector: '.ct-header-socials',
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true
			}
		}
	}
)

ctEvents.on(
	'ct:header:sync:item:socials',
	({ optionId, optionValue, values }) => {
		const selector = '[data-id="socials"]'

		if (optionId === 'socialsType' || optionId === 'socialsFillType') {
			updateAndSaveEl(selector, el => {
				el.querySelector('.ct-social-box').dataset.icons =
					values.socialsType === 'simple'
						? 'simple'
						: `${values.socialsType}-${values.socialsFillType}`
			})
		}

		if (optionId === 'header_socials') {
			updateAndSaveEl(selector, el => {
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
			})
		}

		if (optionId === 'visibility') {
			updateAndSaveEl(selector, el =>
				responsiveClassesFor({ ...optionValue, desktop: true }, el)
			)
		}

		if (optionId === 'headerSocialsColor') {
			updateAndSaveEl(
				selector,
				el =>
					(el.querySelector(
						'.ct-social-box'
					).dataset.iconsColor = optionValue)
			)
		}
	}
)
