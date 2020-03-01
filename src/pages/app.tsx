import React from 'react'
import auth0 from '../../lib/auth0'
import { ItemForm, ItemList, Layout } from '../components'

import { ShoppingItemProvider, UserContext } from '../context'

const App = ({ user }) => {
    const { updateUserStatus } = React.useContext(UserContext)

    React.useEffect(() => {
        if (user === null) {
            return null
        }

        updateUserStatus(true)
    }, [])

    return (
        <ShoppingItemProvider>
            <Layout>
                <div className="container ph4 sans-serif">
                    <section role="section" className="br4 pa3 shadow-5">
                        <ItemForm />
                        <ItemList />
                    </section>
                </div>
            </Layout>
        </ShoppingItemProvider>
    )
}

App.getInitialProps = async ({ req, res }) => {
    return auth0.getSession(req).then(data => {
        if (data === null) {
            res.writeHead(302, {
                Location: '/api/auth/login'
            })
            res.end()
            return
        }

        return data
    })
}

export default App
