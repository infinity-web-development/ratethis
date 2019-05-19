/** @constant */
export const NAME = 'home';

/** @constant */
export const INITIAL_STATE = {
    fakeUserId: ' ',
    uploads: new Map(),
};

/** @constant */
export const LIST_TEXTS = {
    INNER: 'inner',
    MORE: 'more',
    UPLOAD: 'upload',
    VERTICAL: 'vertical',
};

export const STYLES = {
    AVATAR: {
        marginRight: 8,
    },
    CARD_CONTAINER: {
        marginBottom: 50,
    },
    CARD_LIST: {
        marginTop: 70,
        width: '650px',
    },
    ICON: {
        marginRight: 8,
    },
    USER_LIST: {
        alignItems: 'center',
        borderBottomColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
};

export const USER_UPLOADS = [
    {
        id: 0,
        // eslint-disable-next-line max-len
        image: 'http://sugarweddings.com/files/styles/width-640/public/1.%20The%20Full%20Ankara%20Ball%20Wedding%20Gown%20@therealrhonkefella.PNG',
        reactions: {
            dislike: 0,
            like: 0,
            maybe: 0,
        },
        story: "It's my birthday next week! What do you think?",
        user: 'Chioma',
    },
];
