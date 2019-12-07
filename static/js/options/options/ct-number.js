import { createElement, Component } from '@wordpress/element'
import _ from 'underscore'
import classnames from 'classnames'
import InputWithOnlyNumbers from '../components/InputWithOnlyNumbers'

const NumberOption = ({ value, option, onChange }) => (
  <div
    className={classnames('ct-option-number', {
      [`ct-reached-limits`]:
        parseInt(value, 10) === parseInt(option.min) ||
        parseInt(value, 10) === parseInt(option.max)
    })}>
    <a
      className={classnames('ct-minus', {
        ['ct-disabled']: parseInt(value, 10) === parseInt(option.min)
      })}
      onClick={() =>
        onChange(
          Math.min(
            Math.max(parseInt(value, 10) - 1, option.min || -Infinity),
            option.max || Infinity
          )
        )
      }
    />

    <InputWithOnlyNumbers
      value={value}
      onBlur={() =>
        parseInt(value, 10)
          ? onChange(
              Math.min(
                Math.max(value, option.min || -Infinity),
                option.max || Infinity
              )
            )
          : []
      }
      onChange={(value, can_safely_parse) =>
        can_safely_parse && _.isNumber(parseInt(value, 10))
          ? onChange(
              Math.min(
                Math.max(value, option.min || -Infinity),
                option.max || Infinity
              )
            )
          : onChange(value)
      }
    />

    <a
      className={classnames('ct-plus', {
        ['ct-disabled']: parseInt(value, 10) === parseInt(option.max)
      })}
      onClick={() =>
        onChange(
          Math.min(
            Math.max(parseInt(value, 10) + 1, option.min || -Infinity),
            option.max || Infinity
          )
        )
      }
    />
  </div>
)

export default NumberOption
