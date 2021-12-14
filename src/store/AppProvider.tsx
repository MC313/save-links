import React from "react";

import { initialAppState, AppState, FormStatus } from "./state";


/**
 * =======================
 *        Reducer
 * =======================
 */
const appReducer: AppReducer = (state: AppState, action: AppActions) => {
    const { payload, type } = action;
    switch (type) {
        case AppTypeKeys.SET_USER_ID:
            return {
                ...state,
                userId: payload as string
            };
        case AppTypeKeys.SET_FORM_STATUS:
            console.log("PROVIDER STATUS: ", payload)
            return {
                ...state,
                formStatus: payload as FormStatus
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
const AppProvider: React.FC<AppProviderProps> = ({ children, value }) => {
    const appState = { ...initialAppState, ...value };
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
        setUserId: (payload: string) =>
            dispatch({
                type: AppTypeKeys.SET_USER_ID,
                payload
            }),
        setFormStatus: (payload: FormStatus) =>
            dispatch({
                type: AppTypeKeys.SET_FORM_STATUS,
                payload
            }),
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
    SET_USER_ID = "SET_USER_ID",
    SET_FORM_STATUS = "SET_FORM_STATUS"
};

interface SetUserIdAction {
    type: AppTypeKeys.SET_USER_ID;
    payload: AppState["userId"];
};

interface SetFormStatusAction {
    type: AppTypeKeys.SET_FORM_STATUS;
    payload: AppState["formStatus"];
};

type AppActions = SetUserIdAction | SetFormStatusAction;

type AppDispatch = (action: AppActions) => void;

type AppReducer = React.Reducer<AppState, AppActions>;

interface AppProviderProps {
    children: React.ReactNode;
    value: AppState;
};

const ActionName: { setUserId: string, setFormStatus: FormStatus } = {
    "setUserId": "",
    "setFormStatus": FormStatus.Inactive
};

type AppDispatchHook = {
    [key in keyof typeof ActionName]: (payload: typeof ActionName[key]) => void;
};
