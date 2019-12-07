import {
	createElement,
	Component,
	useState,
	Fragment
} from '@wordpress/element'
import cls from 'classnames'
import Select from '../../../../options/options/ct-select'
import { __ } from 'ct-i18n'

const BuilderTemplates = ({
	allBuilderSections,
	builderValue,
	builderValueDispatch
}) => {
	const secondaryItems =
		ct_customizer_localizations.header_builder_data.secondary_items.header
	const allItems = ct_customizer_localizations.header_builder_data.header

	return (
		<Select
			onChange={id =>
				builderValueDispatch({
					type: 'PICK_BUILDER_SECTION',
					payload: {
						id
					}
				})
			}
			option={{
				placeholder: __('Picker header', 'blocksy'),
				choices: allBuilderSections.sections.map(({ id }) => ({
					key: id,
					value: {
						'type-1': __('Default', 'blocksy'),
						'type-2': __('Secondary', 'blocksy'),
						'type-3': __('Centered', 'blocksy'),
					}[id]
				}))
			}}
			value={builderValue.id}
		/>
	)
}

export default BuilderTemplates
