import React from "react";

import styled from "@emotion/styled";

import { font, radius } from "../../shared/styles";

const StyledButton = styled.button({
    width: "92%",
    height: "44px",
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

export interface NavButtonProps {
    onClick: () => void;
    style?: React.CSSProperties
};

export const NavButton: React.FC<NavButtonProps> = ({
    children,
    onClick,
    style
}) => (
    <StyledButton
        onClick={ onClick }
        style={ style }
        type="button"
    >
        { children }
    </StyledButton>
);