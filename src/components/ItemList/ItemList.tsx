import * as React from 'react'
import { ShoppingItemContext } from '../../context'

export const ItemList: React.FC = React.memo(
    (): JSX.Element => {
        const { items } = React.useContext(ShoppingItemContext)

        return (
            <ul>
                {items.map(({ id, name, isPurchased }) => {
                    return (
                        <li
                            key={id}
                            className={`${isPurchased ? 'checked' : ''}`}
                        >
                            {name}
                        </li>
                    )
                })}
            </ul>
        )
    }
)
