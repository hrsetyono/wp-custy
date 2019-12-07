let currentScreen = null

let mobileMql = matchMedia(`all and (max-width: 689px)`)
let tabletMql = matchMedia(`all and (max-width: 999px)`)

const setCurrentScreen = () =>
	(currentScreen = mobileMql.matches
		? 'mobile'
		: tabletMql.matches
		? 'tablet'
		: 'desktop')

setCurrentScreen()

mobileMql.addListener(() => setCurrentScreen())
tabletMql.addListener(() => setCurrentScreen())

export const getCurrentScreen = ({ withTablet = false } = {}) =>
	withTablet
		? currentScreen
		: currentScreen === 'tablet'
		? 'mobile'
		: currentScreen
