import React, { useContext } from 'react';

import { getError } from '../../utils';
import { StoreContext } from '../../store';
import Button from '../presentational/Button';
import Step from '../presentational/Step';
import FormField from '../presentational/FormField';

const Step1 = ({ backButton, className, stepId, title }) => {
    const { formData, actions, dispatch, theme } = useContext(StoreContext);

    const onInputBlur = ({ currentTarget }) => {
        dispatch(actions.setInputError({
            name: currentTarget.name,
            error: getError(currentTarget)
        }));
    };

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        dispatch(actions.updateForm({ ...formData, [name]: { value } }));
    };

    // Extract this into a reusable function
    const nextStep = (stepId) => {
        dispatch(actions.navigateForward(stepId));
    };

    return (
        <Step title={title} backButton={backButton}>
            <div>
                <FormField
                    inputType="text"
                    name="name"
                    placeholder={'React Unit Testing'}
                    value={formData.name.value}
                    onChangeFn={onInputChange}
                    onBlurFn={onInputBlur}
                    isRequired/>

                <FormField
                    inputType="url"
                    name="url"
                    placeholder={'https://www.reactjs.com'}
                    value={formData.url.value}
                    onChangeFn={onInputChange}
                    onBlurFn={onInputBlur}
                    isRequired/>

                <FormField
                    inputType="text"
                    name="tags"
                    placeholder={'TDD, unit test, jest, fb'}
                    value={formData.tags.value}
                    onChangeFn={onInputChange}
                    isRequired={false}/>
            </div>

            <Button
                className={className}
                disabled={!formData.name.value || !formData.url.value}
                label={'Next Step'}
                onClickFn={() => nextStep(stepId)}
                themeStyles={{ ...theme }}
            />
        </Step>
    );
};

export default Step1;
