import React from "react";

import { AuthState } from "@aws-amplify/ui-components";

import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const AuthContainer: React.FC<{ authState: AuthState | undefined }> =
    ({ authState }) => {
        return (
            <React.Fragment>
                { authState === AuthState.SignIn && <SignIn /> }
                { authState === AuthState.SignUp && <SignUp /> }
            </React.Fragment>
        );
    };