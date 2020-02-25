import auth0 from '../../../lib/auth0'

import * as express from 'express'

export const checkUser = async (
    req: express.Request,
    res: express.Response
): Promise<boolean> => {
    const data = await auth0.getSession(req)

    if (data === null) {
        res.send('No Authorized', 302)
        res.end()
    }

    return data === null
}
