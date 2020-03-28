import * as React from 'react'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/styles.css'

config.autoAddCss = false

library.add(faTrash)

export default ({ Component, pageProps }) => <Component {...pageProps} />
