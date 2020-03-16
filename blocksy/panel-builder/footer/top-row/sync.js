import { handleRowVariables, handleRowOptions } from '../middle-row/sync'
import ctEvents from 'ct-events'

ctEvents.on(
	'ct:footer:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['top-row'] = handleRowVariables({
			selector: '.site-footer [data-row="top"]'
		})
	}
)

ctEvents.on('ct:footer:sync:item:top-row', changeDescriptor =>
	handleRowOptions({ selector: '.site-footer [data-row="top"]', changeDescriptor })
)
