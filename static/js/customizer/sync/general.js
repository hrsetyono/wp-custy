wp.customize('content_link_type', val =>
	val.bind(to => (document.body.dataset.link = to))
)
