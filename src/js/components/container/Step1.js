import React, { useContext } from 'react';

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { hasError } from '../../utils';
import { StoreContext } from '../../store';
import Button from '../presentational/Button';
import Step from '../presentational/Step';
import FormField from '../presentational/FormField';

const Step1 = ({ backButton, stepId, title, className }) => {
    const { formData, actions, dispatch } = useContext(StoreContext);

    const onInputBlur = ({ currentTarget }) => {
        dispatch(actions.setInputError({
            name: currentTarget.name,
            errorValue: hasError(currentTarget) && hasError(currentTarget).value
        }));
    };

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        dispatch(actions.updateForm({ ...formData, [name]: { value } }));
    };

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
                    isRequired />

                <FormField
                    inputType="url"
                    name="url"
                    placeholder={'https://www.reactjs.com'}
                    value={formData.url.value}
                    onChangeFn={onInputChange}
                    onBlurFn={onInputBlur}
                    isRequired />

                <FormField
                    inputType="text"
                    name="tags"
                    placeholder={'TDD, unit test, jest, fb'}
                    value={formData.tags.value}
                    onChangeFn={onInputChange}
                    isRequired={false} />
            </div>

            <Button className={className} label={'Next Step'} onClickFn={(stepId) => nextStep} />
        </Step>
    );
};

export default Step1;
