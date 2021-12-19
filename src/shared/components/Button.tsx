import React from "react";

import styled from "@emotion/styled";

import { colors, font, radius, width } from "../styles";

export const Button: React.FC<ButtonProps> = ({ children, title, ...props }) => {
  return (
    <StyledButton { ...props }>
      { children ? children : title }
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>(props => ({
  width: props.size ? setSize(props.size) : width.full,
  height: "44px",
  margin: "0px 13px",
  borderRadius: radius.medium,
  borderWidth: "2px",
  fontSize: font.medium,
  backgroundColor: colors.white,
  borderColor: colors.black,
  color: colors.black,
  opacity: props.disabled ? 0.7 : 1,
  transition: "background-color 0.4s ease",
  ...props.styles,
  svg: {
    fill: colors.black
  },
  "&:hover": {
    backgroundColor: colors.black,
    color: colors.white,
    svg: {
      fill: colors.white
    }
  }
}));

const setSize = (size: ButtonSize | undefined) => {
  switch (size) {
    case "small":
      return "125px"
    case "medium":
      return "200px"
    case "large":
      return "400px"
    default:
      return "200px"
  }
};

type ButtonSize = "small" | "medium" | "large";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  styles?: object;
};