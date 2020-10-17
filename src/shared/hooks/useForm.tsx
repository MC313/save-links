import React from 'react';

import useFormal, { FormalWebState } from "@kevinwolf/formal-web";

import { FormData } from "../../shared/types/FormData";
import { formSchema } from '../../SaveLink/schema';

type FormalFormState = FormalWebState<FormData>;
interface FormState {
    fields: { [key in keyof FormData]: () => FormalFormState["getFieldProps"] }
};
type UseFormSetState = React.Dispatch<React.SetStateAction<FormState>>;

type UseForm = (
    initialValues?: FormData,
    onSubmit?: (values: FormData) => void
) => [FormState];

const defaultValues: FormData = {
    name: "",
    url: "",
    tags: "",
    reminderUnit: "",
    reminderValue: 0,
    description: ""
};

const handleSubmit = (data: FormData) => {
    console.log("SUBMITTING FORM DATA: ", data)
    return data;
}

export const useForm: UseForm = (
    initialValues = defaultValues,
    onSubmit = handleSubmit
) => {

    const formal = useFormal<FormData>(initialValues, {
        onSubmit,
        schema: formSchema
    })

    const initialFormState = createFormState(defaultValues, formal);

    const [state, setState] = React.useState<FormState>(initialFormState)

    React.useEffect(() => {
        setState(state)
    }, [state])

    return [state]
};

const createFormState = (formFields: FormData, formalState: FormalFormState) => {
    let formState = {};
    for (const field in formFields) {
        formState = { ...formState, [field]: formalState.getFieldProps }
    }
    return formState as FormState;
};