import React from "react";

import BackIcon from "./arrow-west.svg";
import { useWizard } from "../../store";


export const BackButton: React.FC<{}> = () => {
    const [{ step }, setStep] = useWizard();

    return (
        <button
            name="back button"
            type="button"
            onClick={ () => setStep(step - 1) }
            style={ styles }
        >
            { <BackIcon /> }
        </button>
    )
};

const styles = {
    display: "flex",
    background: "white",
    border: "0px",
    padding: "0px",
    color: "black"
}