import React from "react";

import styled from "@emotion/styled";

import { colors, font } from "../styles";

export const ErrorMessage: React.FC<ErrorMsgProps> = ({ error }) => (
    <React.Fragment>
        {
            error ?
                <StyledError aria-live="assertive">{ error }</StyledError> : null
        }
    </React.Fragment>
);

const StyledError = styled.p({
    minHeight: "20px",
    height: "20px",
    margin: "5px 0px 0px 0px",
    fontSize: font.small,
    color: colors.red
});

interface ErrorMsgProps {
    error: undefined | string;
};