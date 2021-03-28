import React from "react";

import styled from "@emotion/styled";

import { flex, width } from "./shared/styles";
import { Button } from "./shared/components";

const StyledHeader = styled.header({
    width: width.full,
    height: 80,
    display: "flex",
    alignItems: "center",
    lineHeight: 0,
    marginRight: "auto",
    padding: 0,
    background: "transparent",
    color: "black"
}, flex.row);

export const Header: React.FC<{}> = () => {

    return (
        <StyledHeader>
            {/* <Button
                size="small"
                title="Sign In"
            /> */}
        </StyledHeader>
    );
};