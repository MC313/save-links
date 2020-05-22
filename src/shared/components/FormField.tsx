/** @jsx jsx */

import React from "react";

import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { FormalFieldProps } from '@kevinwolf/formal';
import { FormalWebFieldProps } from "@kevinwolf/formal-web";

import { font, margin } from "../styles";
import FormFieldInput from "./FormFieldInput";
import FormFieldLabel from "./FormFieldLabel";

const StyledFormField = styled.div({
  overflow: "hidden",
  width: "100%",
  marginBottom: margin.medium,
  p: {
    minHeight: "20px",
    height: "20px",
    margin: "5px 0px 0px 0px",
    fontSize: font.medium,
    color: "red"
  }
});

export interface FormFieldProps extends FormalFieldProps, FormalWebFieldProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  validate?: boolean;
};

export const FormField: React.FC<FormFieldProps> = ({
  error,
  label,
  name,
  placeholder,
  required = false,
  type = "text",
  validate = false,
  ...props
}) => {
  return (
    <StyledFormField>
      <FormFieldLabel
        id={ `${name}-Id` }
        name={ name }
        required={ required }
        text={ label || name }
      />
      <FormFieldInput
        { ...props }
        id={ `${name}-Id` }
        name={ name }
        placeholder={ placeholder }
        required={ required }
        type={ type }
        validate={ validate }
      />
      <p>{ error }</p>
    </StyledFormField>
  );
};