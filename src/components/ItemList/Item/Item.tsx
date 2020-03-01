import * as React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
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
                whileTap={{ scale: 0.98 }}
            >
                <span className="flex pointer justify-between">
                    <span
                        className={`f4 pl0 ${crossedThrough}`}
                        onClick={() => editItem(itemId)}
                    >
                        {itemName}
                    </span>
                    <button
                        className="bg-white bn pointer"
                        onClick={() => deleteItem(itemId)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </span>
            </motion.li>
        )
    }
)
