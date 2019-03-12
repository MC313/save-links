import React, { useContext } from 'react';
import { StoreContext } from '../../store';

import Step from '../presentational/Step';

const Step2 = ({ backButton, stepId, title }) => {
    const { formData, actions, dispatch } = useContext(StoreContext);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        dispatch(actions.updateForm({ ...formData, [name]: { value } }));
    };

    const nextStep = (stepId) => {
        dispatch(actions.navigateForward(stepId));
        //dispatch(actions.updateForm({...formData}));
    };

    return (
        <Step title={title} backButton={backButton}>
            <div className="flex-column h-100px mgn-b-10">
                <label className="flex-row h-25px font-md" htmlFor="phone">
                    Text a reminder about this article to:
                </label>
                <input className="h-50px mgn-b-10 font-md"
                    id="phoneId"
                    name="phone"
                    type="tel"
                    placeholder="313-123-4567"
                    value={formData.phone.value}
                    onChange={onInputChange}
                    noValidate/>
            </div>

            <div className="flex-column h-100px">
                <label className="h-25 mgn-b-10 font-md" htmlFor="reminder">Send reminder in:</label>
                <div className="flex-row" id="reminder">
                    <input className="w-25 h-50px mgn-b-10 font-md"
                        name="timeValue"
                        type="number"
                        value={formData.timeValue.value}
                        onChange={onInputChange} />
                    <select className="w-75 h-50px font-md"
                        name="timeUnit"
                        value={formData.timeUnit.value}
                        onChange={onInputChange}>
                        <option value="minutes">Minutes</option>
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
                    </select>
                </div>
            </div>
            <button className="w-full h-50px bg-primary radius-sm" onClick={() => nextStep(stepId)}>
                Next Step
            </button>
        </Step>
    );
};

export default Step2;
