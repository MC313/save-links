/** @jsx jsx */

import React, { useContext } from 'react';

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { StoreContext } from '../../store';
import { button } from '../../styles/styles';

const Button = ({ className, label, onClickFn, themeStyles }) => {
    // Move this up into a HOC
    const { theme } = useContext(StoreContext);

    const styles = {

    };
    return (
        <button
            css={{
                backgroundColor: theme.primaryText,
                color: theme.secondaryText
            }}
            className={className}
            type="button"
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
