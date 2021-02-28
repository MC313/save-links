/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_WEBSOCKETCONNECTIONIDTABLE_ARN
	STORAGE_WEBSOCKETCONNECTIONIDTABLE_NAME
Amplify Params - DO NOT EDIT */exports.handler = async ({ requestContext }, context) => {
    const connectionId = requestContext.connectionId;
    try {
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
