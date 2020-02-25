import auth0 from '../../../lib/auth0'
import * as express from 'express'

import { checkUser, getItems, putItem } from '../../services'

export default async (req: express.Request, res: express.Response) => {
    const isNotAuthorized = await checkUser(req, res)

    if (isNotAuthorized) {
        return
    }

    const { user } = await auth0.getSession(req)
    let results

    switch (req.method) {
        case 'POST':
            console.log('Make post request')
            results = await putItem({
                name: req.body.name,
                username: user.nickname
            })
            break

        case 'GET':
            console.log('Make get request')
            results = await getItems({ username: user.nickname })
            break

        case 'UPDATE':
            console.log('Make update request')
            break

        case 'DELETE':
            console.log('Make delete request')
            break

        default:
            console.log('Default case')
    }

    res.end(JSON.stringify(results))
}
