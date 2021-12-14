import React from "react";

import { Main } from "./Main";
import { AppProvider, AuthProvider } from "../store";
import { getUserId } from "../shared/utils";
import { SaveLinkContainer } from "../features/SaveLink/SaveLinkContainer";
import { AppState, AppType, FormStatus } from "../store/state";

export const App = () => {
    const isExtension = (): boolean => !!document.querySelector(".extension");
    const appType: AppType = isExtension() ? "EXTENSION" : "WEB";
    const appState: AppState = {
        appType,
        formStatus: FormStatus.Inactive,
        userId: getUserId(appType)
    };

    return (
        <AuthProvider>
            <AppProvider value={ appState }>
                <Main />
                <SaveLinkContainer />
            </AppProvider>
        </AuthProvider>
    )
};

