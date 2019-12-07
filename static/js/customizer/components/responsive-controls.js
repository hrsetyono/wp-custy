import { createElement, Component, Fragment } from '@wordpress/element'
import classnames from 'classnames'

export const isOptionEnabledFor = (currentDevice, responsiveDescriptor) =>
  ({
    desktop: true,
    tablet: true,
    mobile: true,

    ...(typeof responsiveDescriptor === 'boolean' ? {} : responsiveDescriptor)
  }[currentDevice])

export const maybePromoteScalarValueIntoResponsive = value =>
  /**
   * Responsive value must necessarily have the desktop key attached to it
   */
  Object.keys(value).indexOf('desktop') > -1
    ? value
    : {
        desktop: value,
        tablet: value,
        mobile: value
      }

const ResponsiveControls = ({ device, setDevice, responsiveDescriptor }) => (
  <div className="ct-control-options">
    <ul className="ct-responsive-controls ct-devices">
      {['desktop', 'tablet', 'mobile'].map(d => (
        <li
          onClick={() => setDevice(d)}
          className={classnames(
            {
              active: d === device,
              'ct-disabled': !isOptionEnabledFor(d, responsiveDescriptor)
            },
            `ct-${d}`
          )}
          key={d}
        />
      ))}
    </ul>
  </div>
)

export default ResponsiveControls
