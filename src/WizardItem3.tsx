import React from "react";

import styled from "@emotion/styled";

import { FormFieldLabel, FormFieldInput } from "./shared/components";
import { font, margin } from "./shared/styles";
import { useForm } from "./store";
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

const TIME_UNIT_OPTS = ["minute", "hour", "day"];

const SelectOptions: React.FC<{ timeValue: number }> = ({ timeValue }) => (
    <React.Fragment>
        {
            TIME_UNIT_OPTS.map((timeUnit: string, index: number) =>
                <option key={ index } value={ timeUnit }>
                    { timeValue > 1 ? `${timeUnit}s` : timeUnit }
                </option>
            )
        }
    </React.Fragment>
);

export const WizardItem3: React.FC<WizardItemProps> = () => {
    const [{ fields: { reminder } }, dispatch] = useForm();

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
                        onChange={ dispatch.setInput("reminder") }
                        required={ false }
                        style={ {
                            flexBasis: 50,
                            marginRight: 15
                        } }
                        type="number"
                        value={ reminder?.value }
                    />
                    <StyledSelectInput
                        onChange={ dispatch.setInput("reminder")["value"] }
                    >
                        <SelectOptions timeValue={ reminder?.value || 0 } />
                    </StyledSelectInput>
                </div>
            </StyledFormFieldGroup>
        </WizardItem>
    );
};