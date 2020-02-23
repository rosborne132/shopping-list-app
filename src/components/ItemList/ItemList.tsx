import * as React from 'react'
import { ShoppingItemContext } from '../../context'

import { Item } from './Item/Item'

export const ItemList: React.FC = React.memo(
    (): JSX.Element => {
        const { items } = React.useContext(ShoppingItemContext)

        return (
            items && (
                <ul>
                    {items.map(({ id, name, isPurchased }) => (
                        <Item id={id} name={name} isPurchased={isPurchased} />
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
        )
    }
)
