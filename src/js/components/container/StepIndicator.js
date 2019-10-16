/** @jsx jsx */

import React from 'react';

import { css, jsx } from '@emotion/core';

import { flex, height, radius, width } from '../../styles/styles';

const styles = css`
  width: ${width.full};
  height: ${height.medium};
  ${flex.row}
  align-items: center;
  justify-content: space-evenly;
  li {
    width: 12px;
    height: 12px;
    border-radius: ${radius.round};
    border: 2px solid;
    border-color: rgba(54, 5, 104, 1);
    background-color: rgba(255, 255, 255, 1);
    transition: background-color 0.4s ease;
  }
  li.active {
    background-color: rgba(54, 5, 104, 1);
  }
`;

const setActiveIndicator = (stepId) =>
    [...Array(3)].map((_, index) => {
        if (index + 1 === stepId) {
            return <li className='active' key={index} />;
        }
        return <li key={index} />;
    });

const StepIndicator = ({ currentStep }) => {
    return <ul css={styles}>{setActiveIndicator(currentStep)}</ul>;
};

export default StepIndicator;
