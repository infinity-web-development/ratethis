import { DISLIKE_REACTION, LIKE_REACTION, MAYBE_REACTION } from './actionTypes';
import { INITIAL_STATE } from './constants';

export default ( state = { ...INITIAL_STATE }, action) => {
  
    switch (action.type) {
    case LIKE_REACTION:    {
        const { data: { token, user }, status } = action.payload;

        return {
            ...state,
            isLoggedIn: true,
            status,
            token,
            user,
        };
    }

    case DISLIKE_REACTION: {
        Cookies.expire(state.token);
        
        return { 
            ...state,
            isLoggedIn: false,
            token: null,
            user: {},
        };
    }

    case MAYBE_REACTION:
        return { ...initialState };

    case RESET_STATUS_STATE:
        return {
            ...state,
            status: "",
        };

    default:
        return state;
    }
}; 
