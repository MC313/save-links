/* Amplify Params - DO NOT EDIT
    API_LINKSLOCKERWEBSOCKETAPI_APIID
    API_LINKSLOCKERWEBSOCKETAPI_APINAME
    STORAGE_WEBSOCKETCONNECTIONIDTABLE_ARN
    STORAGE_WEBSOCKETCONNECTIONIDTABLE_NAME
Amplify Params - DO NOT EDIT */
const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const webSocketEndpoint = process.env.WEBSOCKET_ENDPOINT_URL
const env = process.env.ENV
const region = process.env.REGION
const tableName = process.env.STORAGE_WEBSOCKETCONNECTIONIDTABLE_NAME
const apiGwManagementClient = new AWS.ApiGatewayManagementApi({
    region,
    endpoint: webSocketEndpoint
})
const dbClient = new AWS.DynamoDB.DocumentClient({ region })

exports.handler = async ({ Records }) => {
    try {
        for (const { Sns: { Message } } of Records) {
            const message = JSON.parse(Message)
            const { userId, ...linkInfo } = message;
            const connectionId = await getConnectionId(userId)
            const result = await publishToWebSocket(connectionId, linkInfo)
            console.log(`Notification published to connectionId: ${connectionId} successfully!!`, result)
        }
    } catch (error) {
        console.error(`Error publishing notification. ${error}`)
    }
}

async function getConnectionId(userId) {
    const tableParams = {
        TableName: tableName,
        Key: { userId },
        AttributesToGet: ["connectionId"]
    }
    const { Item: { connectionId } } = await dbClient.get(tableParams).promise()
    return connectionId;
}

async function publishToWebSocket(connectionId, linkInfo) {
    const connectionParams = {
        ConnectionId: connectionId,
        Data: JSON.stringify(linkInfo)
    }
    await apiGwManagementClient.postToConnection(connectionParams).promise()
}
