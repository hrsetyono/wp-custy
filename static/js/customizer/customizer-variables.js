import { handleVariablesFor } from 'customizer-sync-helpers/dist/simplified'

export const listenToVariables = () => {
	handleVariablesFor({
		colorPalette: [
			{
				variable: 'paletteColor1',
				type: 'color:color1'
			},

			{
				variable: 'paletteColor2',
				type: 'color:color2'
			},

			{
				variable: 'paletteColor3',
				type: 'color:color3'
			},

			{
				variable: 'paletteColor4',
				type: 'color:color4'
			},

			{
				variable: 'paletteColor5',
				type: 'color:color5'
			}
		],

		fontColor: [
			{
				selector: ':root',
				variable: 'color',
				type: 'color:default'
			},

			{
				selector: ':root',
				variable: 'colorHover',
				type: 'color:hover'
			}
		],

		buttonTextColor: [
			{
				selector: ':root',
				variable: 'buttonTextInitialColor',
				type: 'color:default'
			},

			{
				selector: ':root',
				variable: 'buttonTextHoverColor',
				type: 'color:hover'
			}
		],

		buttonColor: [
			{
				selector: ':root',
				variable: 'buttonInitialColor',
				type: 'color:default'
			},

			{
				selector: ':root',
				variable: 'buttonHoverColor',
				type: 'color:hover'
			}
		],
	})
}
