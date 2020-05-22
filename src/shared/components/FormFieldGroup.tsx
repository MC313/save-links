/** @jsx jsx */

import React from "react";

import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { FormalFieldProps } from '@kevinwolf/formal';
import { FormalWebFieldProps } from "@kevinwolf/formal-web";

import { font, margin } from "../styles";
import FormField, { FormFieldProps } from "./FormField";

const StyledFormFieldGroup = styled.div({
    width: "100%",
    marginBottom: margin.medium,
    div: {
        display: "flex",
        flexDirection: "row",
        overflow: "hidden"
    },
    p: {
        minHeight: "20px",
        height: "20px",
        margin: "5px 0px 0px 0px",
        fontSize: font.medium,
        color: "red"
    }
});

interface FormFieldGroupProps extends Partial<FormalFieldProps>, Partial<FormalWebFieldProps> {
    label?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    validate?: boolean;
};

type Children = React.PropsWithChildren<FormFieldGroupProps>;

export const FormFieldGroup: React.FC<FormFieldGroupProps> = ({
    children,
    error,
    label,
    name,
    placeholder,
    required = false,
    type = "text",
    validate = false,
    ...props
}) => {
    console.log("CHILDREN: ", children)
    return (
        <StyledFormFieldGroup>
            <div>
                {
                    React.Children.map(children, (child: React.ReactNode) => {
                        console.log("PROPS: ", child)
                        return child;
                    })
                }
            </div>
            <p>{ error }</p>
        </StyledFormFieldGroup>
    );
};