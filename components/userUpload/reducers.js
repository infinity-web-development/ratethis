import { USER_UPLOAD_REQUEST } from './actionTypes';

const initialState = {
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_UPLOAD_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        default:
            return state;
    }
};
