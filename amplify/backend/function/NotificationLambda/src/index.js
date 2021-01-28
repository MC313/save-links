

exports.handler = async (event, context) => {
    console.log("EVENT: ", JSON.stringify(event, null, 2))
    console.log("CONTEXT: ", JSON.stringify(context, null, 2))
    const response = {
        statusCode: 200,
        body: JSON.stringify('Reminder notification running......')
    };
    return response;
};
