import * as React from 'react'
import { ShoppingItemContext } from '../../context'

import { Item } from './Item/Item'
import { Spinner } from '../Spinner/Spinner'

export const ItemList: React.FC = React.memo(
    (): JSX.Element => {
        const { items } = React.useContext(ShoppingItemContext)

        if (!items) return <Spinner />

        return (
            <ul className="pa0">
                {items.map(({ itemId, itemName, isPurchased }) => (
                    <Item
                        itemId={itemId}
                        itemName={itemName}
                        isPurchased={isPurchased}
                    />
                ))}
            </ul>
        )
    }
)
