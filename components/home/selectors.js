import { NAME } from './constants';

/**
 * Selects the <tt>uploads</tt> key.
 *
 * @function
 * @param {Object} state - redux store state
 * @return {Boolean} the state of the home
 * {@link module:home/constants::INITIAL_STATE constants::INITIAL_STATE}).
 */
export const getUploads = state => state[NAME].uploads;
