import React from "react";

import { ReactComponent as ContinueIcon } from "./arrow-east.svg";
import { NavButton } from "./NavButton";

export const ContinueButton: React.FC<{}> = () => {
    const onClick = () => { console.log("Hello World") }
    return (
        <NavButton onClick={ onClick }>
            { <ContinueIcon /> }
        </NavButton>
    );
};