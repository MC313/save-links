import React from "react";

import { FormalWebState } from "@kevinwolf/formal-web";

import { FormData } from "../shared/types";

/**
 * =======================
 *    Types Definitions
 * =======================
 */
interface ReactContextDevToolParams {
    id: string;
    displayName: string;
    values: any;
};

type ReactContextDevTool = (params: ReactContextDevToolParams) => void;

type FormWindow = Window & typeof globalThis & {
    _REACT_CONTEXT_DEVTOOL?: ReactContextDevTool
};

type FormState = FormalWebState<FormData>;

// interface FormState {
//     fields: { [key in keyof FormData]: () => FormState["getFieldProps"] }
// };

type UseFormSetState = React.Dispatch<React.SetStateAction<FormState>>;

enum FormTypeKeys {
    SET_INPUT_ERROR = "SET_INPUT_ERROR",
    UPDATE_INPUT_VALUE = "UPDATE_INPUT_VALUE",
    SUBMITTING_FORM = "SUBMITTING_FORM",
    SET_FORM_ERROR = "SET_FORM_ERROR",
    SET_FORM_SUCCESS = "SET_FORM_SUCCESS"
};

interface UpdateInputValueAction {
    type: FormTypeKeys.UPDATE_INPUT_VALUE;
    payload: Partial<FormState["values"][keyof FormData]>;
};

interface SetInputErrorAction {
    type: FormTypeKeys.SET_INPUT_ERROR;
    payload: string;
};

interface SubmittingFormAction {
    type: FormTypeKeys.SUBMITTING_FORM;
    payload: boolean;
};

interface SetFormErrorAction {
    type: FormTypeKeys.SET_FORM_ERROR;
    payload: boolean;
};

interface SetFormSuccessAction {
    type: FormTypeKeys.SET_FORM_SUCCESS;
    payload: boolean;
};

type FormActions =
    SetInputErrorAction |
    UpdateInputValueAction |
    SubmittingFormAction |
    SetFormErrorAction |
    SetFormSuccessAction;

type FormDispatch = (action: FormActions) => void;

type FormReducer = React.Reducer<FormState, FormActions>;

interface FormProviderProps {
    children: React.ReactNode;
    formState: FormState;
};

type ActionName =
    "setInputError" |
    "submittingForm" |
    "setFormSuccess" |
    "setFormError";

type FormDispatchHook = {
    [k in ActionName]: (payload: any) => void
};

const createFormState = (formFields: FormData, formalState: FormState) => {
    let formState = {};
    for (const field in formFields) {
        formState = { ...formState, [field]: formalState.getFieldProps }
    };
    return formState as FormState;
};

/**
 * =======================
 *        Reducer
 * =======================
 */
const appReducer: FormReducer = (state, action) => {
    console.log("state: ", state)
    const { payload, type } = action;
    switch (type) {
        case FormTypeKeys.UPDATE_INPUT_VALUE:
            //const { key, value } = payload as 
            //state.change(key, value);
            return {
                ...state
            };
        case FormTypeKeys.SUBMITTING_FORM:
            return {
                ...state
            };
        case FormTypeKeys.SET_FORM_SUCCESS:
            return {
                ...state,
                submittingForm: false
            };
        case FormTypeKeys.SET_FORM_ERROR:
            return {
                ...state,
                formError: payload,
                submittingForm: false
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
const FormProvider: React.FC<FormProviderProps> = ({ children, formState }) => {
    let [state, dispatch] = React.useReducer<FormReducer>(appReducer, formState);
    let _window: FormWindow = window;

    return (
        <FormStateProvider value={ state }>
            <FormDispatchProvider value={ dispatch }>
                <FormConsumer>
                    { (values) => {
                        if (_window && _window._REACT_CONTEXT_DEVTOOL) {
                            _window._REACT_CONTEXT_DEVTOOL({
                                id: 'FormContextId',
                                displayName: 'FormContext',
                                values
                            });
                        }
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
        submittingForm: (payload: boolean) =>
            dispatch({
                type: FormTypeKeys.SUBMITTING_FORM,
                payload
            }),
        setFormSuccess: (payload: boolean) =>
            dispatch({
                type: FormTypeKeys.SET_FORM_SUCCESS,
                payload
            }),
        setFormError: (payload: boolean) =>
            dispatch({
                type: FormTypeKeys.SET_FORM_ERROR,
                payload
            }),
        setInputError: (payload: string) =>
            dispatch({
                type: FormTypeKeys.SET_INPUT_ERROR,
                payload
            })
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
