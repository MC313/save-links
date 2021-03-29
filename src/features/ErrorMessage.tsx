import React from "react";

import styled from "@emotion/styled";

import { colors, margin } from "../shared/styles";
import { useForm } from "../store/FormProvider";

export const ErrorMessage: React.FC<{}> = () => {
    const [{ error }] = useForm();

    return (
        <StyledSpan>
            { error }
        </StyledSpan>
    );
};

const StyledSpan = styled.span`
    color: ${colors.red};
    height: 20px;
    margin: ${margin.small} 0px;
`;