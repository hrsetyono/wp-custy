import { createElement, Component, Fragment } from '@wordpress/element'
import SinglePicker from './color-picker/single-picker.js'
import './color-picker/quick-color-picker.js'
import OutsideClickHandler from './react-outside-click-handler'
import { normalizeCondition, matchValuesWithCondition } from 'match-conditions'

class ColorPicker extends Component {
	static ControlEnd = () => (
		<div
			className="ct-color-modal-wrapper"
			onMouseDown={e => {
				e.stopPropagation()
			}}
			onMouseUp={e => {
				e.stopPropagation()
			}}
		/>
	)

	static sectionClassName = ({ design }) => ({
		'ct-responsive-color': design === 'block'
	})

	state = {
		isPicking: null,
		isTransitioning: null
	}

	render() {
		return (
			<OutsideClickHandler
				useCapture={false}
				display="inline-block"
				disabled={!this.state.isPicking}
				className="ct-color-picker-container"
				onOutsideClick={() =>
					this.setState({
						isPicking: null,
						isTransitioning: this.state.isPicking
					})
				}>
				{this.props.option.pickers
					.filter(
						picker =>
							!picker.condition ||
							matchValuesWithCondition(
								normalizeCondition(picker.condition),
								this.props.values
							)
					)
					.map(picker => (
						<SinglePicker
							picker={picker}
							key={picker.id}
							option={this.props.option}
							isPicking={this.state.isPicking}
							isTransitioning={this.state.isTransitioning}
							onPickingChange={isPicking =>
								this.setState({
									isTransitioning: picker.id,
									isPicking
								})
							}
							stopTransitioning={() =>
								this.setState({
									isTransitioning: false
								})
							}
							onChange={newPicker =>
								this.props.onChange({
									...this.props.value,
									[picker.id]: newPicker
								})
							}
							value={
								this.props.value[picker.id] ||
								this.props.option.value[picker.id]
							}
						/>
					))}
			</OutsideClickHandler>
		)
	}
}

export default ColorPicker
