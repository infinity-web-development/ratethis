import { DISLIKE_REACTION, LIKE_REACTION, MAYBE_REACTION } from './actionTypes';
import { INITIAL_STATE } from './constants';

/**
 * Creates a Javascript Map for each card as an object mapped by id
 *
 * @param {Array} reactions - array of user reaction objects
 * @return {Map} - the new reaction list
 */
function generateItemMap(reactions) {
    const setOfReactions = new Map();

    reactions.forEach(reaction => {
        const { _id } = reaction;

        setOfReactions.set(_id, reaction);
    });

    return setOfReactions;
}

/**
 * Updates the given reaction type of the item
 *
 * @param {Object} reaction - the reaction object with a type and value
 * @param {Map} type - the type of reactions
 * @return {Map} - the updated user reaction
 */
function updateReactionType(reaction, type) {
    const { _id } = reaction;
    const newType = new Map([...type.entries()]);

    newType.set(_id, reaction);

    return newType;
}

export default (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case LIKE_REACTION: {
            const { payload } = action;
            console.log(payload);
            const { reactionFlow } = state;

            return {
                ...state,
                reactionFlow: updateReactionType(payload, reactionFlow),
            };
        }

        case DISLIKE_REACTION: {
            return {
            };
        }

        case MAYBE_REACTION: {
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};
