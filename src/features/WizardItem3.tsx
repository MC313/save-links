import React from "react";

import styled from "@emotion/styled";

import { colors, font } from "../shared/styles";
import { capitalize } from "../shared/utils";
import { useForm } from "../store";
import { WizardItem } from "./WizardContainer";



export const WizardItem3: React.FC<{}> = () => {
    const [{ fields }] = useForm();
    const { reminderUnit, reminderValue, ...otherFields } = fields;

    return (
        <WizardItem scroll>
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
}) => (
    <InfoElement
        label="Reminder"
        value={ formatReminderText(reminderUnit, reminderValue) }
    />
);

const InfoElement: React.FC<InfoElementProps> = ({ label, value }) => {
    return (
        <StyledDiv>
            <label>{ label }</label>
            <p>{ value || "-" }</p>
        </StyledDiv>
    );
};

const StyledDiv = styled.div({
    label: {
        fontSize: font.small,
        color: "#909090"
    },
    p: {
        fontSize: font.large,
        margin: "5px 0px 15px 0px",
        color: colors.black
    },
});

const formatReminderText = (unit: string = "", value: number = 0) => {
    if (!unit || !value) return undefined;
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