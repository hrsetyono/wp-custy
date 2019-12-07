import { Fragment, createElement, Component } from '@wordpress/element'

const Title = ({
	option: { label = '', desc = '', attr = {}, variation = 'simple' }
}) => (
	<Fragment>
		<div
			className="ct-title"
			{...{
				'data-type': variation,
				...(attr || {})
			}}>
			<h3>{label}</h3>
			{desc && (
				<p
					dangerouslySetInnerHTML={{
						__html: desc
					}}
				/>
			)}
		</div>
	</Fragment>
)

Title.renderingConfig = { design: 'none' }

export default Title
