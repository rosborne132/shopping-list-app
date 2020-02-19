import * as React from 'react'
import { ShoppingItemContext } from '../../context'

export const ItemForm: React.FC = React.memo(
  (): JSX.Element => {
    const [shoppingItem, setShoppingItem] = React.useState<string>('')
    const { addItem } = React.useContext(ShoppingItemContext)

    const onSubmit = (e: React.FormEvent<EventTarget>): void => {
      e.preventDefault()
      addItem(shoppingItem)
    }

    return (
      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor="shoppingItem">
            <input
              id="shoppingItem"
              value={shoppingItem}
              onChange={e => setShoppingItem(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
        </fieldset>
        <style>
          {`
                    fieldset {
                        border: none;
                    }
                `}
        </style>
      </form>
    )
  }
)
