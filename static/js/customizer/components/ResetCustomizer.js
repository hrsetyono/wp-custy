import {
	createElement,
	Component,
	Fragment,
	useState
} from '@wordpress/element'
import Overlay from './Overlay'

const ResetCustomizer = () => {
	const [isShowing, setIsShowing] = useState(false)

	return (
		<a
			className="ct-revert"
			onClick={e => {
				e.preventDefault()

				setIsShowing(true)
			}}>
			<Overlay
				items={isShowing}
				className="ct-customizer-reset-modal"
				onDismiss={() => setIsShowing(false)}
				render={() => (
					<div className="ct-customizer-reset">
						<h1>Reset Settings</h1>
						<p>
							You are about to reset all settings to their default
							values, are you sure you want to continue?
						</p>

						<div className="ct-reset-actions">
							<button
								onClick={e => {
									e.preventDefault()
									e.stopPropagation()
									setIsShowing(false)
								}}
								className="ct-button">
								Cancel
							</button>

							<button
								className="ct-button-primary"
								onClick={e => {
									e.preventDefault()

									jQuery.post(
										ajaxurl,
										{
											wp_customize: 'on',
											action: 'ct_customizer_reset',
											nonce:
												ct_customizer_localizations.customizer_reset_none
										},
										() => {
											wp.customize
												.state('saved')
												.set(true)
											location.reload()
										}
									)
								}}>
								Confirm
							</button>
						</div>
					</div>
				)}
			/>
		</a>
	)
}

export default ResetCustomizer
