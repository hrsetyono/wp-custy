import {
	createElement,
	Fragment,
	Component,
	useEffect,
	useMemo,
	createPortal,
	useState,
	useCallback,
	createContext,
	useReducer
} from '@wordpress/element'
import { __ } from 'ct-i18n'

import ColumnsBuilder from '../../customizer/panels-builder/columns/ColumnsBuilder'
import AvailableItems from '../../customizer/panels-builder/columns/AvailableItems'

import { builderReducer } from '../../customizer/panels-builder/columns/builderReducer'
export const DragDropContext = createContext({})

const FooterBuilder = ({
	value: allBuilderSections,
	option,
	onChange: onBuilderValueChange
}) => {
	const [builderValueCollection, builderValueDispatchInternal] = useReducer(
		builderReducer,
		allBuilderSections
	)

	const [builderCollapsed, setBuilderCollapsed] = useState(false)

	const builderValue = useMemo(
		() =>
			builderValueCollection.sections.find(
				({ id }) => id === builderValueCollection.current_section
			),
		[builderValueCollection]
	)

	const [isDragging, setIsDragging] = useState(false)

	const inlinedItemsFromBuilder = builderValue.rows.reduce(
		(currentItems, { columns }) => [
			...currentItems,
			...(columns || []).reduce((c, items) => [...c, ...items], [])
		],
		[]
	)

	const builderValueDispatch = useCallback(
		payload =>
			builderValueDispatchInternal({
				...payload,
				onBuilderValueChange
			}),
		[builderValueDispatchInternal, onBuilderValueChange]
	)

	const setList = lists =>
		builderValueDispatch({
			type: 'SET_LIST',
			onBuilderValueChange,
			payload: {
				lists
			}
		})

	useEffect(() => {
		return () => {
			document
				.querySelector('.wp-full-overlay')
				.classList.remove('ct-builder-collapsed')
		}
	}, [])

	return (
		<Fragment>
			<DragDropContext.Provider
				value={{
					isDragging,
					setIsDragging,
					setList,
					builderValueDispatch,
					onChange: ({ id, value }) => setList({ [id]: value })
				}}>
				<AvailableItems
					allBuilderSections={allBuilderSections}
					builderValue={builderValue}
					inlinedItemsFromBuilder={inlinedItemsFromBuilder}
					builderValueDispatch={builderValueDispatch}
				/>

				{createPortal(
					<div>
						<ul className="ct-view-switch">
							<li
								className="ct-builder-toggle"
								onClick={() => {
									setBuilderCollapsed(!builderCollapsed)

									if (builderCollapsed) {
										document
											.querySelector('.wp-full-overlay')
											.classList.remove(
												'ct-builder-collapsed'
											)
									} else {
										document
											.querySelector('.wp-full-overlay')
											.classList.add(
												'ct-builder-collapsed'
											)
									}
								}}>
								{builderCollapsed
									? __('Show Builder', 'blocksy')
									: __('Hide Builder', 'blocksy')}
							</li>
						</ul>

						<ColumnsBuilder builderValue={builderValue} />
					</div>,
					document.querySelector('.ct-panel-builder')
				)}
			</DragDropContext.Provider>
		</Fragment>
	)
}

FooterBuilder.renderingConfig = { design: 'none' }

export default FooterBuilder
