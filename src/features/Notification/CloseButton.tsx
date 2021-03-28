import React from "react";
import { colors } from "../../shared/styles";

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => (
    <button style={ buttonStyles } onClick={ onClick }>
        &times;
    </button>
);

interface CloseButtonProps {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const buttonStyles = {
    width: 35,
    height: 35,
    position: 'absolute',
    top: 0,
    right: 0,
    transform: "translate(10px, -15px)",
    borderRadius: "50%",
    border: "1px solid",
    fontSize: 30,
    color: colors.white,
    background: "#000",
    "&:hover": {
        cursor: "pointer"
    }
} as React.CSSProperties;

