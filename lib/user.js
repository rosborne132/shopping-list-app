import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

export async function fetchUser(cookie = '') {
    if (typeof window !== 'undefined' && window.__user) {
        return window.__user
    }

    const res = await fetch(
        '/api/auth/me',
        cookie
            ? {
                  headers: {
                      cookie
                  }
              }
            : {}
    )

    if (!res.ok) {
        delete window.__user
        return null
    }

    const json = await res.json()
    if (typeof window !== 'undefined') {
        window.__user = json
    }
    return json
}

export const useFetchUser = ({ required } = {}) => {
    const [loading, setLoading] = useState(
        () => !(typeof window !== 'undefined' && window.__user)
    )
    const [user, setUser] = useState(() => {
        if (typeof window === 'undefined') {
            return null
        }

        return window.__user || null
    })

    useEffect(() => {
        if (!loading && user) {
            return
        }

        setLoading(true)
        let isMounted = true

        fetchUser().then(user => {
            if (isMounted) {
                if (required && !user) {
                    window.location.href = '/api/auth/login'
                    return
                }

                setUser(user)
                setLoading(false)
            }
        })

        return () => (isMounted = false)
    }, [])

    return { user, loading }
}
