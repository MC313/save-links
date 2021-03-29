/** @jsx jsx */
import React from 'react';

import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

import {
    colors,
    flex,
    font,
    height,
    margin,
    padding,
    width
} from '../shared/styles';
import { useForm } from '../store/FormProvider';



export const SuccessOverlay: React.FC<{}> = () => {
    const [{ status }, dispatch] = useForm();

    return (
        <StyledOverlay show={ status === "SUCCESS" }>
            <p>Link Saved Successfully</p>
            <button onClick={ dispatch.resetForm }>
                Save Another Link
            </button>
        </StyledOverlay>
    );
};

const StyledOverlay = styled.div<StyledOverlayProps>`
display: ${({ show }) => show ? 'flex' : 'none'};
visibility: ${({ show }) => show ? 'visible' : 'hidden'};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: ${width.full};
    height: 100%;
    ${flex.center};
    flex-direction: column;
    background-color: ${colors.black};
    p {
      color: #ffffff;
      font-size: ${font.medium};
      padding: ${padding.medium};
    }
    button {
        width: 250px;
        height: ${height.medium};
        margin-top: ${margin.medium}; 
    }
`;

interface StyledOverlayProps {
    show: boolean;
};