import { API } from "aws-amplify";

import { FormPayload } from "../../shared/types";

export const saveLink = async (payload: FormPayload) => {
    const response = API.post("LinksLockerAPI", "/link", {
        body: payload,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
    return response;
}