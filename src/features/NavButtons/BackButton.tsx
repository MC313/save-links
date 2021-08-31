import React from "react";

import BackIcon from "./arrow-west.svg";
import { useWizard } from "../../store";


export const BackButton: React.FC<{}> = () => {
    const [{ step }, setStep] = useWizard();

    return (
        <button
            type="button"
            onClick={ () => setStep(step - 1) }
            style={ styles }
        >
            { <BackIcon /> }
        </button>
    )
};

const styles = {
    background: "white",
    border: "0px",
    color: "black"
}