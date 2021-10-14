/** @jsx jsx */
import React from 'react';

import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

import { SuccessIcon } from './SuccessIcon';

import {
    colors,
    flex,
    font,
    height,
    margin,
    padding,
    width
} from '../shared/styles';
import { useForm, useWizard } from '../store';
import { Button } from '../shared/components';



export const SuccessOverlay: React.FC<{}> = () => {
    const [, dispatch] = useForm();
    const [, setStep] = useWizard();

    return (
        <StyledOverlay>
            <p aria-live="assertive">Link Saved Successfully</p>
            <SuccessIcon />
            <Button
                name="close overlay"
                title="Close"
                type="button"
                onClick={ () => {
                    setStep(1)
                    dispatch.resetForm()
                } }
            />
        </StyledOverlay>
    );
};

const StyledOverlay = styled.div<StyledOverlayProps>`
    display: flex;
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
        color: ${colors.black};
        background: ${colors.white};
    }
`;

interface StyledOverlayProps {
    //show: boolean;
};