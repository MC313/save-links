import React, { useReducer } from 'react';

import * as actions from './actions';
import rootReducer from './reducers';

const initialState = {
    currentStep: 1,
    scrollValue: 0,
    formData: {
        name: '',
        url: '',
        tags: [],
        phone: 0,
        reminderDate: 0,
        reminderTime: 0
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
