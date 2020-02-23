import auth0 from '../../../lib/auth0'

const checkUser = async (req, res) => {
    const data = await auth0.getSession(req)

    if (data === null) {
        res.send('No Authorized', 302)
        res.end()
    }

    return data === null
}

export default async (req, res) => {
    const isNotAuthorized = await checkUser(req, res)

    if (isNotAuthorized) {
        return
    }

    switch (req.method) {
        case 'POST':
            console.log('Make post request')
            res.end(JSON.stringify({ name: 'John Doe' }))
            break
        case 'GET':
            console.log('Make get request')
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
}
