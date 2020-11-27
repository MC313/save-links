import React from "react";

import styled from "@emotion/styled";

import { font, height, radius } from "../shared/styles";

const StyledButton = styled.button({
    width: "6rem",
    height: "42px",
    margin: "0px 13px",
    borderRadius: radius.medium,
    fontSize: font.medium,
    backgroundColor: "black",
    borderColor: "black",
    color: "white",
    "&:disabled": {
        opacity: "0.7",
    }
});

interface NavButtonProps {
    onClick: () => void;
};

export const NavButton: React.FC<NavButtonProps> = ({ onClick, children }) => (
    <StyledButton onClick={ onClick }>
        { children }
    </StyledButton>
);