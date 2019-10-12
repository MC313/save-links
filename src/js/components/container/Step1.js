import React, { useContext } from "react";

import { getError } from "../../utils";
import { StoreContext } from "../../store";
import Step from "../presentational/Step";
import FormField from "../presentational/FormField";

const Step1 = ({ backButton, stepId, title }) => {
  const { formData, actions, dispatch } = useContext(StoreContext);

  const onInputBlur = ({ currentTarget }) => {
    dispatch(
      actions.setInputError({
        name: currentTarget.name,
        error: getError(currentTarget),
      })
    );
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    dispatch(actions.updateForm({ ...formData, [name]: { value } }));
  };

  return (
    <Step title={title} backButton={backButton}>
      <FormField
        inputType='text'
        name='name'
        placeholder='React Unit Testing'
        value={formData.name.value}
        onChangeFn={onInputChange}
        onBlurFn={onInputBlur}
        isRequired
      />
      <FormField
        inputType='url'
        name='url'
        placeholder='https://www.reactjs.com'
        value={formData.url.value}
        onChangeFn={onInputChange}
        onBlurFn={onInputBlur}
        isRequired
      />
      <FormField
        inputType='text'
        name='tags'
        placeholder='TDD, unit test, jest, fb'
        value={formData.tags.value}
        onChangeFn={onInputChange}
        isRequired={false}
      />
    </Step>
  );
};

export default Step1;
