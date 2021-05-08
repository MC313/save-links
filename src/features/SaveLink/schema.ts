import * as yup from "yup";

import { FormData } from "../../shared/types";

type FormSchema = yup.Schema<FormData>;


export const formSchema: FormSchema = yup.object({
    url: yup.string().url("Invalid url value").required("Url is required"),
    description: yup.string().notRequired(),
    tags: yup.string().notRequired(),
    reminderUnit: yup.string().notRequired(),
    reminderValue: yup.number()
}).defined();



