import React, { memo } from 'react'
import auth0 from '../../lib/auth0'
import { ItemForm, ItemList, Layout } from '../components'

import { ShoppingItemProvider } from '../context'

const App = () => (
    <ShoppingItemProvider>
        <Layout>
            <div className="hero">
                <h1 className="title">Shopping List</h1>

                <section role="section" className="container">
                    <ItemForm />
                    <ItemList />
                </section>
            </div>

            <style jsx>
                {`
                    .container {
                        -webkit-box-shadow: 3px 2px 11px -8px rgba(20, 20, 20, 1);
                        -moz-box-shadow: 3px 2px 11px -8px rgba(20, 20, 20, 1);
                        box-shadow: 3px 2px 11px -8px rgba(20, 20, 20, 1);
                        border-radius: 10px;
                        margin: 0 auto;
                        max-width: 325px;
                        padding: 30px;
                    }

                    .hero {
                        width: 100%;
                        color: #333;
                    }

                    .title {
                        font-size: 48px;
                        line-height: 1.15;
                        margin: 0;
                        padding: 20px 0;
                        width: 100%;
                    }

                    .title,
                    .description {
                        text-align: center;
                    }
                `}
            </style>
        </Layout>
    </ShoppingItemProvider>
)

App.getInitialProps = async ({ req, res }) => {
    return auth0.getSession(req).then(data => {
        if (data === null) {
            console.log('No user found')
            res.writeHead(302, {
                Location: '/api/auth/login'
            })
            res.end()
            return
        }

        return data
    })
}

export default memo(App)
