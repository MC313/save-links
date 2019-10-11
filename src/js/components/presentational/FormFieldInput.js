/** @jsx jsx */

import React, { useContext } from "react";

import { css, jsx } from "@emotion/core";

import { font, height, padding, radius, width } from "../../styles";

import { StoreContext } from "../../store";
import withStyles from "./WithStyles";

const inputStyles = {
  width: width.full,
  minHeight: "40px",
  height: "7vh",
  maxHeight: height.medium,
  paddingLeft: padding.medium,
  borderRadius: radius.small,
  fontSize: font.medium,
};

const FormFieldInput = (props) => {
  const Input = (props) => <input {...props} noValidate />;
  const styles = withStyles({ styles: inputStyles });
  const InputWithStyles = styles(Input);
  return <InputWithStyles {...props} />;
};

export default FormFieldInput;
