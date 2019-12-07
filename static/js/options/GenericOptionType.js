import { createElement, Fragment, Component } from '@wordpress/element'
import classnames from 'classnames'
import ResponsiveControls, {
	maybePromoteScalarValueIntoResponsive,
	isOptionEnabledFor
} from '../customizer/components/responsive-controls'
import deepEqual from 'deep-equal'
import { normalizeCondition, matchValuesWithCondition } from 'match-conditions'
import { __ } from 'ct-i18n'

const CORE_OPTIONS_CONTEXT = require.context('./options/', true, /\.js$/)

const hasCoreOptionModifier = type => {
	let index = CORE_OPTIONS_CONTEXT.keys()
		.map(module => module.replace(/^\.\//, '').replace(/\.js$/, ''))
		.indexOf(type)

	return index > -1 && CORE_OPTIONS_CONTEXT.keys()[index]
}

const capitalizeFirstLetter = str => {
	str = str == null ? '' : String(str)
	return str.charAt(0).toUpperCase() + str.slice(1)
}

const getOptionLabelFor = ({ id, option, values, renderingConfig }) => {
	let maybeLabel =
		Object.keys(option).indexOf('label') === -1
			? capitalizeFirstLetter(id).replace(/\_|\-/g, ' ')
			: option.label

	if (maybeLabel !== maybeLabel.toString()) {
		maybeLabel =
			Object.keys(maybeLabel).reduce((approvedLabel, currentLabel) => {
				if (approvedLabel) {
					return approvedLabel
				}

				if (
					matchValuesWithCondition(
						normalizeCondition(maybeLabel[currentLabel]),
						values
					)
				) {
					return currentLabel
				}

				return approvedLabel
			}, null) || Object.keys(maybeLabel)[0]
	}

	/**
	 * Fuck JS
	 */
	if (maybeLabel === '') {
		maybeLabel = true
	}

	if (!renderingConfig.label) {
		maybeLabel = false
	}

	return maybeLabel
}

export const getOptionFor = option => {
	const dynamicOptionTypes = {}
	ctEvents.trigger('blocksy:options:register', dynamicOptionTypes)

	if (hasCoreOptionModifier(option.type)) {
		return CORE_OPTIONS_CONTEXT(hasCoreOptionModifier(option.type)).default
	}

	if (dynamicOptionTypes[option.type]) {
		return dynamicOptionTypes[option.type]
	}

	return null
}

class GenericOptionType extends Component {
	state = {
		device:
			wp.customize && wp.customize.previewedDevice
				? wp.customize.previewedDevice()
				: 'desktop'
	}

	listener = () =>
		this.setState({
			device:
				wp.customize && wp.customize.previewedDevice
					? wp.customize.previewedDevice()
					: 'desktop'
		})

	componentDidMount() {
		if (this.props.option.type !== 'ct-typography') {
			if (!this.props.option.responsive) return
		}
		if (!wp.customize) return

		setTimeout(() => wp.customize.previewedDevice.bind(this.listener), 1000)
	}

	componentWillUnmount() {
		if (this.props.option.type !== 'ct-typography') {
			if (!this.props.option.responsive) return
		}
		if (!wp.customize) return
		wp.customize.previewedDevice.unbind(this.listener)
	}

	setDevice(device) {
		this.setState({ device })
		wp.customize && wp.customize.previewedDevice.set(device)
	}

	render() {
		let {
			value,
			values,
			onChange,
			onChangeFor,
			option,
			id,
			purpose
		} = this.props

		let OptionComponent = getOptionFor(option)

		const valueWithResponsive = option.responsive
			? maybePromoteScalarValueIntoResponsive(value)[this.state.device]
			: value

		const onChangeWithMobileBridge = value => {
			if (
				option.switchDeviceOnChange &&
				wp.customize &&
				wp.customize.previewedDevice() !== option.switchDeviceOnChange
			) {
				wp.customize.previewedDevice.set(option.switchDeviceOnChange)
			}

			onChange(value)
		}

		const onChangeWithResponsiveBridge = scalarValue => {
			const responsiveValue = maybePromoteScalarValueIntoResponsive(value)

			onChangeWithMobileBridge(
				option.responsive
					? {
							...responsiveValue,
							[this.state.device]: scalarValue,
							...(this.state.device === 'desktop'
								? Object.keys(responsiveValue).reduce(
										(currentValue, key) => ({
											...currentValue,
											...(key !== 'desktop' &&
											key !== '__changed' &&
											Object.keys(
												maybePromoteScalarValueIntoResponsive(
													option.value
												)
											).reduce(
												(result, key) =>
													result
														? maybePromoteScalarValueIntoResponsive(
																option.value
														  )[key] ===
														  maybePromoteScalarValueIntoResponsive(
																option.value
														  ).desktop
														: false,
												true
											) &&
											(
												responsiveValue.__changed || []
											).indexOf('tablet') === -1
												? {
														[key]: scalarValue
												  }
												: {})
										}),
										{}
								  )
								: {}),
							...(this.state.device === 'tablet'
								? Object.keys(responsiveValue).reduce(
										(currentValue, key) => ({
											...currentValue,
											...(key !== 'desktop' &&
											key !== 'tablet' &&
											key !== '__changed' &&
											Object.keys(
												maybePromoteScalarValueIntoResponsive(
													option.value
												)
											).reduce(
												(result, key) =>
													result
														? maybePromoteScalarValueIntoResponsive(
																option.value
														  )[key] ===
														  maybePromoteScalarValueIntoResponsive(
																option.value
														  ).desktop
														: false,
												true
											) &&
											(
												responsiveValue.__changed || []
											).indexOf(key) === -1
												? {
														[key]: scalarValue
												  }
												: {})
										}),
										{}
								  )
								: {}),
							__changed: [
								...(responsiveValue.__changed || []),
								...(this.state.device !== 'desktop'
									? [this.state.device]
									: [])
							]
					  }
					: scalarValue
			)
		}

		/**
		 * Handle transparent components
		 */
		if (!OptionComponent) {
			return <div>Unimplemented option: {option.type}</div>
		}

		let renderingConfig = { design: true, label: true, wrapperAttr: {} }
		let LabelToolbar = () => null
		let OptionMetaWrapper = null
		let ControlEnd = () => null
		let sectionClassName = () => ({})

		renderingConfig = {
			...renderingConfig,
			...(OptionComponent.renderingConfig || {})
		}

		if (option.design) {
			renderingConfig.design = option.design
		}

		if (OptionComponent.LabelToolbar) {
			LabelToolbar = OptionComponent.LabelToolbar
		}

		if (OptionComponent.ControlEnd) {
			ControlEnd = OptionComponent.ControlEnd
		}

		if (OptionComponent.MetaWrapper) {
			OptionMetaWrapper = OptionComponent.MetaWrapper
		}

		if (OptionComponent.sectionClassName) {
			sectionClassName = OptionComponent.sectionClassName
		}

		let OptionComponentWithoutDesign = (
			<OptionComponent
				key={id}
				{...{
					option: {
						...option,
						value: option.responsive
							? maybePromoteScalarValueIntoResponsive(
									option.value || ''
							  )[this.state.device]
							: option.value || ''
					},
					value: valueWithResponsive,
					id,
					values,
					onChangeFor,
					device: this.state.device,
					onChange: onChangeWithResponsiveBridge
				}}
			/>
		)

		if (!renderingConfig.design || renderingConfig.design === 'none') {
			return OptionComponentWithoutDesign
		}

		let maybeLabel = getOptionLabelFor({
			id,
			option,
			values,
			renderingConfig
		})

		let maybeDesc =
			Object.keys(option).indexOf('desc') === -1 ? false : option.desc

		const actualDesignType =
			typeof renderingConfig.design === 'boolean'
				? 'block'
				: renderingConfig.design

		if (renderingConfig.design === 'compact') {
			return (
				<section>
					{maybeLabel && <label>{maybeLabel}</label>}

					{((option.responsive &&
						isOptionEnabledFor(
							this.state.device,
							option.responsive
						)) ||
						!option.responsive) &&
						OptionComponentWithoutDesign}
				</section>
			)
		}

		// if (purpose === 'customizer') {
		const getActualOption = ({
			wrapperAttr: { className, ...additionalWrapperAttr } = {},
			...props
		} = {}) => (
			<div
				className={classnames('ct-control', className, {})}
				data-design={actualDesignType}
				{...(option.divider ? { 'data-divider': option.divider } : {})}
				{...{
					...((option.responsive &&
						!isOptionEnabledFor(
							this.state.device,
							option.responsive
						)) ||
					option.state === 'disabled'
						? { 'data-state': 'disabled' }
						: {})
				}}
				{...{
					...(option.wrapperAttr || {}),
					...additionalWrapperAttr
				}}>
				<header>
					{maybeLabel && <label>{maybeLabel}</label>}

					{option.type !== 'ct-image-picker' &&
						option.type !== 'ct-layers' &&
						option.type !== 'ct-image-uploader' &&
						option.type !== 'ct-panel' &&
						this.props.hasRevertButton &&
						!option.disableRevertButton && (
							<button
								type="button"
								disabled={deepEqual(option.value, value)}
								className="ct-revert"
								onClick={() =>
									onChangeWithMobileBridge(option.value)
								}
							/>
						)}

					<LabelToolbar
						{...{
							option,
							value: valueWithResponsive,
							id,
							onChange: onChangeWithResponsiveBridge
						}}
					/>

					{option.responsive && actualDesignType === 'block' && (
						<ResponsiveControls
							device={this.state.device}
							responsiveDescriptor={option.responsive}
							setDevice={device => this.setDevice(device)}
						/>
					)}
				</header>

				{option.responsive &&
					!isOptionEnabledFor(
						this.state.device,
						option.responsive
					) && (
						<div className="ct-disabled-notification">
							{option.disabledDeviceMessage ||
								__(
									"Option can't be edited for current device",
									'blocksy'
								)}
						</div>
					)}

				{((option.responsive &&
					isOptionEnabledFor(this.state.device, option.responsive)) ||
					!option.responsive) && (
					<Fragment>
						<section
							className={classnames(
								{
									'ct-responsive-container':
										option.responsive &&
										actualDesignType === 'inline'
								},
								sectionClassName({
									design: actualDesignType,
									option
								})
							)}>
							{option.responsive &&
								actualDesignType === 'inline' && (
									<ResponsiveControls
										device={this.state.device}
										responsiveDescriptor={option.responsive}
										setDevice={device =>
											this.setDevice(device)
										}
									/>
								)}
							{OptionComponentWithoutDesign}
						</section>

						<ControlEnd />

						{maybeDesc && (
							<div
								dangerouslySetInnerHTML={{
									__html: maybeDesc
								}}
								className="ct-option-description"
							/>
						)}
					</Fragment>
				)}
			</div>
		)

		return OptionMetaWrapper ? (
			<OptionMetaWrapper
				id={id}
				option={option}
				value={valueWithResponsive}
				onChangeFor={onChangeFor}
				values={values}
				getActualOption={getActualOption}
			/>
		) : (
			getActualOption()
		)
		// }

		return (
			<div
				className="ct-option-container"
				{...(option.wrapperAttr || {})}
				{...(renderingConfig.design && renderingConfig.design !== true
					? { ['data-design']: renderingConfig.design }
					: {})}>
				{maybeLabel && <label>{maybeLabel}</label>}

				<section>
					<div key={'option'} className="ct-option">
						{OptionComponentWithoutDesign}
					</div>

					{maybeDesc && (
						<div
							dangerouslySetInnerHTML={{ __html: maybeDesc }}
							className="ct-option-description"
						/>
					)}
				</section>
			</div>
		)
	}
}

export default GenericOptionType
