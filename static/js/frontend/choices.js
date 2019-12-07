import Selectr from 'mobius1-selectr'
import $ from 'jquery'
import ctEvents from 'ct-events'

const initCustomSelect = () =>
	[...document.querySelectorAll('select')].map(el =>
		initSingleCustomSelect(el)
	)

const initSingleCustomSelect = (element, allow = false) => {
	if (element.selectr) {
		return
	}

	if (
		element.matches('.comment-form #rating') ||
		(element.matches('.product-type-variable .variations select') && !allow)
	) {
		return
	}

	const searchable =
		element.matches('.woocommerce-address-fields .country_select') ||
		element.matches('.woocommerce-address-fields .state_select') ||
		element.matches('.woocommerce-billing-fields .country_select') ||
		element.matches('.woocommerce-billing-fields .state_select')

	if ($ && $.fn) {
		$(element).on('change', ({ target: { value } }) => {
			if (!value) {
				element.selectr.change(0)
			}
		})
	}

	const inst = new Selectr(element, {
		nativeDropdown: false,
		searchable
	})
}

ctEvents.on('ct:custom-select:init', () => initCustomSelect())

ctEvents.on('ct:custom-select-allow:init', () => {
	setTimeout(() => {
		$('.product-type-variable .variations select')
			.toArray()
			.map(el => initSingleCustomSelect(el, true))
	})
})

export const mount = () => {
	initCustomSelect()

	$ &&
		$(window).on('elementor/frontend/init', function() {
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/global',
				() => {
					ctEvents.trigger('ct:custom-select:init')
					ctEvents.trigger('ct:custom-select-allow:init')
				}
			)
		})

	if ($ && $.fn) {
		$(document.body).bind(
			'woocommerce_update_variation_values',
			(_, __, wrapper) => {
				setTimeout(() =>
					[
						...document.querySelectorAll(
							'.product-type-variable .variations select'
						)
					].map(el => initSingleCustomSelect(el, true))
				)
			}
		)

		$(document.body).bind('country_to_state_changed', function(
			_,
			__,
			wrapper
		) {
			/*
			if (wrapper.find('#shipping_state, #billing_state').is('input')) {
				wrapper
					.find('#shipping_state, #billing_state')
					.parent()
					.find('.selectize-control')
					.remove()
			}
            */

			initCustomSelect()
		})

		$(document.body).bind('updated_wc_div', () => initCustomSelect())

		$('.product-type-variable .reset_variations').on('click', () => {
			$('.product-type-variable .variations select')
				.toArray()
				.map(el => el.selectr && el.selectr.setValue(''))
		})
	}
}
