/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import { Field } from "formik";

const withFormikField = (BaseComponent) => ({ field, form, ...props }) => (
  <Field component={BaseComponent} field={field} form={form} {...props} />
);

export default withFormikField;
