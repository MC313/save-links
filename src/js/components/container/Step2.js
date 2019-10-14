/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import { Field } from "formik";

import { flex, font, margin, width } from "../../styles";
import FormField from "../presentational/FormField";
import FormFieldInput from "../presentational/FormFieldInput";
import FormFieldLabel from "../presentational/FormFieldLabel";
import Step from "../presentational/Step";
import { validatePhone } from "../../utils/validators";

const styles = css`
    margin-bottom: ${margin.large};
    & > div {
      ${flex.row}
      font-size: ${font.medium};
    }
`;

const Step2 = ({ backButton, stepId, title, values }) => {
  const { phone, timeValue } = values;
  return (
    <Step title={title} backButton={backButton}>
      <FormField
        inputType='tel'
        isRequired={false}
        name='phone'
        label='Text a reminder about this link to:'
        placeholder='313-414-2217'
        validate={validatePhone}
      />

      <div css={styles}>
        <FormFieldLabel htmlFor='reminder' text='Send reminder in:' />
        <div id='reminder' style={{ width: width.full }}>
          <FormFieldInput
            name='timeValue'
            style={{ width: "25%" }}
            type='number'
            disabled={!phone}
          />
          <Field
            render={({ field, form }) => {
              return (
                <select
                  name='timeUnit'
                  style={{ marginLeft: "10px", width: "70%" }}
                  disabled={!phone || !timeValue}
                >
                  <option value='minutes'>Minute</option>
                  <option value='hours'>Hours</option>
                  <option value='days'>Days</option>
                </select>
              );
            }}
          />
        </div>
      </div>
    </Step>
  );
};

export default Step2;
