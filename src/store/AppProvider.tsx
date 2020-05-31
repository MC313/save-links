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
    UPDATE_FORM_DATA = "UPDATE_FORM_DATA",
    SUBMIT_FORM_DATA = "SUBMIT_FORM_DATA",
    SET_FORM_ERROR = "SET_FORM_ERROR",
    SET_LIST_ITEMS = "SET_LIST_ITEMS",
    ADD_LIST_ITEM = "ADD_LIST_ITEM",
    REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM",
    UPDATE_STEP = "UPDATE_STEP"
};

interface UpdateFormAction {
    type: AppTypeKeys.UPDATE_FORM_DATA;
    payload: Partial<AppState["formData"]>;
};

interface SubmitFormAction {
    type: AppTypeKeys.SUBMIT_FORM_DATA;
    payload: AppState["formData"];
};

interface UpdateStepAction {
    type: AppTypeKeys.UPDATE_STEP;
    payload: AppState["step"];
};

type AppActions =
    UpdateFormAction |
    SubmitFormAction |
    UpdateStepAction;

type AppDispatch = (action: AppActions) => void;

type AppReducer = React.Reducer<AppState, AppActions>;

interface AppProviderProps {
    children: React.ReactNode;
};

type ActionName = "updateFormData" | "updateStep";

type AppDispatchHook = {
    [k in ActionName]: (payload: AppActions["payload"]) => void
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

        case AppTypeKeys.UPDATE_STEP:
            return {
                ...state,
                step: action.payload
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
        updateFormData: (payload: any) =>
            dispatch({
                type: AppTypeKeys.UPDATE_FORM_DATA,
                payload
            }),
        updateStep: (payload: any) =>
            dispatch({
                type: AppTypeKeys.UPDATE_STEP,
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
