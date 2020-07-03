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
  htmlFor?: string;
  required?: boolean;
  label: string;
};

export const FormFieldLabel: React.FC<FormFieldLabelProps> = ({
  htmlFor,
  required = false,
  label = ""
}) => {
  //const { theme } = useContext(StoreContext);
  return (
    <StyledLabel htmlFor={ htmlFor }>
      { capitalize(label) }
      { required ? " (Required)" : "" }
    </StyledLabel>
  );
};