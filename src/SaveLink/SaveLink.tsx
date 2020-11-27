import React from "react";

import styled from "@emotion/styled";
import useFormal from "@kevinwolf/formal-web";

import { formSchema } from "./schema";
import { Card } from "../shared/components";
import { FormData } from "../shared/types/FormData";
import { ConfirmInfo } from "../ConfirmInfo/ConfirmInfo";
import { LinkNameUrlInputs } from "../LinkNameUrlInputs";
import { LinkDescriptionTagsInputs } from "../LinkDescriptionTagsInputs";
import { ReminderInputs } from "../ReminderInputs";
import { SubmitButton } from "../SubmitButton";
import { toUtcTime, TimeUnit } from "../ReminderInputs/utils";
import { useApp } from "../store";
import { NavButtons } from "../NavButtons";
import { WizardContainer } from "../WizardContainer";

interface FormPayload extends Object, Pick<FormData, "name" | "url" | "description"> {
    reminder: number | undefined;
    tags: [] | string[];
};

const StyledForm = styled.form({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 30
});

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
    const [state, dispatch] = useApp();

    const initialValues: FormData = {
        name: "",
        url: "",
        tags: "",
        reminderUnit: "",
        reminderValue: 0,
        description: ""
    };

    const submitFormData = (values: FormData) => {
        dispatch.submittingForm(true)
        handleSubmit("ERROR", formatFormData(values))
            .then(() => {
                console.log("Form submitted successfully")
                dispatch.submitFormSuccess("")
            })
            .catch(() => {
                console.log("Error submitting form ")
                dispatch.submitFormError("Error submitting form. Please try again.")
            })
    };

    const formal = useFormal<FormData>(initialValues, {
        onSubmit: submitFormData,
        schema: formSchema
    });

    return (
        <Card>
            <StyledForm { ...formal.getFormProps() }>
                <WizardContainer>
                    <LinkNameUrlInputs formal={ formal } />
                    <LinkDescriptionTagsInputs formal={ formal } />
                    <ReminderInputs formal={ formal } />
                    <ConfirmInfo formal={ formal } />
                </WizardContainer>

                <NavButtons />

                <p style={ { color: "red" } }>
                    { state.formError }
                </p>
            </StyledForm>
        </Card>
    )
}

export default SaveLink;