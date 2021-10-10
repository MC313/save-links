import React from "react";

import styled from "@emotion/styled";

import { useWizard } from "../store";
import { flex } from "../shared/styles";

export const WizardItem: React.FC<{ center?: boolean }> = ({ children, center }) => (
    <StyledListItem style={ (center ? { justifyContent: "center" } : {}) }>
        { children }
    </StyledListItem>
);

export const WizardContainer: React.FC<{}> = ({ children }) => {
    const [{ step }] = useWizard();

    return (
        <StyledListWrapper>
            <StyledList step={ step }>
                { children }
            </StyledList>
        </StyledListWrapper>
    );
};

const StyledListWrapper = styled.div({
    overflow: "hidden",
    width: "100%"
});

const StyledList = styled.ul<{ step: number }>(({ step }) => ({
    display: "flex",
    flexDirection: "row",
    margin: "0px",
    padding: "0px",
    transform: `translateX(-${100 * (step - 1)}%)`,
    transition: "transform 0.4s linear"
}));

const StyledListItem = styled.li<StyleProp>(({ style }) => ({
    display: "flex",
    flexDirection: "column",
    minWidth: "100%",
    height: "290px",
    margin: "auto",
    marginTop: 15,
    ...style,
}));

interface StyleProp {
    style?: React.CSSProperties;
};

