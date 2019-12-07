import { enable, disable } from './no-bounce'

const showOffcanvas = settings => {
	settings = {
		onClose: () => {},
		container: null,
		focus: true,
		...settings
	}

	if (settings.container) {
		settings.container.classList.add('active')
	}

	if (settings.focus) {
		setTimeout(() => {
			settings.container.querySelector('input') &&
				settings.container.querySelector('input').focus()
		}, 200)
	}

	settings.container.addEventListener('click', function(e) {
		e.stopPropagation()

		if (settings.clickOutside) {
			document.body.hasAttribute('data-panel') && hideOffcanvas(settings)
		}
	})

	if (settings.clickOutside) {
		settings.container
			.querySelector('.content-container')
			.firstElementChild.addEventListener('click', event =>
				event.stopPropagation()
			)

		settings.container.querySelector('.content-container').addEventListener(
			'click',
			event => {
				document.body.hasAttribute('data-panel') &&
					hideOffcanvas(settings)
			},
			{
				once: true
			}
		)
	}

	document.body.dataset.panel = `in${
		settings.container.dataset.behaviour.indexOf('left') > -1
			? ':left'
			: settings.container.dataset.behaviour.indexOf('right') > -1
			? ':right'
			: ''
	}`

	settings.container.addEventListener(
		settings.container.dataset.behaviour.indexOf('side') > -1
			? 'transitionend'
			: 'animationend',
		() => {
			return
			document.body.dataset.panel = `${
				settings.container.dataset.behaviour.indexOf('left') > -1
					? 'left'
					: settings.container.dataset.behaviour.indexOf('right') > -1
					? 'right'
					: ''
			}`
		},
		{ once: true }
	)

	window.addEventListener(
		'click',
		() =>
			document.body.hasAttribute('data-panel') && hideOffcanvas(settings),
		{ once: true }
	)

	document.addEventListener(
		'keyup',
		event => {
			const { keyCode, target } = event
			if (keyCode !== 27) return
			event.preventDefault()

			document.body.hasAttribute('data-panel') && hideOffcanvas(settings)
		},
		{ once: true }
	)

	settings.container &&
		settings.container.querySelector('.close-button').addEventListener(
			'click',
			event => {
				event.preventDefault()
				event.stopPropagation()

				hideOffcanvas(settings)
			},
			{ once: true }
		)

	disable(settings.container.querySelector('.content-container'))
}

const hideOffcanvas = settings => {
	settings = {
		onClose: () => {},
		container: null,
		...settings
	}

	if (!document.body.hasAttribute('data-panel')) {
		settings.container.classList.remove('active')
		settings.onClose()
		return
	}

	settings.container.classList.remove('active')

	document.body.dataset.panel = `out`

	settings.container.addEventListener(
		'transitionend',
		() => {
			setTimeout(() => {
				document.body.removeAttribute('data-panel')
				ctEvents.trigger('ct:modal:closed', settings.container)
				enable(settings.container.querySelector('.content-container'))
			}, 300)
		},
		{ once: true }
	)

	const onEnd = event => {
		const { keyCode, target } = event
		if (keyCode !== 27) return
		event.preventDefault()
		document.removeEventListener('keyup', onEnd)
		closeModal(id, settings)
	}

	settings.onClose()
}

export const handleClick = (e, settings) => {
	e.preventDefault()
	e.stopPropagation()

	settings = {
		onClose: () => {},
		container: null,
		focus: true,
		clickOutside: false,
		...settings
	}

	if (document.body.hasAttribute('data-panel')) {
		hideOffcanvas(settings)
	} else {
		showOffcanvas(settings)
	}
}

ctEvents.on('ct:offcanvas:force-close', settings => hideOffcanvas(settings))

export const mount = el => {
	if (el.hasSearchEventListener) {
		return
	}

	el.hasSearchEventListener = true

	el.addEventListener('click', event => {
		handleClick(event, {
			container: document.querySelector(el.hash)
		})
	})
}
