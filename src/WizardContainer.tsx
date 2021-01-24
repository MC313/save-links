import React from "react";

import styled from "@emotion/styled";

import { useWizard } from "./store";

interface StyledListItemProps {
    style?: React.CSSProperties;
};

const StyledListWrapper = styled.div({
    marginBottom: 25,
    overflow: "hidden",
    width: "100%"
});

const StyledList = styled.ul<{ step: number }>(({ step }) => ({
    margin: "0px",
    padding: "0px",
    display: "flex",
    flexDirection: "row",
    transform: `translateX(-${100 * (step - 1)}%)`,
    transition: "transform 0.4s linear"
}));

const StyledListItem = styled.li<StyledListItemProps>(({ style }) => ({
    ...style,
    minWidth: "100%",
    height: "325px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: 20
}));

export interface WizardItemProps { };

export const WizardItem: React.FC<{}> = ({ children }) => (
    <StyledListItem>
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

