import * as React from 'react'
import fetch from 'isomorphic-unfetch'

function initialState(args) {
    return {
        response: null,
        error: null,
        isLoading: true,
        ...args
    }
}

export default (url, options = {}) => {
    const [state, setState] = React.useState(() => initialState())

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, {
                    ...options
                })

                setState(
                    initialState({
                        response: await res.json(),
                        isLoading: false
                    })
                )
            } catch (error) {
                setState(
                    initialState({
                        error
                    })
                )
            }
        }
        fetchData()
    }, [])
    return state
}
