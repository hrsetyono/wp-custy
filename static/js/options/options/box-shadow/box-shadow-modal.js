import {
	createElement,
	Component,
	createPortal,
	useRef,
	createRef
} from '@wordpress/element'
import { Transition } from 'react-spring'
import bezierEasing from 'bezier-easing'
import classnames from 'classnames'
import GenericOptionType from '../../GenericOptionType'
import { __ } from 'ct-i18n'

const SinglePicker = ({
	option,
	value,
	onChange,
	picker,

	onPickingChange,
	stopTransitioning,

	el,

	isTransitioning,
	isPicking
}) => {
	return (
		(isTransitioning === picker.id ||
			(isPicking || '').split(':')[0] === picker.id) &&
		createPortal(
			<Transition
				items={isPicking}
				onRest={isOpen => stopTransitioning()}
				config={{
					duration: 100,
					easing: bezierEasing(0.25, 0.1, 0.25, 1.0)
				}}
				from={
					(isPicking || '').indexOf(':') === -1
						? {
								transform: 'scale3d(0.95, 0.95, 1)',
								opacity: 0
						  }
						: { opacity: 1 }
				}
				enter={
					(isPicking || '').indexOf(':') === -1
						? {
								transform: 'scale3d(1, 1, 1)',
								opacity: 1
						  }
						: {
								opacity: 1
						  }
				}
				leave={
					(isPicking || '').indexOf(':') === -1
						? {
								transform: 'scale3d(0.95, 0.95, 1)',
								opacity: 0
						  }
						: {
								opacity: 1
						  }
				}>
				{isPicking =>
					(isPicking || '').split(':')[0] === picker.id &&
					(props => (
						<div
							style={props}
							className="ct-box-shadow-modal"
							onClick={e => {
								e.preventDefault()
								e.stopPropagation()
							}}
							onMouseDownCapture={e => {
								e.nativeEvent.stopImmediatePropagation()
								e.nativeEvent.stopPropagation()
							}}
							onMouseUpCapture={e => {
								e.nativeEvent.stopImmediatePropagation()
								e.nativeEvent.stopPropagation()
							}}>
							<div className="shadow-sliders">
								<GenericOptionType
									value={value.h_offset}
									values={value}
									id="h_offset"
									option={{
										id: 'h_offset',
										label: __(
											'Horizontal Offset',
											'blocksy'
										),
										type: 'ct-slider',
										steps: 'half',
										value: option.value.h_offset,
										min: -100,
										max: 100,
										design: 'compact',
										skipInput: true
									}}
									hasRevertButton={false}
									onChange={newValue =>
										onChange({
											...value,
											h_offset: newValue
										})
									}
								/>

								<GenericOptionType
									value={value.v_offset}
									values={value}
									id="v_offset"
									option={{
										steps: 'half',
										id: 'v_offset',
										label: __('Vertical Offset', 'blocksy'),
										type: 'ct-slider',
										value: option.value.v_offset,
										min: -100,
										max: 100,
										design: 'compact',
										skipInput: true
									}}
									hasRevertButton={false}
									onChange={newValue =>
										onChange({
											...value,
											v_offset: newValue
										})
									}
								/>

								<GenericOptionType
									value={value.blur}
									values={value}
									id="blur"
									option={{
										steps: 'positive',
										id: 'blur',
										label: __('Blur', 'blocksy'),
										type: 'ct-slider',
										value: option.value.blur,
										min: 0,
										max: 100,
										design: 'compact',
										skipInput: true
									}}
									hasRevertButton={false}
									onChange={newValue => {
										onChange({
											...value,
											blur: newValue
										})
									}}
								/>

								<GenericOptionType
									value={value.spread}
									values={value}
									id="spread"
									option={{
										steps: 'half',
										id: 'spread',
										label: __('Spread', 'blocksy'),
										type: 'ct-slider',
										value: option.value.spread,
										min: -100,
										max: 100,
										design: 'compact',
										skipInput: true
									}}
									hasRevertButton={false}
									onChange={newValue =>
										onChange({
											...value,
											spread: newValue
										})
									}
								/>
							</div>

							{!option.hide_shadow_placement && (
								<ul className="ct-shadow-style">
									<li
										onClick={() =>
											onChange({
												...value,
												inset: false
											})
										}
										className={classnames({
											active: !value.inset
										})}>
										Outline
									</li>
									<li
										onClick={() =>
											onChange({
												...value,
												inset: true
											})
										}
										className={classnames({
											active: value.inset
										})}>
										Inset
									</li>
								</ul>
							)}
						</div>
					))
				}
			</Transition>,
			el.current.closest('.ct-single-palette')
				? el.current
						.closest('.ct-single-palette')
						.querySelector('.ct-color-modal-wrapper')
				: el.current.closest('.ct-color-modal-wrapper')
				? el.current.closest('.ct-color-modal-wrapper')
				: el.current
						.closest('.ct-control')
						.querySelector('.ct-color-modal-wrapper')
		)
	)
}

export default SinglePicker
