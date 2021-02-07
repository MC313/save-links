import { API } from "aws-amplify";
import { io } from "socket.io-client";

export const getNotification = async (userId?: string) => {
    const response = API.post("LinksLockerAPI", "/reminder/notifications", {
        body: {},
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
    return response;
}

export const onNotificationConnect = async (userId: string) => {
    const response = io("wss://svevq37bp5.execute-api.us-east-1.amazonaws.com/dev")
    return response;
}