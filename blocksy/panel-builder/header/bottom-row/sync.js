import { handleRowVariables, handleRowOptions } from '../middle-row/sync'
import ctEvents from 'ct-events'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['bottom-row'] = handleRowVariables({
			selector: 'header [data-row="bottom"]'
		})
	}
)

ctEvents.on('ct:header:sync:item:bottom-row', changeDescriptor =>
	handleRowOptions({ selector: 'header [data-row="bottom"]', changeDescriptor })
)
