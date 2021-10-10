import React from "react";

import { Main } from "./Main";
import { AppProvider, AuthProvider } from "../store";
import { getUserId } from "../shared/utils";

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

