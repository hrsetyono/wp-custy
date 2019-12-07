import {
	createElement,
	Component,
	createRef,
	useMemo,
	useState,
	useContext,
	useEffect,
	useRef,
	useReducer,
	createContext,
	createPortal
} from '@wordpress/element'
import classnames from 'classnames'
import bezierEasing from 'bezier-easing'

import OptionsPanel from '../../options/OptionsPanel'
import Switch from './ct-switch'
import { Transition } from 'react-spring'
import { PanelContext } from '../components/PanelLevel'

export const PanelMetaWrapper = ({ id, option, getActualOption, value }) => {
	const {
		panelsState,
		panelsHelpers,
		panelsDispatch,
		containerRef
	} = useContext(PanelContext)

	const selfPanelId = id

	useEffect(() => {
		if (panelsState.previousPanel) {
			return
		}

		if (!panelsHelpers.isTransitioningFor(id)) {
			return
		}

		if (panelsHelpers.isOpenFor(id)) {
			if (
				!containerRef.current
					.closest('[id="customize-theme-controls"]')
					.querySelector('.ct-tmp-panel-wrapper')
			) {
				const wrapper = document.createElement('div')

				wrapper.classList.add('ct-tmp-panel-wrapper')

				containerRef.current
					.closest('[id="customize-theme-controls"]')
					.appendChild(wrapper)
			}

			containerRef.current
				.closest('.accordion-section-content')
				.classList.add('ct-panel-open')

			const h3 = containerRef.current
				.closest('ul')
				.querySelector('.customize-section-description-container h3')

			panelsDispatch({
				type: 'PANEL_RECEIVE_TITLE',
				payload: {
					titlePrefix: `${h3.querySelector('span').innerText} ▸ ${
						h3.innerText.split('\n')[
							h3.innerText.split('\n').length - 1
						]
					}`
				}
			})
		} else {
			if (
				!containerRef.current.closest('.accordion-section-content') ||
				!containerRef.current
					.closest('.accordion-section-content')
					.classList.contains('ct-panel-open')
			) {
				// return
			}

			containerRef.current
				.closest('.accordion-section-content')
				.classList.remove('ct-panel-open')

			setTimeout(() =>
				(containerRef.current.querySelector('button')
					? containerRef.current.querySelector('button')
					: containerRef.current
				).focus()
			)
		}
	}, [panelsState, id, panelsHelpers])

	useEffect(() => {
		return () => {
			;[
				...document.querySelectorAll(
					'.control-section.ct-panel-open:not(.open)'
				)
			].map(el => el.classList.remove('ct-panel-open'))
		}
	}, [])

	return getActualOption({
		open: () => panelsHelpers.open(id),

		wrapperAttr: {
			className: `${
				option.switch
					? value === 'yes'
						? 'ct-click-allowed'
						: ''
					: 'ct-click-allowed'
			} ct-panel`,
			onClick: () => {
				if (option.switch && value !== 'yes') {
					return
				}

				panelsHelpers.open(selfPanelId)
			}
		}
	})
}

const shallowCompare = (prev, next) => {
	for (let key in next) {
		if (next[key] !== prev[key]) return false
	}
	return true
}
function memo(Component, areEqual = shallowCompare) {
	let prevProps = {}
	let prevResult
	return nextProps => {
		if (prevResult !== undefined && areEqual(prevProps, nextProps)) {
			return prevResult
		}
		prevProps = nextProps
		prevResult = createElement(Component, Object.assign({}, nextProps))
		return prevResult
	}
}

const PanelContainer = memo(
	({ option, id, onChange, getValues, onChangeFor }) => {
		let maybeLabel =
			Object.keys(option).indexOf('label') === -1
				? (id || '')
						.replace(/./, s => s.toUpperCase())
						.replace(/\_|\-/g, ' ')
				: option.label

		const {
			panelsState: { titlePrefix, previousPanel },
			panelsHelpers,
			containerRef
		} = useContext(PanelContext)

		return containerRef.current &&
			containerRef.current
				.closest('[id="customize-theme-controls"]')
				.querySelector('.ct-tmp-panel-wrapper')
			? createPortal(
					<Transition
						items={panelsHelpers.isOpenFor(id)}
						from={{ transform: 'translate3d(100%,0,0)' }}
						enter={{
							transform: 'translate3d(0,0,0)'
						}}
						leave={
							previousPanel === id
								? {
										transform: 'translate3d(-100%,0,0)'
								  }
								: {
										transform: 'translate3d(100%,0,0)'
								  }
						}
						config={(item, type) => ({
							// delay: type === 'enter' ? 180 * 10 : 0,
							duration: 180,
							easing: bezierEasing(0.645, 0.045, 0.355, 1)
						})}
						onRest={isOpen => {
							panelsHelpers.stopTransitioning()

							if (isOpen) return
							if (!previousPanel) {
								;[
									...containerRef.current
										.closest(
											'[id="customize-theme-controls"]'
										)
										.querySelectorAll(
											'.ct-tmp-panel-wrapper'
										)
								].map(el => el.parentNode.removeChild(el))
							}
						}}>
						{isOpen =>
							isOpen &&
							(props => (
								<div
									style={props}
									className="ct-customizer-panel">
									<div className="customize-panel-actions">
										<button
											onClick={e => {
												e.stopPropagation()
												panelsHelpers.close()
											}}
											type="button"
											className="customize-section-back"
										/>

										<h3>
											<span>{titlePrefix}</span>
											{maybeLabel}
										</h3>
									</div>

									<div className="customizer-panel-content">
										<OptionsPanel
											purpose="customizer"
											onChange={(key, val) =>
												onChangeFor(key, val)
											}
											options={option['inner-options']}
											value={getValues()}
										/>
									</div>
								</div>
							))
						}
					</Transition>,
					containerRef.current
						.closest('[id="customize-theme-controls"]')
						.querySelector('.ct-tmp-panel-wrapper')
			  )
			: null
	}
)

const Panel = ({
	id,
	getValues,
	values,
	onChangeFor,
	option,
	value,
	view = 'normal',
	onChange
}) => {
	const {
		panelsState: { isOpen, isTransitioning },
		panelsHelpers
	} = useContext(PanelContext)

	if (view === 'simple') {
		return panelsHelpers.isTransitioningFor(id) ||
			panelsHelpers.isOpenFor(id) ? (
			<PanelContainer
				id={id}
				getValues={() => (getValues ? getValues() : values)}
				onChangeFor={onChangeFor}
				option={option}
			/>
		) : null
	}

	return (
		<div className="ct-customizer-panel-container">
			<div className={classnames('ct-customizer-panel-option')}>
				{option.switch && (
					<Switch
						value={value}
						onChange={onChange}
						onClick={e => e.stopPropagation()}
					/>
				)}

				<button type="button" />
			</div>

			{(panelsHelpers.isTransitioningFor(id) ||
				panelsHelpers.isOpenFor(id)) && (
				<PanelContainer
					id={id}
					getValues={() => (getValues ? getValues() : values)}
					onChangeFor={onChangeFor}
					option={option}
				/>
			)}
		</div>
	)
}

Panel.renderingConfig = {
	design: 'inline'
}

Panel.MetaWrapper = PanelMetaWrapper

export default Panel
