import * as React from 'react'

import axios from 'axios'

export type Item = {
    itemId: number
    itemName: string
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

    const apiUrl: string = '/api/item'

    React.useEffect(() => {
        axios.get(apiUrl).then(res => {
            setItems(res.data)
        })
    }, [])

    const addItem = async (itemName: string): Promise<void> => {
        let newItem
        try {
            newItem = await axios.post(apiUrl, { itemName })
        } catch (err) {
            console.error(err)
        } finally {
            const newItems = [...items, newItem.data]

            setItems(newItems)
        }
    }

    const editItem = async (itemId: string): Promise<void> => {
        let newItem
        const item = items.filter(item => item.itemId === itemId)[0]
        try {
            newItem = await axios.patch(apiUrl, { item })
        } catch (err) {
            console.error(err)
        } finally {
            const newItems = items.map(item =>
                item.itemId === itemId ? newItem.data : item
            )
            setItems(newItems)
        }
    }

    const deleteItem = async (itemId: string): Promise<void> => {
        try {
            await axios.delete(`${apiUrl}?itemId=${itemId}`)
        } catch (err) {
            console.error(err)
            return
        } finally {
            const newItems = items.filter(item => item.itemId !== itemId)
            setItems(newItems)
        }
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
