import React from "react";

import styled from "@emotion/styled";

import { BackButton } from "./BackButton";
import { ContinueButton } from "./ContinueButton";
import { SubmitButton } from "./SubmitButton";
import { useWizard } from "../../store";

const StyledButtonContainer = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 5px",
    "button:last-child": {
        marginTop: "10px"
    }
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