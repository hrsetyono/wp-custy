import $log from 'ct-log'

export const maybeMountPerfLogger = () => {
	if (!$log.has_debug) return
	return

	window.addEventListener('load', () => {
		setTimeout(() => {
			const t = window.performance && performance.timing
			const round2 = num => Math.round(num * 100) / 100
			if (!t) return

			const loadTime = (t.loadEventEnd - t.navigationStart) / 1000

			let timingStatsHTML = `This page loaded in ${round2(
				loadTime
			)} seconds. `

			const perfEntries = performance.getEntriesByType('paint')

			perfEntries.forEach((perfEntry, i, entries) => {
				timingStatsHTML += `${perfEntry.name} was ${round2(
					perfEntry.startTime / 1000
				)} seconds. `
			})

			$log('PERF:', timingStatsHTML)
		}, 0)
	})
}
