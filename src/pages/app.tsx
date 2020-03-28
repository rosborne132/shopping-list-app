import React from 'react'
import auth0 from '../../lib/auth0/auth0'
import { fetchUser } from '../../lib/hooks'
import { ItemForm, ItemList, Layout } from '../components'

import { ShoppingItemProvider } from '../context'

const App = ({ user }) => (
    <ShoppingItemProvider>
        <Layout user={user}>
            <div className="container ph4 sans-serif">
                <section role="section" className="br4 pa3 shadow-5">
                    <ItemForm />
                    <ItemList />
                </section>
            </div>
        </Layout>
    </ShoppingItemProvider>
)

App.getInitialProps = async ({ req, res }) => {
    if (typeof window === 'undefined') {
        const session = await auth0.getSession(req)
        if (!session || !session.user) {
            res.writeHead(302, {
                Location: '/api/auth/login'
            })
            res.end()
            return
        }
        return { user: session.user }
    }

    const user = await fetchUser()
    return { user }
}

export default App
