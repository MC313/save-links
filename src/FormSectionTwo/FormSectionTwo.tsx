import React from "react";

import { FormalWebTextFieldEvent } from "@kevinwolf/formal-web";

import Wizard from "../Wizard";
import { FormField } from "../shared/components";
import { useApp } from "../store";

export const FormSectionTwo: React.FC<{}> = () => {

    const [, dispatch] = useApp();

    const handleChange = (propName: string) =>
        ({ target }: FormalWebTextFieldEvent) => {
            dispatch.updateFormData({ [propName]: target.value })
        };

    const updateDescription = handleChange("description")
    const updateTags = handleChange("tags")

    return (
        <React.Fragment>
            <Wizard.Item>
                <FormField
                    onChange={ updateDescription }
                    label="Description"
                    name="description"
                    required={ false }
                />
                <FormField
                    onChange={ updateTags }
                    label="Tags"
                    name="tags"
                    required={ false }
                />
            </Wizard.Item>
        </React.Fragment>
    );
};