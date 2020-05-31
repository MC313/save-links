import * as yup from "yup";

import { FormData } from "../shared/types/FormData";

type FormSchema = yup.ObjectSchema<FormData>;

export const formSchema: FormSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    url: yup.string().url("Invalid url value").required("Url is required"),
    description: yup.string(),
    tags: yup.string(),
    reminderUnit: yup.string(),
    reminderValue: yup.number().min(0).max(24)

});
