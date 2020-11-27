import React from "react";

import { useApp, useWizard } from "../store";
import { BackButton } from "./BackButton";
import { ContinueButton } from "./ContinueButton";

export const NavButtons: React.FC<{}> = () => {
    const [{ step }, setStep] = useWizard();
    const [appState] = useApp();
    const nextStep = () => {
        if (appState.formError) return;
        setStep(step + 1);
    }
    return (
        <div style={ { display: "flex" } }>
            <BackButton onClick={ () => setStep(step - 1) } />
            <ContinueButton onClick={ nextStep } />
        </div>
    );
};