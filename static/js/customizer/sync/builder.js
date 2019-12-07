import ctEvents from 'ct-events'
import { handleSingleVariableFor } from 'customizer-sync-helpers'
import { getValueFromInput } from '../../options/helpers/get-value-from-input'
import $ from 'jquery'

const headerVariableDescriptors = {}
const footerVariableDescriptors = {}

const compare = function(obj1, obj2) {
	if (typeof obj1 !== typeof obj2) {
		return false
	}

	if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
		return obj1 === obj2
	}

	for (var p in obj1) {
		if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false

		switch (typeof obj1[p]) {
			case 'object':
				if (!compare(obj1[p], obj2[p])) return false
				break
			default:
				if (obj1[p] != obj2[p]) return false
		}
	}

	for (var p in obj2) {
		if (typeof obj1[p] == 'undefined') return false
	}

	return true
}

ctEvents.trigger(
	'ct:header:sync:collect-variable-descriptors',
	headerVariableDescriptors
)

ctEvents.trigger(
	'ct:footer:sync:collect-variable-descriptors',
	footerVariableDescriptors
)

const makeShortcutFor = item => {
	if ([...item.children].find(e => e.matches('.ct-customizer-shortcut'))) {
		return
	}

	const shortcut = document.createElement('a')

	shortcut.classList.add('ct-customizer-shortcut')

	if (item.dataset.shortcut === 'drop') {
		shortcut.innerHTML = `
    <svg viewBox="0 0 24 24"><path d="M3,12c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S3,10.9,3,12z M10,12c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S10,10.9,10,12z
   M17,12c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S17,10.9,17,12z"/></svg>
        `
	} else {
		shortcut.innerHTML = 'Edit'
	}

	item.removeAttribute('data-item-label')

	shortcut.addEventListener('click', e => {
		e.preventDefault()
		wp.customize.preview.send(
			'ct-initiate-deep-link',
			item.dataset.location
		)
	})

	item.appendChild(shortcut)
}

ctEvents.on('ct:header:render-frame', () => {
	;[
		...document.querySelectorAll('#main-container > header [data-id]'),
		...document.querySelectorAll('#main-container > header [data-row]'),
		...document.querySelectorAll(
			'#main-container > footer [data-shortcut]'
		),
		...document.querySelectorAll('#main-container > footer [data-row]'),
		...document.querySelectorAll('#offcanvas .ct-bag-container')
	].map(el => makeShortcutFor(el))
})

