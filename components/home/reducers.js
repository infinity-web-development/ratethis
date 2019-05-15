import { UPDATE_REACTION, REQUEST_UPLOAD_LIST } from './actionTypes';
import { INITIAL_STATE, USER_UPLOADS } from './constants';

import fakeUploads from '../../models/fakeUploads';
import fakeUsers from '../../models/fakeUsers';
/**
 * Creates a Javascript Map with the user uploads mapped by id
 *
 * @param {Array} USER_UPLOADS - a users uploads
 * @return {Map} - the user uploads
 */

function generateUploadsMap() {
    const uploads = new Map();

    fakeUploads.forEach(upload => {
        const { id } = upload;

        uploads.set(id, upload);
    });

    return uploads;
}

function updateUploadReaction(_id, type, uploads) {
    const updatedUploads = new Map([...uploads.entries()]);
    const upload = updatedUploads.get(_id);

    fakeUsers.forEach(({ id }) => {
        if (!id) {
            upload.reactions[type] += 1;
        } else {
            upload.reactions[type] -= 1;
        }
    });

    updatedUploads.set(_id, upload);

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
