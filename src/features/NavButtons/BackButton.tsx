import React from "react";

import { useWizard } from "../../store";
import { ReactComponent as BackIcon } from "./arrow-west.svg";
import { NavButton } from "./NavButton";


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