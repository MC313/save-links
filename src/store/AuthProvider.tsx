import React from "react";

import { AuthState } from '@aws-amplify/ui-components';

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

enum AuthActionTypes {
    SET_AUTH_STATE = "SET_AUTH_STATE",
    UPDATE_AUTH_STATE = "UPDATE_AUTH_STATE"
};

interface AuthAction {
    type: AuthActionTypes;
    payload: AuthState;
};

type AuthDispatch = (action: AuthAction) => void;

type AuthReducer = React.Reducer<AuthState, AuthAction>;

interface AuthProviderProps {
    children: React.ReactNode;
};

type ActionName = "setAuthState" | "updateAuthState";

type AuthDispatchHook = {
    [k in ActionName]: (payload: AuthState) => void
};


/**
 * =======================
 *        Reducer
 * =======================
 */
const authReducer: AuthReducer = (state: AuthState, action: AuthAction) => {
    const { payload, type } = action;
    switch (type) {
        case AuthActionTypes.SET_AUTH_STATE:
            return payload;
        case AuthActionTypes.UPDATE_AUTH_STATE:
            return payload;
        default:
            return state;
    }
};

let AuthDispatchContext: React.Context<AuthDispatch | undefined>;
let AuthStateContext: React.Context<AuthState | undefined>;

const {
    Provider: AuthDispatchProvider
} = AuthDispatchContext = React.createContext<AuthDispatch | undefined>(undefined);

const {
    Provider: AuthStateProvider
} = AuthStateContext = React.createContext<AuthState | undefined>(undefined);


/**
 * =======================
 *   Provider Component
 * =======================
 */
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = React.useReducer<AuthReducer>(authReducer, AuthState.SignedOut);

    let _window: AppWindow = window;

    return (
        <AuthStateProvider value={ state }>
            <AuthDispatchProvider value={ dispatch }>
                { children }
            </AuthDispatchProvider>
        </AuthStateProvider>
    );
};


/**
 * =======================
 *      Custom Hooks
 * =======================
 */
const useAuthDispatch = () => {
    const dispatch = React.useContext(AuthDispatchContext);
    if (dispatch === undefined) {
        throw new Error('useAuth can only be used with AppProvider component.')
    };
    return {
        setAuthState: (payload: AuthState) =>
            dispatch({
                type: AuthActionTypes.SET_AUTH_STATE,
                payload
            }),
        updateAuthState: (payload: AuthState) =>
            dispatch({
                type: AuthActionTypes.UPDATE_AUTH_STATE,
                payload
            })
    };
};

const useAuthState = () => {
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error('useAuth can only be used with AuthProvider component.')
    };
    return context;
};

const useAuth = (): [AuthState, AuthDispatchHook] =>
    [useAuthState(), useAuthDispatch()];

export {
    useAuth,
    AuthProvider
};
