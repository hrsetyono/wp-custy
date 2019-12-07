import { createElement, useContext } from '@wordpress/element'
import { __ } from 'ct-i18n'
import cls from 'classnames'
import DraggableItems from './DraggableItems'
import { PanelContext } from '../../../options/components/PanelLevel'

const PrimaryPlacement = ({ placementName, bar, direction }) => {
	const placement = bar.placements.find(({ id }) => id === placementName)

	let placementsToRender = [placement]

	if (placementName !== 'middle') {
		const middle = bar.placements.find(({ id }) => id === 'middle')

		if (middle && middle.items.length > 0) {
			if (placementName === 'start') {
				const startMiddle = bar.placements.find(
					({ id }) => id === 'start-middle'
				)

				placementsToRender = [placement, startMiddle]
			}

			if (placementName === 'end') {
				const endMiddle = bar.placements.find(
					({ id }) => id === 'end-middle'
				)

				placementsToRender = [endMiddle, placement]
			}
		}
	}

	return (
		<li
			className={[`ct-builder-column-${placement.id}`]}
			{...(placement.id === 'middle'
				? { 'data-count': placement.items.length }
				: {})}>
			{placementsToRender.map(placement => (
				<DraggableItems
					key={placement.id}
					className={
						placement.id === 'middle'
							? ''
							: `ct-${
									placement.id.indexOf('-') > -1
										? 'secondary'
										: 'primary'
							  }-column`
					}
					draggableId={`${bar.id}:${placement.id}`}
					items={placement.items}
				/>
			))}
		</li>
	)
}

const Bar = ({ bar, direction = 'horizontal' }) => {
	const { panelsHelpers } = useContext(PanelContext)

	return (
		<li className="builder-row">
			<div
				className="ct-row-actions"
				onClick={() => panelsHelpers.open(`builder_panel_${bar.id}`)}>
				{
					{
						'top-row': __('Top Row', 'blocksy'),
						'middle-row': __('Middle Row', 'blocksy'),
						'bottom-row': __('Bottom Row', 'blocksy'),
						offcanvas: __('Offcanvas', 'blocksy')
					}[bar.id]
				}
			</div>

			<ul className="row-inner">
				{['start', 'middle', 'end']
					.filter(
						placementName =>
							!!bar.placements.find(
								({ id }) => id === placementName
							)
					)
					.map(placementName => (
						<PrimaryPlacement
							key={placementName}
							bar={bar}
							placementName={placementName}
							direction={direction}
						/>
					))}
			</ul>
		</li>
	)
}

const shallowCompare = (prev, next) => {
	for (let key in next) {
		if (next[key] !== prev[key]) return false
	}
	return true
}
export function memo(Component, areEqual = shallowCompare) {
	let prevProps = {}
	let prevResult
	return nextProps => {
		if (prevResult !== undefined && areEqual(prevProps, nextProps)) {
			return prevResult
		}
		prevProps = nextProps
		prevResult = createElement(Component, Object.assign({}, nextProps))
		return prevResult
	}
}

const PlacementsBuilder = memo(({ view, builderValueWithView }) => {
	return (
		<div
			className={cls('placements-builder', {
				'ct-mobile': view === 'mobile'
			})}>
			{view === 'mobile' && (
				<ul className="offcanvas-container">
					<Bar
						direction="vertical"
						bar={builderValueWithView.find(
							({ id }) => id === 'offcanvas'
						)}
					/>
				</ul>
			)}

			<ul className="horizontal-rows">
				{['top-row', 'middle-row', 'bottom-row'].map(bar => (
					<Bar
						bar={builderValueWithView.find(({ id }) => id === bar)}
						key={bar}
					/>
				))}
			</ul>
		</div>
	)
})

export default PlacementsBuilder
