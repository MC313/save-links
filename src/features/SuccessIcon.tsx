import React from 'react';

import { css, keyframes } from '@emotion/react';

export const SuccessIcon = () => {
    return (
        <svg
            width="150px" height="150px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMinYMin meet"
        >
            <circle style={ animation } cx="50" cy="50" r="40" strokeWidth="3" strokeLinecap="round" stroke="white" fill="none"
                strokeDasharray="250" strokeDashoffset="250" />
            <svg style={ animation } xmlns="http://www.w3.org/2000/svg" width="250px" height="250px" x="20" y="20"
                viewBox="0 0 100 100" fill="none">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"
                    strokeWidth="1" stroke="white" fill="white" strokeDasharray="200" strokeDashoffset="200" />
            </svg>
        </svg>
    )
};

const animation = {
    animation: "draw 1s ease-in both"
};


const drawAnimation = `
    @keyframe draw {
        to { stroke-dashoffset: 0 }
    }

    @-webkit-keyframes draw {
        to { stroke-dashoffset: 0 }
    }
`;

const styleEl = document.createElement('style');
styleEl.append(drawAnimation);
const headEl = document.querySelector('head');
headEl && headEl.append(styleEl);
