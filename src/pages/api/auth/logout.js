import auth0 from '../../../../lib/auth0/auth0'

const logout = async (req, res) => {
    try {
        await auth0.handleLogout(req, res)
    } catch (error) {
        res.status(error.status || 500).end(error.message)
    }
}

export default logout
