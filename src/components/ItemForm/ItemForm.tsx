import * as React from 'react'
import axios from 'axios'
import { ShoppingItemContext } from '../../context'

export const ItemForm: React.FC = React.memo(
    (): JSX.Element => {
        const [shoppingItem, setShoppingItem] = React.useState<string>('')
        const { addItem } = React.useContext(ShoppingItemContext)

        const onSubmit = (e: React.FormEvent<EventTarget>): void => {
            e.preventDefault()

            if (!shoppingItem.length) {
                return
            }

            setShoppingItem('')
            addItem(shoppingItem)
        }

        return (
            <form onSubmit={onSubmit}>
                <fieldset className="bn flex justify-space pa0 ma0">
                    <label className="w-100" htmlFor="shoppingItem">
                        <input
                            className="ba b--light-white br3 f4 indent pa1 w-90"
                            value={shoppingItem}
                            onChange={e => setShoppingItem(e.target.value)}
                        />
                    </label>

                    <button
                        className="bg-blue pointer br3 bn white"
                        type="submit"
                    >
                        Submit
                    </button>
                </fieldset>
            </form>
        )
    }
)
