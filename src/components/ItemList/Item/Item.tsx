import * as React from 'react'
import { motion } from 'framer-motion'
import { ShoppingItemContext } from '../../../context'

export type Item = {
    itemId: number
    itemName: string
    isPurchased: boolean
}

export const Item: React.FC<Item> = React.memo(
    ({ itemId, itemName, isPurchased }): JSX.Element => {
        const { deleteItem, editItem } = React.useContext(ShoppingItemContext)
        const crossedThrough = isPurchased ? 'strike' : ''

        return (
            <motion.li
                className="listItem"
                key={itemId}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.99 }}
            >
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

                        .listItem {
                            list-style-type: none;
                            padding: 5px 0;
                            width: 100%;
                        }
                        .listDeleteButton:hover,
                        .listItem:hover {
                            cursor: pointer;
                        }
                    `}
                </style>
            </motion.li>
        )
    }
)
