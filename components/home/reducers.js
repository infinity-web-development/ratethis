import faker from 'faker';

import { UPDATE_REACTION, REQUEST_UPLOAD_LIST } from './actionTypes';
import { INITIAL_STATE } from './constants';

/**
 * Creates a Javascript Map with the user uploads mapped by id
 *
 * @param {Array} USER_UPLOADS - a users uploads
 * @return {Map} - the user uploads
 */
const users = [];

for (let id = 1; id <= 3; id++) {
    const story = faker.lorem.sentences();
    const image = faker.image.avatar();
    const name = faker.name.findName();

    users.push({
        id,
        image,
        name,
        reactions: {
            dislike: 0,
            like: 0,
            maybe: 0,
        },
        story,
    });
}

function generateUploadsMap() {
    const uploads = new Map();

    users.forEach(user => {
        const { id } = user;

        uploads.set(id, user);
    });

    return uploads;
}

function updateUploadReaction(id, type, uploads) {
    const updatedUploads = new Map([...uploads.entries()]);
    const userUpload = updatedUploads.get(id);

    if (users && !userUpload.reactions[type]) {
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
