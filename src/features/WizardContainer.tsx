import React from "react";

import { css } from "@emotion/css";
import styled from "@emotion/styled";

import { useWizard } from "../store";

export const WizardItem: React.FC<WizardItemProps> = ({
    children,
    center,
    scroll
}) => {
    const styles = css`
        justify-content: ${center ? 'center' : 'inherit'};
        overflow-y: ${scroll ? 'scroll' : 'hidden'}
    `;

    return (
        <StyledListItem className={ styles }>
            { children }
        </StyledListItem>
    )
};

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
    margin: "15px 0px",
    ...style,
}));

interface WizardItemProps {
    center?: boolean;
    scroll?: boolean;
};
interface StyleProp {
    style?: React.CSSProperties;
};

