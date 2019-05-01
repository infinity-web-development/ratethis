import { UPDATE_REACTION, REQUEST_UPLOAD_LIST } from './actionTypes';

/**
 * Triggers request to react on a post
 *
 * @function
 * @return {Object} The {@link actionTypes.REQUEST_UPLOAD_LIST REQUEST_UPLOAD_LIST}
 * action.
 */
export const updateReaction = (id, reaction) => ({
    id,
    reaction,
    type: UPDATE_REACTION,
});

/**
 * Triggers request for the lists of uploads
 *
 * @function
 * @return {Object} The {@link actionTypes.REQUEST_UPLOAD_LIST REQUEST_UPLOAD_LIST}
 * action.
 */
export const requestUploadList = payload => ({
    payload,
    type: REQUEST_UPLOAD_LIST,
});
