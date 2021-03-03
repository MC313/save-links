import React from "react";

import { AmplifySignIn } from "@aws-amplify/ui-react";

export const SignIn: React.FC<{}> = () => {
    return (
        <AmplifySignIn
            slot="sign-in"
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
        </AmplifySignIn>
    );
};