import {
	Fragment,
	createElement,
	Component,
	useRef,
	useReducer,
	useEffect,
	useMemo,
	useCallback,
	useState
} from '@wordpress/element'
import classnames from 'classnames'
import TypographyModal from './typography/TypographyModal'
import OutsideClickHandler from './react-outside-click-handler'
import { humanizeVariations } from './typography/helpers'
import { maybePromoteScalarValueIntoResponsive } from '../../customizer/components/responsive-controls'
import { Manager, Reference, Popper } from 'react-popper'

import { Transition } from 'react-spring'
import bezierEasing from 'bezier-easing'

import { __ } from 'ct-i18n'

const Typography = ({
	option: { label = '', desc = '', attr = {} },
	option,
	value,
	device,
	onChange
}) => {
	// const [isOpen, setIsOpen] = useState(false)

	// options | fonts | variations | search
	const [currentViewCache, setCurrentViewCache] = useState('_:_')

	let [currentView, previousView] = useMemo(
		() => currentViewCache.split(':'),
		[currentViewCache]
	)

	const setCurrentView = useCallback(
		newView => setCurrentViewCache(`${newView}:${currentView}`),
		[currentView]
	)

	const [{ isOpen, isTransitioning }, setModalState] = useState({
		isOpen: false,
		isTransitioning: false
	})

	const setIsOpen = isOpen => {
		setModalState(state => ({
			...state,
			isOpen,
			isTransitioning: true
		}))
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	const stopTransitioning = () =>
		setModalState(state => ({
			...state,
			isTransitioning: false
		}))

	return (
		<div className={classnames('ct-typography', {})}>
			<Manager>
				<Reference>
					{({ ref }) => (
						<div
							ref={ref}
							className="ct-typohraphy-value"
							onClick={e => {
								e.preventDefault()
								setCurrentViewCache('options:_')
								setIsOpen('options')
							}}>
							<div>
								<span
									onClick={e => {
										setCurrentViewCache('fonts:_')
										setIsOpen('fonts')
										e.stopPropagation()
									}}
									className="ct-font">
									<span>
										{value.family === 'Default'
											? 'Default Family'
											: value.family}
									</span>
								</span>
								<i>/</i>
								<span
									onClick={e => {
										setCurrentViewCache('options:_')
										setIsOpen('font_size')
										e.stopPropagation()
									}}
									className="ct-size">
									<span>
										{maybePromoteScalarValueIntoResponsive(
											value['size']
										)[device] === 'CT_CSS_SKIP_RULE'
											? __('Default Size', 'blocksy')
											: maybePromoteScalarValueIntoResponsive(
													value['size']
											  )[device]}
									</span>
								</span>
								<i>/</i>
								<span
									onClick={e => {
										setCurrentViewCache('variations:_')
										setIsOpen('variations')
										e.stopPropagation()
									}}
									className="ct-weight">
									<span>
										{humanizeVariations(value.variation)}
									</span>
								</span>
							</div>

							<a />
						</div>
					)}
				</Reference>

				{(isTransitioning || isOpen) && (
					<Transition
						items={isOpen}
						onRest={isOpen => {
							stopTransitioning()
						}}
						config={{
							duration: 100,
							easing: bezierEasing(0.25, 0.1, 0.25, 1.0)
						}}
						from={
							isOpen
								? {
										transform: 'scale3d(0.95, 0.95, 1)',
										opacity: 0
								  }
								: { opacity: 1 }
						}
						enter={
							isOpen
								? {
										transform: 'scale3d(1, 1, 1)',
										opacity: 1
								  }
								: {
										opacity: 1
								  }
						}
						leave={
							!isOpen
								? {
										transform: 'scale3d(0.95, 0.95, 1)',
										opacity: 0
								  }
								: {
										opacity: 1
								  }
						}>
						{isOpen =>
							isOpen &&
							(props => (
								<OutsideClickHandler
									useCapture={false}
									display="block"
									className="ct-typography-wrapper"
									onOutsideClick={() => {
										closeModal()
									}}>
									<Popper
										eventsEnabled={isOpen}
										placements={['top', 'bottom']}
										modifiers={{
											flip: {
												boundariesElement:
													document.querySelector(
														'.wp-full-overlay-sidebar-content'
													) || document.body
											},
											preventOverflow: {
												enabled: false,
												padding: 50
											},

											hide: {
												enabled: false
											}
										}}>
										{({ ref, placement }) => (
											<TypographyModal
												wrapperProps={{
													style: props
												}}
												onChange={onChange}
												value={value}
												innerRef={ref}
												placement={placement}
												option={option}
												initialView={isOpen}
												setInititialView={initialView =>
													setIsOpen(initialView)
												}
												currentView={currentView}
												previousView={previousView}
												setCurrentView={setCurrentView}
											/>
										)}
									</Popper>
								</OutsideClickHandler>
							))
						}
					</Transition>
				)}
			</Manager>
		</div>
	)
}

export default Typography
