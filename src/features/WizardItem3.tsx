import React from "react";

import styled from "@emotion/styled";

import { capitalize } from "../shared/utils";
import { useForm } from "../store";
import { WizardItem } from "./WizardContainer";

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

export const WizardItem3: React.FC<{}> = () => {
    const [{ fields }] = useForm();
    const { reminderUnit, reminderValue, ...otherFields } = fields;
    console.log("UNIT: ", reminderUnit)
    console.log("VALUE: ", reminderValue)
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

const ReminderInfoElement: React.FC<ReminderInfoElementProps> = ({
    reminderUnit,
    reminderValue
}) => {
    return (
        <InfoElement
            label="Reminder"
            value={ formatReminderText(reminderUnit, reminderValue) }
        />
    );
};

const InfoElement: React.FC<InfoElementProps> = ({ label, value }) => {
    return (
        <StyledDiv>
            <label>{ label }</label>
            <p>{ value || "-" }</p>
        </StyledDiv>
    );
};

const formatReminderText = (unit: string = "", value: number = 0) => {
    if (!unit || !value) return "-";
    return `${value} ${value > 1 ? unit + "s" : unit} from now`;
};

interface InfoElementProps {
    label: string;
    value?: string | number;
};

interface ReminderInfoElementProps {
    reminderUnit: string | undefined;
    reminderValue: number | undefined;
};