/** @jsx jsx */

import React, { useContext } from "react";

import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

import BackButton from "../presentational/BackButton";
import { flex, font, width } from "../../styles/styles";
import { StoreContext } from "../../store";

const styles = css`
  position: relative;
  ${flex.column};
  min-width: ${width.full};
  width: 388px;
  padding: 0px 15px;
  header {
    ${flex.row};
    ${flex.center};
    width: ${width.full};
    height: 50px;
    text-align: center;
    margin-bottom: 25px;
  }
  header h2 {
    flex: 1;
    font-size: ${font.large};
  }
  header button {
    position: absolute;
    left: 0px;
  }
  & > div {
    flex: 1;
  }
`;

const Step = ({ backButton, children, className, title }) => {
  const { theme } = useContext(StoreContext);

  return (
    <section className={className}>
      <header>
        {backButton && (
          <BackButton themeStyles={{ ...theme }} onClickFn={backButton} />
        )}
        <h2 css={{ color: theme.primaryText }}>{title}</h2>
      </header>
      {children}
    </section>
  );
};

const StyledStep = styled(Step)`
  ${styles}
`;

export default StyledStep;
