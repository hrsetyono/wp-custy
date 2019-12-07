wp.customize('store_notice_position', val =>
	val.bind(to => {
		if (!document.querySelector('.woocommerce-store-notice')) {
			return
		}

		document.querySelector(
			'.woocommerce-store-notice'
		).dataset.position = to
	})
)
