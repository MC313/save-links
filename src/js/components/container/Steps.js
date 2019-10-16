/** @jsx jsx */

import React, { useContext, useEffect, useRef } from "react";

import { css, jsx } from "@emotion/core";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { width } from "../../styles";
import { StoreContext } from "../../store";
import log from "../../utils/logger";

const styles = {
  display: "flex",
  flexDirection: "row",
  width: width.full,
  overflowX: "hidden",
};

const Steps = ({ values }) => {
  const { actions, currentStep, dispatch, scrollValue } = useContext(
    StoreContext
  );

  const stepsContainer = useRef(null);

  const navigateToStep = (offsetValue) => {
    const stepsElement = stepsContainer.current;

    if (!stepsElement) return;

    stepsElement.scrollTo({ left: offsetValue, behavior: "smooth" });
  };

  const previousStep = () => dispatch(actions.navigateBackward(currentStep));

  useEffect(() => {
    navigateToStep(scrollValue);
  }, [scrollValue]);

  return (
    <div css={styles} ref={stepsContainer}>
      <Step1 title='Link' values={values} />
      <Step2 backButton={previousStep} title='Reminder' values={values} />
      <Step3 backButton={previousStep} title='Review' values={values} />
    </div>
  );
};

export default Steps;
