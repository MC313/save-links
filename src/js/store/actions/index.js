import {
    NAVIGATE_FORWARD,
    NAVIGATE_BACKWARD,
    UPDATE_FORM,
    RESET_STATE,
    SAVE_LINK_REQUEST,
    SAVE_LINK_SUCCESS,
    SET_INPUT_ERROR,
    UPDATE_TOGGLE_SWITCH
} from './action-types';

export const setToggleValue = (payload) => ({ type: UPDATE_TOGGLE_SWITCH, payload });

export const navigateForward = (payload) => ({ type: NAVIGATE_FORWARD, payload });
export const navigateBackward = (payload) => ({ type: NAVIGATE_BACKWARD, payload });

export const updateForm = (payload) => ({ type: UPDATE_FORM, payload });
export const setInputError = (payload) => ({ type: SET_INPUT_ERROR, payload });

export const saveLinkRequest = (payload) => ({ type: SAVE_LINK_REQUEST, payload });
export const saveLinkSuccess = () => ({ type: SAVE_LINK_SUCCESS });

export const resetState = () => ({ type: RESET_STATE });


