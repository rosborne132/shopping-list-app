import React from 'react'
import { Layout } from '../components'

const Home = () => (
    <Layout>
        <div className="w-100 black sans-serif container">
            <h1 className="w-100 f1 lh-title ma0 pt5 tc">Shopping List</h1>
            <p className="f4 lh-copy tc">
                Sign up to add items to your shopping list!
            </p>
            <p className="f4 lh-copy tc">
                <div>
                    Icons made by{' '}
                    <a
                        href="https://www.flaticon.com/authors/freepik"
                        title="Freepik"
                    >
                        Freepik
                    </a>{' '}
                    from{' '}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                        www.flaticon.com
                    </a>
                </div>
            </p>
        </div>
    </Layout>
)

export default Home
