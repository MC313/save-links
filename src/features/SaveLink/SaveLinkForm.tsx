import React from "react";

import styled from "@emotion/styled";

import { NavButtons } from "../NavButtons";
import { Card } from "../../shared/components";
import { ErrorMessage } from "../ErrorMessage";
import { FormPayload } from "../../shared/types";
import { saveLink } from "./saveLinkService";
// update steps indicator import to remove the nested folder reference
import { StepsIndicator } from "../StepsIndicator/StepsIndicator";
import { SuccessOverlay } from "../SuccessOverlay";
import { toUtcTime, TimeUnit } from "../../shared/utils";
import { FormFields, useApp, useForm, useWizard } from "../../store";
import { WizardContainer } from "../WizardContainer";
import { WizardItem1 } from "../WizardItem1";
import { WizardItem2 } from "../WizardItem2";
import { WizardItem3 } from "../WizardItem3";


const StyledForm = styled.form({
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
})

export const SaveLinkForm: React.FC<{}> = () => {
    const [{ userId }] = useApp();
    const [{ fields }, dispatch] = useForm();
    const [_, setStep] = useWizard();

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch.formSubmitting()
        saveLink(formatFormData({ userId, ...fields }))
            .then(() => {
                dispatch.formSuccess()
                dispatch.resetForm()
                setStep(1)
            })
            .catch(({ message }) => {
                console.log(message)
                dispatch.setFormError(message)
            })
    };

    return (
        <Card>
            <SuccessOverlay />
            <StepsIndicator />
            <StyledForm onSubmit={ submit }>
                <WizardContainer>
                    <WizardItem1 />
                    <WizardItem2 />
                    <WizardItem3 />
                </WizardContainer>
                <ErrorMessage />
                <NavButtons />
            </StyledForm>
        </Card>
    )
}

const formatFormData = (payload: FormFieldsWithUserId): FormWithUserId => {
    const {
        reminderUnit,
        reminderValue,
        tags,
        url,
        description,
        userId
    } = payload;

    return {
        userId,
        url,
        description,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
        reminder: toUtcTime(reminderValue as number, reminderUnit as TimeUnit)
    }
}

interface FormFieldsWithUserId extends FormFields {
    userId: string;
}
interface FormWithUserId extends FormPayload {
    userId: string;
}
