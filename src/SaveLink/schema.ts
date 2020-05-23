import * as yup from "yup";

import { FormData } from "../shared/types/FormData";

type FormSchema = yup.ObjectSchema<FormData>;

export const formSchema: FormSchema = yup.object().shape({
    name: yup.string().required(),
    url: yup.string().url().required(),
    description: yup.string(),
    tags: yup.string(),
    reminder: yup.number()
});

