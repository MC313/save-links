import React from "react";

import { Button } from "../shared/components";
import { FormData } from "../shared/types/FormData";
import { FormalWebState } from "@kevinwolf/formal-web";
import { useApp } from "../store";

interface ButtonProps {
    formal: FormalWebState<FormData>;
};

interface NextStepButtonProps extends ButtonProps {
    nextStep: () => void;
};

export const ContinueButton: React.FC<NextStepButtonProps> = ({
    formal,
    nextStep
}) => {
    const [state] = useApp();
    const isDisabled = !formal.validate || formal.isSubmitting || !!Object.values(formal.errors).length;

    return (
        <Button
            disabled={ isDisabled }
            title="Continue"
            type="button"
            onClick={ () => nextStep() }
        />
    );
};