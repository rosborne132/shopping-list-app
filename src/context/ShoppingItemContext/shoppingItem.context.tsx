import * as React from 'react'

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

  const setItemList = (newItem: Item): void => {
    const newItems = [...items, newItem]

    setItems(newItems)
  }

  const addItem = (name: string): void => {
    const newItem = {
      name,
      id: items.length + 1,
      isPurchased: false
    }

    setItemList(newItem)
  }

  const editItem = (id: number): void => {
    const item = items.filter(item => item.id !== id)

    const newItem = { ...item[0], isPurchased: true }

    setItemList(newItem)
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
