import React from "react"; "center"

import styled from '@emotion/styled';

import { SaveLinkForm } from "./SaveLinkForm";
import { ToggleFormButton } from "./ToggleForm";
import { FormProvider, WizardProvider, useApp } from "../../store";
import { colors, flex, height, radius, width } from "../../shared/styles";
import { FormStatus } from "../../store/state";

export const SaveLinkContainer: React.FC<{}> = () => {
    const [{ formStatus }] = useApp();
    return (
        <FormContainer formStatus={ formStatus }>
            <div className="container-background"></div>
            <WizardProvider totalSteps={ 3 }>
                <FormProvider>
                    <SaveLinkForm />
                </FormProvider>
            </WizardProvider>
            <ToggleFormButton />
        </FormContainer>
    );
};

const FormContainer = styled.div(({ formStatus }: DivProps) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: width.full,
    height: height.full,
    overflow: "hidden",
    ".container-background": {
        width: "100%",
        height: "100%",
        position: "absolute" as "absolute",
        bottom: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        opacity: formStatus === FormStatus.Inactive ? 0 : 0.7,
        background: colors.black
    },
    "header, form": {
        opacity: formStatus === FormStatus.Inactive ? 0 : 1
    },
    ".card": {
        position: "absolute",
        bottom: 0,
        transform: `translateY(${formStatus === FormStatus.Inactive ? '200%' : '-40%'})`,
        transitionProperty: "transform",
        transitionDuration: "0.4s",
        transitionTimingFunction: "ease-in-out"
    }
}), flex.center);

type DivProps = { formStatus: FormStatus };

// transitionProperty: "transform, width, height, borderRadius",
//         transitionDuration: "0.4s",
//         transitionDelay: "0s, 0.4s, 0.4s, 0.4s",
//         transitionTimingFunction: "ease-in-out"