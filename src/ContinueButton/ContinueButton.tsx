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
    const [{ inputError }, dispatch] = useApp();

    const validateInputs = async () => {
        try {
            await formal.validate()
            dispatch.setInputError(false)
            return true;
        } catch (error) {
            dispatch.setInputError(true)
            return false;
        }
    };

    const onNextStep = async () => {
        const valid: boolean = await validateInputs();
        valid && nextStep();
    };

    return (
        <Button
            disabled={ inputError }
            title="Continue"
            type="button"
            onClick={ onNextStep }
        />
    );
};