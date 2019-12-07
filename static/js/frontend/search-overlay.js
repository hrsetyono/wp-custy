export const mount = el => {
	initAnimatedModal(el, {
		modalTarget: el.hash
	})
}

import { enable, disable } from './no-bounce'

function initAnimatedModal(el, options) {
	return
	var settings = {
		modalTarget: 'animatedModal',
		animatedIn: 'ct-fade-in',
		animatedOut: 'ct-fade-out',
		onClose: () => {},

		...options
	}

	var modalContainer = document
		.querySelector(settings.modalTarget)
		.querySelector('.ct-bag-container')

	modalContainer.addEventListener('click', function(e) {
		e.stopPropagation()
	})

	el.addEventListener('click', event => handleClick(event, el, settings))
}

export const handleClick = (event, el, options) => {
	return
	var settings = {
		modalTarget: 'animatedModal',
		animatedIn: 'ct-fade-in',
		animatedOut: 'ct-fade-out',
		clickOutside: false,
		focus: true,
		onClose: () => {},

		...options
	}

	event.preventDefault()

	let id = document.querySelector(el.hash)
	let modalContainer = id.querySelector('.ct-bag-container')

	id.classList.add('opened')

	document.body.classList.add('modal-active')

	id.classList.add('active')

	enable()

	modalContainer.classList.add(...[`${settings.animatedIn}`, `ct-animated`])

	if (settings.focus) {
		modalContainer.querySelector('input') &&
			modalContainer.querySelector('input').focus()
	}

	/*
		modalContainer.parentNode.addEventListener(
			'touchmove',
			e => {
				e.stopImmediatePropagation()
				e.preventDefault()
			},
			true
		)
*/

	modalContainer.addEventListener(
		'animationend',
		() => {
			modalContainer.classList.remove(
				...[`${settings.animatedIn}`, `ct-animated`]
			)
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

	document.addEventListener('keyup', onEnd)

	id.querySelector('.ct-bag-close').addEventListener(
		'click',
		event => {
			event.preventDefault()
			event.stopPropagation()

			closeModal(id, settings)
		},
		{ once: true }
	)

	if (settings.clickOutside) {
		id.querySelector('.ct-bag-content').firstElementChild.addEventListener(
			'click',
			event => event.stopPropagation()
		)

		id.querySelector('.ct-bag-content').addEventListener(
			'click',
			event => closeModal(id, settings),
			{
				once: true
			}
		)
	}
}

function closeModal($el, settings) {
	return
	var modalContainer = $el.querySelector('.ct-bag-container')

	if (!document.body.classList.contains('modal-active')) {
		return
	}

	settings = {
		modalTarget: 'animatedModal',
		animatedIn: 'ct-fade-in',
		animatedOut: 'ct-fade-out',
		clickOutside: false,
		focus: true,
		onClose: () => {},

		...settings
	}

	modalContainer.classList.add(settings.animatedOut, `ct-animated`)
	$el.classList.remove('active')

	modalContainer.addEventListener(
		'animationend',
		() => {
			document.body.classList.remove('modal-active')

			modalContainer.classList.remove(settings.animatedOut, `ct-animated`)

			$el.classList.remove('opened')

			disable()

			settings.onClose()
			ctEvents.trigger('ct:modal:closed', modalContainer)
		},
		{ once: true }
	)
}

ctEvents.on('ct:offcanvas:force-close', ({ $el, settings }) => {
	closeModal($el, settings)
})
