import auth0 from '../../../../lib/auth0'

const me = async (req, res) => {
    try {
        await auth0.handleProfile(req, res, { refetch: true })
    } catch (err) {
        res.status(err.status || 500).end(err.message)
    }
}

export default me
