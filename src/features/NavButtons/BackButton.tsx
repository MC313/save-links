import React from "react";

import BackIcon from "./arrow-west.svg";
import { NavButton } from "./NavButton";
import { useWizard } from "../../store";


export const BackButton: React.FC<{}> = () => {
    const [{ step }, setStep] = useWizard();

    return (
        <NavButton
            onClick={ () => setStep(step - 1) }
            style={ styles }
        >
            { <BackIcon /> }
        </NavButton>
    )
};

const styles = {
    background: "white",
    border: "2px solid black",
    color: "black"
}