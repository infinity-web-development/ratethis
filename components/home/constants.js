/** @constant */
export const NAME = 'home';

/** @constant */
export const INITIAL_STATE = {
    uploads: new Map(),
};

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
        _id: 0,
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
    {
        _id: 1,
        // eslint-disable-next-line max-len
        image: 'https://dailymedia.com.ng/wp-content/uploads/2018/10/7915550_img20181007141132_jpeg01c125e1588ffeee95a6f121c35cd378-1.jpg',
        reactions: {
            dislike: 0,
            like: 0,
            maybe: 0,
        },
        story: 'Going for an event. Do you like my outfit?',
        user: 'Simpcy',
    },
    {
        _id: 2,
        // eslint-disable-next-line max-len
        image: 'https://i0.wp.com/www.od9jastyles.com/wp-content/uploads/2018/01/ankara-styles-ankara-styles-gown-ankara-tops-ankara-gowns-ankara-styles-pictures-latest-ankara-style-2018-latest-ankara-styles-ankara-ankara-styles.png?fit=437%2C544&ssl=1',
        reactions: {
            dislike: 0,
            like: 0,
            maybe: 0,
        },
        story: 'Saturdays are for weddings. Yay or nay?',
        user: 'Angela',
    },
];
