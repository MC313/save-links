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
    return (
        <Button
            { ...formal.getSubmitButtonProps() }
            title={ state.submittingForm ? "Submitting......" : "Submit" }
            type="submit"
        />
    );
};