import {
	Fragment,
	createElement,
	Component,
	useRef,
	useEffect,
	useMemo,
	useCallback,
	useState
} from '@wordpress/element'
import classnames from 'classnames'
import { __ } from 'ct-i18n'

import GenericOptionType from '../../GenericOptionType'
import PatternPicker from './PatternPicker'
import ImagePicker from './ImagePicker'

const BackgroundModal = ({
	option,
	value,
	isOpen,
	innerRef,
	placement,
	onChange,
	setOutsideClickFreezed
}) => {
	return (
		<Fragment>
			<ul
				className="ct-background-type"
				onMouseUp={e => {
					e.preventDefault()
				}}>
				{['color', 'pattern', 'image'].map(type => (
					<li
						data-type={type}
						key={type}
						className={classnames({
							active: type === value.background_type
						})}
						onClick={() =>
							onChange({
								...value,
								background_type: type
							})
						}>
						{
							{
								color: __('Color', 'blocksy'),
								pattern: __('Pattern', 'blocksy'),
								image: __('Image', 'blocksy')
							}[type]
						}
					</li>
				))}
			</ul>

			<div
				className={classnames({
					'ct-image-tab': value.background_type === 'image',
					'ct-patterns-tab': value.background_type === 'pattern',
					'ct-color-tab': value.background_type === 'color'
				})}>
				{value.background_type === 'pattern' && (
					<PatternPicker
						option={option}
						onChange={onChange}
						value={value}
					/>
				)}

				{value.background_type === 'image' && (
					<ImagePicker
						setOutsideClickFreezed={setOutsideClickFreezed}
						option={option}
						onChange={onChange}
						value={value}
					/>
				)}

				<GenericOptionType
					value={value['backgroundColor']}
					values={value}
					option={{
						id: 'backgroundColor',
						label:
							value.background_type === 'color'
								? false
								: __('Background Color', 'blocksy'),
						type: 'ct-color-picker',
						skipNoColorPill: true,
						design: 'inline',
						value: option.value['backgroundColor'],
						pickers: [
							{
								title: __('Initial', 'blocksy'),
								id: 'default'
							}
						],
						inline_modal: value.background_type === 'color',
						skipArrow: true
					}}
					hasRevertButton={false}
					onChange={newValue =>
						onChange({
							...value,
							backgroundColor: newValue
						})
					}
				/>
			</div>
		</Fragment>
	)
}

export default BackgroundModal
