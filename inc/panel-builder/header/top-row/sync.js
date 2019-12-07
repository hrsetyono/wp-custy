import { handleRowVariables, handleRowOptions } from '../middle-row/sync'
import ctEvents from 'ct-events'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['top-row'] = handleRowVariables({
			selector: 'header [data-row="top"]'
		})
	}
)

ctEvents.on('ct:header:sync:item:top-row', changeDescriptor =>
	handleRowOptions({ selector: 'header [data-row="top"]', changeDescriptor })
)
