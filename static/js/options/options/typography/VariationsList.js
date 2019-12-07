import {
	Fragment,
	createElement,
	Component,
	useRef,
	useEffect,
	useState
} from '@wordpress/element'
import classnames from 'classnames'
import { getDefaultFonts } from './default-data'
import { humanizeVariations, findSelectedFontFamily } from './helpers'
import { Transition, animated } from 'react-spring'

const VariationsList = ({ option, value, onChange, typographyList, props }) => {
	const selectedFontFamily = findSelectedFontFamily(
		value.family,
		typographyList
	)

	const parentEl = useRef(null)

	useEffect(() => {
		parentEl.current.scrollTop =
			(
				parentEl.current.children[
					selectedFontFamily.all_variations.indexOf(value.variation)
				] || parentEl.current.children[0]
			).offsetTop - parentEl.current.offsetTop
	}, [])

	return (
		<animated.ul
			style={props}
			className="ct-typography-variations"
			ref={parentEl}>
			{selectedFontFamily.all_variations.map(variation => (
				<li
					onClick={() =>
						onChange({
							...value,
							variation
						})
					}
					className={classnames({
						active: variation === value.variation
					})}
					key={variation}>
					<span
						className="ct-variation-name"
						data-variation={variation}>
						{humanizeVariations(variation)}
					</span>
				</li>
			))}
		</animated.ul>
	)
}

export default VariationsList
