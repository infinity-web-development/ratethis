import {
    DISLIKE_POST,
    LIKE_POST,
    MAYBE_POST
} from './actionTypes';

/**
 * Triggers request to like or unlike post
 *
 * @function
 * @return {Object} The {@link actionTypes.LIKE_POST LIKE_POST}
 * action.
 */
export const likePost = () => ({
    type: LIKE_POST,
});

/**
 * Triggers request to dislike post or reverse dislike
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.DISLIKE_POST DISLIKE_POST}
 * action.
 */
export const dislikePost = payload => ({
    payload,
    type: DISLIKE_POST,
});

/**
 * Triggers request to maybe post or reverse maybe
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.MAYBE_POST MAYBE_POST}
 * action.
 */
export const maybePost = payload => ({
    payload,
    type: MAYBE_POST,
});
