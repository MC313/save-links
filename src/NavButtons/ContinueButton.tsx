import React from "react";

import { ReactComponent as ContinueIcon } from "./arrow-east.svg";
import { useWizard } from "../store";
import { NavButton } from "./NavButton";

export const ContinueButton: React.FC<{}> = () => {
    const [{ step }, setStep] = useWizard();

    return (
        <NavButton onClick={ () => setStep(step + 1) }>
            { <ContinueIcon /> }
        </NavButton>
    )
};