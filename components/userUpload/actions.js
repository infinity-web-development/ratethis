import { USER_UPLOAD_REQUEST } from './actionTypes';

/**
 * Triggers request for the lists of uploads
 *
 * @function
 * @return {Object} The {@link actionTypes.USER_UPLOAD_REQUEST USER_UPLOAD_REQUEST}
 * action.
 */
export const userUploadRequest = payload => ({
    payload,
    type: USER_UPLOAD_REQUEST,
});
