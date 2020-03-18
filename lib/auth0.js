import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN,
    redirectUri: process.env.REDIRECT_URI,
    scope: 'openid profile',
    postLogoutRedirectUri: process.env.POST_LOGOUT_REDIRECT_URI,
    session: {
        cookieSecret: process.env.SESSION_COOKIE_SECRET,
        cookieLifetime: 60 * 60 * 8,
        cookieDomain: 'https://www.shopping-list-app.com/'
    }
})
