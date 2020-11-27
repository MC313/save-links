import React from "react";

import { FormalWebState } from "@kevinwolf/formal-web";

import { FormField } from "../shared/components";
import { FormData } from "../shared/types/FormData";
import { useApp } from "../store";

interface LinkNameUrlInputs {
    formal: FormalWebState<FormData>;
};

export const LinkNameUrlInputs: React.FC<LinkNameUrlInputs> = ({ formal }) => {
    const [, dispatch] = useApp();

    const showError = () => {
        try {
            formal.validate()
            dispatch.setInputError(false)
        } catch (error) {
            console.log("Input values are invalid.")
            dispatch.setInputError(true)
        }
    }

    return (
        <React.Fragment>
            <FormField
                { ...formal.getFieldProps("name") }
                onBlur={ showError }
                label="Link name"
                placeholder="React Testing"
                required={ true }
            />
            <FormField
                { ...formal.getFieldProps("url") }
                onBlur={ showError }
                label="Link url"
                placeholder="https://testing-library.com/docs/"
                required={ true }
                type="url"
            />
        </React.Fragment>
    );
};