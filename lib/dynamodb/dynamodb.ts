import AWS from 'aws-sdk'

// Set the region
AWS.config.update({ region: 'us-west-2' })

// Create the DynamoDB service object
export const dbClient = new AWS.DynamoDB({ apiVersion: '2012-08-10' })

export const docClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10'
})

export const parseData = AWS.DynamoDB.Converter
