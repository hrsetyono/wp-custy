import {
	createElement,
	Fragment,
	Component,
	useEffect,
	useState
} from '@wordpress/element'
import OptionsPanel from '../OptionsPanel'
import { normalizeCondition, matchValuesWithCondition } from 'match-conditions'
import { useDeviceManagerState } from '../../customizer/components/useDeviceManager'

import useForceUpdate from './use-force-update'

const Condition = ({
	renderingChunk,
	value,
	onChange,
	purpose,
	hasRevertButton
}) => {
	const forceUpdate = useForceUpdate()
	const { currentView } = useDeviceManagerState()

	useEffect(() => {
		renderingChunk.map(
			conditionOption =>
				conditionOption.global &&
				Object.keys(conditionOption.condition).map(key =>
					wp.customize(key, val =>
						val.bind(to => setTimeout(() => forceUpdate()))
					)
				)
		)
	}, [])

	return renderingChunk.map(conditionOption =>
		matchValuesWithCondition(
			normalizeCondition(conditionOption.condition),
			conditionOption.global
				? Object.keys(conditionOption.condition).reduce(
						(current, key) => ({
							...current,
							[key]: wp.customize(key)()
						}),
						{}
				  )
				: { ...value, wp_customizer_current_view: currentView }
		) ? (
			<OptionsPanel
				purpose={purpose}
				key={conditionOption.id}
				onChange={onChange}
				options={conditionOption.options}
				value={value}
				hasRevertButton={hasRevertButton}
			/>
		) : (
			[]
		)
	)
}

export default Condition
