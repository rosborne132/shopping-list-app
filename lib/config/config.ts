export const config =
    typeof window === 'undefined'
        ? {
              AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
              AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
              AUTH0_SCOPE: process.env.AUTH0_SCOPE,
              AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
              REDIRECT_URI: process.env.REDIRECT_URI,
              POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
              SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
              SESSION_COOKIE_LIFETIME: 7200
          }
        : {
              AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
              AUTH0_SCOPE: process.env.AUTH0_SCOPE,
              AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
              REDIRECT_URI: process.env.REDIRECT_URI,
              POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI
          }
