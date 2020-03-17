import { createElement, Component } from '@wordpress/element'
import TooltipTrigger from 'react-popper-tooltip'

const Tooltip = ({ children, tooltips, hideArrow, ...props }) => (
	<TooltipTrigger
		{...props}
		portalContainer={document.body}
		tooltip={({
			arrowRef,
			tooltipRef,
			getArrowProps,
			getTooltipProps,
			placement
		}) => (
			<div
				{...getTooltipProps({
					ref: tooltipRef,
					className: 'tooltip-container'
				})}>
				{!hideArrow && (
					<div
						{...getArrowProps({
							ref: arrowRef,
							className: 'tooltip-arrow',
							'data-placement': placement
						})}
					/>
				)}
				{tooltips}
			</div>
		)}>
		{({ getTriggerProps, triggerRef }) => (
			<span
				{...getTriggerProps({
					ref: triggerRef,
					className: 'trigger'
				})}>
				{children}
			</span>
		)}
	</TooltipTrigger>
)

export default Tooltip
