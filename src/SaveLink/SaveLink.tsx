import React from "react";

import styled from "@emotion/styled";

import { NavButtons } from "../NavButtons";
import { submitForm } from "./submitFormSerivce";
import { Card } from "../shared/components";
import { FormData, FormPayload } from "../shared/types";
import { toUtcTime, TimeUnit } from "../shared/utils";
import { useForm, useWizard } from "../store";
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

const formatFormData = (formData: FormData): FormPayload => {
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
        reminder: toUtcTime(reminderValue, reminderUnit as TimeUnit)
    }
}

const handleSubmit = (submitStatus: "SUCCESS" | "ERROR", values: FormPayload) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            submitStatus === "SUCCESS" ? resolve(values) : reject("Error submitting form data")
        }, 4000)
    })
}

const SaveLink = () => {
    const [{ error }, dispatch] = useForm();
    const [_, setStep] = useWizard();

    const submitFormData = (values: FormData) => {
        dispatch.formSubmitting();
        submitForm(formatFormData(values))
            .then(() => {
                dispatch.formSuccess();
                setStep(1);
            })
            .catch((error) => dispatch.formError(error))
    };

    return (
        <Card>
            <StyledForm>
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