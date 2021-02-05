import { API } from "aws-amplify";

export const getNotification = async (userId?: string) => {
    const response = API.post("LinksLockerAPI", "/reminder/notifications", {
        body: {},
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
    return response;
}