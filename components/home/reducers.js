import uuid from 'uuid/v1';

import { UPDATE_REACTION, REQUEST_UPLOAD_LIST } from './actionTypes';
import { INITIAL_STATE } from './constants';

import fakeUploads from '../../models/fakeUploads';

const userId = uuid();
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

    uploads.forEach(userUpload => {
        const { users } = userUpload.reactions[type];

        if (Object.keys(users).includes(userId)) {
            delete users[userId];
            userUpload.reactions[type].count -= 1;
        } else {
            users[userId] = true;
            userUpload.reactions[type].count += 1;
        }
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
