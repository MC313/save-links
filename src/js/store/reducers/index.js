import { NAVIGATE_FORWARD, NAVIGATE_BACKWARD, UPDATE_FORM, RESET_FORM } from "../actions/action-types";

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
            console.log('previous form', state.formData);
            console.log('current form', action.payload);
            return {
                ...state,
                formData: { ...state.formData, ...action.payload }
            };

        case RESET_FORM:
            return {
                ...state,
                formData: { ...state.formData }
            };

        default:
            return state;
    }
};

export default rootReducer;
