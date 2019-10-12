import React, { useContext, useEffect, useRef } from "react";

import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Formik } from "formik";

import { flex } from "../../styles/styles";
import { StoreContext } from "../../store";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Button from "../presentational/Button";

const styles = css`
  ${flex.row};
  width: $width-full;
  overflow-x: hidden;
  scroll-snap-coordinate: 0 0;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
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

  const nextStep = (stepId) => {
    dispatch(actions.navigateForward(stepId));
  };

  const navigateToStep = (offsetValue) => {
    if (!stepsContainer.current) return;

    const { current: stepsElement } = stepsContainer;

    stepsElement.scrollTo({
      top: 0,
      left: offsetValue,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    navigateToStep(scrollValue);
  }, [scrollValue]);

  return (
    <Formik>
      {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
        <form>
          <div className={className} ref={stepsContainer}>
            <Step1 title={"Link"} backButton={false} stepId={1} />
            <Step2 title={"Reminder"} backButton stepId={2} />
            <Step3 title={"Review"} backButton stepId={3} />
          </div>
          <Button
            // disabled={formData.name.error || formData.url.error}
            text={currentStep === 3 ? "Submit" : "Next Step"}
            onClickFn={() => nextStep(currentStep)}
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
