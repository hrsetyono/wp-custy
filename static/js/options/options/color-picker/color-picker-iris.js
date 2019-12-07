import { createElement, Component, createRef } from '@wordpress/element'
import _ from '_'
import $ from 'jquery'
import { __ } from 'ct-i18n'

export default class ColorPickerIris extends Component {
	el = createRef()
	container = createRef()

	componentDidMount() {
		$(this.container.current)
			.find('input')
			.ctColorPicker({
				change: (event, ui) => {
					if (this.avoidTrigger) return
					if (ui.color.toString() === this.props.value.color) return

					this.props.onChange({
						...this.props.value,
						color: ui.color.toString()
					})
				}
			})
	}

	/*
	shouldComponentUpdate() {
		return false
	}
    */

	componentDidUpdate() {
		if (
			$(this.container.current)
				.find('input')
				.ctColorPicker('color') ===
			this.props.value.color.replace(/\s/g, '')
		) {
			return
		}

		this.avoidTrigger = true

		$(this.container.current)
			.find('input')
			.ctColorPicker('color', this.props.value.color)

		setTimeout(() => {
			this.avoidTrigger = false
		}, 1000)
	}

	render() {
		return (
			<div ref={this.container}>
				<div className="ct-color-picker-bottom">
					<div className="ct-color-picker-input">
						<input
							ref={this.el}
							defaultValue={this.props.value.color}
							type="text"
						/>
					</div>
				</div>
			</div>
		)
	}
}
