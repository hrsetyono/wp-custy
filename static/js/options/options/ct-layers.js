import {
  createElement,
  Component,
  createContext,
  Fragment
} from '@wordpress/element'
import classnames from 'classnames'
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc'

import arrayMove from 'array-move'

import OptionsPanel from '../OptionsPanel'
import { getValueFromInput } from '../helpers/get-value-from-input'
import Select from './ct-select'
import nanoid from 'nanoid'

const valueWithUniqueIds = value =>
  value.map(singleItem => ({
    ...singleItem,

    ...(singleItem.__id
      ? {}
      : {
          __id: nanoid()
        })
  }))

const itemsThatAreNotAdded = (value, option) =>
  Object.keys(option.settings).filter(
    optionId => !value.find(({ id }) => id === optionId)
  )

const getDefaultState = () => ({
  currentlyPickedItem: null
})

const { Provider, Consumer } = createContext(getDefaultState())

const LayerControls = SortableHandle(
  ({ items, onChange, toggleOptionsPanel, value }) => (
    <Consumer>
      {({ removeForId, addForId, option }) => (
        <div className="ct-layer-controls">
          <button
            type="button"
            className="ct-visibility"
            onClick={e => {
              e.stopPropagation()
              onChange(
                items.map(l =>
                  l.__id === value.__id
                    ? {
                        ...l,
                        enabled: !{
                          enabled: true,
                          ...l
                        }.enabled
                      }
                    : l
                )
              )
            }}>
            <svg width="15px" height="15px" viewBox="0 0 24 24">
              <path d="M12,4C4.1,4,0,12,0,12s3.1,8,12,8c8.1,0,12-8,12-8S20.1,4,12,4z M12,17c-2.9,0-5-2.2-5-5c0-2.8,2.1-5,5-5s5,2.2,5,5C17,14.8,14.9,17,12,17z M12,9c-1.7,0-3,1.4-3,3c0,1.6,1.3,3,3,3s3-1.4,3-3C15,10.4,13.7,9,12,9z" />
            </svg>
          </button>

          <span>
            {
              (
                option.settings[value.id] || {
                  label: value.id
                }
              ).label
            }
          </span>

          {option.settings[value.id] &&
            option.settings[value.id].clone &&
            items.filter(({ id }) => id === value.id).length < 2 && (
              <button
                type="button"
                className="ct-clone"
                onClick={() => addForId(value.id, value)}>
                <svg width="11px" height="11px" viewBox="0 0 24 24">
                  <path d="M23,24H7.7c-0.6,0-1-0.4-1-1V7.7c0-0.6,0.4-1,1-1H23c0.6,0,1,0.4,1,1V23C24,23.6,23.6,24,23,24z M8.7,22H22V8.7 H8.7V22z" />
                  <path d="M17.3,16.3c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h15.3c0.6,0,1,0.4,1,1V16.3z" />
                </svg>
              </button>
            )}

          {(option.manageable ||
            (option.settings[value.id] &&
              option.settings[value.id].clone &&
              items.filter(({ id }) => id === value.id).length > 1) ||
            !option.settings[value.id]) && (
            <button
              type="button"
              className="ct-remove"
              onClick={() => removeForId(value.__id)}
            />
          )}

          {option.settings[value.id] && option.settings[value.id].options && (
            <button
              type="button"
              className="ct-toggle"
              onClick={() => toggleOptionsPanel()}
            />
          )}
        </div>
      )}
    </Consumer>
  )
)

class SingleItem extends Component {
  state = {
    isOpen: false
  }

