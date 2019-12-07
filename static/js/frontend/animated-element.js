let io = new IntersectionObserver(entries =>
	entries
		.filter(({ isIntersecting }) => isIntersecting)
		.map(({ target }) => target)
		.filter(el => (el.dataset.reveal || '').indexOf('no') > -1)
		.map((el, index) => {
			el.dataset.reveal = `yes:${index + 1}`
		})
)

export const watchLayoutContainerForReveal = layoutEl => {
	let items = layoutEl.querySelectorAll('[data-reveal*="no"]')

	if (items.length === 0) return
	if (!items[0].dataset.reveal) return
	;[...items].map(el => io.observe(el))
}
