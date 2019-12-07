import $ from 'jquery'

const sendLocation = () => {
	setTimeout(() => {
		wp.customize.preview.send(
			'location-change',
			window.ct_localizations.customizer_sync.future_location
		)
	}, 500)

	wp.customize.selectiveRefresh.bind('partial-content-rendered', e => {
		ctEvents.trigger('blocksy:instagram:init')
		ctEvents.trigger('ct:images:lazyload:update')
	})

	$(document).on('widget-added', function(event, widgetContainer) {
		// console.log('added')
	})
}

wp.customize.bind('ready', () => sendLocation())
wp.customize.bind('preview-ready', () => sendLocation())
