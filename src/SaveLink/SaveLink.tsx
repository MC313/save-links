import React from "react";

import styled from "@emotion/styled";

import { NavButtons } from "../NavButtons";
import { saveLink } from "./saveLinkService";
import { Card } from "../shared/components";
import { FormPayload } from "../shared/types";
import { toUtcTime, TimeUnit } from "../shared/utils";
import { FormFields, useForm, useWizard } from "../store";
import { WizardContainer } from "../WizardContainer";
import { WizardItem1 } from "../WizardItem1";
import { WizardItem2 } from "../WizardItem2";
import { WizardItem3 } from "../WizardItem3";
import { WizardItem4 } from "../WizardItem4";


const StyledForm = styled.form({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 30
})

const formatFormData = (formData: FormFields): FormPayload => {
    const {
        reminderUnit,
        reminderValue,
        tags,
        name,
        url,
        description
    } = formData;

    return {
        name,
        url,
        description,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
        reminder: toUtcTime(reminderValue as number, reminderUnit as TimeUnit)
    }
}

const SaveLink = () => {
    const [{ error, fields }, dispatch] = useForm();
    const [_, setStep] = useWizard();

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch.formSubmitting()
        saveLink(formatFormData(fields))
            .then(() => {
                console.log("form submitted successfully!")
                dispatch.formSuccess()
                dispatch.resetForm()
                setStep(1);
            })
            .catch((error) => dispatch.formError(error))
    };

    return (
        <Card>
            <StyledForm onSubmit={ submit }>
                <WizardContainer>
                    <WizardItem1 />
                    <WizardItem2 />
                    <WizardItem3 />
                    <WizardItem4 />
                </WizardContainer>

                <NavButtons />

                <p style={ { color: "red" } }>
                    { error }
                </p>
            </StyledForm>
        </Card>
    )
}

export default SaveLink;