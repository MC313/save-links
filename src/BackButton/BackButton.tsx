import React from 'react';

import styled from '@emotion/styled';

import { flex } from "../shared/styles";
import { ReactComponent as BackIcon } from "./back-icon.svg";

const StyledButton = styled.button({
    width: 65,
    height: 55,
    display: "flex",
    alignItems: "center",
    lineHeight: 0,
    marginRight: "auto",
    padding: 0,
    borderColor: "transparent",
    background: "transparent",
    color: "black"
});

export const BackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {

    return (
        <StyledButton onClick={ onClick } title="Go back" >
            { <BackIcon /> }
        </StyledButton>
    );
};