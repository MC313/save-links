/* Amplify Params - DO NOT EDIT
    AUTH_LINKSLOCKERAUTH_USERPOOLID
    ENV
    REGION
    STORAGE_LINKSTABLE_ARN
    STORAGE_LINKSTABLE_NAME
Amplify Params - DO NOT EDIT */
const AWSXRay = require('aws-xray-sdk-core');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));
const region = process.env.REGION;
const tableName = process.env.STORAGE_LINKSTABLE_NAME;
const { v4: uuidv4 } = require('uuid');

const dbClient = new AWS.DynamoDB.DocumentClient({ region });

exports.handler = async (event) => {
    const body = JSON.parse(event.body);

    if (!paramsValid(body)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "A required parameter value is undefined." })
        }
    };

    const { userId, ...linkAttributes } = body;

    const tableParams = {
        TableName: tableName,
        Key: { userId },
        Item: { userId, linkId: uuidv4(), ...linkAttributes },
        ReturnValues: "ALL_OLD"
    };

    try {
        await dbClient.put(tableParams).promise();
        console.log(`Link saved successfully! ${JSON.stringify(tableParams.Item, null, 2)}`)
        return {
            statusCode: 200,
            body: JSON.stringify(tableParams.Item)
        };
    } catch ({ message }) {
        console.error(`Error saving link. ${message}`)
        return {
            statusCode: 500,
            body: JSON.stringify({ message })
        };
    }
};


function paramsValid(params) {
    const requiredParams = ["url", "userId"];
    for (const param of requiredParams) {
        if (!params[param]) return false;
    }
    return true;
};
