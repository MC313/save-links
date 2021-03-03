import * as yup from "yup";

import { FormData } from "../../shared/types";

type FormSchema = yup.Schema<FormData>;

export const formSchema: FormSchema = yup.object().shape({
    url: yup.string().url("Invalid url value").required("Url is required"),
    description: yup.string(),
    tags: yup.string(),
    reminderUnit: yup.string(),
    reminderValue: yup.number().min(0).max(24)
});

