import React from "react"; "center"

import styled from '@emotion/styled';

import { SaveLinkForm } from "./SaveLinkForm";
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
    zIndex: 5,
    visibility: formStatus === FormStatus.Inactive ? 'hidden' : 'visible',
    ".container-background": {
        width: width.full,
        height: height.full,
        position: "absolute" as "absolute",
        bottom: 0,
        left: 0,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        opacity: 0.7,
        background: colors.black,
        transition: "opacity 1.5s ease-in"
    },
    "header, form": {
        opacity: formStatus === FormStatus.Inactive ? 0 : 1
    },
    ".card": {
        position: "absolute",
        bottom: 0,
        zIndex: 15,
        transform: `translateY(${formStatus === FormStatus.Inactive ? '200%' : '-40%'})`,
        transitionProperty: "transform",
        transitionDuration: "0.4s",
        transitionTimingFunction: "ease-in-out"
    }
}), flex.center);

type DivProps = { formStatus: FormStatus };