import { io } from "socket.io-client";

const WEBSOCKET_BASE_URL = "wss://khxvnnk5g2.execute-api.us-east-1.amazonaws.com"
const env = setEnvironment()

export const onNotificationConnect = (userId: string) => {
    const options = {
        query: { userId },
        path: `/${env}`,
        reconnectionDelayMax: 10000,
        transports: ["websocket"]
    }
    return io(`${WEBSOCKET_BASE_URL}`, options)
}

function setEnvironment () {
    return process.env.NODE_ENV === "development" ? "dev" : process.env.NODE_ENV
}