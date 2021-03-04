import React from "react";

import styled from "@emotion/styled";

import { font, radius } from "../../shared/styles";

const StyledButton = styled.button<NavButtonProps>(props => ({
    width: "92%",
    height: "44px",
    margin: "0px 13px",
    borderRadius: radius.medium,
    fontSize: font.medium,
    backgroundColor: "black",
    borderColor: "black",
    color: "white",
    opacity: props.disabled ? "0.7" : "1",
}));

export const NavButton: React.FC<NavButtonProps> = ({
    children,
    onClick,
    style,
    ...props
}) => (
    <StyledButton
        { ...props }
        onClick={ onClick }
        style={ style }
        type="button"
    >
        { children }
    </StyledButton>
);

export interface NavButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    onClick: () => void;
    style?: React.CSSProperties
};