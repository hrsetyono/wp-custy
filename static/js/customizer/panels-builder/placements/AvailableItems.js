import {
	createElement,
	Component,
	useState,
	Fragment
} from '@wordpress/element'
import DraggableItems from './DraggableItems'
import cls from 'classnames'
import Panel, { PanelMetaWrapper } from '../../../options/options/ct-panel'
import { getValueFromInput } from '../../../options/helpers/get-value-from-input'
import { __ } from 'ct-i18n'

import BuilderTemplates from './builder-sidebar/Templates'
import SecondaryItems from './builder-sidebar/SecondaryItems'
import InvisiblePanels from './builder-sidebar/InvisiblePanels'

const AvailableItems = ({
	allBuilderSections,
	builderValue,
	builderValueDispatch,
	inlinedItemsFromBuilder
}) => {
	const secondaryItems =
		ct_customizer_localizations.header_builder_data.secondary_items.header
	const allItems = ct_customizer_localizations.header_builder_data.header

	return (
		<div className="ct-available-items">
			<h3 className="ct-title">{__('Global Header', 'blocksy')}</h3>
			<BuilderTemplates
				allBuilderSections={allBuilderSections}
				builderValue={builderValue}
				builderValueDispatch={builderValueDispatch}
			/>
			<div className="ct-option-description">
				{__(
					'Set one of these headers as a global one. You can edit them idependently.',
					'blocksy'
				)}
			</div>
			<h3 className="ct-title">{__('Header Elements', 'blocksy')}</h3>
			<SecondaryItems
				builderValue={builderValue}
				builderValueDispatch={builderValueDispatch}
				inlinedItemsFromBuilder={inlinedItemsFromBuilder}
			/>

			<InvisiblePanels
				builderValue={builderValue}
				builderValueDispatch={builderValueDispatch}
			/>
		</div>
	)
}

export default AvailableItems
