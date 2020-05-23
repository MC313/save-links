import React from "react";

// import { AppState } from "../types";
import { appState, AppState } from "./state";

enum AppActionType {
    UPDATE_FORM_DATA = "UPDATE_FORM_DATA",
    SUBMIT_FORM_DATA = "SUBMIT_FORM_DATA",
    SET_LIST_ITEMS = "SET_LIST_ITEMS",
    ADD_LIST_ITEM = "ADD_LIST_ITEM",
    REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM",
    UPDATE_STEP = "UPDATE_STEP"
};

interface AppAction {
    payload: AppState[keyof AppState];
    type: AppActionType;
};

type AppDispatch = (action: AppAction) => void;

type AppReducer = React.Reducer<AppState, AppAction>;

const appReducer: AppReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FORM_DATA":
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload as object,
                }
            };

        case "UPDATE_STEP":
            return {
                ...state,
                step: action.payload as number
            };

        default:
            return state;
    }
};

interface AppProviderProps {
    children: React.ReactNode;
};

type ActionName = "updateFormData" | "updateStep";

type AppDispatchHook = {
    [k in ActionName]: (payload: AppState[keyof AppState]) => void
};

let AppDispatchContext: React.Context<AppDispatch | undefined>;
let AppStateContext: React.Context<AppState | undefined>;

const {
    Provider: AppDispatchProvider
} = AppDispatchContext = React.createContext<AppDispatch | undefined>(undefined);

const {
    Provider: AppStateProvider
} = AppStateContext = React.createContext<AppState | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    let [state, dispatch] = React.useReducer<AppReducer>(appReducer, appState);

    return (
        <AppStateProvider value={ state }>
            <AppDispatchProvider value={ dispatch }>
                { children }
            </AppDispatchProvider>
        </AppStateProvider>
    );
};

const useAppDispatch = () => {
    const dispatch = React.useContext(AppDispatchContext);
    if (dispatch === undefined) {
        throw new Error('useAppDispatch can only be used with AppProvider component.')
    };
    return {
        updateFormData: (payload: AppState[keyof AppState]) =>
            dispatch({
                type: AppActionType.UPDATE_FORM_DATA,
                payload
            }),
        updateStep: (payload: AppState[keyof AppState]) =>
            dispatch({
                type: AppActionType.UPDATE_STEP,
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
    AppProvider
};
