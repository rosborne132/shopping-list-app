const dotenv = require('dotenv')

dotenv.config()

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN
  }
})
