/** @jsx jsx */

import React from "react";

import { css, jsx } from "@emotion/core";

const withStyles = ({ styles }) => (BaseComponent) => (props) => (
  <BaseComponent {...props} css={{ ...styles }} />
);

export default withStyles;
