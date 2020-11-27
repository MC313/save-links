import React from "react";

import { FormalWebTextFieldEvent, FormalWebState } from "@kevinwolf/formal-web";

import { FormField } from "../shared/components";
import { FormData } from "../shared/types/FormData";
import { useApp } from "../store";

interface LinkNameUrlInputs {
    formal: FormalWebState<FormData>;
};

export const LinkDescriptionTagsInputs: React.FC<LinkNameUrlInputs> = ({
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
        <React.Fragment>
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
        </React.Fragment>
    );
};