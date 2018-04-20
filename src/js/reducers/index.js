import { EDIT_HOTELS } from "../constants/action-types";

const initialState = {
    hotels: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_HOTELS:
            return { ...state, hotels: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
