import React from "react";

import styled from "@emotion/styled";

import { flex, width } from "../../shared/styles";
import { AuthButton } from "../Auth";
import { NavBar } from "./NavBar";

export const Header: React.FC<{}> = () => {
    return (
        <StyledHeader className="main-header">
            <AuthButton />
            <NavBar />
        </StyledHeader>
    );
};

const StyledHeader = styled.header(flex.column, {
    width: width.full,
    minHeight: "150px",
    lineHeight: 0,
    marginRight: "auto",
    padding: "20px 40px",
    background: "transparent",
    color: "black"
});