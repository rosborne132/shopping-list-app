import React, { memo } from 'react'
import { ItemForm, ItemList, Layout } from '../components'

import { ShoppingItemProvider } from '../context'

const App = () => (
  <ShoppingItemProvider>
    <Layout>
      <div className="hero">
        <h1 className="title">App</h1>

        <section role="section" className="container">
          <ItemForm />
          <ItemList />
        </section>
      </div>

      <style jsx>
        {`
          .container {
            border: 1px solid #000;
            border-radius: 10px;
            margin: 0 auto;
            padding: 30px;
            max-width: 325px;
          }

          .hero {
            width: 100%;
            color: #333;
          }

          .title {
            margin: 0;
            width: 100%;
            padding: 40px 0;
            line-height: 1.15;
            font-size: 48px;
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

export default memo(App)
