import React from "react";

import { css } from "@emotion/core";
import styled from "@emotion/styled";

import "./App.style.ts";
import SaveLink from "../SaveLink/SaveLink";
import { colors, flex, height, width } from "../shared/styles";

const AppContainer = styled.div({
    width: width.full,
    height: height.full,
    backgroundColor: colors.purplishGrey
}, flex.center);

const App = () => {
    return (
        <AppContainer className="app">
            <SaveLink />
        </AppContainer>
    );
}

export default App;