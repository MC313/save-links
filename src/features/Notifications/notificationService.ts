import { API } from "aws-amplify";
import { io } from "socket.io-client";

const WEBSOCKET_BASE_URL = "wss://svevq37bp5.execute-api.us-east-1.amazonaws.com"
const env = setEnvironment()

export const getNotification = async (userId?: string) => {
    const options = {
        body: {},
        headers: { "Access-Control-Allow-Origin": "*" }
    }
    return API.post("LinksLockerAPI", "/reminder/notifications", options)
}

export const onNotificationConnect = (userId: string) => {
    const options = {
        reconnectionDelayMax: 10000,
        path: `/${env}`,
        transports: ["websocket"]
    }
    return io(`${WEBSOCKET_BASE_URL}`, options)
}

function setEnvironment () {
    return process.env.NODE_ENV === "development" ? "dev" : process.env.NODE_ENV
}