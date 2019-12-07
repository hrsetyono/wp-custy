import { useState, useEffect, useCallback } from '@wordpress/element'

export const useDeviceManager = () => {
	const [currentView, setCurrentView] = useState(
		wp.customize && wp.customize.previewedDevice
			? wp.customize.previewedDevice()
			: 'desktop'
	)

	const listener = () => {
		setCurrentView(
			wp.customize && wp.customize.previewedDevice
				? wp.customize.previewedDevice() === 'desktop'
					? 'desktop'
					: 'mobile'
				: 'desktop'
		)
	}

	useEffect(() => {
		if (!wp.customize) return
		setTimeout(() => wp.customize.previewedDevice.bind(listener), 1000)

		return () => {
			if (!wp.customize) return
			wp.customize.previewedDevice.unbind(listener)
		}
	}, [])

	return [
		currentView,
		device => {
			setCurrentView(device)
			wp.customize && wp.customize.previewedDevice.set(device)
		}
	]
}
