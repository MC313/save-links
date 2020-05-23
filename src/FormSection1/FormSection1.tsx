import React from "react";

import { FormalWebTextFieldEvent } from "@kevinwolf/formal-web";

import Wizard from "../Wizard";
import { FormField } from "../shared/components";
import { useApp } from "../store";

export const FormSectionOne: React.FC<{}> = () => {
    const [, dispatch] = useApp();

    const handleChange = (propName: string) =>
        ({ target }: FormalWebTextFieldEvent) => {
            dispatch.updateFormData({ [propName]: target.value })
        };

    const updateName = handleChange("name")
    const updateUrl = handleChange("url")

    return (
        <React.Fragment>
            <Wizard.Item>
                <FormField
                    onChange={ updateName }
                    label="Link name"
                    name="name"
                    required={ true }
                />
                <FormField
                    onChange={ updateUrl }
                    label="Link url"
                    name="url"
                    required={ true }
                    type="url"
                />
            </Wizard.Item>
        </React.Fragment>
    );
};