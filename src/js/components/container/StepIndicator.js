import React, { useContext } from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { flex, height, radius, width } from '../../styles/styles';
import { StoreContext } from '../../store';

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

const _setActiveIndicator = (stepId, bgColor, activeBgColor) =>
    [...Array(3)].map((_, index) => {
        if (index + 1 === stepId) {
            return <li className={'active'} key={index} />;
        }
        return <li key={index} />;
    });

const StepIndicator = ({ className }) => {
    const { currentStep, theme } = useContext(StoreContext);
    return <ul className={className}>{_setActiveIndicator(currentStep)}</ul>;
};

const StyledStepIndicator = styled(StepIndicator)`
  ${styles}
`;
export default StyledStepIndicator;
