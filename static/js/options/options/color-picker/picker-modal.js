import {
	createElement,
	Component,
	createRef,
	Fragment
} from '@wordpress/element'
import ColorPickerIris from './color-picker-iris.js'
import classnames from 'classnames'
import { __ } from 'ct-i18n'

export const getNoColorPropFor = option =>
	option.noColorTransparent ? 'transparent' : `CT_CSS_SKIP_RULE`

const focusOrOpenCustomizerSectionProps = section => ({
	target: '_blank',
	href: `${
		window.ct_localizations ? window.ct_localizations.customizer_url : ''
	}${encodeURIComponent(`[section]=${section}`)}`,
	...(wp && wp.customize && wp.customize.section
		? {
				onClick: e => {
					e.preventDefault()
					wp.customize.section(section).expand()
				}
		  }
		: {})
})

const getLeftForEl = (arrow, el) => {
	if (!arrow) return
	if (!el) return

	const wrapper = arrow
		.closest('.ct-color-modal-wrapper')
		.getBoundingClientRect()
	const modal = arrow.nextElementSibling.getBoundingClientRect()

	el = el.getBoundingClientRect()
	arrow = arrow.getBoundingClientRect()

	return {
		left: el.left + el.width / 2 - wrapper.left - arrow.width / 2
	}
}

export default class PickerModal extends Component {
	arrow = createRef()

	getValueForPicker = () => {
		if (this.props.value.color === getNoColorPropFor(this.props.option)) {
			return ''
		}

		if (
			this.props.value.color.indexOf(
				getNoColorPropFor(this.props.option)
			) > -1 &&
			this.props.picker.inherit
		) {
			return getComputedStyle(document.documentElement)
				.getPropertyValue(
					this.props.picker.inherit
						.replace(/var\(/, '')
						.replace(/\)/, '')
				)
				.trim()
				.replace(/\s/g, '')
		}

		if (this.props.value.color.indexOf('var') > -1) {
			return getComputedStyle(document.documentElement)
				.getPropertyValue(
					this.props.value.color
						.replace(/var\(/, '')
						.replace(/\)/, '')
				)
				.trim()
				.replace(/\s/g, '')
		}

		return this.props.value.color
	}

	render() {
		return (
			<Fragment>
				{this.props.el && !this.props.option.skipArrow && (
					<span
						className="ct-arrow"
						ref={this.arrow}
						style={{
							...getLeftForEl(
								this.arrow.current,
								this.props.el.current
							),

							...(this.props.style
								? { opacity: this.props.style.opacity }
								: {})
						}}
					/>
				)}

				<div
					tabIndex="0"
					className={`ct-color-picker-modal`}
					{...{
						...(this.props.style ? { style: this.props.style } : {})
					}}
					onMouseDown={e => e.nativeEvent.stopImmediatePropagation()}>
					{!this.props.option.predefined && (
						<div className="ct-color-picker-top">
							<ul className="ct-color-picker-skins">
								{[
									'paletteColor1',
									'paletteColor2',
									'paletteColor3',
									'paletteColor4',
									'paletteColor5'
								].map(color => (
									<li
										key={color}
										style={{
											background: getComputedStyle(
												document.documentElement
											)
												.getPropertyValue(`--${color}`)
												.trim()
										}}
										className={classnames({
											active:
												this.props.value.color ===
												`var(--${color})`
										})}
										onClick={() =>
											this.props.onChange({
												...this.props.value,
												color: `var(--${color})`
											})
										}>
										<div className="ct-tooltip-top">
											{
												{
													paletteColor1: 'Color 1',
													paletteColor2: 'Color 2',
													paletteColor3: 'Color 3',
													paletteColor4: 'Color 4',
													paletteColor5: 'Color 5'
												}[color]
											}
										</div>
									</li>
								))}

								{!this.props.option.skipNoColorPill && (
									<li
										onClick={() =>
											this.props.onChange({
												...this.props.value,
												color: getNoColorPropFor(
													this.props.option
												)
											})
										}
										className={classnames(
											'ct-no-color-pill',
											{
												active:
													this.props.value.color ===
													getNoColorPropFor(
														this.props.option
													)
											}
										)}>
										<i className="ct-tooltip-top">
											{__('No Color', 'blocksy')}
										</i>
									</li>
								)}
							</ul>

							{!this.props.option.skipEditPalette && (
								<a
									className="ct-edit-palette"
									{...focusOrOpenCustomizerSectionProps(
										'color'
									)}>
									<span>
										<svg viewBox="0 0 30 30">
											<path
												d="M15,0V15L7.5,2Z"
												fill="#ede604"
											/>
											<path
												d="M22.5,2,28,7.5,15,15Z"
												fill="#50b517"
											/>
											<path
												d="M15,0l7.5,2L15,15Z"
												fill="#9ed110"
											/>
											<path
												d="M15,30V15l7.5,13Z"
												fill="#cc42a2"
											/>
											<path
												d="M7.5,28,2,22.5,15,15Z"
												fill="#ff5800"
											/>
											<path
												d="M15,30,7.5,28,15,15Z"
												fill="#ff3ba7"
											/>
											<path
												d="M30,15H15L28,7.5Z"
												fill="#179067"
											/>
											<path
												d="M28,22.5,22.5,28,15,15Z"
												fill="#9f49ac"
											/>
											<path
												d="M30,15l-2,7.5L15,15Z"
												fill="#476eaf"
											/>
											<path
												d="M0,15H15L2,22.5Z"
												fill="#ff8100"
											/>
											<path
												d="M2,7.5,7.5,2,15,15Z"
												fill="#fc0"
											/>
											<path
												d="M0,15,2,7.5,15,15Z"
												fill="#feac00"
											/>
										</svg>
									</span>
									<i className="ct-tooltip-top">
										{__('Edit Palette', 'blocksy')}
									</i>
								</a>
							)}
						</div>
					)}

					<ColorPickerIris
						onChange={v => this.props.onChange(v)}
						value={{
							...this.props.value,
							color: this.getValueForPicker()
						}}
					/>
				</div>
			</Fragment>
		)
	}
}
