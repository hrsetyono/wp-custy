/* global wpColorPickerL10n */
;(function($, undef) {
	var ColorPicker,
		// html stuff
		_before = '<a tabindex="0" class="wp-color-result" />',
		_after = '<div class="wp-picker-holder" />',
		_wrap = '<div class="wp-picker-container" />'

	// jQuery UI Widget constructor
	ColorPicker = {
		options: {
			defaultColor: false,
			change: false,
			clear: false,
			hide: false,
			palettes: false,
			width: 300,
			mode: 'hsv',
			type: 'full',
			slider: 'horizontal'
		},

		_create: function() {
			// bail early for unsupported Iris.
			if (!$.support.iris) {
				return
			}

			var self = this,
				el = self.element

			$.extend(self.options, el.data())

			// keep close bound so it can be attached to a body listener
			self.close = $.proxy(self.close, self)

			self.initialValue = el.val()

			// Set up HTML structure, hide things
			// el.addClass( 'wp-color-picker' ).wrap( _wrap );
			el.addClass('wp-color-picker')

			self.pickerContainer = $(_after).insertBefore(
				el.closest('.ct-color-picker-bottom')
			)

			self.wrap = el.parent().prev('.wp-picker-container')

			el.iris({
				target: self.pickerContainer,
				hide: false,
				width: 230,
				mode: self.options.mode,
				palettes: false,
				change: function(event, ui) {
					// check for a custom cb
					if ($.isFunction(self.options.change)) {
						self.options.change.call(this, event, ui)
					}
				}
			})

			el.val(self.initialValue)
			self._addListeners()
		},

		_addListeners: function() {
			var self = this

			// prevent any clicks inside this widget from leaking to the top and closing it
			self.wrap.on('click.wpcolorpicker', function(event) {
				// event.stopPropagation();
			})

			self.element.change(function(event) {
				var me = $(this),
					val = me.val()
				// Empty = clear
				if (val === '' || val === '#') {
					// fire clear callback if we have one
					if ($.isFunction(self.options.clear)) {
						self.options.clear.call(this, event)
					}
				}
			})
		},

		open: function() {
			this.element
				.show()
				.iris('toggle')
				.focus()
			this.wrap.addClass('wp-picker-active')
			$('body')
				.trigger('click.wpcolorpicker')
				.on('click.wpcolorpicker', this.close)
		},
		close: function() {
			this.element.iris('toggle')
			this.wrap.removeClass('wp-picker-active')
			$('body').off('click.wpcolorpicker', this.close)
		},
		// $("#input").wpColorPicker('color') returns the current color
		// $("#input").wpColorPicker('color', '#bada55') to set
		color: function(newColor) {
			if (newColor === undef) {
				return this.element.iris('option', 'color')
			}

			this.element.iris('option', 'color', newColor)
		},
		//$("#input").wpColorPicker('defaultColor') returns the current default color
		//$("#input").wpColorPicker('defaultColor', newDefaultColor) to set
		defaultColor: function(newDefaultColor) {
			if (newDefaultColor === undef) {
				return this.options.defaultColor
			}

			this.options.defaultColor = newDefaultColor
		}
	}

	$.widget('wp.ctColorPicker', ColorPicker)
})(jQuery)
;(function($) {
	// Variable for some backgrounds.
	var image =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg=='
	// Html stuff for wpColorPicker copy of the original color-picker.js.
	var _before = '<a tabindex="0" class="wp-color-result" />',
		_after = '<div class="wp-picker-holder" />',
		_wrap = '<div class="wp-picker-container" />'

	if (!window.Color) {
		return
	}

	/**
	 * Overwrite Color.
	 * For enable support rbga.
	 */
	Color.fn.toString = function() {
		if (this._alpha < 1) {
			return this.toCSS('rgba', this._alpha).replace(/\s+/g, '')
		}

		var hex = parseInt(this._color, 10).toString(16)

		if (this.error) {
			return ''
		}

		if (hex.length < 6) {
			for (var i = 6 - hex.length - 1; i >= 0; i--) {
				hex = '0' + hex
			}
		}

		return '#' + hex
	}

	Color.fn.isDark = function() {
		var r,
			g,
			b,
			o = 1

		var rgba = this.toRgb()

		r = rgba.r
		g = rgba.g
		b = rgba.b

		o = this._alpha

		var yiq = (r * 299 + g * 587 + b * 114) / 1000

		return yiq < 128 && o > 0.4
	}

	/**
	 * Overwrite wpColorPicker.
	 */
	$.widget('wp.ctColorPicker', $.wp.ctColorPicker, {
		_addListeners: function() {
			var self = this

			// Prevent any clicks inside this widget from leaking to the top and closing it.
			self.wrap.on('click.wpcolorpicker', function(event) {
				// event.stopPropagation();
			})
		}
	})

	/**
	 * Overwrite iris.
	 */
	$.widget('a8c.iris', $.a8c.iris, {
		_create: function() {
			this._super()

			// Global option for check is mode rbga is enabled.
			this.options.alpha = true

			// Is not input disabled.
			if (!this.element.is(':input')) {
				// this.options.alpha = false
			}

			if (
				typeof this.options.alpha !== 'undefined' &&
				this.options.alpha
			) {
				var self = this,
					el = self.element,
					_html =
						'<div class="iris-strip iris-slider iris-alpha-slider"><div class="iris-slider-offset iris-slider-offset-alpha"></div></div>',
					aContainer = $(_html).appendTo(
						self.picker.find('.iris-picker-inner')
					),
					aSlider = aContainer.find('.iris-slider-offset-alpha'),
					controls = {
						aContainer: aContainer,
						aSlider: aSlider
					}

				// Push new controls.
				$.each(controls, function(k, v) {
					self.controls[k] = v
				})

				// Add new slider.
				self._initControls()

				// For updated widget.
				self._change()
			}
		},

		_initControls: function() {
			this._super()

			this.controls.square.append(
				jQuery('<div class="iris-square-inner-wrapper"></div>').css({
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0
				})
			)

			this.controls.squareDrag.draggable(
				'option',
				'containment',
				this.controls.square.find('.iris-square-inner-wrapper')
			)

			if (this.options.alpha) {
				var self = this,
					controls = self.controls

				controls.aSlider.slider({
					orientation: 'vertical',
					min: 0,
					max: 100,
					step: 1,
					value: parseInt(self._color._alpha * 100),
					slide(event, ui) {
						// Update alpha value.
						self._color._alpha = parseFloat(ui.value / 100)
						self._change.apply(self, arguments)
						self.element.trigger('ctalphasliderchange')
					}
				})
			}
		},

		_change: function() {
			this._super()
			var self = this
			var el = self.element

			el.change()

			if (this.options.alpha) {
				var controls = self.controls,
					alpha = parseInt(self._color._alpha * 100),
					color = self._color.toRgb(),
					gradient = [
						'rgb(' +
							color.r +
							',' +
							color.g +
							',' +
							color.b +
							') 0%',
						'rgba(' +
							color.r +
							',' +
							color.g +
							',' +
							color.b +
							', 0) 100%'
					],
					defaultWidth = self.options.defaultWidth,
					customWidth = self.options.customWidth,
					target = self.picker
						.closest('.wp-picker-container')
						.find('.wp-color-result')

				// Generate background slider alpha, only for CSS3 old browser fuck!! :).
				controls.aContainer.css({
					background:
						'linear-gradient(to bottom, ' +
						gradient.join(', ') +
						'), url(' +
						image +
						')'
				})

				// Update alpha value.
				controls.aSlider.slider('value', alpha)

				/**
				 * Disabled change opacity in default slider Saturation ( only is alpha enabled )
				 * and change input width for view all value.
				 */
				if (self._color._alpha < 1) {
					var style = controls.strip
						.attr('style')
						.replace(
							/rgba\(([0-9]+,)(\s+)?([0-9]+,)(\s+)?([0-9]+)(,(\s+)?[0-9\.]+)\)/g,
							'rgb($1$3$5)'
						)

					controls.strip.attr('style', style)
				}
			}

			var reset = el.data('reset-alpha') || false

			if (reset) {
				self.picker
					.find('.iris-palette-container')
					.on('click.palette', '.iris-palette', function() {
						self._color._alpha = 1
						self.active = 'external'
						self._change()
					})
			}
		},

		_addInputListeners: function(input) {
			var self = this
			var debounceTimeout = 100

			var callback = function(event) {
				var color = new Color(input.val())
				var val = input.val()

				input.removeClass('iris-error')

				// We gave a bad color.
				if (color.error) {
					// Don't error on an empty input.
					if (val !== '') {
						input.addClass('iris-error')
					} else {
						/**
						 * Is is color palette
						 */
						input.css('background-color', '')
					}
				} else {
					if (color.toString() !== self._color.toString()) {
						// Let's not do this on keyup for hex shortcodes.
						if (
							!(
								event.type === 'keyup' &&
								val.match(/^[0-9a-fA-F]{3}$/)
							)
						) {
							self._setOption('color', color.toString())
						}
					}
				}
			}

			input
				.on('change', callback)
				.on('keyup', self._debounce(callback, debounceTimeout))
		}
	})
})(jQuery)
