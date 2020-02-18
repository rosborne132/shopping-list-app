import * as React from 'react'

export type Item = {
    id: number
    name: string
    isPurchased: boolean
}

export type InitState = {
    items: Item[]
}

const initState = {
    items: [],
}

export const ShoppingItemContext = React.createContext<InitState>(initState)

export const ShoppingItemProvider = ({ children }) => {
    const initState: InitState = {
        items: [
            {
                id: 1,
                name: 'batteries',
                isPurchased: false,
            },
            {
                id: 2,
                name: 'food',
                isPurchased: false,
            },
            {
                id: 3,
                name: 'TP',
                isPurchased: true,
            },
        ],
    }

    return (
        <ShoppingItemContext.Provider value={initState}>
            {children}
        </ShoppingItemContext.Provider>
    )
}
