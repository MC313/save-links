/* Amplify Params - DO NOT EDIT
    ENV
    FUNCTION_SENDREMINDERNOTIFICATIONLAMBDA_NAME
    REGION
    STORAGE_LINKSTABLE_ARN
    STORAGE_LINKSTABLE_NAME
Amplify Params - DO NOT EDIT */

const AWSXRay = require('aws-xray-sdk-core');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));
const cwTargetSnsArn = process.env.SNS_REMINDER_NOTIFICATION_TOPIC_ARN;
const CloudWatchEventNamePrefix = process.env.CLOUD_WATCH_EVENT_NAME_PREFIX;
const region = process.env.REGION;

const cloudWatchClient = new AWS.CloudWatchEvents({ region });

exports.handler = async ({ Records }) => {
    for (const { eventName, dynamodb } of Records) {
        const dynamodbImage = dynamodb["NewImage"];
        const reminderObject = dynamodbImage["reminder"];

        validateDynamodbEvent(eventName)
        validateReminderAttribute(reminderObject)

        const reminder = +reminderObject["N"];
        const { linkId, ...tableAttributes } = getTableAttributes(dynamodbImage, ["linkId", "userId", "name", "url"]);
        const cloudWatchRuleName = `${CloudWatchEventNamePrefix}_${linkId}`;

        try {
            const inputParams = { ...tableAttributes, linkId };
            await setCloudWatchRule(cloudWatchRuleName, reminder)
            await setCloudWatchTarget(cloudWatchRuleName, cwTargetSnsArn, inputParams)
        } catch (error) {
            console.error("Error processing CloudWatch Event. ", error)
        }
    };
};

async function setCloudWatchRule(cloudWatchRuleName, reminder) {
    const cloudWatchRuleParams = {
        Name: cloudWatchRuleName,
        ScheduleExpression: createCronJob(reminder),
        State: "ENABLED"
    }

    const response = await cloudWatchClient.putRule(cloudWatchRuleParams).promise()
    console.log(`Cloudwatch rule ${cloudWatchRuleName} added successfully!`)
    return response;
}

async function setCloudWatchTarget(cloudWatchRuleName, targetSnsArn, InputParams) {
    const cloudWatchTargetParams = {
        Rule: cloudWatchRuleName,
        Targets: [
            {
                Arn: targetSnsArn,
                Id: "SendReminderNotificationSns",
                Input: JSON.stringify(InputParams)
            }
        ]
    }
    const response = await cloudWatchClient.putTargets(cloudWatchTargetParams).promise()
    console.log(`Cloudwatch target added successfully for rule ${cloudWatchRuleName}`)
    return response;
}

function createCronJob(reminder) {
    const { minutes, hour, day } = parseTime(reminder);
    return `cron(${minutes} ${hour} ${day} * ? *)`;
}

function getTableAttributes(dynamodbImage, attributes) {
    let attrResults = {};
    attributes.forEach((attributeName) => {
        const arttributeObject = dynamodbImage[attributeName]
        attrResults = {
            ...attrResults,
            [attributeName]: arttributeObject && arttributeObject["S"] || null
        }
    });
    return attrResults;
}

function parseTime(timeInFuture) {
    if (!timeInFuture) throw new Error("Invalid timeInFuture parameter")
    const timeInfutureObject = new Date(timeInFuture)

    // Returns a string that looks like this: "10 AM"
    // I use the string 'match' function to get just the digits
    const hour = timeInfutureObject.toLocaleTimeString("en-US", { hour: "numeric" }).match(/\d{1,2}/)[0]

    return {
        minutes: timeInfutureObject.toLocaleTimeString("en-US", { minute: "numeric" }),
        hour,
        day: timeInfutureObject.toLocaleDateString("en-US", { day: "numeric" }),
        month: timeInfutureObject.toLocaleDateString("en-US", { month: "numeric" })
    }
}

function validateDynamodbEvent(eventName) {
    if (eventName !== "INSERT") {
        console.log(`Invalid dynamodb 'eventName: ${eventName}'. The scheduler function is only run on INSERT events.`)
        return;
    }
}

function validateReminderAttribute(reminderObject) {
    // Check for presence of reminder attribute within table item
    if (!reminderObject || (reminderObject && reminderObject["NULL"])) {
        console.log("Table item doesn't contain a valid 'reminder' attribute.")
        return;
    }
}


