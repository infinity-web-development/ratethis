import faker from 'faker';
import { UPDATE_REACTION, REQUEST_UPLOAD_LIST } from './actionTypes';
import { INITIAL_STATE } from './constants';

const users = [];

for (let id = 1; id <= 3; id += 1) {
    const story = faker.lorem.sentences();
    const image = faker.image.avatar();
    const name = faker.name.findName();
    const reactions = { dislike: 0, like: 0, maybe: 0 };
    const userUploads = { image, name, reactions, story };

    users.push({
        id,
        name,
        userUploads,
    });
}

/**
* Creates a Javascript Map with the user uploads mapped by id
*
* @param {Array} USER_UPLOADS - a users uploads
* @return {Map} - the user uploads
*/
function generateUploadsMap() {
    const uploads = new Map();

    users.forEach(user => {
        const { id, userUploads } = user;
        uploads.set(id, userUploads);
    });

    return uploads;
}
function updateUploadReaction(id, type, uploads) {
    const updatedUploads = new Map([...uploads.entries()]);
    const user = users.get(id);
    const userUploads = updatedUploads.get(id);

    if (user && !userUploads.reactions[type]) {
        userUploads.reactions[type] += 1;
        user.id = true;
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
