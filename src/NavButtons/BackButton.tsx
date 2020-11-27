import React from "react";

import { ReactComponent as BackIcon } from "./arrow-west.svg";
import { NavButton, NavButtonProps } from "./NavButton";


export const BackButton: React.FC<NavButtonProps> = ({ onClick }) => (
    <NavButton onClick={ onClick }>
        { <BackIcon /> }
    </NavButton>
);