import { UPDATE_REACTION, REQUEST_UPLOAD_LIST } from './actionTypes';
import { INITIAL_STATE } from './constants';

import fakeUploads from '../../models/fakeUploads'

function createFakeUsers() {

}

/**
* Creates a Javascript Map with the user uploads mapped by id
*
* @param {Array} fakeUploads - a users uploads
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
function updateUploadReaction(id, type, uploads) {
    const updatedUploads = new Map([...uploads.entries()]);
    const userUploads = updatedUploads.get(id);

    if (!userUploads.reactions[type]) {
        userUploads.reactions[type] += 1;
    } else {
        userUploads.reactions[type] -= 1;
    }
    updatedUploads.set(id, userUploads);

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
