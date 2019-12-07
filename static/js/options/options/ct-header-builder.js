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
import PlacementsBuilder from '../../customizer/panels-builder/placements/PlacementsBuilder'
import DraggableItems from '../../customizer/panels-builder/placements/DraggableItems'
import ViewSwitch from '../../customizer/panels-builder/placements/ViewSwitch'
import AvailableItems from '../../customizer/panels-builder/placements/AvailableItems'
import { builderReducer } from '../../customizer/panels-builder/placements/builderReducer'
import { useDeviceManager } from '../../customizer/components/useDeviceManager'
import { usePanelsManager } from '../../customizer/panels-builder/placements/helpers/usePanelsManager'

export const DragDropContext = createContext({})

const HeaderBuilder = ({
	value: allBuilderSections,
	option,
	onChange: onBuilderValueChange
}) => {
	const [builderValueCollection, builderValueDispatchInternal] = useReducer(
		builderReducer,
		allBuilderSections
	)

	const builderValue = useMemo(
		() =>
			builderValueCollection.sections.find(
				({ id }) => id === builderValueCollection.current_section
			),
		[builderValueCollection]
	)

	const [isDragging, setIsDragging] = useState(false)

	// desktop | mobile
	const [currentView, setCurrentView] = useDeviceManager()

	const inlinedItemsFromBuilder = builderValue[currentView].reduce(
		(currentItems, { id, placements }) => [
			...currentItems,
			...(placements || []).reduce(
				(c, { id, items }) => [...c, ...items],
				[]
			)
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

	const getList = useCallback(id => {
		return []

		const [barId, placementId] = id.split(':')

		return builderValue[currentView]
			.find(({ id }) => id === barId)
			.placements.find(({ id }) => id === placementId).items
	}, [])

	const setList = useCallback(
		lists =>
			builderValueDispatch({
				type: 'SET_LIST',
				onBuilderValueChange,
				payload: {
					currentView,
					lists
				}
			}),
		[currentView, onBuilderValueChange]
	)

	return (
		<Fragment>
			<DragDropContext.Provider
				value={{
					currentView,
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
						<ViewSwitch
							currentView={currentView}
							setCurrentView={setCurrentView}
						/>

						<PlacementsBuilder
							builderValueWithView={builderValue[currentView]}
							view={currentView}
						/>
					</div>,
					document.querySelector('.ct-panel-builder')
				)}
			</DragDropContext.Provider>
		</Fragment>
	)
}

HeaderBuilder.renderingConfig = { design: 'none' }

export default HeaderBuilder
