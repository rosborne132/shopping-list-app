import auth0 from '../../../../lib/auth0/auth0'

const callback = async (req, res) => {
    try {
        await auth0.handleCallback(req, res, { redirectTo: '/app' })
    } catch (error) {
        res.status(error.status || 500).end(error.message)
    }
}

export default callback
