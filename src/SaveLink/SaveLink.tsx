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

const StyledForm = styled.form({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 30
});

const SaveLink = () => {

    const initialValues: FormData = {
        name: "",
        url: "",
        tags: "",
        reminderUnit: "",
        reminderValue: 0,
        description: ""
    };

    const formal = useFormal(initialValues, {
        onSubmit: (values) => console.log("FORM VALUES: ", values),
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