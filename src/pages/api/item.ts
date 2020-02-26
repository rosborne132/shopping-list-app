import auth0 from '../../../lib/auth0'
import * as express from 'express'

import {
    checkUser,
    deleteItem,
    getItems,
    patchItem,
    putItem
} from '../../services'

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
                itemName: req.body.itemName,
                username: user.nickname
            })
            break

        case 'GET':
            console.log('Make get request')
            results = await getItems({ username: user.nickname })
            break

        case 'PATCH':
            console.log('Make patch request')
            results = await patchItem({
                item: req.body.item,
                username: user.nickname
            })
            break

        case 'DELETE':
            console.log('Make delete request')
            results = await deleteItem({
                itemId: req.query.itemId,
                username: user.nickname
            })
            break

        default:
            console.log('Default case')
            res.end()
    }

    res.end(JSON.stringify(results))
}
