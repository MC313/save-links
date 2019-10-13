import React, { useContext, useEffect, useRef } from "react";

import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Formik } from "formik";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { flex } from "../../styles/styles";
import { StoreContext } from "../../store";
import Button from "../presentational/Button";

const styles = css`
  ${flex.row};
  width: $width-full;
  overflow-x: hidden;
`;

const Steps = ({ className }) => {
  const { actions, currentStep, dispatch, scrollValue } = useContext(
    StoreContext
  );

  const stepsContainer = useRef(null);

  if (stepsContainer && stepsContainer.current) {
    stepsContainer.current.scrollTo({
      top: 0,
      left: 0,
    });
  }

  // const untouched = (values, fieldNames) => {
  //   fieldNames.forEach((field) => {
  //     if(values[field])
  //   })
  // };

  const hasError = (errors, touched, fieldNames) => {
    console.log("ERRORS", errors);
    console.log("TOUCHED", touched);
    console.log("FIELDS", fieldNames);
    fieldNames.forEach((field) => {
      if (touched[field] && errors[field]) return true;
    });
  };

  const nextStep = () => dispatch(actions.navigateForward(currentStep));

  const previousStep = () => dispatch(actions.navigateBackward(currentStep));

  const navigateToStep = (offsetValue) => {
    if (!stepsContainer.current) return;

    const stepsElement = stepsContainer.current;

    stepsElement.scrollTo({
      top: 0,
      left: offsetValue,
      behavior: "smooth",
    });
  };

  const submit = (actions, values) => {
    console.log("ACTIONS", actions);
    console.log("VALUES", values);
  };

  useEffect(() => {
    navigateToStep(scrollValue);
  }, [scrollValue]);

  const vals = {
    name: "",
    url: "",
    tags: "",
    phone: "",
    timeValue: "",
    timeUnit: "",
  };

  return (
    <Formik handleSubmit={submit} initialValues={vals}>
      {({ handleSubmit, touched, errors, values }) => (
        <form onSubmit={handleSubmit}>
          <div className={className} ref={stepsContainer}>
            <Step1 stepId={1} title='Link' values={values} />
            <Step2
              backButton={previousStep}
              stepId={2}
              title='Reminder'
              values={values}
            />
            <Step3
              backButton={previousStep}
              stepId={3}
              title='Review'
              values={values}
            />
          </div>
          <Button
            disabled={hasError(errors, touched, ["name", "url"])}
            onClickFn={() => nextStep()}
            text={currentStep !== 3 ? "Next Step" : "Submit"}
            type={currentStep !== 3 ? "button" : "submit"}
          />
        </form>
      )}
    </Formik>
  );
};

const StyledSteps = styled(Steps)`
  ${styles}
`;

export default StyledSteps;
