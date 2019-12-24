wp.customize('contentLinkType', val =>
	val.bind(to => (document.body.dataset.link = to))
)
