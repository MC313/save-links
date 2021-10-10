import React from "react";

import { WizardItem } from "./WizardContainer";
import { FormField } from "../shared/components";
import { getURL } from "../shared/utils";
import { useApp, useForm } from "../store";


export const WizardItem1: React.FC<{}> = () => {
    const [{ appType }] = useApp();
    const [{ fields }, dispatch] = useForm();

    const isExtension = (): boolean => (appType === "EXTENSION")

    React.useEffect(() => {
        const setURL = async () => {
            try {
                const url = await getURL()
                dispatch.setInput("url")({ target: { value: url } })
            } catch (error) {
                console.error("Error getting URL: ", error)
            }
        }

        isExtension() && setURL()
    }, [])

    return (
        <WizardItem>
            <FormField
                autoFocus={ true }
                label="Link url"
                name="url"
                onChange={ dispatch.setInput("url") }
                onError={ () => dispatch.setInputError("url") }
                placeholder="https://testing-library.com/docs/"
                required={ true }
                type="url"
                value={ fields["url"] as string }
            />
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