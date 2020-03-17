import {
	handleWidgetAreaVariables,
	handleWidgetAreaOptions
} from '../widget-area-1/sync'

ctEvents.on(
	'ct:footer:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['widget-area-4'] = handleWidgetAreaVariables({
			selector: '[data-column="widget-area-4"]'
		})
	}
)

ctEvents.on('ct:footer:sync:item:widget-area-4', changeDescriptor =>
	handleWidgetAreaOptions({
		selector: '[data-column="widget-area-4"]',
		changeDescriptor
	})
)