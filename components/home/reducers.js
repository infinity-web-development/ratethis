import { UPDATE_REACTION, REQUEST_UPLOAD_LIST } from './actionTypes';
import { INITIAL_STATE, USER_UPLOADS } from './constants';

/**
 * Creates a Javascript Map with the user uploads mapped by id
 *
 * @param {Array} USER_UPLOADS - a users uploads
 * @return {Map} - the user uploads
 */

function generateUploadsMap() {
    const uploads = new Map();

    USER_UPLOADS.forEach(userUpload => {
        const { id } = userUpload;

        uploads.set(id, userUpload);
    });

    return uploads;
}

function updateUploadReaction(id, type, uploads) {
    const updatedUploads = new Map([...uploads.entries()]);
    const userUpload = updatedUploads.get(id);
    if (!userUpload.reactions[type]) {
        userUpload.reactions[type] += 1;
    } else {
        userUpload.reactions[type] -= 1;
    }
    updatedUploads.set(id, userUpload);

    return updatedUploads;
}

export default (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case REQUEST_UPLOAD_LIST: {
            return {
                ...state,
                uploads: generateUploadsMap(),
            };
        }
        case UPDATE_REACTION: {
            const { uploads } = state;
            const { payload: { id, reaction } } = action;

            return {
                ...state,
                uploads: updateUploadReaction(id, reaction, uploads),
            };
        }

        default:
            return state;
    }
};
