import React from "react";

import styled from "@emotion/styled";
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

import { SaveLinkForm } from "../features/SaveLink/SaveLinkForm";
import { colors, flex, height, width } from "../shared/styles";
import { AuthProvider, FormProvider, useAuth } from "../store";
import { Header } from "../Header";
import { Notification } from "../features/Notifications/Notification";
import { WizardProvider } from "../store/WizardProvider";

const StyledAppContainer = styled.div({
    width: width.full,
    height: height.full,
    backgroundColor: colors.purplishGrey
}, flex.column);

const StyledContent = styled.main({ height: height.full }, flex.center);

const getUserId = () => {
    if (sessionStorage.getItem("userId")) {
        return sessionStorage.getItem("userId")
    } else {
        const userId = `GUEST_${Date.now()}`
        sessionStorage.setItem("userId", userId)
        return userId
    }
}

const Main = () => {
    const userId: string = getUserId() as string
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
            <Notification userId={ userId } />
            <Header />
            <StyledContent>
                <WizardProvider totalSteps={ 3 }>
                    <FormProvider>
                        <SaveLinkForm userId={ userId } />
                    </FormProvider>
                </WizardProvider>
            </StyledContent>
        </StyledAppContainer>
    );
};

export const App = () => (
    <AuthProvider>
        <Main />
    </AuthProvider>
);