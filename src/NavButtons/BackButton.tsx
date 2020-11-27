import React from "react";

import { ReactComponent as BackIcon } from "./arrow-west.svg";
import { NavButton } from "./NavButton";

export const BackButton: React.FC<{}> = () => {
    const onClick = () => { console.log("Going Back") }
    return (
        <NavButton onClick={ onClick }>
            { <BackIcon /> }
        </NavButton>
    );
};