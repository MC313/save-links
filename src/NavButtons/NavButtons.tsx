import React from "react";
import { flex } from "../shared/styles";

import { BackButton } from "./BackButton";
import { ContinueButton } from "./ContinueButton";

export const NavButtons: React.FC<{}> = () => {

    return (
        <div style={ { display: "flex" } }>
            <BackButton />
            <ContinueButton />
        </div>
    );
};


// step === totalSteps ?
// <SubmitButton formal={ formal } />
// :
// <ContinueButton
//     formal={ formal }
//     nextStep={
//         () => goToStep(step + 1)
//     }
// />