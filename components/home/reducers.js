import { UPDATE_REACTION, REQUEST_UPLOAD_LIST } from './actionTypes';
import { INITIAL_STATE, USER_UPLOADS } from './constants';

/**
 * Creates a Javascript Map with the user uploads mapped by id
 *
 * @param {Array} USER_UPLOADS - a users uploads
 * @return {Map} - the user uploads
 */

function generateUploadsMap() {
    const setOfUserUploads = new Map();

    USER_UPLOADS.forEach(userUpload => {
        const { _id } = userUpload;

        setOfUserUploads.set(_id, userUpload);
    });

    return setOfUserUploads;
}

function updateItemReactions(_id, reaction) {
    const newValue = new Map();
    const upload = USER_UPLOADS.get(_id);
    upload.reactions = {
        ...upload.reactions,
        [reaction]: upload.reactions[reaction] + 1,
    };
    newValue.set(_id, upload);
    return newValue;
}

export default (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case REQUEST_UPLOAD_LIST: {
            return {
                ...state,
                uploads: generateUploadsMap(),
            };
        }
        case UPDATE_REACTION:

            return {
                ...state,
                uploads: updateItemReactions(action._id, action.reaction),
            };

        default:
            return state;
    }
};
