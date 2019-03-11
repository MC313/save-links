import React from 'react';

import { StoreConsumer } from '../../store';

const FormField = ({ inputType = 'text', name, placeholder, onBlurFn, onChangeFn, isRequired = false }) => {
    const capitalize = (strValue) => {
        const strArray = strValue.split('');
        strArray[0] = strArray[0].toUpperCase();
        return strArray.join('');
    };

    return (
        <StoreConsumer>
            {
                ({ formData }) => {
                    return (
                        <div className="flex-column h-100px mgn-b-10">
                            <label className={`flex-row h-25px font-md ${formData[name].error ? 'error' : ''}`} htmlFor={name}>
                                <p>{capitalize(name)}</p>
                                {isRequired ? <p className="font-md mgn-l-5">(required)</p> : ''}
                            </label>
                            <input
                                className="h-50px mgn-b-10 font-md"
                                id={`${name}Id`}
                                name={name}
                                type={inputType}
                                placeholder={placeholder}
                                onChange={onChangeFn}
                                onBlur={onBlurFn}
                                required={isRequired}
                                noValidate/>

                            <div className="h-25px w-full" />
                        </div>
                    );
                }
            }
        </StoreConsumer>
    );
};

export default FormField;
