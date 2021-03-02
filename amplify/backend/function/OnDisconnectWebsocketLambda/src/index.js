/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_WEBSOCKETCONNECTIONIDTABLE_ARN
	STORAGE_WEBSOCKETCONNECTIONIDTABLE_NAME
Amplify Params - DO NOT EDIT */

exports.handler = async (event, context) => {
    console.log("EVENT: ", event)
    console.log("CONTEXT: ", context)
    const response = {
        statusCode: 200,
        body: JSON.stringify('Websocket disconnected!'),
    };
    return response;
};
