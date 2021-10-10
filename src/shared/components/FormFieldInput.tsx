import React from "react";

import styled from "@emotion/styled";

import { form } from "../styles";

export const FormFieldInput: React.FC<InputProps> = (props) => (
  <StyledInput { ...props } />
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input(form.input);