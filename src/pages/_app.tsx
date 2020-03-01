import React from 'react'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/styles.css'

import { UserProvider } from '../context'

config.autoAddCss = false

library.add(faTrash)

export default function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    )
}
