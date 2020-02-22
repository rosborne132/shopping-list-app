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
                <fieldset>
                    <label htmlFor="shoppingItem">
                        <input
                            id="shoppingItem"
                            value={shoppingItem}
                            onChange={e => setShoppingItem(e.target.value)}
                        />
                    </label>

                    <button id="shoppingSubmit" type="submit">
                        Submit
                    </button>
                </fieldset>
                <style jsx>
                    {`
                        fieldset {
                            border: none;
                            display: flex;
                            justify-content: space-between;
                            margin: 0;
                            padding: 0;
                        }

                        label {
                            width: 100%;
                        }

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
                            background-color: #63b3ed;
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
