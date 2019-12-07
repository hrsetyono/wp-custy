import { handleBackgroundOptionFor } from '../../../../static/js/customizer/sync/variables/background'
import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { maybePromoteScalarValueIntoResponsive } from '../../../../static/js/customizer/components/responsive-controls'

export const handleRowVariables = ({ selector }) => ({
	headerRowHeight: {
		selector,
		variable: 'height',
		responsive: true,
		unit: 'px'
	},

	headerRowShadow: {
		selector,
		type: 'box-shadow',
		variable: 'boxShadow',
		responsive: true
	},

	...handleBackgroundOptionFor({
		id: 'headerRowBackground',
		selector
	}),

	headerRowTopBorder: {
		selector: `${selector}[data-border]:before`,
		variable: 'border',
		type: 'border',
		responsive: true
	},

	headerRowBottomBorder: {
		selector: `${selector}[data-border]:after`,
		variable: 'border',
		type: 'border',
		responsive: true
	}
})

const updateBorderFor = (
	selector,
	{
		headerRowTopBorder,
		headerRowTopBorderFullWidth,
		headerRowBottomBorder,
		headerRowBottomBorderFullWidth
	}
) => {
	updateAndSaveEl(selector, el => {
		el.removeAttribute('data-border')

		const top = maybePromoteScalarValueIntoResponsive(headerRowTopBorder)
		const bottom = maybePromoteScalarValueIntoResponsive(
			headerRowBottomBorder
		)

		const borderAttrs = []

		if (
			top.desktop.style !== 'none' ||
			top.tablet.style !== 'none' ||
			top.mobile.style !== 'none'
		) {
			borderAttrs.push(
				headerRowTopBorderFullWidth === 'yes' ? 'top-full' : 'top'
			)
		}

		if (
			bottom.desktop.style !== 'none' ||
			bottom.tablet.style !== 'none' ||
			bottom.mobile.style !== 'none'
		) {
			borderAttrs.push(
				headerRowBottomBorderFullWidth === 'yes'
					? 'bottom-full'
					: 'bottom'
			)
		}

		if (borderAttrs.length > 0) {
			el.dataset.border = borderAttrs.join(':')
		}
	})
}

export const handleRowOptions = ({
	selector,
	changeDescriptor: { optionId, optionValue, values }
}) => {
	if (optionId === 'headerRowWidth') {
		updateAndSaveEl(selector, el => {
			el.firstElementChild.classList.remove(
				'ct-container',
				'ct-container-fluid'
			)

			el.firstElementChild.classList.add(
				optionValue !== 'fixed' ? 'ct-container-fluid' : 'ct-container'
			)
		})
	}

	if (
		optionId === 'headerRowBottomBorderFullWidth' ||
		optionId === 'headerRowBottomBorder' ||
		optionId === 'headerRowTopBorderFullWidth' ||
		optionId === 'headerRowTopBorder'
	) {
		updateBorderFor(selector, values)
	}
}

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['middle-row'] = handleRowVariables({
			selector: 'header [data-row="middle"]'
		})
	}
)

ctEvents.on('ct:header:sync:item:middle-row', changeDescriptor =>
	handleRowOptions({ selector: 'header [data-row="middle"]', changeDescriptor })
)
