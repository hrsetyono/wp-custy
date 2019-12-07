import { createElement, Component, createRef } from '@wordpress/element'
import OptionsPanel from './OptionsPanel.js'
import $ from 'jquery'

const INITIAL_VALUE = '__INITIAL__'

export default class OptionsRoot extends Component {
	state = {
		value: INITIAL_VALUE
	}

	input = createRef()

	static getDerivedStateFromProps(props, state) {
		if (state.value === INITIAL_VALUE) {
			return {
				value: props.value
			}
		}

		return null
	}

	render() {
		return (
			<div className="ct-options-root">
				<input
					value={JSON.stringify(
						Array.isArray(this.state.value) ? {} : this.state.value
					)}
					onChange={() => {}}
					name={this.props.input_name}
					id={this.props.input_id}
					type="hidden"
					ref={this.input}
				/>

				<OptionsPanel
					hasRevertButton={this.props.hasRevertButton}
					onChange={(key, newValue) => {
						this.setState(({ value }) => ({
							value: {
								...value,
								[key]: newValue
							}
						}))
						$(this.input.current).change()
					}}
					value={this.state.value}
					options={this.props.options}
				/>
			</div>
		)
	}
}
