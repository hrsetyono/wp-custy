export const setRatioFor = (ratio, el) => {
	let thumb_ratio = (ratio || '4/3').split('/')

	el.style.paddingBottom = `${Math.round(
		parseInt(thumb_ratio[1], 10) / parseInt(thumb_ratio[0], 10) * 100
	)}%`
}

export const getCache = () => {
	const div = document.createElement('div')
	div.innerHTML = document.querySelector(
		'.ct-customizer-preview-cache-container'
	).value
	return div
}

export const getFreshHtmlFor = (id, cache = null, attr = 'id') => {
	if (!cache) {
		cache = getCache()
	}

	const newHtml = cache.querySelector(
		`.ct-customizer-preview-cache [data-${attr}="${id}"]`
	).innerHTML

	const e = document.createElement('div')
	e.innerHTML = newHtml

	return e
}

export const checkAndReplace = (args = {}) => {
	args = {
		id: null,

		fragment_id: null,

		selector: null,
		parent_selector: null,

		// append | firstChild | maybeBefore:selector
		strategy: 'append',
		whenInserted: () => {},
		beforeInsert: el => {},
		watch: [],

		...args
	}

	const render = () => {
		const to = wp.customize(args.id)()

		const parent = document.querySelector(args.parent_selector)
		;[
			...document.querySelectorAll(
				`${args.parent_selector} ${args.selector}`
			)
		].map(el => el.parentNode.removeChild(el))

		if (to !== 'yes') return

		const el = getFreshHtmlFor(args.fragment_id)

		while (el.firstElementChild) {
			args.beforeInsert(el.firstElementChild)

			if (args.strategy === 'append') {
				parent.appendChild(el.firstElementChild)
			}

			if (args.strategy === 'firstChild') {
				parent.insertBefore(
					el.firstElementChild,
					parent.firstElementChild
				)
			}

			if (args.strategy.indexOf('maybeBefore') > -1) {
				const [_, selector] = args.strategy.split(':')

				if (parent.querySelector(selector)) {
					parent.insertBefore(
						el.firstElementChild,
						parent.querySelector(selector)
					)
				} else {
					parent.appendChild(el.firstElementChild)
				}
			}
		}

		args.whenInserted()
	}

	wp.customize(args.id, val => val.bind(to => render()))
	args.watch.map(opt => wp.customize(opt, val => val.bind(() => render())))
}
