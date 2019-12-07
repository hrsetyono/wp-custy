import { createElement, Component } from '@wordpress/element'
import { maybeTransformUnorderedChoices } from '../helpers/parse-choices.js'
import classnames from 'classnames'

export default class Visibility extends Component {
	render() {
		return (
			<ul
				className="ct-visibility-option ct-devices ct-buttons-group"
				{...this.props.option.attr || {}}>
				{maybeTransformUnorderedChoices(this.props.option.choices).map(
					({ key, value }) => (
						<li
							className={classnames(
								{
									active: this.props.value[key]
								},
								`ct-${key}`
							)}
							onClick={() =>
								this.props.onChange({
									...this.props.value,
									[key]: this.props.value[key]
										? Object.values(
												this.props.value
											).filter(v => v).length === 1 &&
											!this.props.option.allow_empty
											? true
											: false
										: true
								})
							}
							key={key}
						/>
					)
				)}
			</ul>
		)
	}
}
