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

const styles = css`
    margin-bottom: 40px;
    label {
      ${flex.row};
      font-size: ${font.medium};
      margin-right: ${margin.small};
      margin-bottom: ${margin.extraSmall};
      &--error {
        color: red;
        color: var(--error, red);
      }
    }
    input {
      width: ${width.full};
      min-height: 40px;
      height: 7vh;
      max-height: ${height.medium};
      padding-left: ${padding.medium};
      border-radius: ${radius.small};
      font-size: ${font.medium};
    }
  }
`;
// Should className be passed down eventhough all components have access to it

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

    return (
        <div className={className}>
            <label
                style={{
                    color: formData[name].error ? theme.error : theme.primaryText
                }}
                htmlFor={name}
            >
                {label ? capitalize(label) : capitalize(name)}{' '}
                {isRequired ? '(required)' : ''}
            </label>
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
        </div>
    );
};

const StyledFormField = styled(FormField)`
  ${styles}
`;

export default StyledFormField;
