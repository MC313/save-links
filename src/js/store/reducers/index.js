import {
    NAVIGATE_FORWARD,
    NAVIGATE_BACKWARD,
    UPDATE_FORM,
    RESET_STATE,
    SET_INPUT_ERROR,
    SAVE_LINK_REQUEST,
    SAVE_LINK_SUCCESS,
    SAVE_LINK_ERROR
} from "../actions/action-types";

const initialState = {
    currentStep: 1,
    isSubmitting: false,
    scrollValue: 0,
    showOverlay: false,
    formData: {
        name: { value: '', error: false },
        url: { value: '', error: false },
        tags: { value: '', error: false },
        phone: { value: '', error: false },
        timeValue: { value: '', error: false },
        timeUnit: { value: '', error: false }
    }
};

const offsetValue = 388;

export const rootReducer = (state, action) => {
    switch (action.type) {
        case NAVIGATE_FORWARD:
            return {
                ...state,
                currentStep: action.payload + 1,
                scrollValue: offsetValue * action.payload
            };

        case NAVIGATE_BACKWARD:
            const currentStep = action.payload - 1;
            return {
                ...state,
                currentStep,
                scrollValue: (offsetValue * currentStep) - offsetValue
            };

        case UPDATE_FORM:
            return {
                ...state,
                formData: { ...state.formData, ...action.payload }
            };

        case RESET_STATE:
            return {
                ...initialState
            };

        case SET_INPUT_ERROR:
            const { name, errorValue } = action.payload;
            const formFieldData = state.formData[name];
            return {
                ...state,
                formData: { ...state.formData, [name]: { ...formFieldData, error: errorValue } }
            };

        case SAVE_LINK_REQUEST:
            return {
                ...state,
                isSubmitting: true
            };

        case SAVE_LINK_SUCCESS:
            return {
                ...state,
                isSubmitting: false,
                showOverlay: true
            };

        case SAVE_LINK_ERROR:
            return {
                ...state,
                isSubmitting: false
            };

        default:
            return state;
    }
};

export default rootReducer;
