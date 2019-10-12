/** @jsx jsx */

import React, { useContext } from "react";

import { css, jsx } from "@emotion/core";

import { StoreContext } from "../../store";
import {
  flex,
  font,
  height,
  margin,
  padding,
  width,
} from "../../styles/styles";
import Step from "../presentational/Step";
import FormField from "../presentational/FormField";
import FormFieldInput from "../presentational/FormFieldInput";
import FormFieldLabel from "../presentational/FormFieldLabel";

const styles = css`
    margin-bottom: ${margin.large};
    label {
      ${flex.row}
      margin-bottom: ${margin.extraSmall};
    }
    & > div {
      ${flex.row}
      font-size: ${font.medium};
    }
    select {
        width: ${width.full};
    }
`;

const Step2 = ({ stepId, title }) => {
  const { actions, dispatch, formData } = useContext(StoreContext);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    dispatch(actions.updateForm({ ...formData, [name]: { value } }));
  };

  const pluralize = (number, text) => {
    return number === 1 ? text : `${text}s`;
  };

  return (
    <Step title={title} backButton>
      <FormField
        inputType='tel'
        name='phone'
        label='Text a reminder about this link to:'
        placeholder='313-414-2217'
        value={formData.phone.value}
        onChangeFn={onInputChange}
        isRequired={false}
      />

      <div css={styles}>
        <FormFieldLabel htmlFor='reminder' text='Send reminder in:' />
        <div id='reminder'>
          <FormFieldInput
            name='timeValue'
            type='number'
            min='0'
            value={formData.timeValue.value}
            onChange={onInputChange}
          />
          <select
            name='timeUnit'
            value={formData.timeUnit.value}
            onChange={onInputChange}
          >
            <option value='minutes'>Minute</option>
            <option value='hours'>Hours</option>
            <option value='days'>Days</option>
          </select>
        </div>
      </div>
    </Step>
  );
};

export default Step2;
