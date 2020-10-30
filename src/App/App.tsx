import React from "react";

import styled from "@emotion/styled";
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import SaveLink from "../SaveLink/SaveLink";
import { colors, flex, height, width } from "../shared/styles";
import { AppProvider } from "../store";
import { AuthContainer } from "../AuthContainer";

const AppContainer = styled.div({
    width: width.full,
    height: height.full,
    backgroundColor: colors.purplishGrey
}, flex.center);

export const App = () => {
    const [authState, setAuthState] = React.useState<AuthState>();
    const [user, setUser] = React.useState<object | undefined>();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData);
        });
    }, []);

    return (
        <AppContainer className="app">
            {
                <AppProvider>
                    <SaveLink />
                </AppProvider>
            }
        </AppContainer>
    );
};