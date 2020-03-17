import { createElement, useState, useEffect } from '@wordpress/element'
import { dateI18n } from '@wordpress/date'
import { __, sprintf } from 'ct-i18n'
import classnames from 'classnames'
import { Transition, animated } from 'react-spring'

let changelog_cache = null

const parseChangelog = changelog =>
	changelog
		.replace(/(\r\n|\r|\n){3,}/g, '$1\n\n')
		.split('\n\n')
		.map(versionDescriptor => {
			let [version, date] = versionDescriptor.split('\n')[0].split(':')

			return {
				version,
				date: dateI18n('F j, Y', new Date(date)),
				descriptor: versionDescriptor
			}
		})

const SingleVersion = ({ versionDescriptor }) => {
	const [_, ...allReleaseChanges] = versionDescriptor.descriptor.split('\n')

	return (
		<section>
			<h2>
				Version: {versionDescriptor.version}{' '}
				<span>Released on {versionDescriptor.date}</span>
			</h2>

			<div
				className="ct-release-info"
				dangerouslySetInnerHTML={{
					__html: `<ul><li>

                        ${allReleaseChanges
							.join('\n')
							.trim()
							.split('\n')
							.map(c => c.replace(/^-\s/, ''))
							.map(c => c.replace(/`(.*?)`/g, '<code>$1</code>'))
							.join('</li><li>')}
                        </li></ul>`

						.replace(
							/New:/g,
							'<span class="new" title="New"></span>'
						)
						.replace(
							/Improvement:/g,
							'<span class="improvement" title="Enhance"></span>'
						)
						.replace(
							/Fix:/g,
							'<span class="fix" title="Fix"></span>'
						)
				}}
			/>
		</section>
	)
}

export default () => {
	const [isLoading, setIsLoading] = useState(!changelog_cache)
	const [changelog, setChangelog] = useState(changelog_cache)
	const [currentChangelog, setCurrentChangelog] = useState(0)

	const syncChangelog = async (verbose = false) => {
		if (verbose) {
			setIsLoading(true)
		}

		const body = new FormData()
		body.append('action', 'get_latest_changelog')

		try {
			const response = await fetch(ctDashboardLocalizations.ajax_url, {
				method: 'POST',
				body
			})

			if (response.status === 200) {
				const { success, data } = await response.json()
				if (success && data.changelog) {
					setChangelog(data.changelog)
					changelog_cache = data.changelog
				}
			}
		} catch (e) {}

		setIsLoading(false)
	}

	useEffect(() => {
		syncChangelog(!changelog_cache)
	}, [])

	return (
		<section className="ct-changelog-wrapper">
			<Transition
				items={isLoading}
				from={{ opacity: 0 }}
				enter={[{ opacity: 1 }]}
				leave={[{ opacity: 0 }]}
				initial={null}
				config={(key, phase) => {
					return phase === 'leave'
						? {
								duration: 300
						  }
						: {
								delay: 300,
								duration: 300
						  }
				}}>
				{isLoading => {
					if (isLoading) {
						return props => (
							<animated.p
								className="ct-loading-text"
								style={props}>
								<span />
								{__('Loading changelog...', 'blocksy')}
							</animated.p>
						)
					}
					return props => (
						<animated.div style={props}>
							<div
								className={classnames('changelog-info', {
									'has-sources':
										changelog && changelog.length > 1
								})}>
								{changelog && changelog.length > 1 && (
									<ul className="changelog-sources">
										{changelog.map(({ title }, index) => (
											<li
												className={classnames({
													active:
														index ===
														currentChangelog
												})}
												onClick={() =>
													setCurrentChangelog(index)
												}
												key={title}>
												{title}
											</li>
										))}
									</ul>
								)}

								<ul className="changelog-explanation">
									<li>
										<span className="new" /> New
									</li>
									<li>
										<span className="fix" /> Fix
									</li>
									<li>
										<span className="improvement" /> Update
									</li>
								</ul>
							</div>
							<div className="changelog-items">
								{changelog[currentChangelog].changelog
									? parseChangelog(
											changelog[currentChangelog]
												.changelog
									  ).map(versionDescriptor => (
											<SingleVersion
												key={versionDescriptor.version}
												versionDescriptor={
													versionDescriptor
												}
											/>
									  ))
									: __(
											'No changelog present at the moment.',
											'blocksy'
									  )}
							</div>
						</animated.div>
					)
				}}
			</Transition>
		</section>
	)
}
