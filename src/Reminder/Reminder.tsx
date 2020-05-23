/** @jsx jsx */

import React, { ChangeEvent } from "react";

import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import { FormalFieldProps } from '@kevinwolf/formal';
import {
    FormalWebFieldProps,
    FormalWebTextFieldEvent
} from "@kevinwolf/formal-web";

import { font, margin } from "../shared/styles";
import { FormFieldLabel, FormFieldInput } from "../shared/components";
import { useApp } from "../store";
import { toUtcTime, TimeUnit } from "./utils";

const StyledFormFieldGroup = styled.div({
    width: "100%",
    marginBottom: margin.medium,
    div: {
        display: "flex",
        flexDirection: "row",
        overflow: "hidden"
    },
    p: {
        minHeight: "20px",
        height: "20px",
        margin: "5px 0px 0px 0px",
        fontSize: font.medium,
        color: "red"
    }
});

interface FormFieldGroupProps extends Partial<FormalFieldProps>, Partial<FormalWebFieldProps> {
    label?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    validate?: boolean;
};

const TIME_UNIT_OPTS = ["minute", "hour", "day"];

export const Reminder: React.FC<FormFieldGroupProps> = () => {
    const [state, dispatch] = useApp();

    const [_timeUnit, setTimeUnit] = React.useState<string>(TIME_UNIT_OPTS[0]);
    const [_timeValue, setTimeValue] = React.useState<number>(0);

    const handleChange = (propName: string) =>
        (timeValue: number, timeUnit: TimeUnit) => {
            dispatch.updateFormData({
                [propName]: toUtcTime(timeValue, timeUnit)
            })
        };

    const onSetReminder = handleChange("reminder")

    const onTimeUnitChange = (timeUnit: string) => {
        setTimeUnit(timeUnit)
        if (_timeValue !== 0) onSetReminder(_timeValue, timeUnit as TimeUnit)
    };

    const onTimeValueChange = (timeValue: number) => {
        setTimeValue(timeValue)
        if (timeValue !== 0) onSetReminder(timeValue, _timeUnit as TimeUnit)
    };


    return (
        <StyledFormFieldGroup>
            <FormFieldLabel label="Remind me about this link in" />
            <div style={ { display: "flex", flexFlow: "row wrap", justifyContent: "space-between" } }>
                <FormFieldInput
                    id="timeValue"
                    type="number"
                    max={ 24 }
                    maxLength={ 2 }
                    name="name"
                    onChange={
                        ({ target }: FormalWebTextFieldEvent) => onTimeValueChange(+target.value)
                    }
                    style={ {
                        flex: 1,
                        flexBasis: 100,
                        flexGrow: 1,
                        flexShrink: 0
                    } }
                />
                <select
                    onChange={ ({ target }) => onTimeUnitChange(target.value) }
                    style={ {
                        flex: 1,
                        flexBasis: 265,
                        flexShrink: 0,
                        height: 45
                    } }
                    value={ _timeUnit }
                >
                    {
                        TIME_UNIT_OPTS.map((value: string, index: number) =>
                            <option
                                key={ index }
                                value={ value }
                            >
                                { _timeValue > 1 ? `${value}s` : value }
                            </option>
                        )
                    }
                </select>
            </div>
        </StyledFormFieldGroup>
    );
};