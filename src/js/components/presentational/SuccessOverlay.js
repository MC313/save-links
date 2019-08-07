/** @jsx jsx */
import React, { useContext } from 'react';

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { StoreContext } from '../../store';

import { flex, font, height, margin, padding, width } from '../../styles/styles';

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: ${width.full};
    height: ${height.full};
    ${flex.center};
    flex-direction: column;
    padding: ${padding.medium};
    display: ${({ show }) => show ? 'flex' : 'none'};
    background-color: ${({ themeStyles }) => themeStyles.toggleBackground};

    p {
      font-size: ${font.medium};
      padding: ${padding.medium};
    }

    button {
        width: 250px;
        height: ${height.medium};
        margin-top: ${margin.medium}; 
    }
`;

const SuccessOverlay = ({ show, themeStyles }) => {
    const { actions, dispatch } = useContext(StoreContext);
    const resetApp = () => dispatch(actions.resetState());

    return (
        <Overlay show={show} themeStyles={themeStyles}>
            <p>Link Saved Successfully</p>
            <button onClick={resetApp}>
                Save Another Link
            </button>
        </Overlay>
    );
};

export default SuccessOverlay;
