import { NAME } from './constants';

/**
 * Fired by the {@link actions.likeReaction likeReaction}
 * action creator.
 *
 * @type {String}
 */
export const LIKE_REACTION = `${NAME}/LIKE_REACTION`;

/**
 * Fired by the {@link actions.dislikeReaction dislikeReaction}
 * action creator.
 *
 * @type {String}
 */
export const DISLIKE_REACTION = `${NAME}/DISLIKE_REACTION`;

/**
 * Fired by the {@link actions.maybeReaction maybeReaction}
 * action creator.
 *
 * @type {String}
 */
export const MAYBE_REACTION = `${NAME}/MAYBE_REACTION`;
