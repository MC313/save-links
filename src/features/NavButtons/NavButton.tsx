import React from "react";

import styled from "@emotion/styled";

import { colors, font, radius } from "../../shared/styles";

const StyledButton = styled.button<NavButtonProps>(props => ({
    width: "95%",
    height: "44px",
    margin: "0px 13px",
    borderRadius: radius.medium,
    borderWidth: "2px",
    fontSize: font.medium,
    backgroundColor: colors.white,
    borderColor: colors.black,
    color: colors.black,
    opacity: props.disabled ? "0.7" : "1",
    svg: {
        fill: colors.black
    },
    "&:hover": {
        backgroundColor: colors.black,
        color: colors.black,
        svg: {
            fill: colors.white
        }
    }
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