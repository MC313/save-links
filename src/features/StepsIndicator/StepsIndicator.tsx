import React from "react";

import styled from "@emotion/styled";

import { useWizard } from "../../store";

const StyledText = styled.p({
    color: "#808080",
    margin: "5px 5px",
    textAlign: "right",
    width: "94%",
})

export const StepsIndicator: React.FC<{}> = () => {
    const [{ step, totalSteps }] = useWizard();

    return (
        <StyledText>
            Step { step } of { totalSteps }
        </StyledText>
    );
};