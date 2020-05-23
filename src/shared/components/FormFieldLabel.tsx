import React from "react";

import styled from "@emotion/styled";

import { capitalize } from "../utils";
import { font, margin } from "../styles";

const StyledLabel = styled.label({
  display: "flex",
  fontSize: font.medium,
  marginBottom: margin.extraSmall,
  marginRight: margin.small,
  color: "black",
  "&--error": {
    color: "red",
  },
});

interface FormFieldLabelProps {
  inputId?: string;
  required?: boolean;
  label: string;
};

export const FormFieldLabel: React.FC<FormFieldLabelProps> = ({
  inputId,
  required = false,
  label = "",
  ...props
}) => {
  //const { theme } = useContext(StoreContext);
  return (
    <StyledLabel htmlFor={ inputId } { ...props }>
      { capitalize(label) }
      { required ? " (Required)" : "" }
    </StyledLabel>
  );
};