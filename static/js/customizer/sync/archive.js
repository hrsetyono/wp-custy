import { getCache } from './helpers'
import { renderSidebar, renderSidebarPosition } from './sidebar-helpers'
import { getOptionFor } from './hero-section'
import { renderSidebar as renderSidebarOpts } from './sidebar'

export const getPrefixFor = () => {
	if (document.body.classList.contains('blog')) {
		return 'blog'
	}

	if (document.body.classList.contains('single-product')) {
		return 'product'
	}

	if (
		document.body.classList.contains('woocommerce-archive') ||
		document.body.classList.contains('woocommerce-cart') ||
		document.body.classList.contains('woocommerce-checkout') ||
		document.body.classList.contains('woocommerce-account') ||
		document.body.classList.contains('post-type-archive-product')
	) {
		return 'woo'
	}

	if (document.body.classList.contains('search')) {
		return 'search'
	}

	if (document.body.classList.contains('author')) {
		return 'author'
	}

	if (document.body.classList.contains('archive')) {
		return 'categories'
	}

	return false
}

const renderLocalSidebar = prefix => {
	if (prefix !== getPrefixFor()) {
		return
	}

	renderSidebar(
		getOptionFor('has_sidebar', prefix) === 'yes' &&
			getOptionFor('structure', prefix) !== 'gutenberg'
			? 'yes'
			: 'no',
		getOptionFor('sidebar_position', prefix)
	)

	renderSidebarOpts()

	ctEvents.trigger('ct:custom-select:init')
}

const prefixes = ['blog', 'woo', 'search', 'author', 'categories', 'product']

const watchOptionsFor = prefix => {
	;[
		`${prefix}_has_sidebar`,
		`${prefix}_sidebar_position`,
		`${prefix}_structure`
	].map(id =>
		wp.customize(id, val => val.bind(to => renderLocalSidebar(prefix)))
	)
}

prefixes.map(prefix => watchOptionsFor(prefix))
