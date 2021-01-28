import React from "react";

import styled from "@emotion/styled";

import { FormFieldLabel, FormFieldInput } from "./shared/components";
import { font, margin } from "./shared/styles";
import { useForm } from "./store";
import { WizardItem, WizardItemProps } from "./WizardContainer";

interface DropdownProps {
    options: string[];
    onChange: () => void;
}

const StyledFormFieldGroup = styled.div({
    width: "98%",
    margin: "0 auto",
    marginBottom: margin.medium,
    div: {
        display: "flex",
        flexFlow: "row"
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
    height: 45
});

const TIME_UNIT_OPTIONS = ["minute", "hour", "day"];

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

export const WizardItem3: React.FC<WizardItemProps> = () => {
    const [{ fields }, dispatch] = useForm();
    const { reminderValue } = fields;

    return (
        <WizardItem>
            <StyledFormFieldGroup>
                <FormFieldLabel label="Remind me about this link in" />
                <div>
                    <FormFieldInput
                        id="reminderValue"
                        min={ 0 }
                        max={ 24 }
                        name="reminderValue"
                        onChange={ dispatch.setInput("reminderValue") }
                        required={ false }
                        style={ {
                            flexBasis: 50,
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