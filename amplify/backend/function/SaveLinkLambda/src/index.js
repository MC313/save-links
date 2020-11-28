/* Amplify Params - DO NOT EDIT
    AUTH_LINKSLOCKERAUTH_USERPOOLID
    ENV
    REGION
    STORAGE_LINKSTABLE_ARN
    STORAGE_LINKSTABLE_NAME
Amplify Params - DO NOT EDIT */
const AWSXRay = require('aws-xray-sdk-core');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));
const { v4: uuidv4 } = require('uuid');
const tableName = process.env.STORAGE_LINKSTABLE_NAME;

const dbClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const body = JSON.parse(event.body);

    if (!paramsValid(body)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "A required parameter value is undefined." })
        }
    };

    const userId = uuidv4()

    const tableParams = {
        TableName: tableName,
        Key: { userId },
        Item: { ...body, linkId: uuidv4(), userId },
        ReturnValues: "ALL_OLD"
    };

    try {
        await dbClient.put(tableParams).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(tableParams.Item),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "An Internal server error. Please try you request again later." })
        };
    }
};


function paramsValid(params) {
    const requiredParams = ["name", "url"];
    for (const param of requiredParams) {
        if (!params[param]) return false;
    }
    return true;
};
