/** @jsx jsx */

import React from "react";

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import * as yup from "yup";

import { colors, font } from "../styles";
import { formSchema } from "../../features/SaveLink/schema";
import { FormFieldInput, InputProps } from "./FormFieldInput";
import { FormFieldLabel, LabelProps } from "./FormFieldLabel";
import { ErrorMessage } from "./ErrorMessage";

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
        id={ id ? id : name }
        name={ name }
        onBlur={ validateField(name) }
        onChange={ onChange }
        required={ required }
        value={ value }
      />
      <ErrorMessage error={ error } />
    </StyledFormField>
  );
};

const StyledFormField = styled.div({
  overflow: "hidden",
  width: "94%",
  minHeight: "95px",
  margin: "0 auto",
  marginBottom: "5px"
});

export interface FormFieldProps extends Omit<InputProps, "onError">, LabelProps {
  name: string;
  onError?: Function;
  validate?: boolean;
};


// export interface FormFieldProps extends InputProps, LabelProps {
//   id?: string;
//   label?: string;
//   name: string;
//   onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onError?: Function;
//   placeholder?: string;
//   required?: boolean;
//   type?: string;
//   validate?: boolean;
//   value: string;
// };