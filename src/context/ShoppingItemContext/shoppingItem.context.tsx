import * as React from 'react'

import axios from 'axios'

export type Item = {
    id: number
    name: string
    isPurchased: boolean
}

export type InitState = {
    items: Item[]
    addItem: (string) => void
    editItem: (number) => void
    deleteItem: (number) => void
}

const initState = {
    items: [],
    addItem: () => {},
    editItem: () => {},
    deleteItem: () => {}
}

export const ShoppingItemContext = React.createContext<InitState>(initState)

export const ShoppingItemProvider = ({ children }) => {
    const [items, setItems] = React.useState([])

    const addItem = async (name: string) => {
        try {
            const results = await axios.post('/api/item', { name })
            console.log(results)
        } catch (err) {
            console.error(err)
        } finally {
            const newItem = {
                name,
                id: items.length + 1,
                isPurchased: false
            }

            const newItems = [...items, newItem]

            setItems(newItems)
        }
    }

    const editItem = (id: number): void => {
        const item = items.filter(item => item.id === id)
        const newItem = { ...item[0], isPurchased: !item[0].isPurchased }
        const newItems = items.map(item => (item.id === id ? newItem : item))

        setItems(newItems)
    }

    const deleteItem = (id: number): void => {
        const newItems = items.filter(item => item.id !== id)

        setItems(newItems)
    }

    const initState: InitState = {
        items,
        addItem,
        editItem,
        deleteItem
    }

    return (
        <ShoppingItemContext.Provider value={initState}>
            {children}
        </ShoppingItemContext.Provider>
    )
}
