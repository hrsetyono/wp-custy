import { createElement, Component, useContext } from '@wordpress/element'
import DashboardContext from './context'
import { sprintf, __ } from 'ct-i18n'

const Heading = () => {
	const { theme_name } = useContext(DashboardContext)

	return (
		<div>
			<h2>
				<svg width="36" height="36" viewBox="0 0 50 50">
					<g id="Logo" transform="translate(0.000000, 4.000000)">
						<rect id="Rectangle" fill="#007AAB" x="7.5" y="0" width="12.5" height="12.7272727" rx="3.75"></rect>
						<rect id="Rectangle" fill="#007AAB" x="30" y="0" width="12.5" height="12.7272727" rx="3.75"></rect>
						<rect id="Rectangle" fill="#0085BA" x="0" y="6.36363636" width="50" height="35.6363636" rx="6.25"></rect>
					</g>
				</svg>

				{theme_name}
			</h2>
			<p>
				{__(
					`The most innovative, lightning fast and super charged WordPress theme. Build visually your next web project in no time.`,
					'blocksy'
				)}
			</p>
		</div>
	)
}

export default Heading
