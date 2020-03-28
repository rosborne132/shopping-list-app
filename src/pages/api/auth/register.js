import auth0 from '../../../../lib/auth0/auth0'

const register = async (req, res) => {
    try {
        await auth0.handleLogin(req, res, {
            authParams: {
                initialScreen: 'signup'
            }
        })
    } catch (error) {
        console.error(error)
        res.status(error.status || 500).end(error.message)
    }
}

export default register
