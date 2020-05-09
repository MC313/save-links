import React from "react";

import styled from "@emotion/styled";

import { font, padding, radius, width } from "../styles";
import { FormalWebFieldProps } from "@kevinwolf/formal-web";

const StyledInput = styled.input({
  maxWidth: width.full,
  minHeight: "30px",
  height: "7vh",
  maxHeight: "40px",
  paddingLeft: padding.medium,
  borderRadius: radius.small,
  fontSize: font.medium,
});

type CustomInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> & FormalWebFieldProps;
interface FormFieldInputProps extends CustomInputProps {
  className?: string;
  onBlur?: () => void;
  type?: string;
  value?: string;
  validate?: boolean;
};

const FormFieldInput: React.FC<FormFieldInputProps> = (props) => (
  <StyledInput { ...props } />
);

export default FormFieldInput;
