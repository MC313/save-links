import React from "react";

import useFormal from "@kevinwolf/formal-web";

import Wizard from "../Wizard";
import { Reminder } from "../Reminder/Reminder";
import { Button, Card, FormField } from "../shared/components";
import { Inputs } from "../shared/types/Inputs";
import ConfirmInfo from "../ConfirmInfo/ConfirmInfo";
import { FormSectionOne } from "../FormSection1";
import { FormSectionTwo } from "../FormSectionTwo";

interface AttributeTypes {
    title: "Submit" | "Contine";
    type: "button" | "reset" | "submit";
};

type AttributeTypesKeys = keyof AttributeTypes;

const SaveLink = () => {
    const setAttribute = (current: number, total: number) =>
        <T extends AttributeTypesKeys> (attrName: T): AttributeTypes[T] => {
            const result = (current === total);
            const attrObjects: AttributeTypes = {
                title: result ? "Submit" : "Contine",
                type: result ? "submit" : "button"
            };
            return attrObjects[attrName];
        }

    const initialValues: Inputs = {
        name: "",
        url: "",
        tags: "",
        date: "",
        timeUnit: "",
        timeValue: "",
        description: ""
    };

    const formal = useFormal(initialValues, {
        onSubmit: (values) => console.log("FORM VALUES: ", values)
    });

    return (
        <Card>
            <form { ...formal.getFormProps() } style={ {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: 30
            } }>
                <Wizard>
                    {
                        ({ currentStep, nextStep, totalSteps }) => {

                            const getAttr = setAttribute(currentStep, totalSteps);

                            return (
                                <React.Fragment>
                                    <Wizard.Container currentStep={ currentStep }>
                                        <FormSectionOne />
                                        <FormSectionTwo />

                                        { /** Wizard Section 3 */ }
                                        <Wizard.Item>
                                            <Reminder />
                                        </Wizard.Item>
                                        <Wizard.Item>
                                            <ConfirmInfo inputs={ formal.values } />
                                        </Wizard.Item>
                                    </Wizard.Container>
                                    <Button
                                        { ...formal.getSubmitButtonProps() }
                                        disabled={
                                            !formal.validate || formal.isSubmitting
                                        }
                                        title={ getAttr("title") }
                                        type={ getAttr("type") }
                                        onClick={ () => nextStep() }
                                    />
                                </React.Fragment>
                            )
                        }
                    }
                </Wizard>
            </form>
        </Card>
    )
}

export default SaveLink;