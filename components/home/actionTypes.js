import { NAME } from './constants';

/**
 * Fired by the {@link actions.likePost likePost}
 * action creator.
 *
 * @type {String}
 */
export const LIKE_POST = `${NAME}/LIKE_POST`;

/**
 * Fired by the {@link actions.dislikePost dislikePost}
 * action creator.
 *
 * @type {String}
 */
export const DISLIKE_POST = `${NAME}/DISLIKE_POST`;

/**
 * Fired by the {@link actions.maybePost maybePost}
 * action creator.
 *
 * @type {String}
 */
export const MAYBE_POST = `${NAME}/MAYBE_POST`;
