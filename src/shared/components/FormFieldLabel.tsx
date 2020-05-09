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
  id?: string;
  name?: string;
  required?: boolean;
  text?: string;
};

const _capitalize = (strValue: string) => {
  const strArray = strValue.split("");
  strArray[0] = strArray[0].toUpperCase();
  return strArray.join("");
};

const FormFieldLabel: React.FC<FormFieldLabelProps> = ({
  id,
  name,
  required = false,
  text = "",
  ...props
}) => {
  //const { theme } = useContext(StoreContext);
  return (
    <StyledLabel htmlFor={ id } { ...props }>
      { _capitalize(text) }
      { required ? " (Required)" : "" }
    </StyledLabel>
  );
};

export default FormFieldLabel;
