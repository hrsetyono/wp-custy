import { typographyOption } from '../../../../static/js/customizer/sync/variables/typography'
import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/footer'

export const handleMenuVariables = ({ selector }) => ({
	headerMenuItemsSpacing: {
		selector,
		variable: 'menuItemsSpacing',
		unit: 'px'
	},

	headerMenuItemsHeight: {
		selector: `${selector} > ul`,
		variable: 'height',
		unit: '%'
	},

	...typographyOption({
		id: 'headerMenuFont',
		selector: `${selector} ul`
	}),

	menuFontColor: [
		{
			selector: `${selector} > ul > li > a`,
			variable: 'color',
			type: 'color:default',
		},

		{
			selector: `${selector} > ul > li > a`,
			variable: 'colorHover',
			type: 'color:hover',
		},

		{
			selector: `${selector} > ul > li > a`,
			variable: 'colorHoverType3',
			type: 'color:hover',
		}
	],

	menuIndicatorColor: {
		selector,
		variable: 'menuIndicatorActiveColor',
		type: 'color:active',
		responsive: true
	},

	dropdownTopOffset: {
		selector: `${selector} .sub-menu`,
		variable: 'marginTop',
		unit: 'px'
	},

	dropdownMenuWidth: {
		selector: `${selector} .sub-menu`,
		variable: 'width',
		unit: 'px'
	},

	dropdownItemsSpacing: {
		selector: `${selector} .sub-menu li`,
		variable: 'padding',
		unit: 'px'
	},

	...typographyOption({
		id: 'headerDropdownFont',
		selector: `${selector} .sub-menu`
	}),

	headerDropdownFontColor: [
		{
			selector: `${selector} .sub-menu`,
			variable: 'color',
			type: 'color:default',
			responsive: true
		},

		{
			selector: `${selector} .sub-menu`,
			variable: 'colorHover',
			type: 'color:hover',
			responsive: true
		}
	],

	headerDropdownBackground: {
		selector: `${selector} .sub-menu`,
		variable: 'backgroundColor',
		type: 'color:default',
		responsive: true
	},

	headerDropdownDivider: {
		selector: `${selector} .sub-menu`,
		variable: 'dropDownDivider',
		type: 'border'
	},

	headerMenuMargin: {
		selector,
		type: 'spacing',
		variable: 'margin',
		responsive: true,
		important: true
	},

	headerDropdownShadow: {
		selector: `${selector} .sub-menu`,
		type: 'box-shadow',
		variable: 'boxShadow',
		responsive: true
	},

	headerDropdownRadius: {
		selector: `${selector} .sub-menu`,
		type: 'spacing',
		variable: 'borderRadius',
		responsive: true
	}
})

export const handleMenuOptions = ({
	selector,
	changeDescriptor: { optionId, optionValue }
}) => {
	if (optionId === 'header_menu_type') {
		updateAndSaveEl(selector, el => (el.dataset.type = optionValue))
	}

	if (optionId === 'headerMenuItemsSpacing') {
		ctEvents.trigger('ct:header:update')
		ctEvents.trigger('ct:header:render-frame')
	}

	if (optionId === 'dropdown_animation') {
		updateAndSaveEl(
			selector,
			el => (el.dataset.dropdownAnimation = optionValue)
		)
	}

	if (optionId === 'stretch_menu') {
		updateAndSaveEl(selector, el => {
			el.removeAttribute('data-stretch')

			if (optionValue === 'yes') {
				el.dataset.stretch = ''
			}
		})
	}
}

ctEvents.on('ct:header:sync:item:menu', changeDescriptor => {
	const selector = '[data-id="menu"]'
	handleMenuOptions({ selector, changeDescriptor })
})

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['menu'] = handleMenuVariables({
			selector: '[data-id="menu"]'
		})
	}
)
