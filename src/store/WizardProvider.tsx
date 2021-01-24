import React from "react";

const wizardState = { step: 1, totalSteps: 0 };
/**
 * =======================
 *    Types Definitions
 * =======================
 */

type WizardState = typeof wizardState;

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
    SET_STEP = "SET_STEP"
};

interface SetStepAction {
    type: AppTypeKeys.SET_STEP;
    payload: number;
};

type AppActions = SetStepAction;

type AppDispatch = (action: AppActions) => void;

type AppReducer = React.Reducer<WizardState, AppActions>;

interface WizardProviderProps {
    children: React.ReactNode;
    totalSteps?: number;
};

type ActionName = "setStep";

type WizardDispatchHook = {
    [k in ActionName]: (payload: any) => void
};


/**
 * =======================
 *        Reducer
 * =======================
 */
const appReducer: AppReducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case AppTypeKeys.SET_STEP:
            if (1 > payload || payload > state.totalSteps) {
                return state;
            }
            return {
                ...state,
                step: payload
            };
        default:
            return state;
    }
};

let WizardDispatchContext: React.Context<AppDispatch | undefined>;
let WizardStateContext: React.Context<WizardState | undefined>;

const {
    Provider: WizardDispatchProvider
} = WizardDispatchContext = React.createContext<AppDispatch | undefined>(undefined);

const {
    Consumer: WizardConsumer,
    Provider: WizardStateProvider
} = WizardStateContext = React.createContext<WizardState | undefined>(undefined);


/**
 * =======================
 *   Provider Component
 * =======================
 */
const WizardProvider: React.FC<WizardProviderProps> = ({
    children,
    totalSteps = 4
}) => {
    let [state, dispatch] = React.useReducer<AppReducer>(appReducer, { ...wizardState, totalSteps });
    let _window: AppWindow = window;

    return (
        <WizardStateProvider value={ state }>
            <WizardDispatchProvider value={ dispatch }>
                <WizardConsumer>
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
                </WizardConsumer>
            </WizardDispatchProvider>
        </WizardStateProvider>
    );
};


/**
 * =======================
 *      Custom Hooks
 * =======================
 */
const useWizardDispatch = () => {
    const dispatch = React.useContext(WizardDispatchContext);
    if (dispatch === undefined) {
        throw new Error('useAppDispatch can only be used with WizardProvider component.')
    };
    const setStep = (payload: number) =>
        dispatch({
            type: AppTypeKeys.SET_STEP,
            payload
        })
    return setStep;
};

const useWizardState = () => {
    const context = React.useContext(WizardStateContext);
    if (context === undefined) {
        throw new Error('useAppState can only be used with WizardProvider component.')
    };
    return context;
};

const useWizard = (): [WizardState, WizardDispatchHook[keyof WizardDispatchHook]] =>
    [useWizardState(), useWizardDispatch()];

export {
    useWizard,
    WizardProvider
};
