import React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { flex, radius } from '../../styles/styles';

const styles = css`
  ${flex.center}
  input {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 60px;
    height: 26px;
    display: block;
    position: relative;
    border-radius: ${radius.large};
  }
  label::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: ${radius.round};
    transform: translateX(0%);
    background-color: rgba(255, 255, 255, 1);
    transition: transform 0.4s ease;
  }
  input:checked + label {
    background-color: rgba(154, 103, 234, 1);
  }
  input:checked + label::after {
    transform: translateX(170%);
  }
`;

const Toggle = ({ className, text, onToggleChange, themeStyles, value }) => {
    return (
        <div className={className}>
            <p style={{ color: themeStyles.primaryText }}>{text}</p>
            <input
                type="checkbox"
                id="switch"
                checked={value}
                onChange={onToggleChange}
            />
            <label
                htmlFor="switch"
                style={{ backgroundColor: themeStyles.toggleBackground }}
            />
        </div>
    );
};

const styledToggle = styled(Toggle)`
  ${styles}
`;

export default styledToggle;
