/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ErrorMessage } from "formik";

import { font } from "../../styles/styles";
import FormFieldInput from "../presentational/FormFieldInput";
import FormFieldLabel from "../presentational/FormFieldLabel";

const styles = css`
    margin-bottom: 10px;
    p {
      min-height: 30px;
      height: 30px;
      padding: 5px 0px 0px 0px;
      font-size: ${font.small};
    }
  }
`;

const FormField = ({
  className,
  inputType = "text",
  isRequired = false,
  label,
  name,
  placeholder,
  validate,
}) => {
  return (
    <div className={className}>
      <FormFieldLabel name={name} required={isRequired} text={label || name} />
      <FormFieldInput
        id={name}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        type={inputType}
        validate={validate}
      />
      <ErrorMessage component='p' name={name} />
    </div>
  );
};

const StyledFormField = styled(FormField)`
  ${styles}
`;

export default StyledFormField;
