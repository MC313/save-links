import React from "react";


type SubmitStatus = "INITIAL" | "ERROR" | "SUBMITTING" | "SUCCESS";
export interface FormFields {
    url: string;
    description?: string;
    tags?: string;
    reminderUnit?: string;
    reminderValue?: number;
};

interface FormFieldsErrors extends Omit<FormFields, "reminderValue"> {
    reminderValue: string;
};

export interface FormState {
    status: SubmitStatus;
    error?: string;
    fields: FormFields;
    errors: FormFieldsErrors;
};

/**
 * =======================
 *    Type Definitions
 * =======================
 */

enum FormTypeKeys {
    RESET_FORM = "RESET_FORM",
    SET_FORM_ERROR = "SET_FORM_ERROR",
    SET_FORM_SUCCESS = "SET_FORM_SUCCESS",
    SET_INPUT_ERROR = "SET_INPUT_ERROR",
    SET_INPUT_VALUE = "SET_INPUT_VALUE",
    SUBMITTING_FORM = "SUBMITTING_FORM"
};
interface FormSubmittingAction {
    type: FormTypeKeys.SUBMITTING_FORM;
    payload?: undefined;
};

interface FormSuccessAction {
    type: FormTypeKeys.SET_FORM_SUCCESS;
    payload?: undefined;
};

interface ResetFormAction {
    type: FormTypeKeys.RESET_FORM;
    payload?: undefined;
}

interface SetInputValueAction {
    type: FormTypeKeys.SET_INPUT_VALUE;
    payload: {
        field: keyof FormFields,
        value: FormState["fields"][keyof FormFields]
    };
};

interface SetFormErrorAction {
    type: FormTypeKeys.SET_FORM_ERROR;
    payload: string;
};

interface SetInputErrorAction {
    type: FormTypeKeys.SET_INPUT_ERROR;
    payload: keyof FormFields;
};

type FormActions =
    FormSubmittingAction |
    FormSuccessAction |
    ResetFormAction |
    SetFormErrorAction |
    SetInputErrorAction |
    SetInputValueAction;

type FormDispatch = (action: FormActions) => void;

type FormReducer = React.Reducer<FormState, FormActions>;

interface FormProviderProps {
    children: React.ReactNode;
};

type ActionName =
    "formSubmitting" |
    "formSuccess" |
    "resetForm" |
    "setFormError" |
    "setInput" |
    "setInputError";

export type FormDispatchHookReturn = void | ((e: React.ChangeEvent<HTMLInputElement>) => void)

type FormDispatchHook = {
    [k in ActionName]: (payload?: any) => any
};

const initialForm: FormState = {
    status: "INITIAL",
    error: undefined,
    fields: {
        url: "",
        description: "",
        tags: "",
        reminderUnit: "minute",
        reminderValue: 0
    },
    errors: {
        url: "",
        description: "",
        tags: "",
        reminderUnit: "",
        reminderValue: ""
    }
};

/**
 * =======================
 *        Reducer
 * =======================
 */
const formReducer: FormReducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case FormTypeKeys.RESET_FORM:
            return {
                ...initialForm
            };
        case FormTypeKeys.SET_INPUT_VALUE:
            const { field: inputField, value: inputValue } = payload as SetInputValueAction["payload"];
            return {
                ...state,
                fields: { ...state.fields, [inputField]: inputValue }
            };
        case FormTypeKeys.SET_INPUT_ERROR:
            const inputKey = payload as SetInputErrorAction["payload"];
            return {
                ...state,
                errors: { ...state.errors, [inputKey]: true }
            };
        case FormTypeKeys.SUBMITTING_FORM:
            return {
                ...state,
                status: "SUBMITTING"
            };
        case FormTypeKeys.SET_FORM_SUCCESS:
            return {
                ...state,
                status: "SUCCESS"
            };
        case FormTypeKeys.SET_FORM_ERROR:
            return {
                ...state,
                error: payload as string,
                status: "ERROR"
            };

        default:
            return state;
    }
};

let FormDispatchContext: React.Context<FormDispatch | undefined>;
let FormStateContext: React.Context<FormState | undefined>;

const {
    Provider: FormDispatchProvider
} = FormDispatchContext = React.createContext<FormDispatch | undefined>(undefined);

const {
    Consumer: FormConsumer,
    Provider: FormStateProvider
} = FormStateContext = React.createContext<FormState | undefined>(undefined);


/**
 * =======================
 *   Provider Component
 * =======================
 */
const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    let [state, dispatch] = React.useReducer<FormReducer>(formReducer, initialForm);

    return (
        <FormStateProvider value={ state }>
            <FormDispatchProvider value={ dispatch }>
                <FormConsumer>
                    { (values) => {
                        return (
                            <React.Fragment>
                                { children }
                            </React.Fragment>
                        )
                    } }
                </FormConsumer>
            </FormDispatchProvider>
        </FormStateProvider>
    );
};


/**
 * =======================
 *      Custom Hooks
 * =======================
 */
const useFormDispatch = () => {
    const dispatch = React.useContext(FormDispatchContext);
    if (dispatch === undefined) {
        throw new Error('useFormDispatch can only be used with FormProvider component.')
    };
    return {
        formSubmitting: () =>
            dispatch({
                type: FormTypeKeys.SUBMITTING_FORM,
                payload: undefined
            }),
        formSuccess: () =>
            dispatch({
                type: FormTypeKeys.SET_FORM_SUCCESS,
                payload: undefined
            }),
        resetForm: () => {
            dispatch({
                type: FormTypeKeys.RESET_FORM,
                payload: undefined
            })
        },
        setInput: (payload: SetInputValueAction["payload"]["field"]) =>
            ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                    type: FormTypeKeys.SET_INPUT_VALUE,
                    payload: {
                        field: payload,
                        value
                    } as SetInputValueAction["payload"]
                }),
        setInputError: (payload: SetInputValueAction["payload"]["field"]) =>
            dispatch({
                type: FormTypeKeys.SET_INPUT_ERROR,
                payload
            }),
        setFormError: (payload: string) =>
            dispatch({
                type: FormTypeKeys.SET_FORM_ERROR,
                payload
            }),
    };
};

const useFormState = () => {
    const context = React.useContext(FormStateContext);
    if (context === undefined) {
        throw new Error('useFormState can only be used with FormProvider component.')
    };
    return context;
};

const useForm = (): [FormState, FormDispatchHook] =>
    [useFormState(), useFormDispatch()];

export {
    useForm,
    FormProvider
};
