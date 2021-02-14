const axios = require("axios");
const webSocketBaseURL = process.env.WebSocketConnectionBaseURL;

exports.handler = async ({ Records }) => {
    for (const { Sns: { Message } } of Records) {
        try {
            const { userId, name, url } = JSON.parse(Message)
            const { data } = await axios.post(`${webSocketBaseURL}/${userId}`, {
                name,
                url
            })
            console.log("Web notification published successfully!", data)
        } catch (error) {
            const axiosError = getAxiosError(error)
            const responseError = axiosError || error.message
            throw new Error(`Error publishing web notification. ${responseError}`)
        }
    }
}

function getAxiosError(error) {
    if (error["response"] && error["response"]["data"]) {
        return error["response"]["data"]["message"]
    } else {
        return null
    }
}
