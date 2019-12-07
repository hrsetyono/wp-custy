import { handleRowVariables, handleRowOptions } from '../middle-row/sync'
import ctEvents from 'ct-events'

ctEvents.on(
	'ct:footer:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['bottom-row'] = handleRowVariables({
			selector: '.site-footer [data-row="bottom"]'
		})
	}
)

ctEvents.on('ct:footer:sync:item:bottom-row', changeDescriptor =>
	handleRowOptions({
		selector: '.site-footer [data-row="bottom"]',
		changeDescriptor
	})
)
