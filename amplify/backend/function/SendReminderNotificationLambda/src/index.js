exports.handler = async ({ Records }) => {
    Records.forEach((record) => {
        console.log("SENDING REMINDER: ", JSON.stringify(record, null, 2))
    })
};
