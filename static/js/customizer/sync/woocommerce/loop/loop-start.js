import { replaceCards } from '../archive-product'

const renderShopEntries = () => {
	;[...document.querySelectorAll('.shop-entries')].map(el => {
		const structure = wp.customize('shop_structure')()

		el.dataset.layout = structure

		if (structure === 'grid') {
			el.dataset.columns = wp.customize('shop_columns')()
		} else {
			el.removeAttribute('data-columns')
		}
	})

	replaceCards()
}

wp.customize('shop_structure', val => val.bind(to => renderShopEntries()))
wp.customize('shop_columns', val => val.bind(to => renderShopEntries()))
