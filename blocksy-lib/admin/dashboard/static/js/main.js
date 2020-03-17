import { createElement, render } from '@wordpress/element'
import Dashboard from './Dashboard'

document.addEventListener('DOMContentLoaded', () => {
  render(<Dashboard />, document.getElementById('ct-dashboard'))
})
