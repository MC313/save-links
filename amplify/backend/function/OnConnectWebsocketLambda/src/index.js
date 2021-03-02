/* Amplify Params - DO NOT EDIT
    ENV
    REGION
    STORAGE_WEBSOCKETCONNECTIONIDTABLE_ARN
    STORAGE_WEBSOCKETCONNECTIONIDTABLE_NAME
Amplify Params - DO NOT EDIT */
const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const env = process.env.ENV
const region = process.env.REGION
const tableName = process.env.STORAGE_WEBSOCKETCONNECTIONIDTABLE_NAME
const dbClient = new AWS.DynamoDB.DocumentClient({ region })

exports.handler = async ({ queryStringParameters, requestContext }) => {
    const connectionId = requestContext.connectionId
    const userId = queryStringParameters["userId"]

    if (!userId) throw new Error("Invalid userId!")

    try {
        const tableParams = {
            tableName,
            Key: { userId },
            Item: { connectionId }
        }
        await dbClient.put(tableParams)
        console.log(`Websocket connected successfully! connectionId: ${connectionId}`)
        return {
            statusCode: 200,
            body: JSON.stringify({ connectionId })
        }
    } catch (error) {
        const errorMessage = `Error connecting to the websocket. ${error}`
        console.error(errorMessage)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: errorMessage })
        }
    }
};
