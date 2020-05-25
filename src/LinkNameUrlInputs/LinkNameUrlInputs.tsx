import React from "react";

import { FormalWebTextFieldEvent, FormalWebState } from "@kevinwolf/formal-web";

import Wizard from "../Wizard";
import { FormField } from "../shared/components";
import { FormData } from "../shared/types/FormData";
import { useApp } from "../store";

interface LinkNameUrlInputs {
    formal: FormalWebState<FormData>;
};

type SetError = (fieldName: keyof FormData) => void | undefined;

export const LinkNameUrlInputs: React.FC<LinkNameUrlInputs> = ({ formal }) => {
    const [, dispatch] = useApp();

    const handleChange = (propName: string) =>
        ({ target }: FormalWebTextFieldEvent) => {
            dispatch.updateFormData({ [propName]: target.value })
        };

    const updateName = handleChange("name")
    const updateUrl = handleChange("url")

    const setError: SetError = (fieldName: keyof FormData) => {
        if (!formal.getFieldProps(fieldName).error) return;
        const error = { [fieldName]: formal.getFieldProps(fieldName).error };
        formal.setErrors({ ...formal.errors, ...error })
    };

    return (
        <Wizard.Item>
            <FormField
                { ...formal.getFieldProps("name") }
                onBlur={ () => setError("name") }
                label="Link name"
                required={ true }
            />
            <FormField
                { ...formal.getFieldProps("url") }
                onBlur={ () => setError("url") }
                label="Link url"
                required={ true }
                type="url"
            />
        </Wizard.Item>
    );
};