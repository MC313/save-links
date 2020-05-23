import React from "react";

import { font, margin } from "../shared/styles";
import { Inputs } from "../shared/types/Inputs";
import { useApp } from "../store";

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
    value: Inputs[keyof Inputs];
};

const InfoElement: React.FC<InfoElementProps> = ({ value, label }) => {
    return (
        <div style={ infoStyles }>
            <label style={ { color: "black" } }>{ label }</label>
            <p style={ { color: "#333" } }>{ value || "-" }</p>
        </div>
    );
};

const ConfirmInfo: React.FC<{ inputs: Inputs }> = ({ inputs }) => {
    const [state] = useApp();
    console.log("APP STATE: ", state)
    return (
        <div>
            {
                Object.entries(inputs).map(([key, value], index) =>
                    <InfoElement label={ key } value={ value } key={ index } />
                )
            }
        </div>
    );
}

export default ConfirmInfo;