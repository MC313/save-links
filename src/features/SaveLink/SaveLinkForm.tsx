import React from "react";

import styled from "@emotion/styled";

import { Card, ErrorMessage } from "../../shared/components";
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
import { BackButton } from "../NavButtons/BackButton";
import { ContinueButton } from "../NavButtons/ContinueButton";
import { SubmitButton } from "../NavButtons/SubmitButton";


export const SaveLinkForm: React.FC<{}> = () => {
    const [{ userId }] = useApp();
    const [{ error, fields, status }, dispatch] = useForm();
    const [{ step, totalSteps }, setStep] = useWizard();

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch.formSuccess()
        saveLink(formatFormData({ userId, ...fields }))
            .then(() => {
                dispatch.formSuccess()
                dispatch.resetForm()
                setStep(1)
            })
            .catch(({ message }) => {
                console.error(message)
                dispatch.setFormError(message)
            })
    };

    return (
        <Card styles={ cardStyles }>
            { status === "SUCCESS" && <SuccessOverlay /> }
            <StyledHeader>
                { step > 1 && <BackButton /> }
                <StepsIndicator />
            </StyledHeader>
            <StyledForm onSubmit={ submit }>
                <WizardContainer>
                    <WizardItem1 />
                    <WizardItem2 />
                    <WizardItem3 />
                </WizardContainer>
                <ErrorMessage error={ error } />
                {
                    step === totalSteps ?
                        <SubmitButton /> : <ContinueButton />
                }
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

const verticalCenter = {
    display: "flex",
    alignItems: "center"
}

const StyledHeader = styled.header(verticalCenter)

const StyledForm = styled.form({
    ...verticalCenter,
    flexDirection: "column"
})

const cardStyles = {

}


