/** @jsx jsx */

import React, { useContext } from "react";

import { css, jsx } from "@emotion/core";
import { Form, Formik } from "formik";

import { StoreContext } from "../../store";
import log from "../../utils/logger";
import Button from "../presentational/Button";
import Steps from "../container/Steps";

const BasicForm = () => {
  const { actions, currentStep, dispatch, formData } = useContext(StoreContext);

  const untouched = (touched, fieldNames) => {
    let untouched = false;
    for (let i = 0; i < fieldNames.length; i++) {
      const fieldName = fieldNames[i];
      untouched = !touched[fieldName];
      if (untouched) break;
    }
    return untouched;
  };

  const hasError = (errors, touched, fieldNames) => {
    let error = false;
    for (let i = 0; i < fieldNames.length; i++) {
      const fieldName = fieldNames[i];
      error = !!(touched[fieldName] && errors[fieldName]);
      if (error) break;
    }
    return error;
  };

  const submitFormInfo = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log("is submitting");
    console.log("VALUES", values);
  };

  const nextStep = () => dispatch(actions.navigateForward(currentStep));

  const disableButton = (stepId, touched, errors, values) => {
    if (stepId === 1) {
      return (
        untouched(touched, ["title", "url"]) ||
        hasError(errors, touched, ["title", "url"])
      );
    }
    if (stepId === 2) {
      if (!values["phone"] && !values["timeValue"]) return false;
    }
  };

  return (
    <Formik onSubmit={submitFormInfo} initialValues={formData}>
      {({ handleSubmit, isValid, isSubmitting, touched, errors, values }) => (
        <form onSubmit={handleSubmit}>
          <Steps values={values} />
          {currentStep >= 3 ? (
            <>
              <Button
                disabled={isSubmitting}
                text={isSubmitting ? "Submitting....." : "Submit"}
                type='submit'
              />
              {!isValid && <p>Error in form</p>}
            </>
          ) : (
            <Button
              disabled={disableButton(currentStep, touched, errors, values)}
              onClickFn={() => nextStep()}
              text='Next Step'
              type='button'
            />
          )}
        </form>
      )}
    </Formik>
  );
};

export default BasicForm;
