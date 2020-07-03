import React from 'react';

import useFormal, { FormalWebState } from "@kevinwolf/formal-web";

import { FormData } from "../../shared/types/FormData";
import { formSchema } from '../../SaveLink/schema';

type useFormState = FormalWebState<FormData>;
type useFormSetState = React.Dispatch<React.SetStateAction<useFormState>>;

type UseForm = (
    initialValues?: FormData,
    onSubmit?: (values: FormData) => void,
    key?: keyof FormData
) => [useFormState];

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

    const [state, setState] = React.useState<FormalWebState<FormData>>(formal)
    const { change, getFieldProps } = state;

    const setForm = (value?: string) => {
        console.log("STATE: ", state)
    }

    React.useEffect(() => {
        setState(state)
    }, [state])

    return [state]
};