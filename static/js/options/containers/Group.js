import { createElement, Fragment } from '@wordpress/element'
import OptionsPanel from '../OptionsPanel'

const Group = ({ renderingChunk, value, onChange, purpose, hasRevertButton }) =>
	renderingChunk.map(conditionOption => (
		<div
			key={conditionOption.id}
			className="ct-controls-group"
			{...(conditionOption.attr || {})}>
			<OptionsPanel
				purpose={purpose}
				onChange={onChange}
				options={conditionOption.options}
				value={value}
				hasRevertButton={hasRevertButton}
			/>
		</div>
	))

export default Group
