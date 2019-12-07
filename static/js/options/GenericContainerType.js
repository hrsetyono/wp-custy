import { createElement, Fragment } from '@wordpress/element'
import Condition from './containers/Condition'
import Tabs from './containers/Tabs'
import Group from './containers/Group'

const GenericContainerType = ({
	value,
	renderingChunk,
	onChange,
	purpose,
	hasRevertButton
}) => {
	let Container = null

	if (renderingChunk[0].type === 'ct-condition') {
		Container = Condition
	}

	if (renderingChunk[0].type === 'tab') {
		Container = Tabs
	}

	if (renderingChunk[0].type === 'ct-group') {
		Container = Group
	}

	if (Container) {
		return (
			<Container
				purpose={purpose}
				onChange={onChange}
				value={value}
				renderingChunk={renderingChunk}
				hasRevertButton={hasRevertButton}
			/>
		)
	}

	return <div>Unknown container type.</div>
}

export default GenericContainerType
