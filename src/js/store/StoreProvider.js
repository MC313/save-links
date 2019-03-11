import React, { useReducer } from 'react';

import * as actions from './actions';
import rootReducer from './reducers';

const initialState = {
    currentStep: 1,
    isSubmitting: false,
    scrollValue: 0,
    formData: {
        name: { value: '', error: false },
        url: { value: '', error: false },
        tags: { value: [], error: false },
        phone: { value: 0, error: false },
        timeValue: { value: 0, error: false },
        TimeUnit: { value: 0, error: false }
    }
};

let StoreContext;

const { Provider, Consumer } = StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    return (
        <Provider value={{ ...state, actions, dispatch }}>
            {children}
        </Provider>
    );
};

export { StoreProvider, Consumer as StoreConsumer, StoreContext };
