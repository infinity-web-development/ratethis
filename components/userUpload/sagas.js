import { effects } from 'redux-saga';

import Home from '../home';
import { updateUploadList } from './actions';
import { REQUEST_UPLOAD_UPDATE } from './actionTypes';

const { selectors: { uploads } } = Home;
const headers = { 'Content-Type': 'application/json' };

/**
 * Handles requesting product updates to the backend
 *
 * @param {Object} action - the data sent from the action creator
 * @return {Void} - void
 */
function* requestUploadsFieldUpdate(action) {
    try {
        // TODO: connect saga generator to backend api
        const { id } = yield effects.select(uploads);
        const { payload } = action;
        const userUpload = { ...payload, id };

        const response = yield fetch('/userUpload/update', {
            body: JSON.stringify(userUpload),
            headers,
            method: 'PUT',
        });

        if (response.ok) {
            const { data } = yield response.json();

            yield effects.put(updateUploadList(data));
        } else {
            const result = yield response.json();

            // TODO: update state to reflect error on fetch item list
            // eslint-disable-next-line no-console
            console.log('ERROR', result);
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.REQUEST_PRODUCT_UPDATE REQUEST_PRODUCT_UPDATE} action.
 * Triggers request to update product item
 *
 * @return {void}
 */
function* watchRequestUploadUpdate() {
    try {
        yield effects.takeLatest(REQUEST_UPLOAD_UPDATE, requestUploadsFieldUpdate);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

export default function* () {
    yield effects.all([
        watchRequestUploadUpdate(),
    ]);
}
