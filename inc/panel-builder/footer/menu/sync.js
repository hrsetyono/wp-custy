import { typographyOption } from '../../../../static/js/customizer/sync/variables/typography'
import ctEvents from 'ct-events'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/footer'

export const handleMenuVariables = ({ selector }) => ({
	footerMenuItemsSpacing: {
		selector,
		variable: 'menuItemsSpacing',
		responsive: true,
		unit: 'px'
	},

	footerMenuAlignment: {
		selector: '[data-column="menu"]',
		variable: 'alignment',
		responsive: true,
		unit: ''
	},

	...typographyOption({
		id: 'footerMenuFont',
		selector: `${selector} ul`
	}),

	footerMenuFontColor: [
		{
			selector: `${selector} > ul > li > a`,
			variable: 'color',
			type: 'color:default'
		},

		{
			selector: `${selector} > ul > li > a`,
			variable: 'colorHover',
			type: 'color:hover'
		}
	],

	footerMenuMargin: {
		selector,
		type: 'spacing',
		variable: 'margin',
		responsive: true,
		important: true
	}
})

export const handleMenuOptions = ({
	selector,
	changeDescriptor: { optionId, optionValue }
}) => {
	const el = document.querySelector('.footer-menu')

	if (optionId === 'stretch_menu') {
		el.removeAttribute('data-stretch')

		if (optionValue === 'yes') {
			el.dataset.stretch = ''
		}
	}
}

ctEvents.on('ct:footer:sync:item:menu', changeDescriptor => {
	const selector = '.footer-menu'
	handleMenuOptions({ selector, changeDescriptor })
})

ctEvents.on(
	'ct:footer:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['menu'] = handleMenuVariables({
			selector: '.footer-menu'
		})
	}
)
