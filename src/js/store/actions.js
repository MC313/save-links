import {
  NAVIGATE_FORWARD,
  NAVIGATE_BACKWARD,
  RESET_STATE,
  SAVE_LINK_REQUEST,
  SAVE_LINK_SUCCESS,
  SAVE_LINK_ERROR,
  UPDATE_TOGGLE_SWITCH,
} from "./action-types";

const setToggleValue = (payload) => ({
  type: UPDATE_TOGGLE_SWITCH,
  payload,
});

const navigateForward = (payload) => ({
  type: NAVIGATE_FORWARD,
  payload,
});
const navigateBackward = (payload) => ({
  type: NAVIGATE_BACKWARD,
  payload,
});

const saveLinkRequest = (payload) => ({
  type: SAVE_LINK_REQUEST,
  payload,
});
const saveLinkSuccess = () => ({ type: SAVE_LINK_SUCCESS });

const saveLinkError = () => ({ type: SAVE_LINK_ERROR });

const resetState = () => ({ type: RESET_STATE });

export default {
  navigateForward,
  navigateBackward,
  resetState,
  saveLinkError,
  saveLinkRequest,
  saveLinkSuccess,
  setToggleValue,
};
