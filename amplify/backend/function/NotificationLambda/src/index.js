exports.handler = async ({ body, httpMethod }) => {
    const { Message = null } = JSON.parse(body)

    if (httpMethod !== "POST") {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Invalid http method. Only POST method allowed."
            })
        };
    }
    console.log("Notification message processed successfully!")
    return {
        statusCode: 200,
        body: Message
    };
};
