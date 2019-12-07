import { createElement, Component, useState } from '@wordpress/element'
import cls from 'classnames'

const Ratio = ({ option, value, onChange }) => {
	const [isForcedReversed, setIsReversed] = useState(false)

	let normal_ratios = ['4/3', '16/9', '2/1']
	let reversed_ratios = ['3/4', '9/16', '1/2']

	const isReversed =
		normal_ratios.indexOf(value) > -1
			? false
			: reversed_ratios.indexOf(value) > -1 ? true : isForcedReversed

	return (
		<div
			className={cls('ct-ratio-picker', {
				reversed: isReversed
			})}>
			<ul className="ct-buttons-group">
				{['1/1', ...(isReversed ? reversed_ratios : normal_ratios)].map(
					ratio => (
						<li
							className={cls({
								active: ratio === value
							})}
							onClick={() => onChange(ratio)}>
							{ratio}
						</li>
					)
				)}
			</ul>

			<button
				onClick={e => {
					e.preventDefault()

					if (value === '1/1') {
						setIsReversed(!isReversed)
						return
					}

					let [first_component, second_component] = value.split('/')

					setIsReversed(+first_component < +second_component)

					onChange(
						value
							.split('/')
							.reverse()
							.join('/')
					)
				}}>
				<span />
				<i className="ct-tooltip-top">Reverse</i>
			</button>
		</div>
	)
}

export default Ratio
