import React, { useContext } from 'react';
import { StoreContext } from '../../store';

import Step from '../presentational/Step';
import FormField from '../presentational/FormField';

const Step1 = ({ backButton, stepId, title }) => {
    const { actions, dispatch } = useContext(StoreContext);

    let formData = {};

    const onInputChange = ({ name, value }) => {
        formData = { ...formData, [name]: value };
    };

    const nextStep = (stepId) => {
        dispatch(actions.navigateForward(stepId));
        dispatch(actions.updateForm(formData));
    };

    return (
        <Step title={title} backButton={backButton}>
            <FormField
                inputType="text"
                name="name"
                placeholder={'React Unit Test'}
                value={formData.name}
                onChangeFn={(event) => onInputChange(event.target)}
                isRequired />

            <FormField
                inputType="url"
                name="url"
                placeholder={'https://www.reactjs.com'}
                value={formData.url}
                onChangeFn={(event) => onInputChange(event.target)}
                isRequired/>

            <FormField
                inputType="text"
                name="tags"
                placeholder={'TDD, unit test, jest, fb'}
                value={formData.tags}
                onChangeFn={(event) => onInputChange(event.target)}
                isRequired={false}/>

            <button className="w-full h-50px bg-primary radius-sm" onClick={() => nextStep(stepId)}>
                Next Step
            </button>
        </Step>
    );
};

export default Step1;
