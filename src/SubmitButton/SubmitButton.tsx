import React from "react";

import { FormalWebState } from "@kevinwolf/formal-web";

import { Button } from "../shared/components";
import { FormData } from "../shared/types/FormData";
import { useApp } from "../store";

interface ButtonProps {
    formal: FormalWebState<FormData>;
};

export const SubmitButton: React.FC<ButtonProps> = ({ formal }) => {
    const [state] = useApp();
    const isDisabled = !formal.validate || formal.isSubmitting || state.formError;

    return (
        <Button
            { ...formal.getSubmitButtonProps() }
            disabled={ isDisabled }
            title="Submit"
            type="submit"
        />
    );
};