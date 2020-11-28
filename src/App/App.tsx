import React from "react";

import styled from "@emotion/styled";
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

import SaveLink from "../SaveLink/SaveLink";
import { colors, flex, height, width } from "../shared/styles";
import { AppProvider, AuthProvider, useAuth } from "../store";
import { Header } from "../Header";
import { WizardProvider } from "../store/WizardProvider";

const StyledAppContainer = styled.div({
    width: width.full,
    height: height.full,
    backgroundColor: colors.purplishGrey
}, flex.column);

const StyledContent = styled.main({ height: height.full }, flex.center);

export const App = () => (
    <AuthProvider>
        <Main />
    </AuthProvider>
);

function Main () {
    const [, dispatch] = useAuth();
    const [user, setUser] = React.useState<object | undefined>();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            dispatch.setAuthState(nextAuthState);
            setUser(authData);
        });
    });

    return (
        <StyledAppContainer className="app">
            <Header />
            <StyledContent>
                <AppProvider>
                    <WizardProvider totalSteps={ 4 }>
                        <SaveLink />
                    </WizardProvider>
                </AppProvider>
            </StyledContent>
        </StyledAppContainer>
    );
};