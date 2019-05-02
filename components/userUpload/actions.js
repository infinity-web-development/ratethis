import { UPDATE_UPLOAD_LIST } from './actionTypes';

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
