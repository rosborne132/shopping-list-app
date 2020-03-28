import auth0 from '../../../lib/auth0/auth0'
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
            results = await putItem({
                itemName: req.body.itemName,
                username: user.nickname
            })
            break

        case 'GET':
            results = await getItems({ username: user.nickname })
            break

        case 'PATCH':
            results = await patchItem({
                item: req.body.item,
                username: user.nickname
            })
            break

        case 'DELETE':
            results = await deleteItem({
                itemId: req.query.itemId,
                username: user.nickname
            })
            break

        default:
            res.end()
    }

    res.end(JSON.stringify(results))
}
