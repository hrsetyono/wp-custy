import {
	handleWidgetAreaVariables,
	handleWidgetAreaOptions
} from '../widget-area-1/sync'

ctEvents.on(
	'ct:footer:sync:collect-variable-descriptors',
	variableDescriptors => {
		variableDescriptors['widget-area-3'] = handleWidgetAreaVariables({
			selector: '[data-column="widget-area-3"]'
		})
	}
)

ctEvents.on('ct:footer:sync:item:widget-area-3', changeDescriptor =>
	handleWidgetAreaOptions({
		selector: '[data-column="widget-area-3"]',
		changeDescriptor
	})
)