  render() {
    const { value, items, onChange } = this.props

    return (
      <Consumer>
        {({ option }) => (
          <li
            className={classnames('ct-layer', {
              [`ct-disabled`]: !{ enabled: true, ...value }.enabled
            })}>
            <LayerControls
              items={items}
              onChange={onChange}
              value={value}
              toggleOptionsPanel={() => {
                onChange(items)

                this.setState(({ isOpen }) => ({
                  isOpen: !isOpen
                }))
              }}
            />

            {option.settings[value.id] &&
              option.settings[value.id].options &&
              this.state.isOpen && (
                <div className="ct-layer-content">
                  <OptionsPanel
                    hasRevertButton={false}
                    onChange={(key, newValue) => {
                      onChange(
                        items.map(l =>
                          l.__id === value.__id
                            ? {
                                ...l,
                                [key]: newValue
                              }
                            : l
                        )
                      )
                    }}
                    value={getValueFromInput(
                      option.settings[value.id].options,
                      value
                    )}
                    options={option.settings[value.id].options}
                  />
                </div>
              )}
          </li>
        )}
      </Consumer>
    )
  }
}

const SortableItem = SortableElement(SingleItem)

const SortableList = SortableContainer(({ items, onChange }) => (
  <Consumer>
    {({ option }) => (
      <ul className="ct-layers">
        {items.map((value, index) => (
          <SortableItem
            key={value.__id}
            index={index}
            onChange={onChange}
            value={value}
            items={items}
          />
        ))}
      </ul>
    )}
  </Consumer>
))

const SelectThatAddsItems = ({ value, option }) => {
  const notAddedItems = itemsThatAreNotAdded(value, option)

  return notAddedItems.length > 0 ? (
    <Consumer>
      {({ currentlyPickedItem, setCurrentItem, addCurrentlySelectedItem }) => (
        <Fragment>
          <div className="ct-add-layer-controls">
            <Select
              onChange={currentlyPickedItem =>
                setCurrentItem(currentlyPickedItem)
              }
              option={{
                choices: notAddedItems.map(key => ({
                  key,
                  value: (
                    option.settings[key] || {
                      label: key
                    }
                  ).label
                }))
              }}
              value={currentlyPickedItem || notAddedItems[0]}
            />

            <button
              type="button"
              className="button"
              onClick={() => addCurrentlySelectedItem()}>
              Add
            </button>
          </div>
        </Fragment>
      )}
    </Consumer>
  ) : null
}

export default class Layers extends Component {
  state = getDefaultState()

  addForId = (idToAdd, value = {}) =>
    this.props.onChange([
      ...this.props.value,
      {
        id: idToAdd,
        enabled: true,
        ...getValueFromInput(
          this.props.option.settings[idToAdd].options || {},
          {}
        ),
        ...value,
        __id: nanoid()
      }
    ])

  render() {
    const value = this.props.option.manageable
      ? valueWithUniqueIds(this.props.value)
      : [
          ...valueWithUniqueIds(this.props.value),
          ...this.props.option.value
            .filter(
              ({ id }) =>
                this.props.value.map(({ id }) => id).indexOf(id) === -1
            )
            .map(item => ({
              ...item,
              enabled: false
            }))
        ]

    return (
      <Provider
        value={{
          ...this.state,
          addCurrentlySelectedItem: () => {
            const idToAdd =
              this.state.currentlyPickedItem ||
              itemsThatAreNotAdded(
                valueWithUniqueIds(this.props.value),
                this.props.option
              )[0]

            this.setState({ currentlyPickedItem: null })
            this.addForId(idToAdd)
          },
          addForId: (id, value) => this.addForId(id, value),
          option: this.props.option,
          setCurrentItem: currentlyPickedItem =>
            this.setState({ currentlyPickedItem }),
          removeForId: idToRemove =>
            this.props.onChange(
              valueWithUniqueIds(this.props.value).filter(
                ({ __id: id }) => id !== idToRemove
              )
            )
        }}>
        {this.props.option.manageable && (
          <SelectThatAddsItems
            {...{
              value: value,
              option: this.props.option
            }}
          />
        )}

        <SortableList
          useDragHandle
          distance={3}
          lockAxis="y"
          items={value}
          onChange={v => this.props.onChange(v)}
          helperContainer={() =>
            document.querySelector('#customize-theme-controls') || document.body
          }
          onSortEnd={({ oldIndex, newIndex }) =>
            this.props.onChange(arrayMove(value, oldIndex, newIndex))
          }
        />
      </Provider>
    )
  }
}
