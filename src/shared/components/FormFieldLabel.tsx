import React from "react";

import styled from "@emotion/styled";
// import { StoreContext } from "../../store";
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

const _capitalize = (strValue: string) => {
  const strArray = strValue.split("");
  strArray[0] = strArray[0].toUpperCase();
  return strArray.join("");
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
      { _capitalize(label) }
      { required ? " (Required)" : "" }
    </StyledLabel>
  );
};