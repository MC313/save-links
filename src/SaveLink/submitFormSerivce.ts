import { API } from "aws-amplify";

import { FormPayload } from "../shared/types/FormData";

export const submitForm = async (payload: FormPayload) => {
    const response = API.post("LinksLockerAPI", "/link", {
        body: payload,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
    return response;
}