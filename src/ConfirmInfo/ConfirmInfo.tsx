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

const InfoElement: React.FC<InfoElementProps> = ({ value = "-", label }) => {
    return (
        <div style={ infoStyles }>
            <label style={ { color: "#909090" } }>{ label }</label>
            <p style={ { color: "black" } }>{ value }</p>
        </div>
    );
};

export const ConfirmInfo: React.FC<{}> = () => {
    const [state] = useApp();
    const { formData } = state;

    return (
        <Wizard.Item>
            <div>
                {
                    Object.entries(formData).map(([key, value], index) => {
                        return (
                            <InfoElement
                                label={ capitalize(key) }
                                value={ value }
                                key={ index }
                            />
                        )
                    })
                }
            </div>
        </Wizard.Item>
    );
};