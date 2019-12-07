const render = () => {
	const shareBox = document.querySelector('.share-box[data-type="type-2"]')

	if (!shareBox) {
		return
	}

	const entryContent = document
		.querySelector('.entry-content')
		.getBoundingClientRect()

	const upperThanMiddle = entryContent.top < innerHeight / 2
	const bottomIntersectsTopEdge = entryContent.bottom <= 0

	shareBox.classList[
		upperThanMiddle && !bottomIntersectsTopEdge ? 'add' : 'remove'
	]('ct-visible')
}

export const mount = () => {
	render()
	document.addEventListener('scroll', () => render())
}
