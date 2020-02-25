import { v4 as uuid } from 'uuid'
import dbClient, { docClient, parseData } from '../../../lib/dynamodb'

export type Item = {
    username?: string
    itemId?: string
    isPurchased?: boolean
    name?: string
}

const TableName =
    process.env.NODE_ENV !== 'production' ? 'user-items-dev' : 'user-items-prod'

export const getItems = async ({ username }: Item): Promise<Item[]> => {
    const { Items } = await dbClient
        .query({
            TableName,
            IndexName: 'username-index',
            KeyConditionExpression: '#user = :v_user',
            ExpressionAttributeNames: {
                '#user': 'username'
            },
            ExpressionAttributeValues: {
                ':v_user': { S: username }
            }
        })
        .promise()

    return Items.map(item => parseData.unmarshall(item))
}

export const putItem = async ({ name, username }: Item): Promise<Item> => {
    const params = {
        TableName,
        Item: {
            isPurchased: false,
            itemId: uuid(),
            name,
            username
        }
    }
    try {
        await docClient.put(params).promise()
    } catch (err) {
        console.error(err)
    } finally {
        const { itemId, name, isPurchased } = params.Item
        return { itemId, name, isPurchased }
    }
}
