import { responsiveClassesFor } from './footer'

export const renderSidebar = () => {
	const sidebar = document.querySelector('.ct-sidebar')

	if (!sidebar) return

	document.querySelector(
		'.ct-sidebar'
	).parentNode.dataset.type = wp.customize('sidebar_type')()

	document.querySelector('.ct-sidebar').removeAttribute('data-widgets')

	if (
		wp.customize('separated_widgets')() === 'yes' &&
		wp.customize('sidebar_type')() === 'type-2'
	) {
		document.querySelector('.ct-sidebar').dataset.widgets = 'separated'
	}
}

wp.customize('separated_widgets', val =>
	val.bind(to => {
		renderSidebar()
	})
)

wp.customize('has_sticky_sidebar', val =>
	val.bind(to => {
		const sidebar = document.querySelector('.ct-sidebar')
		if (!sidebar) return

		sidebar.removeAttribute('data-sticky')

		if (to !== 'yes') return

		document.querySelector('.ct-sidebar').dataset.sticky = ''
	})
)

wp.customize('sidebar_type', val => val.bind(to => renderSidebar()))

wp.customize('sidebar_visibility', val =>
	val.bind(to => {
		const sidebar = document.querySelector('.ct-sidebar')
		if (!sidebar) return

		responsiveClassesFor(
			'sidebar_visibility',
			document.querySelector('.ct-sidebar').parentNode
		)
	})
)
