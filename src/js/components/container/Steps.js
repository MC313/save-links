/** @jsx jsx */

import React, { useContext, useEffect, useRef } from "react";

import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Formik } from "formik";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { flex } from "../../styles";
import { StoreContext } from "../../store";
import log from "../../utils/logger";
import Button from "../presentational/Button";

const styles = css`
  ${flex.row};
  width: $width-full;
  overflow-x: hidden;
`;

const Steps = ({ className }) => {
  const { actions, currentStep, dispatch, formData, scrollValue } = useContext(
    StoreContext
  );

  const stepsContainer = useRef(null);

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

  const nextStep = () => dispatch(actions.navigateForward(currentStep));

  const previousStep = () => dispatch(actions.navigateBackward(currentStep));

  const navigateToStep = (offsetValue) => {
    const stepsElement = stepsContainer.current;

    if (!stepsElement) return;

    stepsElement.scrollTo({ left: offsetValue, behavior: "smooth" });
  };

  const submit = (actions, values) => {
    console.log("ACTIONS", actions);
    console.log("VALUES", values);
  };

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

  useEffect(() => {
    navigateToStep(scrollValue);
  }, [scrollValue]);

  return (
    <Formik handleSubmit={submit} initialValues={formData}>
      {({ handleSubmit, touched, errors, values }) => (
        <form onSubmit={handleSubmit}>
          <div css={styles} ref={stepsContainer}>
            <Step1 title='Link' values={values} />
            <Step2 backButton={previousStep} title='Reminder' values={values} />
            <Step3 backButton={previousStep} title='Review' values={values} />
          </div>
          <Button
            disabled={disableButton(currentStep, touched, errors, values)}
            onClickFn={() => nextStep()}
            text={currentStep !== 3 ? "Next Step" : "Submit"}
            type={currentStep !== 3 ? "button" : "submit"}
          />
        </form>
      )}
    </Formik>
  );
};

export default Steps;
