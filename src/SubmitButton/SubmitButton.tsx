import React from "react";

import { FormalWebState } from "@kevinwolf/formal-web";

import { Button } from "../shared/components";
import { FormData } from "../shared/types/FormData";

interface ButtonProps {
    formal: FormalWebState<FormData>;
};

export const SubmitButton: React.FC<ButtonProps> = ({ formal }) => {
    console.log("SUBMIT: ", formal.getSubmitButtonProps())

    return (
        <Button
            { ...formal.getSubmitButtonProps() }

            title="Submit"
            type="submit"
        >
            { formal.isSubmitted ? "Submitting......" : "Submit" }
        </Button>
    );
};