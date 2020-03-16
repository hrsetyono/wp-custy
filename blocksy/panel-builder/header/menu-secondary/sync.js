import { handleMenuVariables, handleMenuOptions } from '../menu/sync'
import ctEvents from 'ct-events'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['menu-secondary'] = handleMenuVariables({
			selector: '[data-id="menu-secondary"]'
		})
	}
)

ctEvents.on('ct:header:sync:item:menu-secondary', changeDescriptor => {
	handleMenuOptions({
		selector: '[data-id="menu-secondary"]',
		changeDescriptor
	})
})
