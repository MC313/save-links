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
    const [{ formError }] = useApp();

    console.log("FORM ERROR: ", formError)

    return (
        <Button
            disabled={ formError }
            title="Continue"
            type="button"
            onClick={ nextStep }
        />
    );
};