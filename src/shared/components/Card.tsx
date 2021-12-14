import React from "react";

import styled from "@emotion/styled";

import { radius } from "../styles";

const StyledCard = styled.div(({ styles }: StyledCardProps) => ({
    width: "100%",
    maxWidth: "350px",
    height: "430px",
    position: "relative",
    display: "block",
    overflow: "hidden",
    margin: "0px auto",
    padding: "15px 30px",
    border: "1px solid rgba(162, 136, 166, 0.26)",
    borderBottomColor: "rgba(162, 136, 166, 0.26)",
    borderRadius: radius.medium,
    boxShadow: "5px 5px 25px 0 rgba(46, 61, 73, 0.3)",
    backgroundColor: "white",
    ...styles
}));

export const Card: React.FC<CardProps> = ({ children, styles }) => (
    <StyledCard className="card" styles={ styles }>
        { children }
    </StyledCard>
);

type StyledCardProps = {
    styles: {}
};

interface CardProps {
    children: any;
    styles: {}
};