import React, { useContext } from 'react';

import { StoreContext } from '../../store';

const FormField = ({ inputType = 'text', name, label, placeholder, onBlurFn, onChangeFn, isRequired = false }) => {
    const { formData } = useContext(StoreContext);

    const capitalize = (strValue) => {
        const strArray = strValue.split('');
        strArray[0] = strArray[0].toUpperCase();
        return strArray.join('');
    };

    return (
        <div className="form-field">
            <label className={`form-field__label ${formData[name].error ? 'form-field__label--error' : ''}`} htmlFor={name}>
                {label ? capitalize(label) : capitalize(name)} { isRequired ? '(required)' : ''}
            </label>
            <input
                className="form-field__input"
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
};

export default FormField;
