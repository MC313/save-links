/** @jsx jsx */

import React from 'react';

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { font, flex, radius } from '../../styles/styles';

const styles = css`
  ${flex.center}
  width: 45px;
  height: 45px;
  font-size: ${font.large};
  border-radius: ${radius.round};
`;

const BackButton = ({ className, onClickFn, themeStyles }) => {
    return (
        <button
            type="button"
            css={{ backgroundColor: themeStyles.primaryText }}
            className={className}
            onClick={onClickFn}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
                    fill={themeStyles.secondaryText}
                />
            </svg>
        </button>
    );
};

const StyledBackButton = styled(BackButton)`
  ${styles}
`;

export default StyledBackButton;
