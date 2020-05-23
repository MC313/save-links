import React from "react";

import styled from "@emotion/styled";

import SaveLink from "../SaveLink/SaveLink";
import { colors, flex, height, width } from "../shared/styles";
import { AppProvider } from "../store";

const AppContainer = styled.div({
    width: width.full,
    height: height.full,
    backgroundColor: colors.purplishGrey
}, flex.center);

const App = () => {
    return (
        <AppContainer className="app">
            <AppProvider>
                <SaveLink />
            </AppProvider>
        </AppContainer>
    );
}

export default App;