import React from "react";

import { ReactComponent as LoadingIcon } from "../assets/loading.svg";
import { Button } from "../../shared/components";
import { useForm } from "../../store";

export const SubmitButton: React.FC<{}> = () => {
    const [{ status }] = useForm();
    return (
        <Button
            style={ { width: "92%", height: "44px" } }
            title={ status === "SUBMITTING" ? "Submitting......" : "Submit" }
            type="submit"
        />
    );
};