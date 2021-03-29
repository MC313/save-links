import React from "react";

import { ReactComponent as ContinueIcon } from "./arrow-east.svg";
import { useForm, useWizard } from "../../store";
import { NavButton } from "./NavButton";

export const ContinueButton: React.FC<{}> = () => {
    const [{ fields }] = useForm();
    const [{ step }, setStep] = useWizard();

    return (
        <NavButton
            disabled={ !!!fields.url }
            onClick={ () => setStep(step + 1) }
        >
            { <ContinueIcon /> }
        </NavButton>
    )
};