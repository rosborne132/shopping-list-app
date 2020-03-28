import * as React from 'react'
import Head from 'next/head'

import { Nav } from '../Nav/Nav'
import { UserProvider } from '../../../lib/hooks'

type LayoutProps = {
    user: {}
    loading?: boolean
    children: React.ReactNode
}

export const Layout = React.memo(
    ({ user, loading = false, children }: LayoutProps) => (
        <UserProvider value={{ user, loading }}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>Shopping List</title>
                <link rel="manifest" href="/manifest.json" />
                <link
                    href="/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link rel="apple-touch-icon" href="/apple-icon.png" />
            </Head>

            <Nav />

            <main>{children}</main>
        </UserProvider>
    )
)
