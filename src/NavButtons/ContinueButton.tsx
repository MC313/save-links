import React from "react";

import { ReactComponent as ContinueIcon } from "./arrow-east.svg";
import { NavButton, NavButtonProps } from "./NavButton";

export const ContinueButton: React.FC<NavButtonProps> = ({ onClick }) => (
    <NavButton onClick={ onClick }>
        { <ContinueIcon /> }
    </NavButton>
);