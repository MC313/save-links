/** @jsx jsx */

import React, { useContext } from 'react';

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import {
    flex,
    font,
    height,
    margin,
    padding,
    radius,
    width
} from '../../styles/styles';
import { StoreContext } from '../../store';
import WithStyles from '../presentational/WithStyles';
import FormFieldInput from '../presentational/FormFieldInput';

const styles = css`
    margin-bottom: 10px;
    label {
      ${flex.row};
      font-size: ${font.medium};
      margin-right: ${margin.small};
      margin-bottom: ${margin.extraSmall};
      &--error {
        color: red;
      }
    }
    p {
        min-height: 30px;
        height: 30px;
        padding: 5px 0px 0px 0px;
        font-size: ${font.small};
    }
  }
`;
// Should className be passed down eventhough all components have access to it
// Refactor label and input into their own components and create error message component

const FormField = ({
    inputType = 'text',
    name,
    label,
    placeholder,
    onBlurFn,
    onChangeFn,
    isRequired = false,
    className
}) => {
    const { formData, theme } = useContext(StoreContext);

    const capitalize = (strValue) => {
        const strArray = strValue.split('');
        strArray[0] = strArray[0].toUpperCase();
        return strArray.join('');
    };

    const Input = () => (
        <input
            id={`${name}Id`}
            name={name}
            type={inputType}
            placeholder={placeholder}
            onChange={onChangeFn}
            onBlur={onBlurFn}
            required={isRequired}
            noValidate
        />
    );
    
    const StyledInput = WithStyles(Input);

    return (
        <div className={className}>
            <label
                css={{
                    color: formData[name].error ? theme.error : theme.primaryText
                }}
                htmlFor={name}
            >
                {label ? capitalize(label) : capitalize(name)}{' '}
                {isRequired ? '(required)' : ''}
            </label>
            <FormFieldInput
                id={`${name}Id`}
                name={name}
                onChange={onChangeFn}
                onBlur={onBlurFn}
                placeholder={placeholder}
                required={isRequired} 
                type={inputType} />
            
            <p>{formData[name].error}</p>
        </div>
    );
};

const StyledFormField = styled(FormField)`
  ${styles}
`;

export default StyledFormField;
