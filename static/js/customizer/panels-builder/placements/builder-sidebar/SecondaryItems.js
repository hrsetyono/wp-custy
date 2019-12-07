import {
	createElement,
	Component,
	useState,
	useContext,
	Fragment
} from '@wordpress/element'
import DraggableItems from '../DraggableItems'
import { DragDropContext } from '../../../../options/options/ct-header-builder'
import cls from 'classnames'
import Panel, { PanelMetaWrapper } from '../../../../options/options/ct-panel'
import { getValueFromInput } from '../../../../options/helpers/get-value-from-input'

const SecondaryItems = ({
	builderValue,
	builderValueDispatch,
	inlinedItemsFromBuilder
}) => {
	const { panelsState, panelsActions, currentView } = useContext(
		DragDropContext
	)

	const inlinedItemsFromAllViewsBuilder = [
		...builderValue.desktop.reduce(
			(currentItems, { id, placements }) => [
				...currentItems,
				...(placements || []).reduce(
					(c, { id, items }) => [...c, ...items],
					[]
				)
			],
			[]
		),

		...builderValue.mobile.reduce(
			(currentItems, { id, placements }) => [
				...currentItems,
				...(placements || []).reduce(
					(c, { id, items }) => [...c, ...items],
					[]
				)
			],
			[]
		)
	]

	const secondaryItems = ct_customizer_localizations.header_builder_data.secondary_items.header.filter(
		({ config }) =>
			// config.devices.indexOf(currentView) > -1 &&
			config.enabled
	)
	const allItems = ct_customizer_localizations.header_builder_data.header

	return (
		<DraggableItems
			options={{ sort: false, filter: '.ct-item-in-builder' }}
			group={{
				name: 'header_sortables',
				put: false,
				pull: 'clone'
			}}
			draggableId={'available-items'}
			items={secondaryItems.map(({ id }) => id)}
			hasPointers={false}
			propsForItem={item => ({
				renderItem: ({ item, itemData }) => {
					const itemOptions = allItems.find(({ id }) => id === item)
						.options

					const option = {
						label: itemData.config.name,
						'inner-options': itemOptions
					}

					const itemInBuilder =
						inlinedItemsFromBuilder.indexOf(item) > -1

					const id = `builder_panel_${item}`

					return (
						<PanelMetaWrapper
							id={id}
							option={option}
							{...panelsActions}
							getActualOption={({ open, container }) => (
								<Fragment>
									{inlinedItemsFromAllViewsBuilder.indexOf(
										item
									) > -1 && (
										<Panel
											id={id}
											getValues={() => {
												let itemValue = builderValue.items.find(
													({ id }) => id === item
												)

												if (
													itemValue &&
													Object.keys(
														itemValue.values
													) > 5
												) {
													return itemValue.values
												}

												return getValueFromInput(
													itemOptions,
													itemValue
														? itemValue.values
														: {}
												)
											}}
											option={option}
											onChangeFor={(
												optionId,
												optionValue
											) => {
												const currentValue = builderValue.items.find(
													({ id }) => id === item
												)

												builderValueDispatch({
													type:
														'ITEM_VALUE_ON_CHANGE',
													payload: {
														id: item,
														optionId,
														optionValue,
														values:
															!currentValue ||
															(currentValue &&
																Object.keys(
																	currentValue.values
																).length === 0)
																? getValueFromInput(
																		itemOptions,
																		{}
																  )
																: {}
													}
												})
											}}
											view="simple"
										/>
									)}

									{itemData.config.devices.indexOf(
										currentView
									) > -1 && (
										<div
											ref={container}
											data-id={item}
											className={cls({
												'ct-item-in-builder': itemInBuilder,
												'ct-builder-item': !itemInBuilder
											})}
											onClick={() =>
												itemInBuilder && open()
											}>
											{itemData.config.name}
										</div>
									)}
								</Fragment>
							)}></PanelMetaWrapper>
					)
				}
			})}
			direction="vertical"
		/>
	)
}

export default SecondaryItems
