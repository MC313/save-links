/** @jsx jsx */

import React, { useContext } from "react";

import { css, jsx } from "@emotion/core";

import { radius } from "../../styles/styles";

import BasicForm from "./BasicForm";
import StepIndicator from "./StepIndicator";
import SuccessOverlay from "../presentational/SuccessOverlay";
import { StoreContext } from "../../store";

const styles = css`
  width: 80%;
  height: auto;
  max-width: 450px;
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0px auto;
  padding: 15px 30px 0px 30px;
  border: 1px solid rgba(162, 136, 166, 0.26);
  border-bottom-color: rgba(162, 136, 166, 0.26);
  border-radius: ${radius.medium};
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
`;

const Wizard = () => {
  const { currentStep, showOverlay, theme } = useContext(StoreContext);
  const wizardStyles = css`
    background-color: ${theme.cardBackground};
    ${styles}
  `;
  return (
    <div css={wizardStyles}>
      <SuccessOverlay themeStyles={theme} show={showOverlay} />
      <BasicForm />
      <StepIndicator currentStep={currentStep} />
    </div>
  );
};

export default Wizard;
