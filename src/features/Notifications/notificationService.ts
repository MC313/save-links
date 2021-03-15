const WEBSOCKET_BASE_URL = "wss://khxvnnk5g2.execute-api.us-east-1.amazonaws.com"
const env = setEnvironment()

export const onWebSocketInit = (userId: string) => {
    return new WebSocket(`${WEBSOCKET_BASE_URL}/${env}?userId=${userId}`)
}

function setEnvironment () {
    return process.env.NODE_ENV === "development" ? "dev" : process.env.NODE_ENV
}