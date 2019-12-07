let ro = null
export const mount = () => {
	let footer = document.querySelector('[data-footer-reveal]')
	if (!footer) return

	const setHeightFor = el => {
		if (!el.dataset.footerReveal) return

		el.style.setProperty(
			'--footerHeight',
			`${footer.firstElementChild.offsetHeight}px`
		)
	}

	footer.dataset.footerReveal = 'yes'

	setHeightFor(footer)

	if (window.ResizeObserver) {
		if (ro) {
			ro.disconnect()
		}

		ro = new ResizeObserver((entries, observer) => setHeightFor(footer))

		ro.observe(footer)
	} else {
		import('element-resize-detector').then(({ default: erd }) => {
			erd().removeAllListeners(footer)

			erd().listenTo(footer, setHeightFor)
		})
	}
}
