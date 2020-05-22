import React from "react";

import useFormal from "@kevinwolf/formal-web";

import { Button, Card, FormField, FormFieldGroup } from "../shared/components";
import Wizard from "../Wizard";
import { Inputs } from "../shared/types/Inputs";
import ConfirmInfo from "../ConfirmInfo/ConfirmInfo";

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
                                        { /** Wizard Section 1 */ }
                                        <Wizard.Item>
                                            <FormField
                                                { ...formal.getFieldProps("name") }
                                                label="Link name"
                                                required={ true }
                                            />
                                            <FormField
                                                { ...formal.getFieldProps("url") }
                                                label="Link url"
                                                required={ true }
                                            />
                                        </Wizard.Item>

                                        { /** Wizard Section 2 */ }
                                        <Wizard.Item>
                                            <FormField
                                                { ...formal.getFieldProps("description") }
                                                type="textarea"
                                            />
                                            <FormField { ...formal.getFieldProps("tags") } />
                                        </Wizard.Item>

                                        { /** Wizard Section 3 */ }
                                        <Wizard.Item>
                                            <FormField { ...formal.getFieldProps("date") } />
                                            <FormFieldGroup>
                                                <FormField { ...formal.getFieldProps("timeValue") } />
                                                <FormField { ...formal.getFieldProps("timeUnit") } />
                                            </FormFieldGroup>
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