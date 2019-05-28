import { UPDATE_UPLOAD_LIST } from './actionTypes';

const initialState = {
    isLoading: false,
};

function updateUploadList(userUpload, uploads) {
    const { _id } = userUpload;
    const newUploads = new Map([...uploads.entries()]);

    newUploads.set(_id, userUpload);

    return newUploads;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_UPLOAD_LIST: {
            const { payload } = action;
            const { uploads } = state;

            return {
                ...state,
                uploads: updateUploadList(payload, uploads),
            };
        }
        default:
            return state;
    }
};
