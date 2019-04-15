/** @jsx jsx */

import React, { useContext } from 'react';

import { css, jsx } from '@emotion/core';

import { StoreContext } from '../../store';
import { flex, font, height, margin, padding, width } from '../../styles/styles';
import Button from '../presentational/Button';
import Step from '../presentational/Step';
import FormField from '../presentational/FormField';

const styles = css`
    margin-bottom: ${margin.large};
    label {
      ${flex.row}
      margin-bottom: ${margin.extraSmall};
    }
    & > div {
      ${flex.row}
      font-size: ${font.medium};
    }
    input {
        margin-right: ${margin.small};
        min-width: ${width.small};
        min-height: 40px;
        height: 7vh;
        max-height: ${height.medium};
        padding-left: ${padding.small};
    }
    select {
        width: ${width.full};
    }
`;

const Step2 = ({ className, stepId, title }) => {
    const { actions, dispatch, formData, theme } = useContext(StoreContext);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        dispatch(actions.updateForm({ ...formData, [name]: { value } }));
    };

    const nextStep = (stepId) => {
        dispatch(actions.navigateForward(stepId));
    };

    return (
        <Step title={title} backButton>
            <div>
                <FormField
                    inputType="tel"
                    name="phone"
                    label="Text a reminder about this article to:"
                    placeholder={'313-414-2217'}
                    value={formData.phone.value}
                    onChangeFn={onInputChange}
                    isRequired={false}
                />

                <div css={styles}>
                    <label css={{ color: theme.primaryText }} htmlFor="reminder">Send reminder in:</label>
                    <div id="reminder">
                        <input
                            name="timeValue"
                            type="number"
                            value={formData.timeValue.value}
                            onChange={onInputChange}
                        />
                        <select
                            name="timeUnit"
                            value={formData.timeUnit.value}
                            onChange={onInputChange}
                        >
                            <option value="minutes">Minutes</option>
                            <option value="hours">Hours</option>
                            <option value="days">Days</option>
                        </select>
                    </div>
                </div>
            </div>
            <Button
                className={className}
                label={'Next Step'}
                onClickFn={() => nextStep(stepId)}
            />
        </Step>
    );
};

export default Step2;
