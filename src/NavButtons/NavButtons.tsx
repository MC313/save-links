import React from "react";

import { BackButton } from "./BackButton";
import { ContinueButton } from "./ContinueButton";

export const NavButtons: React.FC<{}> = () => {

    return (
        <div style={ { display: "flex" } }>
            <BackButton />
            <ContinueButton />
        </div>
    );
};