import React from "react";

import { FormalWebTextFieldEvent } from "@kevinwolf/formal-web";

import { FormField } from "./shared/components";
import { useApp } from "./store";
import { WizardItem, WizardItemProps } from "./WizardContainer";


export const WizardItem2: React.FC<WizardItemProps> = ({
    formal
}) => {

    const [, dispatch] = useApp();

    const handleChange = (propName: string) =>
        ({ target }: FormalWebTextFieldEvent) => {
            dispatch.updateFormData({ [propName]: target.value });
        };

    const updateDescription = handleChange("description");
    const updateTags = handleChange("tags");

    return (
        <WizardItem>
            <FormField
                { ...formal.getFieldProps("description") }
                label="Description"
                name="description"
                placeholder="Description of the saved link"
                required={ false }
            />
            <FormField
                { ...formal.getFieldProps("tags") }
                label="Tags"
                name="tags"
                placeholder="Separate, Each, Tag, With, A, Comma"
                required={ false }
            />
        </WizardItem>
    );
};