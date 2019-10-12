/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";

import { font, height, padding, radius, width } from "../../styles";

import withFormikField from "../hoc/WithFormikField";
import withStyles from "../hoc/WithStyles";

const inputStyles = {
  width: width.full,
  minHeight: "40px",
  height: "7vh",
  maxHeight: height.medium,
  paddingLeft: padding.medium,
  borderRadius: radius.small,
  fontSize: font.medium,
};

const Input = (props) => <input {...props} noValidate />;

const InputWithStyles = withStyles({ styles: inputStyles })(Input);

const InputWithFormik = withFormikField(InputWithStyles);

const FormFieldInput = (props) => <InputWithFormik {...props} />;

export default FormFieldInput;
