import {
	Fragment,
	createElement,
	Component,
	useRef,
	useEffect,
	useMemo,
	useCallback,
	createPortal,
	useState
} from '@wordpress/element'
import cls from 'classnames'
import BackgroundModal from './background/BackgroundModal'
import OutsideClickHandler from './react-outside-click-handler'
import { Manager, Reference, Popper } from 'react-popper'
import { getUrlForPattern } from './background/PatternPicker'
import { __ } from 'ct-i18n'

/**
 * Support color picker values inside the background picker.
 * Which means transitions from ct-color-picker are made possible thanks to
 * this logic.
 */
const maybeConvertFromColorPickerTo = value => {
	if (!value.background_type) {
		if (value[Object.keys(value)[0]].color) {
			return {
				background_type: 'color',
				background_pattern: 'type-1',
				background_image: {
					attachment_id: null,
					x: 0,
					y: 0
				},

				background_repeat: 'no-repeat',
				background_size: 'auto',
				background_attachment: 'scroll',

				patternColor: {
					default: {
						color: '#e5e7ea'
					}
				},

				backgroundColor: {
					default: value[Object.keys(value)[0]]
				}
			}
		}
	}

	return value
}

const Background = ({ option, value, onChange }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [outsideClickFreezed, setOutsideClickFreezed] = useState(false)
	const backgroundWrapper = useRef()

	value = maybeConvertFromColorPickerTo(value)

	return (
		<Manager>
			<div
				ref={backgroundWrapper}
				className={cls('ct-background', {
					active: isOpen
				})}>
				<Reference>
					{({ ref }) => (
						<div
							className={cls('ct-background-preview', {
								'no-color':
									value.background_type === 'color' &&
									value.backgroundColor.default.color ===
										'CT_CSS_SKIP_RULE'
							})}
							ref={ref}
							onClick={e => {
								e.preventDefault()
								setIsOpen(!isOpen)

								if (value.background_type === 'color') {
									if (
										value.backgroundColor.default.color ===
										'CT_CSS_SKIP_RULE'
									) {
										onChange({
											...value,
											backgroundColor: {
												default: {
													color: '#ffffff'
												}
											}
										})
									}
								}
							}}
							data-background-type={value.background_type}
							style={{
								backgroundColor:
									value.backgroundColor.default.color,

								'--backgroundPosition': `${Math.round(
									parseFloat(value.background_image.x) * 100
								)}% ${Math.round(
									parseFloat(value.background_image.y) * 100
								)}%`,

								'--patternMask':
									value.background_type === 'pattern'
										? `url(${getUrlForPattern(
												value.background_pattern
										  )})`
										: '',

								'--backgroundImage': value.background_image.url
									? `url(${value.background_image.url})`
									: 'none',
								'--patternColor':
									value.patternColor.default.color
							}}>
							<i className="ct-tooltip-top">
								{
									{
										inherit: __('Inherited', 'blocksy'),
										pattern: __('Pattern', 'blocksy'),
										color: __('Color', 'blocksy'),
										image: __('Image', 'blocksy')
									}[
										value.background_type === 'color' &&
										value.backgroundColor.default.color ===
											'CT_CSS_SKIP_RULE'
											? 'inherit'
											: value.background_type
									]
								}
							</i>

							{value.background_type === 'color' &&
								value.backgroundColor.default.color ===
									'CT_CSS_SKIP_RULE' && (
									<svg
										width="25"
										height="25"
										viewBox="0 0 30 30">
										<path d="M15 3c-3 0-5.7 1.1-7.8 2.9-.4.3-.5.9-.2 1.4.3.4 1 .5 1.4.2h.1C10.3 5.9 12.5 5 15 5c5.2 0 9.5 3.9 10 9h-3l4 6 4-6h-3.1C26.4 7.9 21.3 3 15 3zM4 10l-4 6h3.1c.5 6.1 5.6 11 11.9 11 3 0 5.7-1.1 7.8-2.9.4-.3.5-1 .2-1.4-.3-.4-1-.5-1.4-.2h-.1c-1.7 1.5-4 2.4-6.5 2.4-5.2 0-9.5-3.9-10-9h3L4 10z" />
									</svg>
								)}
						</div>
					)}
				</Reference>

				{backgroundWrapper && backgroundWrapper.current && (
					<Popper
						eventsEnabled={isOpen}
						modifiers={{
							preventOverflow: {
								enabled: false
							},

							hide: {
								enabled: false
							}
						}}>
						{({ ref, placement }) =>
							backgroundWrapper &&
							backgroundWrapper.current &&
							createPortal(
								<OutsideClickHandler
									useCapture={false}
									display="block"
									disabled={!isOpen || outsideClickFreezed}
									onOutsideClick={() => {
										setTimeout(() => setIsOpen(false))
									}}
									wrapperProps={{
										ref,
										'data-placement': placement,
										className: cls('ct-background-modal', {
											active: isOpen
										})
									}}>
									<BackgroundModal
										onChange={onChange}
										value={value}
										innerRef={ref}
										placement={placement}
										option={option}
										isOpen={isOpen}
										setOutsideClickFreezed={
											setOutsideClickFreezed
										}
									/>
								</OutsideClickHandler>,
								backgroundWrapper.current
									.closest('.ct-control')
									.querySelector(
										'.ct-background-modal-wrapper'
									)
							)
						}
					</Popper>
				)}
			</div>
		</Manager>
	)
}

Background.ControlEnd = () => (
	<div
		className="ct-background-modal-wrapper"
		onMouseDown={e => e.stopPropagation()}
		onMouseUp={e => e.stopPropagation()}
		onClick={e => e.stopPropagation()}
	/>
)

export default Background
