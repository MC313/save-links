import React from "react";

import { Field } from "formik";

const withFormikField = (BaseComponent) => ({ name, ...props }) => (
  <Field name={name}>
    {({ field, form }) => <BaseComponent {...field} {...props} noValidate />}
  </Field>
);

export default withFormikField;
