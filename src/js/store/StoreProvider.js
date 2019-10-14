import React, { useReducer } from "react";

import actions from "./actions";
import initialState from "./state";
import reducer from "./reducer";

let StoreContext;

const { Provider, Consumer } = (StoreContext = React.createContext());

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Provider value={{ ...state, actions, dispatch }}>{children}</Provider>
  );
};

export { StoreProvider, Consumer as StoreConsumer, StoreContext };
