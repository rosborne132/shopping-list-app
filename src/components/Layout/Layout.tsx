import React, { memo } from 'react'
import Head from 'next/head'
import Nav from '../Nav/Nav'

export const Layout = memo(({ children }) => (
    <div>
        <Head>
            <title>Shopping List</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <main>{children}</main>
    </div>
))
