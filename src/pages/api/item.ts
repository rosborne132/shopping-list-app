export default async (req, res) => {
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
