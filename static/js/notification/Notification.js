import {
  createElement,
  Component,
  createRef,
  useState,
  useEffect,
  useRef
} from '@wordpress/element'
import { __, sprintf } from 'ct-i18n'
import $ from 'jquery'

const Notification = ({ initialStatus, url, pluginUrl, pluginLink }) => {
  const [pluginStatus, setPluginStatus] = useState('installed')

  const [isLoading, setIsLoading] = useState(false)

  const containerEl = useRef(null)

  useEffect(() => {
    setPluginStatus(initialStatus)
  }, [])

  return (
    <div className="ct-blocksy-plugin-inner" ref={containerEl}>
      <button
        onClick={() => {
          containerEl.current
            .closest('.notice-blocksy-plugin')
            .parentNode.removeChild(
              containerEl.current.closest('.notice-blocksy-plugin')
            )

          $.ajax(ajaxurl, {
            type: 'POST',
            data: {
              action: 'blocksy_dismissed_notice_handler'
            }
          })
        }}
        type="button"
        className="notice-dismiss">
        <span className="screen-reader-text">
          {__('Dismiss this notice.', 'blocksy')}
        </span>
      </button>

      <span className="ct-notification-icon">
        <svg width="70" viewBox="0 0 20 17">
          <rect x="3" width="5" height="5.15" rx="1.5" fill="#1D8FCA" opacity="0.6"/>
          <rect x="12" width="5" height="5.15" rx="1.5" fill="#1D8FCA" opacity="0.6"/>
          <rect y="2.58" width="20" height="14.42" rx="2.5" fill="#1D8FCA"/>
        </svg>
      </span>

      <div className="ct-notification-content">
        <h2>{__('Thanks for installing Blocksy, you rock!', 'blocksy')}</h2>

        <p
          dangerouslySetInnerHTML={{
            __html: __(
              'We strongly recommend you to activate the <b>Blocksy Companion</b> plugin.<br>This way you will have access to custom extensions, demo templates and many other awesome features.',
              'blocksy'
            )
          }}
        />

        <div className="notice-actions">
          {pluginStatus === 'uninstalled' && (
            <a
              className="button button-primary"
              href={pluginLink}
              target="_blank">
              {__('Download Blocksy Companion', 'blocksy')}
            </a>
          )}

          {pluginStatus !== 'uninstalled' && (
            <button
              className="button button-primary"
              disabled={isLoading || pluginStatus === 'active'}
              onClick={() => {
                setIsLoading(true)

                setTimeout(() => {})
                $.ajax(ajaxurl, {
                  type: 'POST',
                  data: {
                    action: 'blocksy_notice_button_click'
                  }
                }).then(({ success, data }) => {
                  if (success) {
                    setPluginStatus(data.status)

                    if (data.status === 'active') {
                      location.assign(pluginUrl)
                    }
                  }

                  setIsLoading(false)
                })
              }}>


              {isLoading
                ? __('Activating...', 'blocksy')
                : pluginStatus === 'uninstalled'
                ? __('Install Blocksy Companion', 'blocksy')
                : pluginStatus === 'installed'
                ? __('Activate Blocksy Companion', 'blocksy')
                : __('Blocksy Companion active!', 'blocksy')
              }
              {isLoading && <i className="dashicons dashicons-update" />}
            </button>
          )}

          <a className="button" href={url}>
            {__('Theme Dashboard', 'blocksy')}
          </a>
        </div>
      </div>

    </div>
  )
}

export default Notification
