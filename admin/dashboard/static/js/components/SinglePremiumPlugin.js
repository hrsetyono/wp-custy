import { createElement, Component, useState } from '@wordpress/element'
import { __, sprintf } from 'ct-i18n'

const SinglePremiumPlugin = ({ status, plugin, onPluginsSync }) => {
	const [isLoading, setIsLoading] = useState(false)

	const makeAction = async (plugin, actionName) => {
		const body = new FormData()

		body.append('plugin', plugin)
		body.append('action', actionName)

		setIsLoading(true)

		try {
			await fetch(ctDashboardLocalizations.ajax_url, {
				method: 'POST',
				body
			})

			onPluginsSync()
		} catch (e) {}

		await new Promise(r => setTimeout(() => r(), 1000))

		setIsLoading(false)
	}

	return (
		<li>
			<img src={plugin.thumb} alt="" />
			<div className="ct-plugin-meta">
				<h4>{plugin.title}</h4>
				{plugin.author && (
					<span
						dangerouslySetInnerHTML={{
							__html: sprintf(
								// translators: plugin author
								__('By %s', 'blocksy'),
								`<a href="${plugin.author_uri}">${
									plugin.author
								}</a>`
							)
						}}
					/>
				)}
			</div>

			{plugin.description && <p>{plugin.description}</p>}

			<div className="ct-plugin-controls">
				{isLoading && <span className="ct-loading" />}

				{!isLoading &&
					status === 'activated' && (
						<a
							onClick={() =>
								makeAction(
									plugin.name,
									'premium_plugin_deactivate'
								)
							}
							className="ct-button">
							{__('Deactivate', 'blocksy')}
						</a>
					)}

				{!isLoading &&
					status === 'deactivated' && (
						<a
							onClick={() =>
								makeAction(
									plugin.name,
									'premium_plugin_activate'
								)
							}
							className="ct-button-primary">
							{__('Activate', 'blocksy')}
						</a>
					)}

				{!isLoading &&
					status === 'uninstalled' &&
					!plugin.comingsoon &&
					plugin.type !== 'link' && (
						<a
							onClick={() =>
								makeAction(
									plugin.name,
									'premium_plugin_download'
								)
							}
							className="ct-button">
							{__('Install', 'blocksy')}
						</a>
					)}

				{!isLoading &&
					status === 'uninstalled' &&
					!plugin.comingsoon &&
					plugin.type === 'link' && (
						<a
							href={plugin.link}
							className="ct-button"
							target="_blank">
							{__('Download', 'blocksy')}
						</a>
					)}

				{!isLoading &&
					status === 'uninstalled' &&
					plugin.comingsoon && (
						<span className="ct-badge">
							{__('COMING SOON', 'blocksy')}
						</span>
					)}
			</div>
		</li>
	)
}

export default SinglePremiumPlugin
