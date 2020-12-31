import React from "react";

import { font, margin } from "./shared/styles";
import { capitalize } from "./shared/utils";
import { WizardItemProps } from "./WizardContainer";

const infoStyles = {
    marginBottom: margin.small,
    label: {
        color: "inherit",
        marginBottom: 5,
        fontFamily: 'Arial',
        fontWeight: 600,
        letterSpacing: "1px",
    },
    p: {
        color: "inherit",
        fontSize: font.medium,
    },
};

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
        <div style={ infoStyles }>
            <label style={ { color: "#909090" } }>{ label }</label>
            <p style={ { color: "black", margin: "5px 0px 20px 0px" } }>
                { value || "-" }
            </p>
        </div>
    );
};

const ReminderInfoElement: React.FC<ReminderInfoElementProps> = ({
    reminderUnit,
    reminderValue
}) => {
    const formatValue = (unit: string | undefined, value: number | undefined) => {
        if (!unit || !value) return "-";
        return `${reminderValue} ${reminderUnit}s from now`;
    };

    return (
        <div style={ infoStyles }>
            <label style={ { color: "#909090" } }>Reminder</label>
            <p style={ { color: "black", margin: "5px 0px 15px 0px" } }>
                { formatValue(reminderUnit, reminderValue) }
            </p>
        </div>
    );
};

export const WizardItem4: React.FC<WizardItemProps> = ({ formal }) => {
    const { reminderUnit, reminderValue, ...otherFormData } = formal.values;

    return (
        <React.Fragment>
            <div>
                {
                    Object.entries(otherFormData).map(([key, value], index) => {
                        return (
                            <React.Fragment key={ index }>
                                {
                                    <InfoElement
                                        label={ capitalize(key) }
                                        value={ value }
                                    />
                                }
                            </React.Fragment>
                        )
                    })
                }
                <ReminderInfoElement
                    reminderUnit={ reminderUnit }
                    reminderValue={ reminderValue }
                />
            </div>
        </React.Fragment>
    );
};