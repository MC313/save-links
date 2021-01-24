import React from "react";

import styled from "@emotion/styled";

import { BackButton } from "./BackButton";
import { ContinueButton } from "./ContinueButton";
import { SubmitButton } from "./SubmitButton";
import { useWizard } from "../store";

const StyledButtonContainer = styled.div({
    display: "flex",
    flexBasis: 55,
    alignItems: "center"
});

export const NavButtons: React.FC<{}> = () => {
    const [{ step, totalSteps }] = useWizard();
    return (
        <StyledButtonContainer>
            { step > 1 && <BackButton /> }
            {
                step === totalSteps ?
                    <SubmitButton /> : <ContinueButton />
            }
        </StyledButtonContainer>
    );
};