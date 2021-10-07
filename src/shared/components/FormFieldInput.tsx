import React from "react";

import styled from "@emotion/styled";

import { font, padding, radius, height } from "../styles";

const StyledInput = styled.input({
  width: "90%",
  minHeight: height.small,
  height: "7vh",
  maxHeight: "40px",
  paddingLeft: padding.medium,
  borderRadius: radius.small,
  fontSize: font.medium,
});

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const FormFieldInput: React.FC<InputProps> = (props) => (
  <StyledInput { ...props } />
);