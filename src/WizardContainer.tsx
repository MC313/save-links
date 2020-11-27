import React from "react";

import styled from "@emotion/styled";
import { useWizard } from "./store";

const StyledList = styled.ul<{ step: number }>(({ step }) => ({
    margin: "0px",
    padding: "0px",
    display: "flex",
    flexDirection: "row",
    transform: `translateX(-${100 * (step - 1)}%)`,
    transition: "transform 0.4s linear"
}));

const StyledListItem = styled.li<{ style?: React.CSSProperties }>(({ style }) => ({
    ...style,
    minWidth: "100%",
    height: "325px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: 20
}));

export const WizardItem: React.FC<{}> = ({ children }) => (
    <StyledListItem>
        { children }
    </StyledListItem>
);

export const WizardContainer: React.FC<{}> = ({ children }) => {
    const [{ step }] = useWizard();
    const updatedChildren = React.Children.map(children, (child) => {
        return (
            <StyledListItem>
                { child }
            </StyledListItem>
        )
    });

    return (
        <div style={ { overflow: "hidden", width: "100%" } }>
            <StyledList step={ step }>
                { updatedChildren }
            </StyledList>
        </div>
    );
};

