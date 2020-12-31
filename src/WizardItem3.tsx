import React from "react";

import styled from "@emotion/styled";

import { FormalFieldProps } from '@kevinwolf/formal';
import { FormalWebFieldProps } from "@kevinwolf/formal-web";

import { font, margin } from "./shared/styles";
import { FormFieldLabel, FormFieldInput } from "./shared/components";
import { WizardItem, WizardItemProps } from "./WizardContainer";

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

interface FormFieldGroupProps extends Partial<FormalFieldProps>, Partial<FormalWebFieldProps> {
    label?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    validate?: boolean;
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

export const WizardItem3: React.FC<WizardItemProps> = ({
    formal
}) => {
    return (
        <WizardItem>
            <StyledFormFieldGroup>
                <FormFieldLabel label="Remind me about this link in" />
                <div>
                    <FormFieldInput
                        { ...formal.getFieldProps("reminderValue") }
                        id="reminderValue"
                        type="number"
                        min={ 0 }
                        max={ 24 }
                        maxLength={ 2 }
                        name="reminderValue"
                        style={ {
                            flexBasis: 50,
                            marginRight: 15
                        } }
                    />
                    <StyledSelectInput
                        { ...formal.getFieldProps("reminderUnit") }
                    >
                        <SelectOptions timeValue={
                            formal.getFieldProps("reminderValue").value || 0
                        } />
                    </StyledSelectInput>
                </div>
            </StyledFormFieldGroup>
        </WizardItem>
    );
};