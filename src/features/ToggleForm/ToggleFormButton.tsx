import React from "react";

import { Button } from "../../shared/components";
import { radius } from "../../shared/styles";
import { useApp } from "../../store/AppProvider";
import { FormStatus } from "../../store/state";
import { PlusIcon } from "./PlusIcon";

export const ToggleFormButton: React.FC<{}> = () => {
    const [{ formStatus }, dispatch] = useApp();
    const isActive = formStatus === FormStatus.Active;

    const toggleFormStatus = () => {
        const _formStatus = isActive ? "Inactive" : "Active";
        dispatch.setFormStatus(FormStatus[_formStatus]);
    };

    return (
        <Button
            styles={ btnStyles }
            onClick={ () => toggleFormStatus() }
            aria-label={ isActive ? 'Hide form' : 'Show form' }
        >
            <PlusIcon styles={ transformIcon(isActive) } />
        </Button>
    );
};

const btnStyles = {
    position: "absolute" as "absolute",
    width: "70px",
    height: "70px",
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: radius.round,
    margin: "auto",
    transform: "translateY(-35%)",
    zIndex: 20
};

const transformIcon = (isActive: boolean) => ({
    transform: `rotate(${isActive ? 45 : 0}deg)`,
    transition: "transform 0.2s linear"
});

