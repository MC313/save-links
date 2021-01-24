import React from "react";

import { FormalWebTextFieldEvent } from "@kevinwolf/formal-web";

import { FormField } from "./shared/components";
import { WizardItem, WizardItemProps } from "./WizardContainer";
import { useForm } from "./store";


export const WizardItem2: React.FC<WizardItemProps> = () => {
    const [{ fields }, dispatch] = useForm();

    return (
        <WizardItem>
            <FormField
                label="Description"
                name="description"
                onChange={ dispatch.setInput("description") }
                placeholder="Description of the saved link"
                required={ false }
                value={ fields["description"] as string }
            />
            <FormField
                label="Tags"
                name="tags"
                onChange={ dispatch.setInput("tags") }
                placeholder="Separate, Each, Tag, With, A, Comma"
                required={ false }
                value={ fields["tags"] as string }
            />
        </WizardItem>
    );
};