import React from "react";

import styled from "@emotion/styled";
import useFormal from "@kevinwolf/formal-web";

import Wizard from "../Wizard";
import { formSchema } from "./schema";
import { Card } from "../shared/components";
import { FormData } from "../shared/types/FormData";
import { ConfirmInfo } from "../ConfirmInfo/ConfirmInfo";
import { LinkNameUrlInputs } from "../LinkNameUrlInputs";
import { LinkDescriptionTagsInputs } from "../LinkDescriptionTagsInputs";
import { ReminderInputs } from "../ReminderInputs";
import { ContinueButton } from "../ContinueButton";
import { SubmitButton } from "../SubmitButton";
import { BackButton } from "../BackButton";
import { toUtcTime, TimeUnit } from "../ReminderInputs/utils";
import { useApp } from "../store";

const StyledForm = styled.form({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 30
});

const formatFormData = (formData: FormData) => {
    const {
        reminderUnit,
        reminderValue,
        tags,
        ...otherFormData
    } = formData;

    return {
        ...otherFormData,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : tags,
        reminder: toUtcTime(reminderValue, reminderUnit as TimeUnit)
    }
}

const handleSubmit = (submitStatus: "SUCCESS" | "ERROR", values: FormData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            submitStatus === "SUCCESS" ? resolve(values) : reject("Error submitting form data")
        }, 600)
    })
}

const SaveLink = () => {
    const [, dispatch] = useApp();

    const initialValues: FormData = {
        name: "",
        url: "",
        tags: "",
        reminderUnit: "",
        reminderValue: 0,
        description: ""
    };

    const submitFormData = (values: FormData) => {
        handleSubmit("ERROR", values)
            .then(() => { console.log("Form submitted successfully") })
            .catch(() => { console.log("Error submitting form ") })
    };

    const formal = useFormal(initialValues, {
        onSubmit: submitFormData,
        schema: formSchema
    });

    return (
        <Card>
            <StyledForm { ...formal.getFormProps() }>
                <Wizard>
                    {
                        ({ step, nextStep, previousStep, totalSteps }) => {

                            return (
                                <React.Fragment>
                                    {
                                        step > 1 &&
                                        <BackButton onClick={ previousStep } />
                                    }
                                    <Wizard.Container step={ step }>
                                        <LinkNameUrlInputs formal={ formal } />
                                        <LinkDescriptionTagsInputs formal={ formal } />
                                        <ReminderInputs formal={ formal } />
                                        <ConfirmInfo formal={ formal } />
                                    </Wizard.Container>

                                    {
                                        step === totalSteps ?
                                            <SubmitButton formal={ formal } />
                                            :
                                            <ContinueButton
                                                formal={ formal }
                                                nextStep={ nextStep }
                                            />
                                    }
                                </React.Fragment>
                            )
                        }
                    }
                </Wizard>
            </StyledForm>
        </Card>
    )
}

export default SaveLink;