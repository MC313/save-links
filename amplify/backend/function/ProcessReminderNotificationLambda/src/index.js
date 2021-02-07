

exports.handler = async (event, context) => {
    console.log("EVENT: ", event)
    console.log("CONTEXT: ", context)

    const response = {
        statusCode: 200,
        body: JSON.stringify('Running resolver function......'),
    };
    return response;
};
