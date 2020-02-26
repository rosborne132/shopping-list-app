import * as React from 'react'
import { ShoppingItemContext } from '../../../context'

export type Item = {
    itemId: number
    itemName: string
    isPurchased: boolean
}

export const Item: React.FC<Item> = React.memo(
    ({ itemId, itemName, isPurchased }): JSX.Element => {
        const { deleteItem, editItem } = React.useContext(ShoppingItemContext)
        const crossedThrough = isPurchased ? 'checked' : ''

        return (
            <li key={itemId}>
                <span className="listContainter">
                    <span
                        className={`listTitle ${crossedThrough}`}
                        onClick={() => editItem(itemId)}
                    >
                        {itemName}
                    </span>
                    <button
                        className="listDeleteButton"
                        onClick={() => deleteItem(itemId)}
                    >
                        X
                    </button>
                </span>

                <style jsx>
                    {`
                        .checked {
                            text-decoration: line-through;
                        }

                        .listContainter {
                            display: flex;
                            justify-content: space-between;
                        }

                        .listTitle {
                            font-size: 20px;
                            padding-left: 5px;
                            width: 100%;
                        }

                        .listDeleteButton {
                            border: none;
                            background-color: #fff;
                            font-size: 14px;
                        }

                        li {
                            list-style-type: none;
                            padding: 5px 0;
                            width: 100%;
                        }

                        .listDeleteButton:hover,
                        li:hover {
                            cursor: pointer;
                        }
                    `}
                </style>
            </li>
        )
    }
)
