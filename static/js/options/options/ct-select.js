import { createElement, Component } from '@wordpress/element'
import { maybeTransformUnorderedChoices } from '../helpers/parse-choices.js'
import Downshift from 'downshift'
import classnames from 'classnames'

const Select = ({
	value,
	option: { choices, tabletChoices, mobileChoices, placeholder },
	onChange,
	device = 'desktop'
}) => {
	let deviceChoices = choices

	if (device === 'tablet' && tabletChoices) {
		deviceChoices = tabletChoices
	}

	if (device === 'mobile' && mobileChoices) {
		deviceChoices = mobileChoices
	}

	const orderedChoices = maybeTransformUnorderedChoices(deviceChoices)

	if (orderedChoices.length === 0) {
		return null
	}

	return (
		<Downshift
			selectedItem={value}
			onChange={selection => onChange(selection)}
			itemToString={item =>
				item && orderedChoices.find(({ key }) => key === item)
					? orderedChoices.find(({ key }) => key === item).value
					: ''
			}>
			{({
				getInputProps,
				getItemProps,
				getLabelProps,
				getMenuProps,
				isOpen,
				inputValue,
				highlightedIndex,
				selectedItem,
				openMenu
			}) => (
				<div className="ct-select-input">
					<input
						{...getInputProps({
							onFocus: () => openMenu(),
							onClick: () => openMenu()
						})}
						placeholder={placeholder || 'Select value...'}
						readOnly
						disabled={orderedChoices.length === 0}
					/>

					{isOpen && (
						<div
							{...getMenuProps({
								className: 'ct-select-dropdown'
							})}>
							{orderedChoices.map((item, index) => (
								<div
									{...getItemProps({
										key: item.key,
										index,
										item: item.key,
										className: classnames(
											'ct-select-dropdown-item',
											{
												active:
													highlightedIndex === index,
												selected:
													selectedItem === item.key
											}
										)
									})}>
									{item.value}
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</Downshift>
	)
}

export default Select
