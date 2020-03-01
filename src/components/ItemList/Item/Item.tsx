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
                style={{
                    listStyleType: 'none',
                    padding: '5px 0',
                    width: '100%'
                }}
                key={itemId}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.999 }}
            >
                <span className="flex pointer justify-between">
                    <span
                        className={`f4 pl0 ${crossedThrough}`}
                        onClick={() => editItem(itemId)}
                    >
                        {itemName}
                    </span>
                    <button
                        className="bg-white bn f5 pointer"
                        onClick={() => deleteItem(itemId)}
                    >
                        X
                    </button>
                </span>
            </motion.li>
        )
    }
)
