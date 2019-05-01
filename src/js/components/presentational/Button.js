/** @jsx jsx */

import React from 'react';

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { button } from '../../styles/styles';

const Button = ({ className, disabled, label, onClickFn, themeStyles }) => {
    return (
        <button
            type="button"
            css={{
                backgroundColor: themeStyles && themeStyles.primaryText,
                color: themeStyles && themeStyles.secondaryText
            }}
            className={className}
            disabled={disabled}
            onClick={onClickFn}
        >
            {label}
        </button>
    );
};

const StyledButton = styled(Button)`
  ${button}
`;
export default StyledButton;
