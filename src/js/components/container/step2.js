import React, { useContext } from 'react';
import { StoreContext } from '../../store';

import Step from '../presentational/Step';
import FormField from '../presentational/FormField';

const Step2 = ({ backButton, stepId, title }) => {
    const { formData, actions, dispatch } = useContext(StoreContext);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        dispatch(actions.updateForm({ ...formData, [name]: { value } }));
    };

    const nextStep = (stepId) => {
        dispatch(actions.navigateForward(stepId));
    };

    return (
        <Step title={title} backButton={backButton}>
            <div className="step__content">
                <FormField
                    inputType="tel"
                    name="phone"
                    label="Text a reminder about this article to:"
                    placeholder={'React Unit Testing'}
                    value={formData.phone.value}
                    onChangeFn={onInputChange}
                    isRequired={false} />

                <div className="form-field form-field--reminder">
                    <label className="form-field__label" htmlFor="reminder">Send reminder in:</label>
                    <div id="reminder">
                        <input className="form-field__input"
                            name="timeValue"
                            type="number"
                            value={formData.timeValue.value}
                            onChange={onInputChange} />
                        <select className="form-field__select"
                            name="timeUnit"
                            value={formData.timeUnit.value}
                            onChange={onInputChange}>
                            <option value="minutes">Minutes</option>
                            <option value="hours">Hours</option>
                            <option value="days">Days</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="btn--primary" onClick={() => nextStep(stepId)}>
                Next Step
            </button>
        </Step>
    );
};

export default Step2;
