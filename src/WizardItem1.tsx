import React from "react";

import { WizardItem, WizardItemProps } from "./WizardContainer";
import { FormField } from "./shared/components";
import { useApp } from "./store";

export const WizardItem1: React.FC<WizardItemProps> = ({ formal }) => {
    const [, dispatch] = useApp();

    const showError = () => {
        try {
            formal.validate()
            dispatch.setInputError(false)
        } catch (error) {
            console.log("Input values are invalid.")
            dispatch.setInputError(true)
        }
    };

    return (
        <WizardItem>
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
        </WizardItem>
    );
};