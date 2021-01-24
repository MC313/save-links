import React from "react";

import { WizardItem, WizardItemProps } from "./WizardContainer";
import { FormField } from "./shared/components";
import { useForm } from "./store";

export const WizardItem1: React.FC<WizardItemProps> = () => {
    const [{ fields }, dispatch] = useForm();

    return (
        <WizardItem>
            <FormField
                label="Link name"
                name="name"
                onChange={ dispatch.setInput("name") }
                onError={ (err) => console.log("NAME ERROR: ", err) }
                placeholder="React Testing"
                required={ true }
                value={ fields["name"] as string }
            />
            <FormField
                label="Link url"
                name="url"
                onChange={ dispatch.setInput("url") }
                onError={ (err) => console.log("URL ERROR: ", err) }
                placeholder="https://testing-library.com/docs/"
                required={ true }
                type="url"
                value={ fields["url"] as string }
            />
        </WizardItem>
    );
};