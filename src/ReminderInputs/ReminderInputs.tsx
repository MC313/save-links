import React from "react";

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
import Wizard from "../Wizard";

const StyledFormFieldGroup = styled.div({
    width: "100%",
    marginBottom: margin.medium,
    div: {
        display: "flex",
        flexFlow: "row wrap"
    },
    p: {
        minHeight: "20px",
        height: "20px",
        margin: "5px 0px 0px 0px",
        fontSize: font.medium,
        color: "red"
    }
});

const StyledSelectInput = styled.select({
    flex: 1,
    flexBasis: 265,
    flexShrink: 0,
    height: 45
});

interface FormFieldGroupProps extends Partial<FormalFieldProps>, Partial<FormalWebFieldProps> {
    label?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    validate?: boolean;
};

interface ReminderState {
    timeValue: number;
    timeUnit: string;
};

const TIME_UNIT_OPTS = ["minute", "hour", "day"];

const SelectOptions: React.FC<{ timeValue: number }> = ({ timeValue }) => (
    <React.Fragment>
        {
            TIME_UNIT_OPTS.map((value: string, index: number) =>
                <option key={ index } value={ value }>
                    { timeValue > 1 ? `${value}s` : value }
                </option>
            )
        }
    </React.Fragment>
);

export const ReminderInputs: React.FC<FormFieldGroupProps> = () => {
    const [, dispatch] = useApp();

    const initialState: ReminderState = {
        timeValue: 0,
        timeUnit: TIME_UNIT_OPTS[0]
    };

    const [reminderState, setReminder] = React.useState<ReminderState>(initialState);

    const { timeUnit, timeValue } = reminderState;

    const handleChange = (propName: string) =>
        (timeValue: number, timeUnit: TimeUnit) => {
            dispatch.updateFormData({
                [propName]: toUtcTime(timeValue, timeUnit)
            })
        };

    const onSetReminder = handleChange("reminder");

    const onTimeUnitChange = ({ target: { value } }: FormalWebTextFieldEvent) => {
        setReminder({ ...reminderState, timeUnit: value })
        if (timeValue !== 0) onSetReminder(timeValue, value as TimeUnit)
    };

    const onTimeValueChange = ({ target: { value } }: FormalWebTextFieldEvent) => {
        setReminder({ ...reminderState, timeValue: +value })
        if (+value !== 0) onSetReminder(+value, timeUnit as TimeUnit)
    };


    return (
        <Wizard.Item>
            <StyledFormFieldGroup>
                <FormFieldLabel label="Remind me about this link in" />
                <div>
                    <FormFieldInput
                        id="timeValue"
                        type="number"
                        max={ 24 }
                        maxLength={ 2 }
                        name="name"
                        onChange={ onTimeValueChange }
                        style={ {
                            flex: 1,
                            flexBasis: 100,
                            flexGrow: 1,
                            flexShrink: 0
                        } }
                    />
                    <StyledSelectInput
                        onChange={ onTimeUnitChange }
                        value={ timeUnit }
                    >
                        <SelectOptions timeValue={ timeValue } />
                    </StyledSelectInput>
                </div>
            </StyledFormFieldGroup>
        </Wizard.Item>
    );
};