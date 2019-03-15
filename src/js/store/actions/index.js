import {
    NAVIGATE_FORWARD,
    NAVIGATE_BACKWARD,
    UPDATE_FORM,
    RESET_FORM,
    CREATE_LINK_REQUEST,
    CREATE_LINK_SUCCESS,
    SET_INPUT_ERROR
} from './action-types';

export const navigateForward = (payload) => ({ type: NAVIGATE_FORWARD, payload });
export const navigateBackward = (payload) => ({ type: NAVIGATE_BACKWARD, payload });

export const updateForm = (payload) => ({ type: UPDATE_FORM, payload });
export const resetForm = () => ({ type: RESET_FORM });
export const setInputError = (payload) => ({ type: SET_INPUT_ERROR, payload });

export const createLinkRequest = (payload) => ({ type: CREATE_LINK_REQUEST, payload });
export const createLinkSuccess = () => ({ type: CREATE_LINK_SUCCESS });

