import { API } from "aws-amplify";

export const getLinks = (userId: string, pageToken: string = "") => {
    const response = API.get("LinksLockerAPI", `/links/${userId}`, {
        body: { pageToken }
    });
    return response;
}