import React from 'react';

const FormField = ({ inputType = 'text', name, elRef, placeholder, stateRef, onChangeFn, isRequired = false }) => {
    const capitalize = (strValue) => {
        const strArray = strValue.split('');
        strArray[0] = strArray[0].toUpperCase();
        return strArray.join('');
    };

    return (
        <div className="flex-column h-100px mgn-b-10">
            <label className="flex-row h-25px font-md" htmlFor={name}>
                {capitalize(name)}&nbsp;
                {isRequired ? <p className="font-md">(required)</p> : ''}
            </label>
            <input
                className="h-50px mgn-b-10 font-md"
                id={`${name}Id`}
                name={name}
                type={inputType}
                value={stateRef}
                ref={elRef}
                placeholder={placeholder}
                onChange={onChangeFn}
                required={isRequired}
                noValidate/>

            <div className="h-25px w-full" />
        </div>
    );
};

export default FormField;
