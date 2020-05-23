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
import { AppProvider } from "../store";

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
        reminder: undefined,
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
                        ({ currentStep, nextStep, totalSteps }) => {

                            return (
                                <React.Fragment>
                                    <Wizard.Container currentStep={ currentStep }>
                                        <LinkNameUrlInputs />
                                        <LinkDescriptionTagsInputs />
                                        <ReminderInputs />
                                        <ConfirmInfo />
                                    </Wizard.Container>

                                    {
                                        currentStep === totalSteps ?
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