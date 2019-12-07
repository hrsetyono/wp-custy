import Popper from 'popper.js'

function furthest(el, s) {
	var nodes = []

	while (el.parentNode) {
		if (
			el.parentNode &&
			el.parentNode.matches &&
			el.parentNode.matches(s)
		) {
			nodes.push(el.parentNode)
		}

		el = el.parentNode
	}

	return nodes[nodes.length - 1]
}

const getPreferedPlacementFor = el => {
	const farmost = furthest(el, 'li.menu-item')

	if (!farmost) {
		return 'right'
	}

	return farmost.getBoundingClientRect().left > innerWidth / 2
		? 'left'
		: 'right'
}

export const handleSingleSubmenu = menu => {
	;[...menu.querySelectorAll('[data-submenu]')].map(el => {
		el.removeAttribute('data-submenu')
	})

	setTimeout(
		() =>
			(menu._popper = new Popper(menu.parentNode, menu, {
				modifiers: {
					applyStyle: { enabled: false },

					preventOverflow: {
						enabled: false
					},

					hide: {
						enabled: false
					},

					flip: {
						// enabled: false,
						behavior: ['right', 'left'],
						flipVariationsByContent: true
					},

					setCustomStyle: {
						enabled: true,
						order: 100000000,
						fn: ({
							flipped,
							instance,
							instance: { reference },
							popper,
							popper: { left },
							placement,
							styles
						}) =>
							(reference.dataset.submenu =
								placement === 'left' ? 'left' : 'right')
					}
				},
				placement: getPreferedPlacementFor(menu)
			}))
	)
}

export const handleFirstLevelForMenu = menu => {
	if (menu.hasFirstLevelPoppers) {
		return
	}

	menu.hasFirstLevelPoppers = true
	;[...menu.children]
		.filter(
			el =>
				el.classList.contains('menu-item-has-children') ||
				el.classList.contains('page_item_has_children')
		)
		.map(el => el.querySelector('.sub-menu'))
		.map(menu => handleSingleSubmenu(menu))
}

export const handleUpdate = menu => {
	if (menu.hasPoppers) {
		return
	}

	menu.hasPoppers = true

	menu.parentNode.addEventListener('mouseenter', () => {
		if (menu._timeout_id) {
			clearTimeout(menu._timeout_id)
		}

		;[...menu.children]
			.filter(
				el =>
					el.classList.contains('menu-item-has-children') ||
					el.classList.contains('page_item_has_children')
			)
			.map(el => el.querySelector('.sub-menu'))
			.map(menu => {
				;[...menu.querySelectorAll('[data-submenu]')].map(el => {
					el.removeAttribute('data-submenu')
				})

				setTimeout(
					() =>
						(menu._popper = new Popper(menu.parentNode, menu, {
							modifiers: {
								applyStyle: { enabled: false },

								preventOverflow: {
									enabled: true
								},

								hide: {
									enabled: false
								},

								flip: {
									// enabled: false,
									behavior: ['right', 'left'],
									flipVariations: true,
									flipVariationsByContent: true
								},

								setCustomStyle: {
									enabled: true,
									order: 100000000,
									fn: ({
										flipped,
										instance,
										instance: { reference, popper },
										placement,
										styles
									}) => {
										const {
											left,
											width,
											right
										} = popper.getBoundingClientRect()

										let futurePlacement = placement

										if (placement === 'left') {
											if (
												reference.getBoundingClientRect()
													.left -
													width <
												0
											) {
												futurePlacement = 'right'
											}
										}

										if (placement === 'right') {
											if (
												reference.getBoundingClientRect()
													.right -
													width <
												0
											) {
												futurePlacement = 'left'
											}
										}

										reference.dataset.submenu = futurePlacement
									}
								}
							},
							placement: getPreferedPlacementFor(menu)
						}))
				)
			})

		menu.parentNode.addEventListener(
			'mouseleave',
			() => {
				;[...menu.children]
					.filter(
						el =>
							el.classList.contains('menu-item-has-children') ||
							el.classList.contains('page_item_has_children')
					)
					.map(el => el.querySelector('.sub-menu'))
					.map(menu => {
						if (!menu._popper) return

						menu._popper.destroy()
						menu._popper = null
					})

				menu._timeout_id = setTimeout(() => {
					menu._timeout_id = null
					;[...menu.children]
						.filter(
							el =>
								el.classList.contains(
									'menu-item-has-children'
								) ||
								el.classList.contains('page_item_has_children')
						)
						.map(el => el.removeAttribute('data-submenu'))
				}, 200)
			},
			{ once: true }
		)
	})
}
