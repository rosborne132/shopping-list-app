import * as React from 'react'
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
            <form className="center" onSubmit={onSubmit}>
                <fieldset className="bn flex justify-between ma0 pa0 w-100">
                    <div className="flex w-100">
                        <label className="w-100" htmlFor="shoppingItem">
                            <input
                                className="ba b--light-white br3 f4 indent pa2 w-90"
                                value={shoppingItem}
                                onChange={e => setShoppingItem(e.target.value)}
                            />
                        </label>

                        <button
                            className="bg-blue bn br3 pa2 pointer w-25 white"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        )
    }
)
