import { UPDATE_UPLOAD_LIST, REQUEST_UPLOAD_UPDATE } from './actionTypes';

/**
 * Triggers request for the lists of uploads
 *
 * @function
 * @return {Object} The {@link actionTypes.UPDATE_UPLOAD_LIST UPDATE_UPLOAD_LIST}
 * action.
 */
export const updateUploadList = payload => ({
    payload,
    type: UPDATE_UPLOAD_LIST,
});

/**
 * Triggers request to update product item details in the database
 *
 * @function
 *
 * @param {Object} payload - the data sent with the action
 * @return {Object} The {@link actionTypes.REQUEST_UPLOAD_UPDATE REQUEST_UPLOAD_UPDATE}
 * action.
 */
export const requestUploadUpdate = payload => ({
    payload,
    type: REQUEST_UPLOAD_UPDATE,
});
