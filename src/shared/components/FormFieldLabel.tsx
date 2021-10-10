import React from "react";

import styled from "@emotion/styled";

import { capitalize } from "../utils";
import { form } from "../styles";


export const FormFieldLabel: React.FC<LabelProps> = ({
  htmlFor,
  required = false,
  label = ""
}) => {
  //const { theme } = useContext(StoreContext);
  return (
    <StyledLabel htmlFor={ htmlFor }>
      { label && capitalize(label) }
      { required ? " (Required)" : "" }
    </StyledLabel>
  );
};

const StyledLabel = styled.label(form.label);

export type LabelProps = {
  htmlFor?: string;
  required?: boolean;
  label: string;
};