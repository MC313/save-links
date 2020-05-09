import React from "react";

import styled from "@emotion/styled";

import { radius } from "../styles";

const Card = styled.div({
    width: "70%",
    height: "auto",
    maxWidth: "450px",
    position: "relative",
    display: "block",
    overflow: "hidden",
    margin: "0px auto",
    padding: "30px 30px 0px 30px",
    border: "1px solid rgba(162, 136, 166, 0.26)",
    borderBottomColor: "rgba(162, 136, 166, 0.26)",
    borderRadius: radius.medium,
    boxShadow: "5px 5px 25px 0 rgba(46, 61, 73, 0.3)",
    backgroundColor: "white"
});

export default Card;