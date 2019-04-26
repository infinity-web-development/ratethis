import { UPDATE_REACTION } from './actionTypes';

/**
 * Triggers request to like or unlike post
 *
 * @function
 * @return {Object} The {@link actionTypes.LIKE_REACTION LIKE_REACTION}
 * action.
 */
export const updateReaction = payload => ({
    payload,
    type: LIKE_REACTION,
});

// an action that requests the lists of uploads
/**
 * Triggers request to like or unlike post
 *
 * @function
 * @return {Object} The {@link actionTypes.LIKE_REACTION LIKE_REACTION}
 * action.
 */
export const requestUploadList = payload => ({
    payload,
    type: LIKE_REACTION,
});
