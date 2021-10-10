import React from "react";

import styled from "@emotion/styled";
import { Global } from "@emotion/react";

import { FormProvider, useApp, WizardProvider } from "../store";
import { SaveLinkForm } from "../features/SaveLink/SaveLinkForm";
import { Notification } from "../features/Notification";
import {
    colors,
    flex,
    height,
    reset,
    width
} from "../shared/styles";
import { Header } from "../Header";

export const Main = () => {
    const [{ appType, userId }] = useApp();

    React.useEffect(() => {
        if (appType === "EXTENSION") {
            const message = { type: "WEBSOCKET_INIT", userId }
            chrome.runtime.sendMessage(message, (response: any) => {
                console.log("RESPONSE: ", response)
            })
        }
    }, []);

    return (
        <React.Fragment>
            <Global styles={ reset } />
            <StyledAppContainer className="app">
                { appType === "WEB" && <Notification /> }
                <Header />
                <StyledMainContent>
                    <WizardProvider totalSteps={ 3 }>
                        <FormProvider>
                            <SaveLinkForm />
                        </FormProvider>
                    </WizardProvider>
                </StyledMainContent>
            </StyledAppContainer>
        </React.Fragment>
    );
};

const StyledAppContainer = styled.div({
    width: width.full,
    height: height.full,
    backgroundColor: colors.purplishGrey
}, flex.column);

const StyledMainContent = styled.main({ height: height.full }, flex.center);