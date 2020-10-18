import React from "react";

import { AmplifySignUp } from "@aws-amplify/ui-react";

export const SignUp: React.FC<{}> = () => {
    return (
        <AmplifySignUp
            slot="sign-up"
            usernameAlias="email"
            formFields={ [
                {
                    type: "email",
                    label: "Custom email Label",
                    placeholder: "custom email placeholder",
                    required: true,
                },
                {
                    type: "password",
                    label: "Custom Password Label",
                    placeholder: "custom password placeholder",
                    required: true,
                }
            ] }
        >
        </AmplifySignUp>
    );
};