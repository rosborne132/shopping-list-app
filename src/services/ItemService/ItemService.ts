import { v4 as uuid } from 'uuid'
import dbClient, { docClient, parseData } from '../../../lib/dynamodb'

export type Item = {
    isPurchased?: boolean
    itemId?: string
    itemName?: string
    username?: string
}

const TableName = 'user-items-prod'

export const getItems = async ({ username }: Item): Promise<Item[]> => {
    const { Items } = await dbClient
        .query({
            TableName,
            IndexName: 'username-index',
            ProjectionExpression: 'isPurchased, itemId, itemName',
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

export const putItem = async ({ itemName, username }: Item): Promise<Item> => {
    const params = {
        TableName,
        Item: {
            isPurchased: false,
            itemId: uuid(),
            itemName,
            username
        }
    }
    try {
        await docClient.put(params).promise()
    } catch (err) {
        console.error(err)
    } finally {
        const { itemId, itemName, isPurchased } = params.Item
        return { itemId, itemName, isPurchased }
    }
}

export const deleteItem = async ({ itemId, username }: Item) => {
    const params = {
        TableName,
        Key: {
            itemId,
            username
        },
        ConditionExpression: 'itemId = :id',
        ExpressionAttributeValues: {
            ':id': itemId
        }
    }

    try {
        await docClient.delete(params).promise()
    } catch (err) {
        console.error(err)
    }
}

export const patchItem = async ({ item, username }) => {
    const { itemId, isPurchased, itemName } = item
    const newValue = !isPurchased
    const params = {
        TableName,
        Key: {
            itemId,
            username
        },
        UpdateExpression: 'set isPurchased = :val',
        ExpressionAttributeValues: {
            ':val': newValue
        },

        ReturnValues: 'UPDATED_NEW'
    }

    try {
        await docClient.update(params).promise()
    } catch (err) {
        console.error(err)
    } finally {
        return { itemId, itemName, isPurchased: !isPurchased }
    }
}