wp.customize.bind('preview-ready', () => {
	wp.customize.selectiveRefresh.Partial.prototype.createEditShortcutForPlacement = () => {}

	wp.customize.selectiveRefresh.Partial.prototype.ready = function() {
		var partial = this
		_.each(partial.placements(), function(placement) {
			// $( placement.container ).attr( 'title', self.data.l10n.shiftClickToEdit );
			partial.createEditShortcutForPlacement(placement)
		})
		$(document).on('click', partial.params.selector, function(e) {
			if (!e.shiftKey) {
				return
			}
			e.preventDefault()
			_.each(partial.placements(), function(placement) {
				if ($(placement.container).is(e.currentTarget)) {
					partial.showControl()
				}
			})
		})
	}
	wp.customize.selectiveRefresh.Partial.prototype.isRelatedSetting = function(
		setting,
		newValue,
		oldValue
	) {
		var partial = this

		if (_.isString(setting)) {
			setting = wp.customize(setting)
		}

		if (!setting) {
			return false
		}

		if (
			_.indexOf(partial.settings(), setting.id) > -1 &&
			(partial.settings().indexOf('header_placements') > -1 ||
				partial.settings().indexOf('footer_placements') > -1)
		) {
			if (partial.id.indexOf(':') > -1) {
				const [_, itemId] = partial.id.split(':')

				const item = ct_customizer_localizations.header_builder_data[
					partial.settings().indexOf('header_placements') > -1
						? 'header'
						: 'footer'
				].find(({ id }) => id === itemId)

				if (!item) {
					return false
				}

				if (newValue.__should_refresh_item__) {
					const [
						expectedItemId,
						optionId
					] = newValue.__should_refresh_item__.split(':')

					if (
						expectedItemId === itemId &&
						item.config.selective_refresh.indexOf(optionId) > -1
					) {
						return true
					}
				}

				return false
			}

			if (
				Object.keys(newValue).indexOf('__should_refresh__') > -1 &&
				newValue.__should_refresh__
			) {
				return true
			}

			return false
		}

		return -1 !== _.indexOf(partial.settings(), setting.id)
	}

	wp.customize.preview.bind(
		'ct:header:receive-value-update',
		({ optionId, optionValue, values, itemId }) => {
			ctEvents.trigger(`ct:header:sync:item:${itemId}`, {
				itemId,
				optionId,
				optionValue,
				values,
				// TODO: implement
				getFullValuesForItem: () => ({})
			})

			if (!headerVariableDescriptors[itemId]) return
			if (!headerVariableDescriptors[itemId][optionId]) return

			const descriptor = headerVariableDescriptors[itemId][optionId]

			;(Array.isArray(descriptor) ? descriptor : [descriptor]).map(d =>
				handleSingleVariableFor(d, optionValue)
			)
		}
	)

	wp.customize.preview.bind(
		'ct:footer:receive-value-update',
		({ optionId, optionValue, values, itemId }) => {
			ctEvents.trigger(`ct:footer:sync:item:${itemId}`, {
				itemId,
				optionId,
				optionValue,
				values,
				// TODO: implement
				getFullValuesForItem: () => ({})
			})

			if (!footerVariableDescriptors[itemId]) return
			if (!footerVariableDescriptors[itemId][optionId]) return

			const descriptor = footerVariableDescriptors[itemId][optionId]

			;(Array.isArray(descriptor) ? descriptor : [descriptor]).map(d =>
				handleSingleVariableFor(d, d.fullValue ? values : optionValue)
			)
		}
	)

	wp.customize.preview.bind(
		'ct:header:receive-value-update:all-items',
		({ items, oldItems }) => {
			ct_customizer_localizations.header_builder_data.header.map(
				({ id: itemId, options }) => {
					const actualItem = items.find(({ id }) => id === itemId)
					const oldActualItem = oldItems.find(
						({ id }) => id === itemId
					)

					if (!actualItem && !oldActualItem) {
						return
					}

					const diffedValues = getValueFromInput(
						options,
						{},
						(id, option) => {
							const newValues =
								(actualItem ? actualItem.values : null) || {}
							const oldValues =
								(oldActualItem ? oldActualItem.values : null) ||
								{}

							if (
								Object.keys(newValues).indexOf(id) === -1 &&
								Object.keys(oldValues).indexOf(id) === -1
							) {
								return {}
							}

							if (
								compare(
									newValues[id] || option.value,
									oldValues[id] || option.value
								)
							) {
								return {}
							}

							return { [id]: newValues[id] || option.value }
						}
					)

					Object.keys(diffedValues).map(optionId => {
						if (!headerVariableDescriptors[itemId]) {
							return
						}

						const descriptor =
							headerVariableDescriptors[itemId][optionId]

						if (!descriptor) {
							return
						}

						;(Array.isArray(descriptor)
							? descriptor
							: [descriptor]
						).map(d =>
							handleSingleVariableFor(d, diffedValues[optionId])
						)
					})
				}
			)
		}
	)

	wp.customize.preview.bind(
		'ct:footer:receive-value-update:all-items',
		({ section, oldSection }) => {
			const { items, settings } = section
			const { items: oldItems, settings: oldSettings } = oldSection

			const diffedFooterValues = getValueFromInput(
				ct_customizer_localizations.header_builder_data.footer_data
					.footer_options,
				{},
				(id, option) => {
					const newValues = (settings ? settings : null) || {}
					const oldValues = (oldSettings ? oldSettings : null) || {}

					if (
						Object.keys(newValues).indexOf(id) === -1 &&
						Object.keys(oldValues).indexOf(id) === -1
					) {
						return {}
					}

					if (
						compare(
							newValues[id] || option.value,
							oldValues[id] || option.value
						)
					) {
						return {}
					}

					return { [id]: newValues[id] || option.value }
				}
			)

			Object.keys(diffedFooterValues).map(optionId => {
				if (!footerVariableDescriptors.global) {
					return
				}

				const descriptor = footerVariableDescriptors.global[optionId]

				if (!descriptor) {
					return
				}

				;(Array.isArray(descriptor) ? descriptor : [descriptor]).map(
					d =>
						handleSingleVariableFor(d, diffedFooterValues[optionId])
				)
			})

			ct_customizer_localizations.header_builder_data.footer.map(
				({ id: itemId, options }) => {
					let maybeRow = section.rows.find(({ id }) => id === itemId)
					let maybeOldRow = oldSection.rows.find(
						({ id }) => id === itemId
					)

					const actualItem = items[itemId]
					const oldActualItem = oldItems[itemId]

					if (
						!actualItem &&
						!oldActualItem &&
						itemId !== 'middle-row' &&
						itemId !== 'bottom-row' &&
						itemId !== 'top-row'
					) {
						return
					}

					const diffedValues = getValueFromInput(
						options,
						{},
						(id, option) => {
							const newValues = {
								...((actualItem ? actualItem.values : null) ||
									{}),
								...(maybeRow
									? { items_per_row: maybeRow.columns.length }
									: {})
							}
							const oldValues = {
								...((oldActualItem
									? oldActualItem.values
									: null) || {}),

								...(maybeOldRow
									? {
											items_per_row:
												maybeOldRow.columns.length
									  }
									: {})
							}

							if (
								Object.keys(newValues).indexOf(id) === -1 &&
								Object.keys(oldValues).indexOf(id) === -1
							) {
								return {}
							}

							if (
								compare(
									newValues[id] || option.value,
									oldValues[id] || option.value
								)
							) {
								return {}
							}

							return { [id]: newValues[id] || option.value }
						}
					)

					Object.keys(diffedValues).map(optionId => {
						if (!footerVariableDescriptors[itemId]) {
							return
						}

						const descriptor =
							footerVariableDescriptors[itemId][optionId]

						if (!descriptor) {
							return
						}

						;(Array.isArray(descriptor)
							? descriptor
							: [descriptor]
						).map(d =>
							handleSingleVariableFor(
								d,
								d.fullValue
									? diffedValues
									: diffedValues[optionId]
							)
						)
					})
				}
			)
		}
	)
})
