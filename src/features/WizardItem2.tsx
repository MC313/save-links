import React from "react";

import styled from "@emotion/styled";

import { FormFieldLabel, FormFieldInput } from "../shared/components";
import { flex, form, margin } from "../shared/styles";
import { useForm } from "../store";
import { WizardItem } from "./WizardContainer";

const TIME_UNIT_OPTIONS = ["minute", "hour", "day"];

export const WizardItem2: React.FC<{}> = () => {
    const [{ fields }, dispatch] = useForm();
    const { reminderValue } = fields;

    return (
        <WizardItem center>
            <StyledFormFieldGroup>
                <FormFieldLabel
                    label="Send me a remind me about this link in"
                />
                <div>
                    <FormFieldInput
                        id="reminderValue"
                        min={ 0 }
                        max={ 24 }
                        name="reminderValue"
                        onChange={ dispatch.setInput("reminderValue") }
                        required={ false }
                        style={ {
                            flex: "1 0 50px",
                            marginRight: 15
                        } }
                        type="number"
                        value={ reminderValue }
                    />
                    <Dropdown
                        onChange={ dispatch.setInput("reminderUnit") }
                        options={ TIME_UNIT_OPTIONS }
                    />
                </div>
            </StyledFormFieldGroup>
        </WizardItem>
    );
};

const StyledFormFieldGroup = styled.div({
    width: "98%",
    margin: "0 auto",
    marginBottom: margin.medium,
    div: {
        display: "flex",
        flexFlow: "row wrap"
    },
    p: {
        minHeight: "20px",
        height: "20px",
        margin: "5px 0px 0px 0px",
        color: "red"
    }
});

const StyledSelectInput = styled.select(form.input, { flex: "3 0 175px" });

const Dropdown: React.FC<DropdownProps> = ({ onChange, options }) => {
    const [{ fields }] = useForm();
    const { reminderValue } = fields;

    const formatTimeUnit = (timeUnit: string, timeValue: number = 0) =>
        timeValue > 1 ? `${timeUnit}s` : timeUnit;

    return (
        <StyledSelectInput onChange={ onChange }>
            {
                options.map((value: string, index: number) =>
                    <option
                        key={ index }
                        value={ value }
                    >
                        { formatTimeUnit(value, reminderValue) }
                    </option>
                )
            }
        </StyledSelectInput>
    )
};

interface DropdownProps {
    options: string[];
    onChange: () => void;
}