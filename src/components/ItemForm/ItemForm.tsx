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
                            id="shoppingItem"
                            value={shoppingItem}
                            onChange={e => setShoppingItem(e.target.value)}
                        />
                    </label>

                    <button
                        id="shoppingSubmit"
                        className="bg-blue"
                        type="submit"
                    >
                        Submit
                    </button>
                </fieldset>
                <style jsx>
                    {`

                        #shoppingItem {
                            border-radius: 10px;
                            border: none;
                            border: solid 1px #ccc;
                            font-size: 16px;
                            height: 25px;
                            text-indent: 10px;
                            width: 95%;
                        }

                        #shoppingSubmit {
                            border-radius: 10px;
                            border: none;
                            border: solid 1px #ccc;
                            color: #fff;
                            padding: 5px;
                            width: 20%;
                        }

                        #shoppingSubmit:hover {
                            cursor: pointer;S
                        }
                    `}
                </style>
            </form>
        )
    }
)
