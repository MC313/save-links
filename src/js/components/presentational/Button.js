/** @jsx jsx */

import React, { useContext } from "react";

import { jsx } from "@emotion/core";

import { button } from "../../styles/styles";
import { StoreContext } from "../../store";
import withStyles from "../hoc/WithStyles";

const btn = ({ onClickFn, text, ...props }) =>
  onClickFn ? (
    <button onClick={onClickFn} {...props}>
      {text}
    </button>
  ) : (
    <button {...props}>{text}</button>
  );

const Button = (props) => {
  const { theme } = useContext(StoreContext);

  const themeStyles = {
    ...button,
    backgroundColor: theme.primaryText,
    color: theme.secondaryText,
    maxWidth: "358px",
    margin: "0px 13px",
    "&:disabled": {
      opacity: "0.7",
    },
  };

  const styles = withStyles({ styles: themeStyles });

  const ButtonWithStyles = styles(btn);

  return <ButtonWithStyles {...props} />;
};

export default Button;
