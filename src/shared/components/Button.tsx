import React from "react";

import styled from "@emotion/styled";

import { font, height, radius, width } from "../styles";

const StyledButton = styled.button<ButtonProps>(props => ({
  width: props.size ? setSize(props.size) : width.full,
  minHeight: "40px",
  height: "7vh",
  maxHeight: height.medium,
  margin: "0px 13px",
  borderRadius: radius.medium,
  fontSize: font.medium,
  backgroundColor: "black",
  borderColor: "black",
  color: "white",
  "&:disabled": {
    opacity: "0.7",
  },
}));

export const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <StyledButton { ...props }>
      { title }
    </StyledButton>
  );
};

const setSize = (size: ButtonSize | undefined) => {
  switch (size) {
    case "small":
      return "15em"
    case "medium":
      return "25em"
    case "large":
      return "40em"
    default:
      return "25em"
  }
};

type ButtonSize = "small" | "medium" | "large";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
};