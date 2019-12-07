export const listenToChanges = () => {
	const renderValue = () => {
		const overlay = document.querySelector('.wp-full-overlay')
		overlay.classList.remove('ct-dark-mode')

		overlay.classList.add('ct-disable-transitions')

		setTimeout(
			() => overlay.classList.remove('ct-disable-transitions'),
			500
		)

		if (wp.customize._value['customizer_color_scheme']() === 'yes') {
			overlay.classList.add('ct-dark-mode')
		}
	}

	wp.customize.bind('change', e => {
		if (e.id !== 'customizer_color_scheme') return
		renderValue()
	})

	wp.customize.bind('ready', () => renderValue())
}
