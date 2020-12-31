import React from "react";

import { FormalWebState } from "@kevinwolf/formal-web";

import { ReactComponent as LoadingIcon } from "./loading.svg";
import { Button } from "../shared/components";
import { FormData } from "../shared/types";
import { useApp } from "../store";

interface ButtonProps {
    formal: FormalWebState<FormData>;
};

export const SubmitButton: React.FC<ButtonProps> = ({ formal }) => {
    const [state] = useApp();
    return (
        <Button
            { ...formal.getSubmitButtonProps() }
            style={ { width: "6rem", height: "42px" } }
            title={ state.submittingForm ? "Submitting......" : "Submit" }
            type="submit"
        />
    );
};