import {
	Fragment,
	createElement,
	Component,
	useEffect,
	useRef,
	useState
} from '@wordpress/element'
import classnames from 'classnames'
import { getDefaultFonts } from './default-data'
import { humanizeVariations, fontFamilyToCSSFamily } from './helpers'
import { FixedSizeList as List } from 'react-window'
import WebFontLoader from 'webfontloader'
import AutoSizer from 'react-virtualized-auto-sizer'

let loadedFonts = []

const loadGoogleFonts = font_families => {
	if (font_families.length === 0) return

	loadedFonts = [...loadedFonts, ...font_families.map(({ family }) => family)]

	WebFontLoader.load({
		google: {
			families: font_families.map(({ family }) => family)
		},
		classes: false,
		text: 'abcdefghijklmnopqrstuvwxyz'
	})
}

const SingleFont = ({
	data: { linearFontsList, onPickFamily, value },
	index,
	style
}) => {
	const family = linearFontsList[index]

	return (
		<div
			style={style}
			onClick={() => onPickFamily(family)}
			className={classnames(
				'ct-typography-single-font',
				`ct-${family.source}`,
				{
					active: family.family === value.family
				}
			)}
			key={family.family}>
			<span className="ct-font-name">{family.family}</span>
			<span
				style={{
					fontFamily: fontFamilyToCSSFamily(family.family)
				}}
				className="ct-font-preview">
				Simply dummy text
			</span>
		</div>
	)
}

const FontsList = ({
	option,
	value,
	onPickFamily,
	typographyList,
	linearFontsList,
	currentView,
	searchTerm
}) => {
	const listRef = useRef(null)
	const timerRef = useRef(null)
	const [scrollTimer, setScrollTimer] = useState(null)

	useEffect(() => {
		if (value.family) {
			listRef.current.scrollToItem(
				linearFontsList
					.map(({ family }) => family)
					.indexOf(value.family),
				'start'
			)
		}
	}, [])

	return (
		<List
			height={360}
			itemCount={linearFontsList.length}
			itemSize={85}
			ref={listRef}
			width={283}
			onScroll={() => {
				scrollTimer && clearTimeout(scrollTimer)

				setScrollTimer(
					setTimeout(() => {
						const [
							overscanStartIndex
						] = listRef.current._getRangeToRender()

						const perPage = 25

						const totalPages = Math.ceil(
							linearFontsList.length / perPage
						)
						const startingPage = Math.ceil(
							(overscanStartIndex + 1) / perPage
						)
						// const stopPage = Math.ceil((overscanStopIndex + 1) / perPage)

						const pageItems = [...Array(perPage)]
							.map((_, i) => (startingPage - 1) * perPage + i)
							.map(index => linearFontsList[index])
							.filter(s => !!s)
							.filter(
								({ source, family }) =>
									loadedFonts.indexOf(family) === -1 &&
									source === 'google'
							)

						loadGoogleFonts(pageItems)
					}, 100)
				)
			}}
			itemData={{
				linearFontsList,
				onPickFamily,
				value
			}}
			onItemsRendered={({ overscanStartIndex, overscanStopIndex }) => {}}
			className="ct-typography-fonts">
			{SingleFont}
		</List>
	)
}

export default FontsList
