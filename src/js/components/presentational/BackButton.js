/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";

import { ArrowLeftIcon } from "../../constants/svg-icons";
import { font, radius } from "../../styles";

const styles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "45px",
  height: "45px",
  fontSize: font.large,
  borderRadius: radius.round,
};

const BackButton = ({ onClickFn, themeStyles }) => {
  const { primaryText, secondaryText } = themeStyles;

  return (
    <button
      type='button'
      css={{ ...styles, backgroundColor: primaryText }}
      onClick={onClickFn}
    >
      <ArrowLeftIcon color={secondaryText} />
    </button>
  );
};

export default BackButton;
