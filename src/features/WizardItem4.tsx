import React from "react";

import styled from "@emotion/styled";

import { capitalize } from "../shared/utils";
import { useForm } from "../store";
import { WizardItem, WizardItemProps } from "./WizardContainer";

const StyledDiv = styled.div({
    label: {
        fontSize: "0.95rem",
        color: "#909090"
    },
    p: {
        color: "black",
        margin: "5px 0px 15px 0px"
    },
});

interface InfoElementProps {
    label: string;
    value?: string | number;
};

interface ReminderInfoElementProps {
    reminderUnit: string | undefined;
    reminderValue: number | undefined;
};

const InfoElement: React.FC<InfoElementProps> = ({ value, label }) => {
    return (
        <StyledDiv>
            <label>{ label }</label>
            <p>{ value || "-" }</p>
        </StyledDiv>
    );
};

const ReminderInfoElement: React.FC<ReminderInfoElementProps> = ({
    reminderUnit,
    reminderValue
}) => {
    const formatValue = (unit: string = "", value: number = 0) => {
        if (!unit || !value) return "-";
        return `${value} ${value > 1 ? unit + "s" : unit} from now`;
    };

    return (
        <InfoElement
            label="Reminder"
            value={ formatValue(reminderUnit, reminderValue) }
        />
    );
};

export const WizardItem4: React.FC<WizardItemProps> = () => {
    const [{ fields }] = useForm();
    const { reminderUnit, reminderValue, ...otherFields } = fields;

    return (
        <WizardItem>
            {
                Object.entries(otherFields).map(([key, value], index) => {
                    return (
                        <InfoElement
                            label={ capitalize(key) }
                            value={ value }
                            key={ index }
                        />
                    )
                })
            }
            <ReminderInfoElement
                reminderUnit={ reminderUnit }
                reminderValue={ reminderValue }
            />
        </WizardItem>
    );
};