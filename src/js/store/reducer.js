import {
  NAVIGATE_FORWARD,
  NAVIGATE_BACKWARD,
  RESET_STATE,
  SAVE_LINK_REQUEST,
  SAVE_LINK_SUCCESS,
  SAVE_LINK_ERROR,
  UPDATE_TOGGLE_SWITCH,
} from "./action-types";

import { colorTheme } from "../styles/styles";

import initialState from "./state";

const offsetValue = 388;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE_FORWARD:
      return {
        ...state,
        currentStep: action.payload + 1,
        scrollValue: offsetValue * action.payload,
      };

    case NAVIGATE_BACKWARD:
      const currentStep = action.payload - 1;
      return {
        ...state,
        currentStep,
        scrollValue: offsetValue * currentStep - offsetValue,
      };

    case RESET_STATE:
      return {
        theme: state.theme,
        ...initialState,
      };

    case SAVE_LINK_REQUEST:
      return {
        ...state,
        isSubmitting: true,
      };

    case SAVE_LINK_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        showOverlay: true,
      };

    case SAVE_LINK_ERROR:
      return {
        ...state,
        isSubmitting: false,
      };

    case UPDATE_TOGGLE_SWITCH:
      return {
        ...state,
        toggleOn: action.payload,
        theme: action.payload ? colorTheme.dark : colorTheme.light,
      };

    default:
      return state;
  }
};

export default reducer;
