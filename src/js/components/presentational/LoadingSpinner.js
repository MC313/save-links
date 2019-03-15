import React from "react";

const spinner = {
    width: "85px",
    display: "flex",
    justifyContent: "space-between",
    margin: "0px auto"
};

const bounce = {
    width: "18px",
    height: "18px",
    backgroundColor: "#fff",
    borderRadius: "100%",
    display: "inline-block",
    WebkitAnimation: "sk-bouncedelay 1.4s infinite ease-in-out both",
    animation: "sk-bouncedelay 1.4s infinite ease-in-out both"
};

const bounce1 = {
    ...bounce,
    WebkitAnimationDelay: "-0.32s",
    animationDelay: "-0.32s"
};

const bounce2 = {
    ...bounce,
    WebkitAnimationDelay: "-0.16s",
    animationDelay: "-0.16s"
};

const animations = `
    @-webkit-keyframes sk-bouncedelay {
        0%, 80%, 100% { -webkit-transform: scale(0.5) }
        40% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bouncedelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        } 40% {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
        }
    }
`;

document.querySelector('style').append(animations);

const LoadingSpinner = () => (
    <div style={spinner}>
        <div style={bounce1} />
        <div style={bounce2} />
        <div style={bounce} />
    </div>
);

export default LoadingSpinner;
