exports.handler = async ({ requestContext }) => {
    const connectionId = requestContext.connectionId;
    try {
        console.log(`Websocket connected successfully! ConnectionId: ${connectionId}`)
        return {
            statusCode: 200,
            body: JSON.stringify({ connectionId })
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: `Error connecting to the websocket. ${error}` })
        }
    }
};
