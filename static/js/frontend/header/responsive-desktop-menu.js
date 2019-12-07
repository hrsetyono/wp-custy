let cacheInfo = {}

ctEvents.on('ct:header:update', () => (cacheInfo = {}))

const getItemsDistribution = nav => {
	let navWidth = nav.getBoundingClientRect().width
	let containerWidth = nav.parentNode.getBoundingClientRect().width

	if (Math.abs(containerWidth - navWidth) > 5) {
		containerWidth =
			containerWidth -
			Array.from(nav.parentNode.children)
				.filter(el => el.dataset.id !== nav.dataset.id)
				.reduce((sum, el) => sum + el.getBoundingClientRect().width, 0)
	}

	if (
		Math.abs(
			nav.parentNode.getBoundingClientRect().width -
				nav.parentNode.parentNode.getBoundingClientRect().width
		) > 5
	) {
		containerWidth += [...nav.parentNode.parentNode.children]
			.filter(el => el.dataset.items !== nav.parentNode.dataset.items)
			.reduce(
				(sum, el) =>
					sum +
					(el.getBoundingClientRect().width -
						[...el.children].reduce(
							(sum, el) => sum + el.getBoundingClientRect().width,
							0
						)),
				0
			)
	}

	if (
		nav.closest('[class*="ct-container"]') &&
		nav
			.closest('[class*="ct-container"]')
			.querySelectorAll('[data-id*="menu"]').length === 1 &&
		nav.closest('[data-column="middle"]')
	) {
		containerWidth =
			[...nav.closest('[class*="ct-container"]').children].reduce(
				(sum, el) => sum + el.getBoundingClientRect().width,
				0
			) -
			Math.max(
				[
					...nav
						.closest('[class*="ct-container"]')
						.querySelectorAll('[data-column="start"] [data-id]')
				].reduce((sum, el) => {
					let style = window.getComputedStyle(el)
					return (
						sum +
						el.getBoundingClientRect().width +
						parseInt(style.getPropertyValue('margin-left')) +
						parseInt(style.getPropertyValue('margin-right'))
					)
				}, 0),
				[
					...nav
						.closest('[class*="ct-container"]')
						.querySelectorAll('[data-column="end"] [data-id]')
				].reduce((sum, el) => {
					let style = window.getComputedStyle(el)

					return (
						sum +
						el.getBoundingClientRect().width +
						parseInt(style.getPropertyValue('margin-left')) +
						parseInt(style.getPropertyValue('margin-right'))
					)
				}, 0)
			) *
				2
	}

	const fitDescriptor = cacheInfo[nav.dataset.id].children.reduce(
		({ fit, notFit }, currentEl, currentIndex) => ({
			...(cacheInfo[nav.dataset.id].itemsWidth
				.slice(0, currentIndex + 1)
				.reduce((sum, n) => sum + n, 0) < containerWidth
				? {
						fit: [...fit, currentEl],
						notFit
				  }
				: {
						notFit: [...notFit, currentEl],
						fit
				  })
		}),

		{
			fit: [],
			notFit: []
		}
	)

	if (
		Math.abs(
			containerWidth -
				cacheInfo[nav.dataset.id].children.reduce(
					(sum, el, index) =>
						fitDescriptor.fit.indexOf(el) > -1
							? sum + cacheInfo[nav.dataset.id].itemsWidth[index]
							: sum,
					0
				)
		) < 70
	) {
		const popped = fitDescriptor.fit.pop()
		fitDescriptor.notFit = [popped, ...fitDescriptor.notFit]
	}

	return fitDescriptor
}

const maybeCreateMoreItemsFor = nav => {
	if (nav.querySelector('.more-items-container')) {
		return
	}

	const moreContainer = document.createElement('li')

	moreContainer.classList.add('menu-item-has-children')
	moreContainer.classList.add('more-items-container')

	moreContainer.insertAdjacentHTML(
		'afterbegin',
		`<a href="#">
      ${ct_localizations.more_text}
      <span class="child-indicator">
        <svg width="8" height="8" viewBox="0 0 15 15">
            <path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path>
        </svg>
      </span>
    </a>
    <ul class="sub-menu"></ul>`
	)

	nav.firstElementChild.appendChild(moreContainer)

	import('./menu').then(({ handleSingleSubmenu }) =>
		handleSingleSubmenu(
			nav.querySelector('.more-items-container > .sub-menu')
		)
	)
}

const computeItemsWidth = nav =>
	Array.from(nav.firstElementChild.children)
		.filter(el => !el.classList.contains('.more-items-container'))
		.map(el => {
			const a = el.firstElementChild
			a.innerHTML = `<span>${a.innerHTML}</span>`

			const props = window.getComputedStyle(a, null)

			let actualWidth =
				a.firstElementChild.getBoundingClientRect().width +
				parseInt(props.getPropertyValue('padding-left'), 10) +
				parseInt(props.getPropertyValue('padding-right'), 10)

			a.innerHTML = a.firstElementChild.innerHTML

			return actualWidth
		})

export const mount = nav => {
	if (!cacheInfo[nav.dataset.id]) {
		cacheInfo[nav.dataset.id] = {
			el: nav,
			previousRenderedWidth: null,
			children: [
				...Array.from(nav.firstElementChild.children).filter(
					el => !el.classList.contains('more-items-container')
				),

				...(nav.firstElementChild.querySelector('.more-items-container')
					? [
							...nav.firstElementChild.querySelector(
								'.more-items-container .sub-menu'
							).children
					  ]
					: [])
			],
			itemsWidth: computeItemsWidth(nav)
		}

		nav.removeAttribute('data-responsive')
	}

	if (
		cacheInfo[nav.dataset.id].previousRenderedWidth &&
		cacheInfo[nav.dataset.id].previousRenderedWidth === window.innerWidth
	) {
		return
	}

	cacheInfo[nav.dataset.id].previousRenderedWidth = window.innerWidth

	let { fit, notFit } = getItemsDistribution(nav)

	if (notFit.length === 0) {
		if (nav.querySelector('.more-items-container')) {
			fit.map(el => {
				nav.firstElementChild.insertBefore(
					el,
					nav.querySelector('.more-items-container')
				)
			})

			nav.querySelector('.more-items-container').remove()
		}

		return
	}

	if (!document.querySelector('header[data-device="desktop"]')) {
		return
	}

	maybeCreateMoreItemsFor(nav)

	notFit.map(el =>
		nav.querySelector('.more-items-container .sub-menu').appendChild(el)
	)

	fit.map(el =>
		nav.firstElementChild.insertBefore(
			el,
			nav.querySelector('.more-items-container')
		)
	)
}
