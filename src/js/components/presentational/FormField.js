/** @jsx jsx */

import React, { useContext } from "react";

import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { font } from "../../styles/styles";
import { StoreContext } from "../../store";
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
  inputType = "text",
  name,
  label,
  placeholder,
  isRequired = false,
  className,
}) => {
  const { formData } = useContext(StoreContext);

  return (
    <div className={className}>
      <FormFieldLabel name={name} required={isRequired} text={label || name} />
      <FormFieldInput
        id={name}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        type={inputType}
      />

      <p>{formData[name].error}</p>
    </div>
  );
};

const StyledFormField = styled(FormField)`
  ${styles}
`;

export default StyledFormField;
