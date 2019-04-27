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

/**
 * Updates the value of the reactions
 *
 * @param {Object} reactions - the reactions with assigned value
 * @param {Map} value - the value of reactions
 * @return {Map} - the updated producer value
 */
function updateReactions(value) {
    const { _id, reactions } = USER_UPLOADS;
    const newValue = new Map([...value.entries()]);

    newValue.set(_id, reactions);

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
        case UPDATE_REACTION: {
            const { uploads } = state;

            return {
                ...state,
                uploads: updateReactions(uploads),
            };
        }

        default:
            return state;
    }
};
