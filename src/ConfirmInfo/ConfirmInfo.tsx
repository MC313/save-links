import React from "react";

import Wizard from "../Wizard";
import { useApp } from "../store";
import { font, margin } from "../shared/styles";
import { capitalize } from "../shared/utils";

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
    value: string | number | undefined;
};

interface ReminderInfoElementProps {
    reminderUnit: string | undefined;
    reminderValue: number | undefined;
};

const InfoElement: React.FC<InfoElementProps> = ({ value = "-", label }) => {
    return (
        <div style={ infoStyles }>
            <label style={ { color: "#909090" } }>{ label }</label>
            <p style={ { color: "black" } }>{ value }</p>
        </div>
    );
};

const ReminderInfoElement: React.FC<ReminderInfoElementProps> = ({
    reminderUnit,
    reminderValue
}) => {
    const formatValue = (unit: string | undefined, value: number | undefined) => {
        if (!unit || !value) return " - ";
        return `${reminderValue} ${reminderUnit} from now.`;
    };

    return (
        <div style={ infoStyles }>
            <label style={ { color: "#909090" } }>Reminder</label>
            <p style={ { color: "black" } }>
                { formatValue(reminderUnit, reminderValue) }
            </p>
        </div>
    );
};

export const ConfirmInfo: React.FC<{}> = () => {
    const [state] = useApp();
    const { reminderUnit, reminderValue, ...otherFormData } = state.formData;

    return (
        <Wizard.Item>
            <div>
                {
                    Object.entries(otherFormData).map(([key, value], index) => {
                        return (
                            <React.Fragment>
                                {
                                    <InfoElement
                                        label={ capitalize(key) }
                                        value={ value }
                                        key={ index }
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
        </Wizard.Item>
    );
};