import { NAVIGATE_FORWARD, NAVIGATE_BACKWARD, UPDATE_FORM, RESET_FORM } from './action-types';

export const navigateForward = (payload) => ({ type: NAVIGATE_FORWARD, payload });
export const navigateBackward = (payload) => ({ type: NAVIGATE_BACKWARD, payload });
export const updateForm = (payload) => ({ type: UPDATE_FORM, payload });
export const resetForm = () => ({ type: RESET_FORM });
