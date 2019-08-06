/** @jsx jsx */

import React, { useContext } from 'react';

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import FormField from './FormField';

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
    input {
      width: ${width.full};
      min-height: 40px;
      height: 7vh;
      max-height: ${height.medium};
      padding-left: ${padding.medium};
      border-radius: ${radius.small};
      font-size: ${font.medium};
    }
    p {
        min-height: 30px;
        height: 30px;
        padding: 5px 0px 0px 0px;
        font-size: ${font.small};
    }
  }
`;

const MultiFormField = ({
    inputTypes,
    names,
    label,
    placeholders = [],
    values,
    onBlurFn,
    onChangeFn,
    isRequired = false,
    className
}) => {
    const { formData, theme } = useContext(StoreContext);

    const [type1, type2] = inputTypes;
    const [name1, name2] = names;
    const [placeholder1, placeholder2] = placeholders;
    const [value1, value2] = values;

    const capitalize = (strValue) => {
        const strArray = strValue.split('');
        strArray[0] = strArray[0].toUpperCase();
        return strArray.join('');
    };

    return (
        <div className={className}>
            <label
                css={{
                    color: formData[names[0]].error ? theme.error : theme.primaryText
                }}
                htmlFor={name}
            >
                {capitalize(label)}{' '}
                {isRequired ? '(required)' : ''}
            </label>
            <div>
                <FormField
                    inputType={type1}
                    placeholder={placeholder1}
                    value={value1}
                    onChange={onChangeFn}
                    onBlur={onBlurFn}
                    required={isRequired}
                    noValidate
                />
                <FormField
                    inputType={type2}
                    placeholder={placeholder2}
                    value={value2}
                    onChange={onChangeFn}
                    onBlur={onBlurFn}
                    required={isRequired}
                    noValidate
                />
            </div>
            <p>{formData[name1].error}</p>
        </div>
    );
};

const StyledFormField = styled(MultiFormField)`
  ${styles}
`;

export default StyledFormField;
