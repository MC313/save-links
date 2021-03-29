/** @jsx jsx */

import React from "react";

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import * as yup from "yup";

import { colors } from "../styles";
import { formSchema } from "../../features/SaveLink/schema";
import { FormFieldInput } from "./FormFieldInput";
import { FormFieldLabel } from "./FormFieldLabel";

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  name,
  onBlur,
  onChange,
  onError,
  required = false,
  type = "text",
  validate = false,
  value,
  ...props
}) => {
  const [error, setError] = React.useState<undefined | string>();

  const validateField = (name: string) =>
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => setError(undefined))
        .catch(({ errors }) => {
          setError(errors[0])
          onError && onError()
        })
    }

  return (
    <StyledFormField>
      {
        label &&
        <FormFieldLabel
          htmlFor={ name }
          required={ required }
          label={ label }
        />
      }
      <FormFieldInput
        { ...props }
        id={ id ? id : `${name}Id` }
        name={ name }
        onBlur={ validateField(name) }
        onChange={ onChange }
        required={ required }
        value={ value }
      />
      <p>{ error }</p>
    </StyledFormField>
  );
};

const StyledFormField = styled.div({
  overflow: "hidden",
  width: "94%",
  minHeight: "95px",
  margin: "0 auto",
  marginBottom: "5px",
  p: {
    minHeight: "20px",
    height: "20px",
    margin: "5px 0px 0px 0px",
    fontSize: "15px",
    color: colors.red
  }
});

export interface FormFieldProps {
  id?: string;
  label?: string;
  name: string;
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onError?: Function;
  placeholder?: string;
  required?: boolean;
  type?: string;
  validate?: boolean;
  value: string;
};