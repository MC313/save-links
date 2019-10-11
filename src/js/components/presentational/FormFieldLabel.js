/** @jsx jsx */

import React, { useContext } from "react";

import { css, jsx } from "@emotion/core";

import { StoreContext } from "../../store";
import { font, margin } from "../../styles";
import withStyles from "../hoc/WithStyles";

const labelStyles = {
  display: "flex",
  fontSize: font.medium,
  marginBottom: margin.extraSmall,
  marginRight: margin.small,
  ["&--error"]: {
    color: "red",
  },
};

const capitalize = (strValue) => {
  const strArray = strValue.split("");
  strArray[0] = strArray[0].toUpperCase();
  return strArray.join("");
};

const Label = ({ name, required, text, ...props }) => (
  <label htmlFor={name} {...props}>
    {capitalize(text)}
    {required ? " (Required)" : ""}
  </label>
);

const FormFieldLabel = (props) => {
  const { theme } = useContext(StoreContext);

  const themeStyles = { ...labelStyles, color: theme.primaryText };

  const styles = withStyles({ styles: themeStyles });

  const LabelWithStyles = styles(Label);

  return <LabelWithStyles {...props} />;
};

export default FormFieldLabel;
