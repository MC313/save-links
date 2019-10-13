import React from "react";

import { Field } from "formik";

const withFormikField = (BaseComponent) => ({ name, validate, ...props }) => (
  <Field name={name} validate={validate}>
    {({ field, form }) => <BaseComponent {...field} {...props} noValidate />}
  </Field>
);

export default withFormikField;
