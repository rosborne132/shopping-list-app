import * as React from 'react'

export type User = {
    nickname: string
}

type InitState = {
    user: User | undefined
    isUserLoggedIn: boolean
    updateUserStatus: (boolean) => void
}

const initState = {
    user: undefined,
    isUserLoggedIn: false,
    updateUserStatus: () => {}
}

export const UserContext = React.createContext<InitState>(initState)

export const UserProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false)

    const updateUserStatus = (status: boolean) => setIsUserLoggedIn(status)

    const initState: InitState = {
        user: undefined,
        isUserLoggedIn,
        updateUserStatus
    }

    return (
        <UserContext.Provider value={initState}>
            {children}
        </UserContext.Provider>
    )
}
