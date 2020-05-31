import React from "react";

// import { AppState } from "../types";
import { appState, AppState } from "./state";

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

type AppWindow = Window & typeof globalThis & {
    _REACT_CONTEXT_DEVTOOL?: ReactContextDevTool
};

enum AppTypeKeys {
    FORM_ERROR = "FORM_ERROR",
    INPUT_ERROR = "INPUT_ERROR",
    UPDATE_FORM_DATA = "UPDATE_FORM_DATA",
    SUBMIT_FORM = "SUBMIT_FORM",
    SUBMIT_FORM_ERROR = "SUBMIT_FORM_ERROR",
    SUBMIT_FORM_SUCCESS = "SUBMIT_FORM_SUCCESS",
    SET_LIST_ITEMS = "SET_LIST_ITEMS",
    ADD_LIST_ITEM = "ADD_LIST_ITEM",
    REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM"
};

interface UpdateFormAction {
    type: AppTypeKeys.UPDATE_FORM_DATA;
    payload: Partial<AppState["formData"]>;
};

interface FormErrorAction {
    type: AppTypeKeys.FORM_ERROR;
    payload: AppState["formError"];
};

interface InputErrorAction {
    type: AppTypeKeys.INPUT_ERROR;
    payload: AppState["inputError"];
};

interface SubmitFormAction {
    type: AppTypeKeys.SUBMIT_FORM;
    payload: AppState["formData"];
};

interface SubmitFormErrorAction {
    type: AppTypeKeys.SUBMIT_FORM_ERROR;
    payload: null;
};

interface SubmitFormSuccessAction {
    type: AppTypeKeys.SUBMIT_FORM_SUCCESS;
    payload: null;
};

type AppActions =
    FormErrorAction |
    InputErrorAction |
    UpdateFormAction |
    SubmitFormAction |
    SubmitFormErrorAction |
    SubmitFormSuccessAction;

type AppDispatch = (action: AppActions) => void;

type AppReducer = React.Reducer<AppState, AppActions>;

interface AppProviderProps {
    children: React.ReactNode;
};

type ActionName =
    "updateInputError" |
    "updateFormData" |
    "updateFormError";

type AppDispatchHook = {
    [k in ActionName]: (payload: any) => void
};


/**
 * =======================
 *        Reducer
 * =======================
 */
const appReducer: AppReducer = (state, action) => {
    switch (action.type) {
        case AppTypeKeys.UPDATE_FORM_DATA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            };
        case AppTypeKeys.SUBMIT_FORM:
            return {
                ...state,
            };
        case AppTypeKeys.FORM_ERROR:
            return {
                ...state,
                formError: action.payload
            };

        default:
            return state;
    }
};

let AppDispatchContext: React.Context<AppDispatch | undefined>;
let AppStateContext: React.Context<AppState | undefined>;

const {
    Provider: AppDispatchProvider
} = AppDispatchContext = React.createContext<AppDispatch | undefined>(undefined);

const {
    Consumer: AppConsumer,
    Provider: AppStateProvider
} = AppStateContext = React.createContext<AppState | undefined>(undefined);


/**
 * =======================
 *   Provider Component
 * =======================
 */
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    let [state, dispatch] = React.useReducer<AppReducer>(appReducer, appState);
    let _window: AppWindow = window;

    return (
        <AppStateProvider value={ state }>
            <AppDispatchProvider value={ dispatch }>
                <AppConsumer>
                    { (values) => {
                        if (_window && _window._REACT_CONTEXT_DEVTOOL) {
                            _window._REACT_CONTEXT_DEVTOOL({
                                id: 'AppContextId',
                                displayName: 'AppContext',
                                values
                            });
                        }
                        return (
                            <React.Fragment>
                                { children }
                            </React.Fragment>
                        )
                    } }
                </AppConsumer>
            </AppDispatchProvider>
        </AppStateProvider>
    );
};


/**
 * =======================
 *      Custom Hooks
 * =======================
 */
const useAppDispatch = () => {
    const dispatch = React.useContext(AppDispatchContext);
    if (dispatch === undefined) {
        throw new Error('useAppDispatch can only be used with AppProvider component.')
    };
    return {
        updateFormError: (payload: any) =>
            dispatch({
                type: AppTypeKeys.FORM_ERROR,
                payload
            }),
        updateFormData: (payload: any) =>
            dispatch({
                type: AppTypeKeys.UPDATE_FORM_DATA,
                payload
            }),
        updateInputError: (payload: any) =>
            dispatch({
                type: AppTypeKeys.INPUT_ERROR,
                payload
            })
    };
};

const useAppState = () => {
    const context = React.useContext(AppStateContext);
    if (context === undefined) {
        throw new Error('useAppState can only be used with AppProvider component.')
    };
    return context;
};

const useApp = (): [AppState, AppDispatchHook] =>
    [useAppState(), useAppDispatch()];

export {
    useApp,
    AppConsumer,
    AppProvider
};
