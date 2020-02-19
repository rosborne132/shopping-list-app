import React from 'react'
import { Layout } from '../components'

const Home = () => (
  <Layout>
    <div className="hero">
      <h1 className="title">Welcome Shopping List!</h1>
      <p className="description">
        To get started, edit
        <code>pages/index.js</code>
        and save to reload.
      </p>
    </div>

    <style jsx>
      {`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
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
)

export default Home
