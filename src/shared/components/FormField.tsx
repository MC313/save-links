/** @jsx jsx */

import React from "react";

import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { FormalWebFieldProps } from "@kevinwolf/formal-web";

import { font, margin } from "../styles";
import FormFieldInput from "./FormFieldInput";
import FormFieldLabel from "./FormFieldLabel";

const StyledFormField = styled.div({
  overflow: "hidden",
  width: "100%",
  marginBottom: margin.large,
  p: {
    minHeight: "20px",
    height: "20px",
    paddingTop: "5px",
    fontSize: font.small
  }
});

interface FormFieldProps extends FormalWebFieldProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  validate?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
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
    </StyledFormField>
  );
};


export default FormField;
