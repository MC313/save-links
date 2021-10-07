import React from "react";

import styled from "@emotion/styled";
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

import {
    AppProvider,
    AuthProvider,
    FormProvider,
    useApp,
    useAuth
} from "../store";
import { SaveLinkForm } from "../features/SaveLink/SaveLinkForm";
import { colors, flex, height, width } from "../shared/styles";
import { getUserId } from "../shared/utils";
import { Header } from "../Header";
import { Notification } from "../features/Notification";
import { WizardProvider } from "../store/WizardProvider";

export const App = () => {
    const isExtension = (): boolean => !!document.querySelector(".extension");
    const appType = isExtension() ? "EXTENSION" : "WEB";
    return (
        <AuthProvider>
            <AppProvider value={ { appType, userId: getUserId(appType) } }>
                <Main />
            </AppProvider>
        </AuthProvider>
    )
};

const Main = () => {
    const [{ appType, userId }] = useApp();
    const [, dispatch] = useAuth();
    const [, setUser] = React.useState<object | undefined>();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            dispatch.setAuthState(nextAuthState);
            setUser(authData);
        });
    });

    React.useEffect(() => {
        if (appType === "EXTENSION") {
            const message = { type: "WEBSOCKET_INIT", userId }
            chrome.runtime.sendMessage(message, (response: any) => {
                console.log("RESPONSE: ", response)
            })
        }
    }, []);

    return (
        <StyledAppContainer className="app">
            { appType === "WEB" && <Notification /> }
            <Header />
            <StyledContent>
                <WizardProvider totalSteps={ 3 }>
                    <FormProvider>
                        <SaveLinkForm />
                    </FormProvider>
                </WizardProvider>
            </StyledContent>
        </StyledAppContainer>
    );
};




const StyledAppContainer = styled.div({
    width: width.full,
    height: height.full,
    backgroundColor: colors.purplishGrey
}, flex.column);

const StyledContent = styled.main({ height: height.full }, flex.center);