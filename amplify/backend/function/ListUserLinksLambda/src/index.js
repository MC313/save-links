/* Amplify Params - DO NOT EDIT
    STORAGE_LINKSTABLE_ARN
    STORAGE_LINKSTABLE_NAME
Amplify Params - DO NOT EDIT */
const AWSXRay = require('aws-xray-sdk-core');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));
const region = process.env.REGION;
const tableName = process.env.STORAGE_LINKSTABLE_NAME;
const dbClient = new AWS.DynamoDB.DocumentClient({ region });

exports.handler = async (event) => {
    const { userId } = event.pathParameters;

    if (event.httpMethod !== "GET") {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: "Invalid request. Only 'GET' requests allowed."
            })
        }
    }
    if (!isValidUserId(userId)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid userId." })
        }
    };

    try {
        const links = await getLinks(userId)
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ links }),
        };
        return response;
    } catch (error) {
        console.log(`Error get links for user ${userId}. ${error}`)
        return {
            statusCode: 500,
            body: { error: "Internal server error" }
        }
    }
};

function isValidUserId(userId) {
    return !!userId;
}

async function getLinks(userId, limit = 10) {
    const tableParams = {
        TableName: tableName,
        IndexName: "UserId",
        Limit: limit,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": userId
        }

    }
    const { Items } = await dbClient.query(tableParams).promise()
    return Items;
}
