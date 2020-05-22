/** @jsx jsx */

import React, { ChangeEvent } from "react";

import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { FormalFieldProps } from '@kevinwolf/formal';
import { FormalWebFieldProps, FormalWebTextFieldEvent } from "@kevinwolf/formal-web";

import { font, margin } from "../shared/styles";
import { FormFieldInput, FormFieldInputProps } from "../shared/components";
import FormFieldLabel from "../shared/components/FormFieldLabel";

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

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export const Reminder: React.FC<FormFieldGroupProps> = ({
    children,
    error,
    label,
    name = "",
    onChange,
    placeholder,
    required = false,
    type = "text",
    validate = false,
    ...props
}) => {
    const [inputValue, setInputValue] = React.useState({});

    const handleValueInput = (event: FormalWebTextFieldEvent) => {
        setInputValue({ value: event.target.value })
        onChange && onChange(event)
    };

    const handleUnitInput = (event: FormalWebTextFieldEvent) => {
        setInputValue({ unit: event.target.value })
        onChange && onChange(event)
    };

    return (
        <StyledFormFieldGroup>
            <FormFieldLabel text={ label } />
            <div>
                <FormFieldInput
                    id="timeValue"
                    name={ name }
                    onChange={ handleValueInput }
                />
                <FormFieldInput
                    id="timeUnit"
                    name={ name }
                    onChange={ handleUnitInput }
                />
            </div>
        </StyledFormFieldGroup>
    );
};