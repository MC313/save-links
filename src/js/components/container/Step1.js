import React from "react";

import Step from "../presentational/Step";
import FormField from "../presentational/FormField";
import { validateTitle, validateUrl } from "../../utils/validators";

const Step1 = ({ backButton, stepId, title }) => {
  return (
    <Step title={title} backButton={backButton}>
      <FormField
        inputType='text'
        isRequired={true}
        name='title'
        placeholder='React Unit Testing'
        validate={validateTitle}
      />
      <FormField
        inputType='url'
        isRequired={true}
        name='url'
        placeholder='https://www.reactjs.com'
        validate={validateUrl}
      />
      <FormField
        inputType='text'
        isRequired={false}
        name='tags'
        placeholder='TDD, unit test, jest, fb'
      />
    </Step>
  );
};

export default Step1;
