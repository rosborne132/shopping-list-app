import * as React from 'react'
import { ShoppingItemContext } from '../../context'

import { Item } from './Item/Item'

export const ItemList: React.FC = React.memo(
    (): JSX.Element => {
        const { items } = React.useContext(ShoppingItemContext)

        if (!items) return <div>Loading...</div>

        return (
            <ul>
                {items.map(({ itemId, itemName, isPurchased }) => (
                    <Item
                        itemId={itemId}
                        itemName={itemName}
                        isPurchased={isPurchased}
                    />
                ))}

                <style jsx>
                    {`
                        ul {
                            padding: 0;
                        }
                    `}
                </style>
            </ul>
        )
    }
)
