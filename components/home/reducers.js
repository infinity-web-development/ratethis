import { UPDATE_REACTION, REQUEST_UPLOAD_LIST } from './actionTypes';
import { INITIAL_STATE, USER_UPLOADS } from './constants';

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
    const upload = updatedUploads.get(id);
    const { reactions } = upload;

    const userId = reactions.map(({ user }) => {
        if (!user) {
            upload.reactions[type].count += 1;
        } else {
            upload.reactions[type].count -= 1;
        }
        return user;
    });

    updatedUploads.set(id, upload);

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
