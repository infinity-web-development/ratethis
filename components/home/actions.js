import { DISLIKE_REACTION, LIKE_REACTION, MAYBE_REACTION } from './actionTypes';

/**
 * Triggers request to like or unlike post
 *
 * @function
 * @return {Object} The {@link actionTypes.LIKE_REACTION LIKE_REACTION}
 * action.
 */
export const likeReaction = () => ({
    type: LIKE_REACTION,
});

/**
 * Triggers request to dislike post or reverse dislike
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.DISLIKE_REACTION DISLIKE_REACTION}
 * action.
 */
export const dislikeReaction = payload => ({
    payload,
    type: DISLIKE_REACTION,
});

/**
 * Triggers request to maybe post or reverse maybe
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.MAYBE_REACTION MAYBE_REACTION}
 * action.
 */
export const maybeReaction = payload => ({
    payload,
    type: MAYBE_REACTION,
});
