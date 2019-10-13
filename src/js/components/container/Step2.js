/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";
import { Field } from "formik";
import { flex, font, margin, width } from "../../styles/styles";
import Step from "../presentational/Step";
import FormField from "../presentational/FormField";
import FormFieldInput from "../presentational/FormFieldInput";
import FormFieldLabel from "../presentational/FormFieldLabel";
import { validatePhone } from "../../utils/validators";

const styles = css`
    margin-bottom: ${margin.large};
    & > div {
      ${flex.row}
      font-size: ${font.medium};
    }
`;

const Step2 = ({ stepId, title, values }) => {
  const { phone, timeUnit, timeValue } = values;

  return (
    <Step title={title} backButton>
      <FormField
        inputType='tel'
        isRequired={false}
        name='phone'
        label='Text a reminder about this link to:'
        placeholder='313-414-2217'
        value={phone}
        validate={validatePhone}
      />

      <div css={styles}>
        <FormFieldLabel htmlFor='reminder' text='Send reminder in:' />
        <div id='reminder' style={{ width: width.full }}>
          <FormFieldInput
            name='timeValue'
            style={{ width: "25%" }}
            type='number'
            value={timeValue}
            disabled={!phone}
          />
          <Field
            name='timeUnit'
            render={({ field, form }) => (
              <select
                style={{ marginLeft: "10px", width: "70%" }}
                value={timeUnit}
                disabled={!phone || !timeValue}
              >
                <option value='minutes'>Minute</option>
                <option value='hours'>Hours</option>
                <option value='days'>Days</option>
              </select>
            )}
          />
        </div>
      </div>
    </Step>
  );
};

export default Step2;
