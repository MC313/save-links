import { API } from "aws-amplify";

import { Link } from "../../shared/types";

export const getLinks = (userId: string, pageToken: string = "") => {
    // const response = fetch('https://fakerapi.it/api/v1/companies?_quantity=5')
    // return response;
    const response = API.get("LinksLockerAPI", `/links/${userId}`, {
        body: { pageToken }
    });
    return response;
}